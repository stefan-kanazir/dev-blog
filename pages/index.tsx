import FeaturedPosts from "../components/FeaturedPosts"
import Hero from "../components/Hero"
import { getFeaturedPosts } from "../lib/posts-util"

const Homepage = ({posts}) => {
    return (
        <>
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