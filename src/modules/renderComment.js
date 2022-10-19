import countComment from './commentCount.js';

const renderComment = (userInput, userComment) => {
  const commentSection = document.querySelector('.comment_section');
  const commentParagraphs = document.querySelectorAll('.comment_paragraph');

  const date = new Date().toISOString().slice(0, 10);
  if (!commentParagraphs.length) {
    document.querySelector('.no_comment').innerHTML = `${date} ${userInput}: "${userComment}"`;
  } else {
    const p = document.createElement('p');
    p.classList.add('comment_paragraph');
    p.textContent = `${date} ${userInput}: "${userComment}"`;
    commentSection.appendChild(p);
  }

  const commentHeading = document.querySelector('.comment_section');
  commentHeading.firstElementChild.innerHTML = `Comments (${countComment()})`;
};

export default renderComment;