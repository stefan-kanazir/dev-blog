import PostsGrid from "./PostsGrid"

const AllPosts = ({ posts }) => {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl text-center mb-12 text-teal-700">All Posts</h1>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default AllPosts