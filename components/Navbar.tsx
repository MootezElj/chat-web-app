import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/users">users</Link>
        </nav>
    );
}

export default Navbar;
