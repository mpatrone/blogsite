import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createPost, getPosts } from "../actions/actions";
import UpvoteBtn from "@/components/upvote-btn";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function PostsPage() {

  const posts = await getPosts();
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await response.json();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5-xl">
          Posts
        </h1>

        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={`/posts/${post.id}`}
                  className="text-lg font-semibold text-zinc-950 hover:text-zinc-700"
                >
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </Link>

                <UpvoteBtn postId={post.id} votes={post.votes} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-zinc-200 pt-6">
          <h2 className="text-xl font-semibold text-zinc-950">New Post</h2>
          <form className="space-y-4" action={createPost}>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-zinc-700">Title</span>
              <input
                name="title"
                type="text"
                required
                className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 transition-colors focus:border-zinc-500 text-sm text-zinc-700"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-zinc-700">Content</span>
              <textarea
                name="content"
                required
                className="h-20 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 transition-colors focus:border-zinc-500 text-sm text-zinc-700"
              />
            </label>

            <button
              type="submit"
              className="rounded-md bg-zinc-950 px-4 py-2 text-white hover:bg-zinc-800"
            >
              Create
            </button>
          </form>
      </section>
    </div>
  );
}
