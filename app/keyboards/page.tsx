'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { keyboardData } from '@/data/keyboard';
import { ChevronLeft, ChevronRight, ExternalLink, Info } from 'lucide-react';



import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";





const KeyboardPage: React.FC = () => {
  const allManufacturers: string[] = Array.from(
    new Set(keyboardData.map((item) => item.manufacturer))
  )

  const allTags: string[] = Array.from(
    new Set(keyboardData.flatMap(item => item.tags.map(tag => tag.name)))
  );

  const allTypes: string[] = Array.from(
    new Set(keyboardData.map(item => item.type))
  );

  // State for filters
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    []
  )
  const router = useRouter()

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Handle tag selection/deselection
  const handleTagToggle = (tagName: string): void => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  // Handle type selection/deselection
  const handleTypeToggle = (typeName: string): void => {
    if (selectedTypes.includes(typeName)) {
      setSelectedTypes(selectedTypes.filter(type => type !== typeName));
    } else {
      setSelectedTypes([...selectedTypes, typeName]);
    }
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const handleManufacturerToggle = (manufacturer: string): void => {
    if (selectedManufacturers.includes(manufacturer)) {
      setSelectedManufacturers(
        selectedManufacturers.filter((m) => m !== manufacturer)
      )
    } else {
      setSelectedManufacturers([...selectedManufacturers, manufacturer])
    }
    // Reset to first page when filters change
    setCurrentPage(1)
  }

  // Filter data based on search term and selected tags
  const filteredData = keyboardData.filter(keyboard => {
    // Filter by search term (case insensitive)
    const nameMatch = keyboard.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by tags (if any are selected)
    const tagMatch = selectedTags.length === 0 ||
      keyboard.tags.some(tag => selectedTags.includes(tag.name));

    const typeMatch = selectedTypes.length === 0 ||
      selectedTypes.includes(keyboard.type);

      const manufacturerMatch =
        selectedManufacturers.length === 0 ||
        selectedManufacturers.includes(keyboard.manufacturer)

    return nameMatch && tagMatch && typeMatch && manufacturerMatch;
  });

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Format price to currency
  const formatPrice = (price: string): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parseInt(price));
  };

  // Pagination handlers
  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className='mb-6 flex w-full items-center justify-between'>
        <h1 className="text-3xl font-bold">Keyboards</h1>
        <div className='hidden max-md:flex'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'outline'}>Filter</Button>
            </SheetTrigger>
            <SheetContent side={'bottom'}>
              <SheetHeader>
                <SheetTitle>Filter</SheetTitle>
                <SheetDescription>
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1); // Reset to first page on search
                    }}
                    className="mb-6"
                  />

                  <div className="mb-6">
                    <h3 className="text-md mb-3 font-medium">Type</h3>
                    <div className="space-y-2">
                      {allTypes.map(type => (
                        <Button
                          key={type}
                          variant={selectedTypes.includes(type) ? "default" : "outline"}
                          onClick={() => handleTypeToggle(type)}
                          className="w-full justify-start"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-md mb-3 font-medium">Manufacturer</h3>
                    <div className="h-40 space-y-2 overflow-auto">
                      {allManufacturers.map(manufacturer => (
                        <Button
                          key={manufacturer}
                          variant={selectedManufacturers.includes(manufacturer) ? "default" : "outline"}
                          onClick={() => handleManufacturerToggle(manufacturer)}
                          className="w-full justify-start"
                        >
                          {manufacturer}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-md mb-3 font-medium">Tags</h3>
                    <div className="h-56 space-y-2 overflow-auto">
                      {allTags.map(tag => (
                        <Button
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          onClick={() => handleTagToggle(tag)}
                          className="w-full justify-start"
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Filter sidebar */}
        <div className="space-y-6 rounded-lg border p-6 max-md:hidden">
          <div>
            <h2 className="mb-4 text-lg font-medium">Filter</h2>
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="mb-6"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-md mb-3 font-medium">Manufacturer</h3>
            <div className="space-y-2">
              {allManufacturers.map(manufacturer => (
                <Button
                  key={manufacturer}
                  variant={selectedManufacturers.includes(manufacturer) ? "default" : "outline"}
                  onClick={() => handleManufacturerToggle(manufacturer)}
                  className="w-full justify-start"
                >
                  {manufacturer}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-md mb-3 font-medium">Type</h3>
            <div className="space-y-2">
              {allTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedTypes.includes(type) ? "default" : "outline"}
                  onClick={() => handleTypeToggle(type)}
                  className="w-full justify-start"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md mb-3 font-medium">Tags</h3>
            <div className="space-y-2">
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  onClick={() => handleTagToggle(tag)}
                  className="w-full justify-start"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Card grid */}
        <div className="flex min-h-[70vh] flex-col md:col-span-3">
          <div className="grow">
            {paginatedData.length > 0 ? (
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {paginatedData.map((keyboard, index) => (
                  <Card key={index} className="flex h-full flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg">{keyboard.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="grow">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Manufacturer</span>
                          <span className="font-medium">{keyboard.manufacturer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Type</span>
                          <span>{keyboard.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Price</span>
                          <span className="font-bold">{formatPrice(keyboard.price)}</span>
                        </div>
                        <div className="pt-2">
                          <span className="mb-1 block text-sm">Tags</span>
                          <div className="flex flex-wrap gap-1">
                            {keyboard.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                style={{
                                  backgroundColor: tag.border_color,
                                  borderColor: tag.primary_color,
                                  color: tag.text_color
                                }}
                                variant="outline"
                              >
                                {tag.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className='flex-col gap-3'>
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => router.push(keyboard.detail_link)}
                      >
                        <Info className="mr-2 size-4" />
                        Detail
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(keyboard.product_link, '_blank')}
                      >
                        <ExternalLink className="mr-2 size-4" />
                        View Product
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-lg border">
                <p className="">No keyboards found matching your filters</p>
              </div>
            )}
          </div>

          {/* Pagination controls - always at bottom */}
          {filteredData.length > 0 && (
            <div className="mt-auto flex items-center justify-end gap-2 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <div className="flex h-10 min-w-20 items-center justify-center rounded-md border px-4">
                {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyboardPage;
