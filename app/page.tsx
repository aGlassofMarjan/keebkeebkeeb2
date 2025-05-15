'use client'

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MoveUpRight, MessageSquarePlus } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts to trigger animations
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
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
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };

  return (
    <>
      <motion.section 
        className="container grid items-center gap-6 pb-8 pt-6 md:py-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex max-w-[980px] flex-col items-start gap-2"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
            variants={itemVariants}
          >
            Browse our curated keyboards <br className="hidden sm:inline" />
            Boost your productivity.
          </motion.h1>
          <motion.p 
            className="text-muted-foreground max-w-[700px] text-lg"
            variants={itemVariants}
          >
            We are your dedicated partner for all your keyboard needs. Can&apos;t find what you&apos;re looking for in our catalog? Contact us directly!
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex gap-4"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              <div className="flex gap-1"><span>Browse Keyboards</span><MoveUpRight size={18}/></div>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              <div className="flex gap-1"><span>Contact Us </span><MessageSquarePlus size={18}/></div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center max-md:justify-end"
          variants={imageVariants}
        >
          <Image className="flex max-md:hidden" src={"/keeb-and-switch.png"} alt={"Hero Image"} width={600} height={200}/>
          <Image className="" src={"/blue-hero.png"} alt={"Hero Image"} width={600} height={200}/>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-6 pt-10"
          variants={containerVariants}
        >
          <motion.div variants={imageVariants}>
            <Image src={"/contact-hero.png"} alt={""} width={300} height={500} />
          </motion.div>
          
          <motion.div 
            className="flex max-w-[980px] flex-col justify-end gap-2"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground max-w-[700px] text-lg"
              variants={itemVariants}
            >
              Can&apos;t find what you&apos;re looking for in our catalog? Contact us directly!
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={siteConfig.links.github}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    <div className="flex gap-1"><span>Contact Us </span><MessageSquarePlus size={18}/></div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <motion.div variants={imageVariants}>
                    <Image src={"/whatsapp.png"} alt={""} width={30} height={30} />
                  </motion.div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}