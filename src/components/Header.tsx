import Link from "next/link"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 w-full px-32 py-2 bg-gray-200">
            <div className="flex items-center justify-between max-w-[1024px]">
                <div>Logo</div>
                <nav className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/form">Form</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header