const ContactForm = () => {
    return (
        <div className="px-4">
            <section className="bg-gray-200 max-w-2xl mx-auto my-10 p-8 rounded-lg">
                <h1 className="text-5xl text-center mb-10">How can i help you?</h1>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg mb-1">Your Email</label>
                            <input type="email" id="email" required className="py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg mb-1">Your Name</label>
                            <input type="text" id="name" required className="py-1 rounded-md" />
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label htmlFor="message" className="text-lg mb-1">Your Message</label>
                        <textarea id="message" rows={5}></textarea>
                    </div>

                    <button className="py-3 px-5 w-full md:w-auto bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-md">Send Message</button>
                </form>
            </section>
        </div>
    )
}

export default ContactForm