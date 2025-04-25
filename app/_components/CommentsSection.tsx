import CommentsList from "./CommentsList";
import SectionTitle from "./SectionTitle";

const CommentsSection = () => {
  return (
    <section>
        <SectionTitle>نظرات کاربران</SectionTitle>
      <div className="py-12 px-16 md:px-42">
        <div className="mt-18">
          <CommentsList />
        </div>
      </div>
    </section>
  );
}

export default CommentsSection