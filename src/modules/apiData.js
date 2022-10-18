import createList from './showList.js';
import popUpHandler from './commentPopUp.js';

const fetchData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const shows = await response.json();
  const latestShows = shows.slice(0, 15);
  createList(latestShows);
  popUpHandler(latestShows);
};

export default fetchData;