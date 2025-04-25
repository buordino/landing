import CommentsList from "./CommentsList";
import SectionTitle from "./SectionTitle";

const CommentsSection = () => {
  return (
    <section>
        <SectionTitle>نظرات کاربران</SectionTitle>
      <div className="py-12 px-8 2lg:px-14">
        <div className="mt-2 w-full">
          <CommentsList />
        </div>
      </div>
    </section>
  );
}

export default CommentsSection