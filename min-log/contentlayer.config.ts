import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypeHighlight from "rehype-highlight/lib";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false,
    },
    createdAt: {
      type: "date",
      required: true,
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          theme: "github-dark",
        },
      ],
      highlight,
    ],
  },
});

export default contentSource;
