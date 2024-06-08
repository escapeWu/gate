import PostItem from "@/components/posts/post-item"
import { queryPostsByPage } from "./actions"

export default async function IndexPage() {
    const response = await queryPostsByPage(1, 9999)
    const posts = response.posts

    return (
        <div className="mt-[3vw]">
            <div>
                <h1 className="text-5xl font-extralight">Blog</h1>
                <p className="mt-4 opacity-75">记录日常学到的知识，分享解决问题的方案，以及一些有趣的事情。</p>
            </div>
            <div className="posts mt-8 ml-16 flex flex-col gap-4">
                {posts.map((post, index) => <PostItem key={index} post={post}/>)}
            </div>
        </div>
    )
}