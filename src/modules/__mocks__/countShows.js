const showCounter = () => {
  const showList = document.querySelector('#show-list');
  const showcount = showList.childElementCount;
  return showcount;
};

export default showCounter;
