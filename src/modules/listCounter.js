const updateListCounterAmerican = (count) => {
  const listCounterAmerican = document.getElementById('american');
  listCounterAmerican.textContent = `(${count}) American`;
};
const updateListCounterMexican = (count) => {
  const listCounterMexican = document.getElementById('mexican');
  listCounterMexican.textContent = `(${count}) Mexican`;
};
const updateListCounterPakistani = (count) => {
  const listCounterPakistani = document.getElementById('pakistani');
  listCounterPakistani.textContent = `(${count}) Pakistani`;
};
export {
  updateListCounterAmerican,
  updateListCounterPakistani,
  updateListCounterMexican,
};
