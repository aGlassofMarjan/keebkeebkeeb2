"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { keyboardData } from "@/data/keyboard"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Info,
  Search,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const KeyboardPage: React.FC = () => {
  const allManufacturers: string[] = Array.from(
    new Set(keyboardData.map((item) => item.manufacturer))
  )

  const allTags: string[] = Array.from(
    new Set(keyboardData.flatMap((item) => item.tags.map((tag) => tag.name)))
  )

  const allTypes: string[] = Array.from(
    new Set(keyboardData.map((item) => item.type))
  )

  // State for filters
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    []
  )
  const router = useRouter()

  // Hover state for cards
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 6

  // Handle tag selection/deselection
  const handleTagToggle = (tagName: string): void => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagName))
    } else {
      setSelectedTags([...selectedTags, tagName])
    }
    // Reset to first page when filters change
    setCurrentPage(1)
  }

  // Handle type selection/deselection
  const handleTypeToggle = (typeName: string): void => {
    if (selectedTypes.includes(typeName)) {
      setSelectedTypes(selectedTypes.filter((type) => type !== typeName))
    } else {
      setSelectedTypes([...selectedTypes, typeName])
    }
    // Reset to first page when filters change
    setCurrentPage(1)
  }

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

  // Filter data based on all filters
  const filteredData = keyboardData.filter((keyboard) => {
    // Filter by search term (case insensitive)
    const nameMatch = keyboard.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    // Filter by tags (if any are selected) - AND logic
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.every((selectedTag) =>
        keyboard.tags.some((tag) => tag.name === selectedTag)
      )

    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(keyboard.type)

    const manufacturerMatch =
      selectedManufacturers.length === 0 ||
      selectedManufacturers.includes(keyboard.manufacturer)

    return nameMatch && tagMatch && typeMatch && manufacturerMatch
  })

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Format price to currency
  const formatPrice = (price: string): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseInt(price))
  }

  // Pagination handlers
  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-3xl font-bold">Keyboards</h1>
        <div className="hidden max-md:flex">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"}>Filter</Button>
            </SheetTrigger>
            <SheetContent side={"bottom"}>
              <SheetHeader>
                <SheetTitle>Filter</SheetTitle>
                <SheetDescription>
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1) // Reset to first page on search
                    }}
                    className="mb-6"
                  />

                  <div className="mb-6">
                    <h3 className="text-md mb-3 font-medium">Type</h3>
                    <div className="space-y-2">
                      {allTypes.map((type) => (
                        <Button
                          key={type}
                          variant={
                            selectedTypes.includes(type) ? "default" : "outline"
                          }
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
                      {allManufacturers.map((manufacturer) => (
                        <Button
                          key={manufacturer}
                          variant={
                            selectedManufacturers.includes(manufacturer)
                              ? "default"
                              : "outline"
                          }
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
                      {allTags.map((tag) => (
                        <Button
                          key={tag}
                          variant={
                            selectedTags.includes(tag) ? "default" : "outline"
                          }
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
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search keyboards..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1) // Reset to first page on search
                }}
                className="pl-10"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-md mb-3 font-medium">Type</h3>
            <div className="space-y-2">
              {allTypes.map((type) => (
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
            <div className="scrollbar-thin h-40 space-y-2 overflow-auto pr-2">
              {allManufacturers.map((manufacturer) => (
                <Button
                  key={manufacturer}
                  variant={
                    selectedManufacturers.includes(manufacturer)
                      ? "default"
                      : "outline"
                  }
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
            <div className="scrollbar-thin h-72 space-y-2 overflow-auto pr-2">
              {allTags.map((tag) => (
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
                  <Card
                    key={index}
                    className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                    onMouseEnter={() => setHoveredCardIndex(index)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    {/* Image with overlay */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={keyboard.product_image}
                        alt={keyboard.name}
                        fill
                        className={cn(
                          "object-cover transition-all duration-500",
                          hoveredCardIndex === index ? "scale-110" : ""
                        )}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>

                      {/* Keyboard name and type displayed on image */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-lg font-bold text-white">
                          {keyboard.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/80">
                            {keyboard.manufacturer}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-white/20 text-white"
                          >
                            {keyboard.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Information section */}
                    <CardContent className="p-4">
                      <div
                        className={cn(
                          "transition-opacity duration-300",
                          hoveredCardIndex === index
                            ? "opacity-0"
                            : "opacity-100"
                        )}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Price
                          </span>
                          <span className="font-bold text-primary">
                            {formatPrice(keyboard.price)}
                          </span>
                        </div>

                        <div className="pt-2">
                          <span className="mb-1 block text-sm text-muted-foreground">
                            Features
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {keyboard.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                style={{
                                  backgroundColor: tag.border_color,
                                  borderColor: tag.primary_color,
                                  color: tag.text_color,
                                }}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Buttons that appear on hover */}
                      <div
                        className={cn(
                          "absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 transition-all duration-300",
                          hoveredCardIndex === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        )}
                      >
                        <Button
                          variant="default"
                          className="w-full"
                          onClick={() => router.push(keyboard.detail_link)}
                        >
                          <Info className="mr-2 size-4" />
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() =>
                            window.open(keyboard.product_link, "_blank")
                          }
                        >
                          <ExternalLink className="mr-2 size-4" />
                          Shop Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-lg border">
                <p className="text-center">
                  No keyboards found matching your filters
                </p>
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
  )
}

export default KeyboardPage
