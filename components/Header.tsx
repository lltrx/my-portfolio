import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialMedia } from "../typings";
import { useTheme } from "next-themes";
import { VscColorMode } from "react-icons/vsc";


type Props = {
  socialMedias: SocialMedia[];
};

export default function Header({ socialMedias }: Props) {
  const {theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5, 
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        {socialMedias.map((socialMedias) => (
        <SocialIcon
          key={socialMedias._id}
          url={socialMedias.url}
          fgColor="gray"
          bgColor="transparent"
      />
      
      
        ))}
         <VscColorMode  className="flex flex-row items-center text-gray-400 cursor-pointer  h-7 w-7 ml-2"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
       

      </motion.div>
      
      <Link href='#contact'>
      <motion.div
      initial={{
        x:500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer ">
        <SocialIcon
          className="cursor-pointer "
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
      </Link>
    </header>
  );
}
