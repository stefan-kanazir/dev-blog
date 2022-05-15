import ContactForm from "../components/ContactForm"
import Head from "next/head"

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta 
                    name="description"
                    content="Contact page"
                />
            </Head>
            <ContactForm />
        </>
    )
}

export default Contact