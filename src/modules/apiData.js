import createList from './showList.js';
import popUpHandler from './commentPopUp.js';
import showCount from './itemCount.js';

const loaderDiv = document.getElementById('loader');

const listLoaded = () => {
  loaderDiv.hidden = true;
  showCount();
};

const fetchData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const shows = await response.json();
  const latestShows = shows.slice(0, 16);
  createList(latestShows);
  popUpHandler(latestShows);
  listLoaded();
};

export default fetchData;
