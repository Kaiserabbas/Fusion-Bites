import FOOD_BASE_URL from './api';
const getFoodItems = async () => {
  const response = await fetch(`${FOOD_BASE_URL}`);
  const data = await response.json();
  return data;
};
export default getFoodItems;
