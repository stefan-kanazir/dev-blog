import Image from "next/image"

const PostHeader = ({ title, image }) => {
    return (
        <header className="border border-b-4 border-b-teal-700 pb-10 mb-10">
            <Image 
                src={image}
                alt={title}
                width={1600}
                height={900}
                layout="responsive"
                className="rounded-lg"
            />
            <h1 className="text-5xl text-bold text-teal-700 text-center mt-10">{title}</h1>
        </header>
    )
}

export default PostHeader