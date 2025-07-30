import Comment from "./Comment";

const CommentList = ({ comments }) => {
  // Disclaimer: Don't use indexes as key. Here it is just for tutorial purpose
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border-l-1 border-black pl-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
