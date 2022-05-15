import FeaturedPosts from "../components/FeaturedPosts"
import Hero from "../components/Hero"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"

const Homepage = ({posts}) => {
    return (
        <>
            <Head>
                <title>Dev Blog</title>
                <meta 
                    name="description"
                    content="I post about programming and web development."
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default Homepage