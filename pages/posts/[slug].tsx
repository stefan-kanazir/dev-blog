import PostContent from "../../components/PostContent"
import { getPostsData, getPostsFiles } from "../../lib/posts-util"

const Post = ({post}) => {
    return (
        <PostContent post={post} />
    )
}

export function getStaticProps(context) {
    const { params } = context
    const { slug } = params

    const postData = getPostsData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();
    console.log(postFilenames)

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug: slug }})),
        fallback: false
    }
}

export default Post