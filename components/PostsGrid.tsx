import PostItem from "./PostItem"

const PostsGrid = ({ posts }) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <PostItem 
                    key={post.slug}
                    post={post}
                />
            ))}
        </ul>
    )
}

export default PostsGrid