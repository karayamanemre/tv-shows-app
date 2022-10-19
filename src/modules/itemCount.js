const showCount = () => {
  window.addEventListener('load', () => {
    const showList = document.querySelector('#show-list');
    const showNum = showList.childElementCount;
    const showNumDisplay = document.querySelector('#show-count');
    showNumDisplay.textContent = showNum;
  });
};

export default showCount;