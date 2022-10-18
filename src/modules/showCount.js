const showCount = () => {
  window.addEventListener('load', (e) => {
    let displayContainer = document.querySelector("#show-list");
    let showcount = displayContainer.childElementCount;
    let showNumDisplay = document.querySelector("#show-count");
    showNumDisplay.textContent = showcount;
  });
};

export default showCount;