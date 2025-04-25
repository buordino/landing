import CommentsList from "./CommentsList";
import SectionTitle from "./SectionTitle";

const CommentsSection = () => {
  return (
    <section>
      <div className="py-12 px-16 md:px-42">
        <SectionTitle>نظرات کاربران</SectionTitle>
        <div className="mt-18">
          <CommentsList />
        </div>
      </div>
    </section>
  );
}

export default CommentsSection