"use server";

import { prisma } from "@/lib/prisma";
import { cacheLife, cacheTag, revalidatePath, updateTag } from "next/cache";

export async function createPost(data: FormData) {
  const title = data.get("title")?.toString() ?? "";
  const content = data.get("content")?.toString() ?? "";

  await prisma.post.create({
    data: {
      title,
      content,
      authorId: 2,
    },
  });

  updateTag("posts");
//   revalidatePath("/posts");
}

export async function getPosts() {
  "use cache";
  cacheLife("days");
  cacheTag("posts");

  const posts = await prisma.post.findMany({
        orderBy: {
            id: "asc"
        }
    });
    
  return posts;
}

export async function deletePost(id: number) {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  updateTag("posts");
//   revalidatePath("/posts");
}

export async function upvotePost(id: number) {
    if (!Number.isInteger(id)) {
        throw new Error("Invalid post ID");
    }

    await prisma.post.update({
        where: { id },
        data: { votes: { increment: 1 } },
    });

    updateTag("posts");
    revalidatePath(`/posts/${id}`);
}