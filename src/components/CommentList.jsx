import Comment from "./Comment";

const CommentList = ({ comments }) => {
  // Disclaimer: Don't use indexes as key. Here it is just for tutorial purpose
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-black border-l-1 ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
