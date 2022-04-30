import AllPosts from "../../components/AllPosts"

const DUMMY_POSTS = [
    {
        title: "Getting Started with NextJS",
        image: "getting-started-with-nextjs.png",
        excerpt: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
        slug: "getting-started-with-nextjs",
        date: "2022-04-30",
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-with-nextjs.png",
        excerpt: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
        slug: "getting-started-with-nextjs-2",
        date: "2022-04-30",
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-with-nextjs.png",
        excerpt: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
        slug: "getting-started-with-nextjs-3",
        date: "2022-04-30",
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-with-nextjs.png",
        excerpt: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
        slug: "getting-started-with-nextjs-4",
        date: "2022-04-30",
    },
]

const AllPostsPage = () => {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage