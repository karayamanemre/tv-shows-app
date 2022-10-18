const showLikes = (dataObject) => {
  dataObject.forEach((data) => {
    const likeCount = document.querySelectorAll('.like-count');
    likeCount.forEach((display) => {
      if (display.id === data.item_id) {
        display.textContent = data.likes;
      }
    });
  });
};

export default showLikes;
