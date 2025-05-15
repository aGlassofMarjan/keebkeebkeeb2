import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Data } from '@/types/products'
import { ArrowUpRight, Store } from 'lucide-react'
// import Router, { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProductPage = ({ title, product_link, description, imageUrl, list_feature, segment } : Data) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter()
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.35,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.35,
        ease: "easeOut" 
      }
    }
  };

  const tokped = () => {
    router.push(product_link)
  }

  return (
    <motion.div 
      className="relative flex size-full items-center justify-center"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full rounded-3xl p-8"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-8 md:flex-row">
          <motion.div 
            className="bg-secondary flex h-96 flex-1 items-center justify-center overflow-hidden rounded-2xl"
            variants={itemVariants}
          >
            <Image src={imageUrl} alt={'Product image'} width={1400} height={1100}/>
          </motion.div>
          
          <div className="flex flex-1 flex-col justify-between">
            <motion.h2 
              className="mb-4 text-4xl font-bold"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            
            <motion.h2 variants={itemVariants} className="mb-4 font-light">{description}</motion.h2>
            
            <motion.div
              className="mb-6"
              variants={itemVariants}
            >
              <p className='pt-4 font-mono text-lg'>Product Features</p>
              {list_feature ? list_feature.map((list) => {
                return <div className='flex gap-2 py-2'> <ArrowUpRight/> {list}</div>
              }) : <></>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button variant={'default'}>
                <Link href={product_link} target="_blank" className='flex gap-2'><Store/>See on Tokopedia</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        

        {segment && (
          <motion.div
            className="py-12"
            variants={itemVariants}
          >
            {segment.map((seg) => (
              <div className='space-y-4 px-12 py-6'>
                {seg.image && (
                  <div className='flex h-96 flex-1 items-center justify-center overflow-hidden rounded-2xl'>
                    <Image src={seg.image} alt={'Segment Image'} width={1400} height={1100}/>
                  </div>
                )}
                <p className='pt-4 font-mono text-lg'>{seg.title}</p>
                <p className="">
                  {seg.description}
                </p>
              </div>
            ))}
            
          </motion.div>
        )}
        
      </motion.div>
    </motion.div>
  )
}

export default ProductPage
