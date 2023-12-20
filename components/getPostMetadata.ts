import fs from "fs"; //ファイルシステムを管理
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

//このディレクトリーから全ての投稿を読み取る関数
const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //Get gray-matter data from each file
  //readFileSyncファイルの内容を読み取る
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      image: matterResult.data.image,
      icon: matterResult.data.icon,
      name: matterResult.data.name,
      team: matterResult.data.team,
    };
  });

  return posts;
};

export default getPostMetadata;
