const progressLine = document.querySelector('.progress-line');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progressSteps = document.querySelectorAll('.progress-step');
const activeSteps = document.querySelectorAll('.progress-step--active');

let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive + 1 > progressSteps.length)
    currentActive = progressSteps.length;
  else {
    currentActive++;
    progressSteps[currentActive - 1].classList.add('progress-step--active');
  }

  updateProgress();
});

prev.addEventListener('click', () => {
  if (currentActive - 1 < 1) currentActive = 1;
  else {
    currentActive--;
    progressSteps[currentActive].classList.remove('progress-step--active');
  }

  updateProgress();
});

const updateProgress = () => {
  progressLine.style.width = `${
    ((currentActive - 1) / (progressSteps.length - 1)) * 100
  }%`;

  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === progressSteps.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }

  //   else if (currentActive === progressSteps.length) next.disabled = true;
  //   else if (prev.disabled) prev.disabled = false;
  //   else if (next.disabled) next.disabled = false;
};
