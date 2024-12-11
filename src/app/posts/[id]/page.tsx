type PageProps = {
  params: Promise<{ id: string }>
}

export default async function Post({ params }: PageProps) {
  const { id } = await params

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json())

  if (!post) {
    return <p className="font-rethink-sans text-lg">Post {id} is not found</p>
  }

  return (
    <section className="font-rethink-sans max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold">Post Details</h2>
      <p>Post ID: {post.id}</p>
      <p>User Id: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </section>
  )
}
