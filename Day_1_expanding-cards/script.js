// put all the pannels in a node list
let activePanel = document.querySelector('.panel--active');
const pannelContainer = document.querySelector('.panel-container');

const removeActiveClasses = () => {
  activePanel.classList.remove('panel--active');
};

pannelContainer.addEventListener('click', event => {
  removeActiveClasses();
  event.target.classList.add('panel--active');
  activePanel = event.target;
});
