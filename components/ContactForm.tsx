import { request } from "https";
import { useState, useEffect } from "react";
import Notification from "./Notification";

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [entereddName, setEnteredName] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");
    const [requestStatus, setRequestStatus] = useState<"pending" | "success" | "error">()
    const [requestError, setRequestError] = useState();
    
    useEffect(() => {
        if (requestStatus === "success" || requestStatus === "error") {
            setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 2000)
        }
    }, [requestStatus, requestError])
    
    async function sendContacData(contactDetails) {
        const resposne = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(contactDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await resposne.json();

        if (!resposne.ok) {
            throw new Error(data.message || "Something went wrong")
        }
    }
    
    async function sendMessageHandler(event) {
        event.preventDefault();

        setRequestStatus("pending")

        try {            
            await sendContacData({
                email: enteredEmail,
                name: entereddName,
                message: enteredMessage
            })
            setRequestStatus("success")
            setEnteredMessage("")
            setEnteredEmail("")
            setEnteredName("")
        } catch (error) {
            setRequestError(error.message)
            setRequestStatus("error")
        }
    }

    let notification;

    if (requestStatus === "pending") {
        notification = {
            status: "pending",
            title: "Sending message...",
            message: "Your message is on its way!"
        }
    }

    if (requestStatus === "success") {
        notification = {
            status: "success",
            title: "Success!",
            message: "Message sent successefully!"
        }
    }

    if (requestStatus === "error") {
        notification = {
            status: "error",
            title: "Error!",
            message: requestError
        }
    }

    return (
        <div className="px-4">
            <section className="bg-gray-200 max-w-2xl mx-auto my-10 p-8 rounded-lg">
                <h1 className="text-5xl text-center mb-10">How can i help you?</h1>
                <form onSubmit={sendMessageHandler}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg mb-1">Your Email</label>
                            <input type="email" id="email" required className="pl-3 py-1 rounded-md" value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg mb-1">Your Name</label>
                            <input type="text" id="name" required className="pl-3 py-1 rounded-md" value={entereddName} onChange={event => setEnteredName(event.target.value)} />
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label htmlFor="message" className="text-lg mb-1">Your Message</label>
                        <textarea className="pl-3 pt-1" id="message" rows={5} required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}></textarea>
                    </div>

                    <button type="submit" className="py-3 px-5 w-full md:w-auto bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-md">Send Message</button>
                </form>
                {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
            </section>
        </div>
    )
}

export default ContactForm