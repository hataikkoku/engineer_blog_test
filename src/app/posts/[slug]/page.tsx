import fs from "fs"; //ファイルシステム
import matter from "gray-matter";
import Markdown from "markdown-to-jsx"; //markdown形式に読みやすくする
import getPostMetadata from "../../../../components/getPostMetadata";
import Link from "next/link";
import Button  from "../../../../components/Button";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  //matter(metadata)の削除
  const matterResult = matter(content);
  return matterResult;
};

//パスの生成に使用したいスラッグのコレクションを返す必要がなくなる
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug; //それぞれの.mdにアクセス
  const post = getPostContent(slug);
  return (
    <div>
      <p className="text-sm text-slate-400">{post.data.date}</p>
      <h1 className="text-3xl text-violet-600 text-center">
        {post.data.title}
      </h1>
      <div className="flex items-center">
        <img
          src={post.data.icon}
          width={30}
          height={30}
          className="mr-3 text-slate-400"
        />
        <p>{post.data.name}</p>
        <p className="ml-auto">{post.data.team}</p>
      </div>

      <img src={post.data.image} className="mx-auto " />
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
      <div>
      <Button>Return to top</Button>
      </div>
    </div>
  
  );
};

export default PostPage;
