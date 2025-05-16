'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, ChevronRight, Heart, Package, Share2, Store } from 'lucide-react';



import { Data } from '@/types/products';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";





const ProductPage = ({ title, product_link, description, imageUrl, list_feature, segment }: Data) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(imageUrl);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get additional product images from segments
  const additionalImages = segment
    ? segment.filter(seg => seg.image).map(seg => seg.image)
    : [];

  // Combine main image with additional images
  const allImages = [imageUrl, ...additionalImages];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="container max-w-7xl mx-auto px-4 py-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Breadcrumb navigation */}
      <motion.div
        className="flex items-center text-sm text-muted-foreground mb-6"
        variants={itemVariants}
      >
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/keyboards" className="hover:text-primary transition-colors">Keyboards</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium truncate">{title}</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image Section */}
        <motion.div variants={containerVariants}>
          <motion.div
            className="relative aspect-square overflow-hidden rounded-xl bg-background border mb-4"
            variants={imageVariants}
          >
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-contain p-4"
              priority
            />
          </motion.div>

          {/* Thumbnail Gallery */}
          {allImages.length > 1 && (
            <motion.div
              className="grid grid-cols-5 gap-3"
              variants={itemVariants}
            >
              {allImages.map((img, index) => (
                <div
                  key={index}
                  className={cn(
                    "cursor-pointer border rounded-md overflow-hidden aspect-square relative",
                    activeImage === img ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
                  )}
                  onClick={() => setActiveImage(img || '/white-keycap.jpeg')}
                >
                  <Image
                    src={img || '/white-keycap.jpeg'}
                    alt={`Product view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Product Details Section */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8"
            variants={itemVariants}
          >
            {description}
          </motion.p>



          <Tabs defaultValue="features" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="pt-4">
              <motion.div variants={itemVariants}>
                <ul className="space-y-3">
                  {list_feature ? list_feature.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )) : <li>No features available</li>}
                </ul>
              </motion.div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <motion.div variants={itemVariants}>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="text-muted-foreground">Brand</span>
                    <span className="font-medium">{title.split(' ')[0]}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="text-muted-foreground">Model</span>
                    <span className="font-medium">{title}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="text-muted-foreground">Connectivity</span>
                    <span className="font-medium">USB-C, Bluetooth</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">Mechanical</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-b pb-2">
                    <span className="text-muted-foreground">Switch Type</span>
                    <span className="font-medium">Hot-swappable</span>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="flex-1 md:flex-none md:min-w-40"
                onClick={() => window.open(product_link, '_blank')}
              >
                <Store className="mr-2 h-4 w-4" />
                <span>Buy on Tokopedia</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex-1 md:flex-none md:min-w-40"
              >
                <Package className="mr-2 h-4 w-4" />
                <span>Check Availability</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Product Details Tabs */}
      {segment && segment.length > 0 && (
        <motion.div variants={containerVariants} className="mt-12">
          <motion.h2
            className="text-2xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Product Details
          </motion.h2>

          <div className="space-y-16">
            {segment.map((seg, index) => (
              <motion.div
                key={index}
                className={cn(
                  "grid gap-8",
                  index % 2 === 0
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 md:grid-flow-dense"
                )}
                variants={itemVariants}
              >
                <div
                  className={cn(
                    "flex flex-col justify-center space-y-4",
                    index % 2 !== 0 && "md:col-start-2"
                  )}
                >
                  <h3 className="text-xl font-bold tracking-tight">{seg.title}</h3>
                  <p className="text-muted-foreground">{seg.description}</p>
                </div>

                {seg.image && (
                  <div className={cn(
                    "overflow-hidden rounded-xl border bg-background",
                    index % 2 !== 0 && "md:col-start-1 md:row-start-1"
                  )}>
                    <Image
                      src={seg.image}
                      alt={seg.title || 'Product feature'}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        className="mt-20 mb-8 bg-primary/5 rounded-xl p-8 text-center"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to enhance your typing experience?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Take your productivity to the next level with {title}. Experience comfort, precision, and style.
        </p>
        <Button
          size="lg"
          onClick={() => window.open(product_link, '_blank')}
        >
          <Store className="mr-2 h-4 w-4" />
          <span>Purchase Now on Tokopedia</span>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default ProductPage
