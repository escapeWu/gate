// components/ProjectCard.js
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  year: string;
  techStack: string;
}

export default function ProjectCard({title, description, image,year, link, techStack}: ProjectCardProps) {
  return (
    <div className="p-2 max-w-sm shadow-lg">
      <Image 
        src={image}
        alt={description} 
        width={600} 
        height={400} 
        className="rounded-lg"
      />
      <div className="pt-4">
        <h2 className="text-2xl font-bold">
          {title} <span className="text-sm font-light text-gray-500">{year}</span>
        </h2>
        <p className="text-white opacity-75 text-lg">{description}</p>
        {techStack && <span className="font-light text-gray-500">{techStack}</span>}
        <Link href={link} className='text-white hover:underline mt-2 block'>
          Website
        </Link>
      </div>
    </div>
  );
}