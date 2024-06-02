import ProjectCard, { ProjectCardProps } from "./about-recent-work-card"

export default async function RecentWork() {
    const recentProjects: ProjectCardProps[] = [
        {
            title: "CakeDesk",
            year: "2023",
            description: "A website for a cake shop",
            image: "/example.webp",
            link: "",
            techStack:'Built with react & typescript'
        },
        {
            title: "Airnode",
            year: "2024",
            description: "Deploy and manage production-grade Node.js servers on Digital Ocean using an intuitive UI.",
            image: "/example.webp",
            link: "",
            techStack: 'Bulit with react & java'
        },
    ]
    return (
        <div>
            <h2 className="text-xl sm:text-4xl sm:font-normal">Recent Work</h2>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                {recentProjects.map((project, index) => (
                    <ProjectCard key={index} {...project}  />
                ))}
            </div>
        </div>
    )
}