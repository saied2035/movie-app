const commentsCounter = (comments) => {
  const countComments = comments.length;
  const commentCount = document.getElementById('comments-count');
  commentCount.innerHTML = countComments;
  return countComments;
};

export default commentsCounter;