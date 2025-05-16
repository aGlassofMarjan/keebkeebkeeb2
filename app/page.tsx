// 'use client'

// import Link from "next/link"
// import { siteConfig } from "@/config/site"
// import { buttonVariants } from "@/components/ui/button"
// import { MoveUpRight, MessageSquarePlus } from "lucide-react"
// import Image from "next/image"
// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"

// export default function IndexPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Set visible after component mounts to trigger animations
//     setIsVisible(true);
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <>
//       <motion.section
//         className="container grid items-center gap-6 pb-8 pt-6 md:py-10"
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//         variants={containerVariants}
//       >
//         <motion.div
//           className="flex max-w-[980px] flex-col items-start gap-2"
//           variants={containerVariants}
//         >
//           <motion.h1
//             className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
//             variants={itemVariants}
//           >
//             Browse our curated keyboards <br className="hidden sm:inline" />
//             Boost your productivity.
//           </motion.h1>
//           <motion.p
//             className="max-w-[700px] text-lg text-muted-foreground"
//             variants={itemVariants}
//           >
//             We are your dedicated partner for all your keyboard needs. Can&apos;t find what you&apos;re looking for in our catalog? Contact us directly!
//           </motion.p>
//         </motion.div>

//         <motion.div
//           className="flex gap-4"
//           variants={containerVariants}
//         >
//           <motion.div variants={itemVariants}>
//             <Link
//               href={siteConfig.links.docs}
//               target="_blank"
//               rel="noreferrer"
//               className={buttonVariants()}
//             >
//               <div className="flex gap-1"><span>Browse Keyboards</span><MoveUpRight size={18}/></div>
//             </Link>
//           </motion.div>

//           <motion.div variants={itemVariants}>
//             <Link
//               target="_blank"
//               rel="noreferrer"
//               href={siteConfig.links.github}
//               className={buttonVariants({ variant: "outline" })}
//             >
//               <div className="flex gap-1"><span>Contact Us </span><MessageSquarePlus size={18}/></div>
//             </Link>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="flex justify-center max-md:justify-end"
//           variants={imageVariants}
//         >
//           <Image className="flex max-md:hidden" src={"/keeb-and-switch.png"} alt={"Hero Image"} width={600} height={200}/>
//           <Image className="" src={"/blue-hero.png"} alt={"Hero Image"} width={600} height={200}/>
//         </motion.div>

//         <motion.div
//           className="flex items-center justify-center gap-6 pt-10"
//           variants={containerVariants}
//         >
//           <motion.div variants={imageVariants}>
//             <Image src={"/contact-hero.png"} alt={""} width={300} height={500} />
//           </motion.div>

//           <motion.div
//             className="flex max-w-[980px] flex-col justify-end gap-2"
//             variants={containerVariants}
//           >
//             <motion.h1
//               className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
//               variants={itemVariants}
//             >
//               Contact Us
//             </motion.h1>

//             <motion.p
//               className="max-w-[700px] text-lg text-muted-foreground"
//               variants={itemVariants}
//             >
//               Can&apos;t find what you&apos;re looking for in our catalog? Contact us directly!
//             </motion.p>

//             <motion.div
//               className="flex gap-4"
//               variants={itemVariants}
//             >
//               <HoverCard>
//                 <HoverCardTrigger asChild>
//                   <Link
//                     target="_blank"
//                     rel="noreferrer"
//                     href={siteConfig.links.github}
//                     className={buttonVariants({ variant: "outline" })}
//                   >
//                     <div className="flex gap-1"><span>Contact Us </span><MessageSquarePlus size={18}/></div>
//                   </Link>
//                 </HoverCardTrigger>
//                 <HoverCardContent>
//                   <motion.div variants={imageVariants}>
//                     <Image src={"/whatsapp.png"} alt={""} width={30} height={30} />
//                   </motion.div>
//                 </HoverCardContent>
//               </HoverCard>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </>
//   )
// }

'use client'

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MoveUpRight, MessageSquarePlus, ArrowRight, Keyboard, Search, Users } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const features = [
    {
      icon: <Keyboard className="size-10 text-primary" />,
      title: "Premium Selection",
      description: "Curated collection of high-quality mechanical keyboards for every preference and budget."
    },
    {
      icon: <Search className="size-10 text-primary" />,
      title: "Expert Advice",
      description: "Our team provides personalized recommendations to find your perfect keyboard match."
    },
    {
      icon: <Users className="size-10 text-primary" />,
      title: "Community Support",
      description: "Join our community of keyboard enthusiasts for tips, tricks, and inspiration."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
        <motion.div
          className="container max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                  Elevate Your Typing Experience
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Find Your Perfect <br />
                <span className="text-primary">Mechanical Keyboard</span>
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground max-w-[600px]"
                variants={itemVariants}
              >
                Discover our expertly curated selection of premium keyboards designed to boost your productivity and enhance your setup.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 mt-2"
                variants={itemVariants}
              >
                <Link
                  href="/keyboard"
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  Browse Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`https://wa.me/6281237918877?text=Hello,%20I'm%20interested%20in%20your%20keyboards`}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  <MessageSquarePlus className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </motion.div>
              {/* <motion.div
                className="flex items-center gap-2 text-sm text-muted-foreground mt-4"
                variants={itemVariants}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free shipping on orders over IDR 1,000,000</span>
              </motion.div> */}
            </motion.div>
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary opacity-75 blur-xl"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                <Image
                  src="/keeb-and-switch.png"
                  alt="Featured Mechanical Keyboard"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium">20+ Keyboards In Stock</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-background">
        <motion.div
          className="container max-w-7xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Keyboards?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re passionate about mechanical keyboards and dedicated to helping you find the perfect match.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="mb-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <motion.div
          className="container max-w-7xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={imageVariants} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl opacity-70 blur-xl"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                <Image
                  src="/contact-hero.png"
                  alt="Contact us"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <motion.div className="flex flex-col gap-6" variants={containerVariants}>
              <motion.h2
                className="text-3xl font-bold tracking-tight md:text-4xl"
                variants={itemVariants}
              >
                Can&apos;t Find What You&apos;re Looking For?
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground"
                variants={itemVariants}
              >
                Our keyboard experts are here to help! We can source specific models, recommend alternatives, or answer any questions you might have.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href={`https://wa.me/6281237918877?text=Hello,%20I'm%20interested%20in%20your%20keyboards`}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  <div className="flex items-center gap-2">
                    <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
              <motion.div
                className="mt-8 grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div
                  className="bg-background rounded-lg p-4 border"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-1">Response Time</p>
                  <p className="text-2xl font-bold">Under 2 Hours</p>
                </motion.div>
                <motion.div
                  className="bg-background rounded-lg p-4 border"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-1">Customer Satisfaction</p>
                  <p className="text-2xl font-bold">98%</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <motion.div
          className="container max-w-7xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-primary/80 to-primary rounded-2xl p-8 md:p-12 shadow-xl text-primary-foreground"
            variants={itemVariants}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Typing Experience?</h2>
              <p className="text-xl opacity-90 mb-8">
                Browse our collection of premium mechanical keyboards and find your perfect match today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/keyboards"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "group")}
                >
                  Explore Keyboards
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`https://wa.me/6281237918877?text=Hello,%20I'm%20interested%20in%20your%20keyboards`}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  <MessageSquarePlus className="mr-2 h-4 w-4" />
                  Get Personalized Advice
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
