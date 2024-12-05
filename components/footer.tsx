'use client'

import React from "react"
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname()
    

    const contactList = [
        {
            icon: "/github.png",
            value: "https://github.com/shancw96",
            type: "link",
            name: "shancw96"
        },
        {
            icon: "/github.png",
            value: "https://github.com/escapeWu",
            type: "link",
            name: "escapeWu"
        },
        {
            icon: "/wechat.png",
            value: "https://www.linkedin.com/in/kristian-mandrup/",
            name: "shancw888"
        },
        {
            icon: "/phone.png",
            value: "tel:18051740886",
            type: "link",
            name: "18051740886",
        },
        {
            icon: "/email.png",
            value: "mailto:hire@imwsc.com",
            name: "hire@imwsc.com",
            type: "link",
        },
        {
            icon: "",
            value: "https://beian.miit.gov.cn/",
            name: "苏ICP备2024139639号-1",
            type: "link",
        }
    ]

    return (
        pathname === "/" && 
        <div  className="flex flex-row justify-center py-4 border border-t-100 opacity-75 flex-wrap">
            {contactList.map(contact => 
                <div key={contact.value} className="flex sm:flex-row sm:items-end flex-col items-center  gap-2 mr-4 hover:opacity-100 opacity-75 cursor-pointer mt-2">
                    {contact.icon ? <Image src={contact.icon} alt={contact.name} width={25} height={25} /> : null}
                    <div>
                        {
                            contact.type === "link"? 
                            <a href={contact.value} target="_blank">{contact.name}</a> :
                            <span>{contact.name}</span>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}