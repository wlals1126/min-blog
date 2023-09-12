import Link from "next/link";
import dayjs from "dayjs";

interface Props {
  post: {
    id: number;
    title: string;
    createdAt: string;
  };
}

const Bar = ({ post }: Props) => {
  return (
    <Link href={`posting/${post.id}`}>
      <a>
        {post.title}
        <p className="date">
          {dayjs(post.createdAt).format("YYYY년 MM월 DD일")}
        </p>
      </a>
    </Link>
  );
};

export default Bar;
