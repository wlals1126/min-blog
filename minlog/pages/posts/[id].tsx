import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "@/.contentlayer/generated";

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || "");

  return (
    <div>
      <h1>{post?.title}</h1>
      <span>{post?.category}</span>
      <MDXComponent />
    </div>
  );
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        id: _raw.flattenedPath,
      },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String(params?.id || "");

  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });
  return {
    props: {
      post,
    },
  };
};
