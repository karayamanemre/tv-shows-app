import closeIcon from '../assets/close.png';

const popUpPage = document.querySelector('.popup');

const popUpHandler = (shows) => {
  const commentButton = document.querySelectorAll('.comment_button');
  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const actualButton = shows.find((show) => show.id === +button.dataset.id);
      popUpPage.classList.add('visible');
      popUpPage.innerHTML = `
        <div class='popup_container'>
          <img class='popup_img' src='${actualButton.image.medium}' alt='${actualButton.name}'>
          <img class='close_icon' src='${closeIcon}'>
          <h2>${actualButton.name}</h2>
          <h4>Genres: ${actualButton.genres}</h4>
          <p>${actualButton.summary}</p>
          <h4>Language: ${actualButton.language}</>
        </div>
        `;

      document.querySelector('.close_icon').addEventListener('click', () => {
        popUpPage.classList.remove('visible');
      });
    });
  });
};

export default popUpHandler;
