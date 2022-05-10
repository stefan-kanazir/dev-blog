import PostHeader from "./PostHeader"
import ReactMardown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

const customRenderers = {
    img(image) {
        return (
            <Image 
                src={image.src} 
                alt={image.alt} 
                width={600} 
                height={300}
                layout="responsive" 
            />
        )
    },
    p(paragraph) {
        const { node } = paragraph;

        if (node.children[0].type === 'img') {
            const image = node.children[0];

            return (
                <div>
                    <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={600} 
                        height={300} 
                    />
                </div>
            )
        }

        return <p>{paragraph.children}</p>
    },
    code(code) {
        const { className, children } = code;
        const language = className.split('-')[1]; 

        return (
            <SyntaxHighlighter
            style={atomDark}
            language={language}
            children={children}
          />
        )
    }
}

const PostContent = ({post}) => {
    return (
        <article className="bg-gray-300 min-h-screen p-6">
            <main className="max-w-4xl mx-auto bg-gray-200 rounded-md p-10">
                <PostHeader title={`${post.title}`} image={`/images/posts/${post.image}`} />
                <ReactMardown className="block-content" components={customRenderers}>
                    {post.content}
                </ReactMardown>
            </main>
        </article>
    )
}

export default PostContent