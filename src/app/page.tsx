import { IPost } from "@/types"
import Link from "next/link"

export default async function Home() {
  const posts = (await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  )) as IPost[]

  return (
    <main className="max-w-7xl mx-auto">
      <p>Landing Page</p>

      <section>
        <h2>Posts</h2>

        <div className="mt-10 ml-10">
          <ul className="list-item list-disc">
            {posts.slice(0, 20).map((post, index) => (
              <li key={index}>
                <Link
                  href={`/posts/${post.id}`}
                  className="font-rethink-sans hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
