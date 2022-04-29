import Image from "next/image"
import Link from "next/link"

type Post = {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
}

const PostItem = (props) => {
    const {title, date, image, excerpt, slug}: Post = props.post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${image}`

    return (
        <li className="rounded-xl overflow-hidden shadow-md bg-gray-50">
            <Link href={`/posts/${slug}`}>
                <a>
                    <div>
                        <Image 
                            alt={title}
                            src={imagePath}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className="px-8 py-10">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <time className="block text-sm pt-2 pb-4">{formattedDate}</time>
                        <p className="text-gray-600">{excerpt}</p>
                    </div>
                </a>
            </Link>       
        </li>
    )
}

export default PostItem