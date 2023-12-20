import Link from "next/link";
import Image from "next/image";

import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="border border-slate-200 p-4 m-5 rounded-md shadow-md bg-white transition duration-500 hover:scale-105 grid justify-center"
    >
      <div className="w-[180px]">
        <img src={props.image} alt="" />
        <p className="text-sm text-slate-400">{props.date}</p>
        <h2 className="font-bold text-violet-600 hover:underline line-clamp-2">
          {props.title}
        </h2>
        <p className="text-slate-400 text-xs">{props.subtitle}</p>
        <div className="flex items-center">
          <img
            src={props.icon}
            alt=""
            width={30}
            height={30}
            className="mr-1"
          />
          <p className="text-xs text-slate-500">{props.name}</p>
          <p className="text-xs text-slate-500 ml-2">{props.team}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
