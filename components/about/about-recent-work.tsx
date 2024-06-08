import ProjectCard, { ProjectCardProps } from "./about-recent-work-card"

export default async function RecentWork() {
    const recentProjects: ProjectCardProps[] = [
        {
            title: "Wake On Lan",
            year: "2024",
            description: "网络唤醒WebApp，便捷，简单，本地存储。",
            image: "/example.webp",
            link: "",
            techStack:'Built with NextJS',
            githubLink: ''
        },
        {
            title: "EasyShare",
            year: "2024",
            description: "点对点/云端文件分享，快速，私密",
            image: "/example.webp",
            link: "",
            techStack:'Built with WebRTC & NextJS & SpringBoot',
            githubLink: ''
        },
    ]
    return (
        <div>
            <h2 className="text-xl sm:text-5xl sm:font-normal">Recent Work</h2>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                {recentProjects.map((project, index) => (
                    <ProjectCard key={index} {...project}  />
                ))}
            </div>
        </div>
    )
}