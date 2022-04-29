import Link from "next/link"

const MainNavigation = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-teal-700 text-white">
            <h3 className="text-xl font-semibold">
                <Link href="/">
                    Stefan Kanazir
                </Link>
            </h3>
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation