import AllPosts from "../../components/AllPosts"
import { getAllPosts } from "../../lib/posts-util"
import Head from "next/head"

const AllPostsPage = ({posts}) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta 
                    name="description"
                    content="A list of all programming-related posts."
                />
            </Head>
            <AllPosts posts={posts} />
        </>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage