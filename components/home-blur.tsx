'use client'

import "@/app/homeblur.css"
import { useEffect, useRef } from "react";
import {rafThrottle} from '@/lib/utils'

export function HomeBlur() {
    const bodyRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        window.onmousemove = rafThrottle((e: MouseEvent) => {
            const container = bodyRef.current;
            if (!container) {
                return;
            }
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            console.log(mouseX, mouseY)
            
            container.style.setProperty("--mouse-x", `${mouseX}px`);
            container.style.setProperty("--mouse-y", `${mouseY}px`);
        });
    }, []) 

    return (
        <div ref={bodyRef} className="fixed inset-0 bg-black highlight w-full h-[100vh] overflow-hidden" style={{zIndex: "-1"}} />
    )
}