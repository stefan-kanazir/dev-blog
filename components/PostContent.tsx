import PostHeader from "./PostHeader"
import ReactMardown from "react-markdown"

const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs.png",
    date: "2022-04-30",
    content: "# This is a first post",
}

const PostContent = () => {
    return (
        <article className="bg-gray-300 min-h-screen p-6">
            <main className="max-w-4xl mx-auto bg-gray-200 rounded-md p-10">
                <PostHeader title={`${DUMMY_POST.title}`} image={`/images/posts/${DUMMY_POST.image}`} />
                <ReactMardown>
                    {DUMMY_POST.content}
                </ReactMardown>
            </main>
        </article>
    )
}

export default PostContent