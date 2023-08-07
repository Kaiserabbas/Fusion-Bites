import img from '../assets/logo.png';

const logo = () => {
  const imageHeader = document.querySelector('.image-header');
  imageHeader.src = img;

  const imageFooter = document.querySelector('.image-footer');
  imageFooter.src = img;
};

export default logo;
