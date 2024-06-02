'use client'
import {cn} from "@/lib/utils";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';

interface MottoProps {
    className?: string;
}

export default function Motto({  className, ...props }: MottoProps) {
    // Create reference to store the DOM element containing the animation
	const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);
  
    useEffect(() => {
      const options = {
          strings: [
        "<span>I develop <span class='text-orange-400 font-medium'>Vue</span>.</span>",
        "<span>I develop <span class='text-orange-400 font-medium'>React</span>.</span>",
        "<span>I develop <span class='text-orange-400 font-medium'>SpringBoot</span>.</span>",
        "<span>I develop <span class='text-orange-400 font-medium'>webapps</span><br class='sm:hidden' /> that your users love.",
        "<span>I develop <span class='text-orange-400 font-medium'>webapps</span><br class='sm:hidden' /> that your users love.<br class='sm:hidden lg:inline-block' /> <span class='text-orange-400 font-medium'>On time</span>.",
        "<span>I develop <span class='text-orange-400 font-medium'>webapps</span><br class='sm:hidden' /> that your users love.<br class='sm:hidden lg:inline-block' /> <span class='text-orange-400 font-medium'>On budget</span>.",
        "<span>I develop <span class='text-orange-400 font-medium'>webapps</span><br class='sm:hidden' /> that your users love.<br class='sm:hidden lg:inline-block' /> <span>And <span class='text-orange-400 font-medium'>on efficiency</span>.</span>"
        ],
        typeSpeed: 48,
        backSpeed: 15,
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])
    return (
        <div className={cn("sm:text-6xl text-4xl sm:w-[680px] w-full inline-block  leading-tight font-extralight", className)} {...props} >
            <span ref={el}></span>
        </div>
    )
}
