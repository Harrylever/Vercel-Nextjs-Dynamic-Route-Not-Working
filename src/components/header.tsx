import Link from "next/link"

const Header = () => {
  return (
    <header className="py-10">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-semibold font-rethink-sans text-4xl hover:underline"
        >
          Go To Home Page
        </Link>
      </div>
    </header>
  )
}

export default Header
