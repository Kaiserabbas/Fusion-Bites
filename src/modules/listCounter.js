const updateListCounter = (count) => {
  const listCounterElement = document.getElementById('nav-dishes');
  listCounterElement.textContent = `(${count}) Dishes`;
};
export default updateListCounter;
