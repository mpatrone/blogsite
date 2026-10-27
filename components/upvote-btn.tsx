"use client";

import { upvotePost } from "@/app/actions/actions";
import { useState } from "react";

type UpvoteBtnProps = {
  postId: number;
  votes: number;
};

export default function UpvoteBtn({postId, votes}: UpvoteBtnProps ) {
  return (
    <button
      className="h-9 shrink-0 rounded-md border border-zinc-300 bg-zinc-100 px-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-200"
      type="button"
      onClick={() => upvotePost(postId)}
    >
      Upvote {votes}
    </button>
  );
}
