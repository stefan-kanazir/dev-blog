import Image from 'next/image'

const Hero = () => {
    return (
        <section className="flex flex-col py-12 px-6">
            <div className="flex justify-center items-center mb-12">
                <Image 
                    src="/images/site/stefan.jpg"
                    alt="Stefan Kanazir"
                    width={300}
                    height={300}
                    className="rounded-full overflow-hidden"
                />
            </div>
            <h1 className="text-4xl lg:text-5xl text-center font-semibold">Hi, I'm Stefan 👋</h1>
            <p className="text-xl mt-6 text-center">I blog about Front End web development and UX/UI Design</p>
        </section>
    )
}

export default Hero