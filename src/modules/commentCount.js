const countComment = () => {
  const commentItems = document.querySelectorAll('.comment_paragraph');
  const commentsNum = commentItems.length;
  return commentsNum;
};

export default countComment;