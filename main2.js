const svgIcon = document.getElementById('icon-link');
const listItem = document.querySelector('.questions-list_item1');

listItem.addEventListener('click', () => {
  if (svgIcon.getAttribute('href') === './img/icons.svg#icon-plus') {
    svgIcon.setAttribute('href', './img/icons.svg#icon-minus');
  } else {
    svgIcon.setAttribute('href', './img/icons.svg#icon-plus');
  }
});
