import Link from "next/link"
import dayjs from 'dayjs'
import Tag from "./post-tag"

interface Props {
    post: Post
}

export default function PostItem({post, ...props}: Props) {
    return <div>
        <Link href={`https://brain.imwsc.com:8443${post.link}`} target="_blank" className="text-2xl cursor-pointer underline-animation hover:text-orange-500">
            {post.title}
        </Link>
        <div className="flex gap-2 my-1 opacity-75">
            {
                post.tags ? post.tags.split(",").map((tag, index) => <Tag text={tag} key={index} />) : null
            }
        </div>
        <p className="text-sm opacity-50 font-extralight"><span >updated: {dayjs(post.updated).format('DD/MM ')} <span className="ml-4"> created: {dayjs(post.created).format('DD/MM ')}</span> </span></p>
    </div>
}