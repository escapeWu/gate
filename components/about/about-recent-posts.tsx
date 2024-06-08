import { queryPostsByPage } from "@/app/posts/actions"
import PostItem from "../posts/post-item"

export default async function RecentPosts() {
    const data = await queryPostsByPage(1, 3)
    const posts = data.posts
    return (
        <div>
            <h2 className="text-xl sm:text-5xl sm:font-normal">Recent Posts</h2>
            <div className="posts mt-8  flex flex-col gap-4">
                {posts.map((post, index) => <PostItem key={index} post={post}/>)}
            </div>
        </div>
    ) 
}