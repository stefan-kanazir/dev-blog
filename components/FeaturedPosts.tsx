import PostsGrid from "./PostsGrid"

const FeaturedPosts = ({ posts }) => {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl text-center mb-12 text-teal-700">Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts