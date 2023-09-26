const allowTouchmove = (event) => {
  event.stopPropagation()
}

const tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    scrollTo: { behavior: 'smooth', block: 'center' },
    when: {
      show() {
        const target = this.getTarget()
        if (target) {
          target.addEventListener('touchmove', allowTouchmove)
        }

        doNotShowAgainBlock()
        selectStepBullets()
        progressBar()
      },
      hide() {
        const target = this.getTarget()
        if (target) {
          target.removeEventListener('touchmove', allowTouchmove)
        }
      }
    }
  },
  modalOverlayOpeningPadding: 5,
  modalOverlayOpeningRadius: 5,
  arrow: false,
  useModalOverlay: true
});

const steps = [{
  title: 'Приветствую тебя на станице всех задач',
  text: 'Привет тебе, мой юный (а может быть и не очень) друг! 👋 Здесь ты можешь увидеть сборник всех задач,представленных на сайте. Пробежимся по ним',
  buttons: [
    {
      action: tour.back,
      disabled: true,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Ясно. Идем дальше'
    }
  ]
},
{
  attachTo: {
    element: '.homework_div',
    on: "top-start"
  },
  text: 'В правой части располагаются задачи с условиями.' +
    'Тут есть задачи на самый различные темы',
  title: "Колонка с задачами",
  highlightClass: "highlight-element-box",
  buttons: [
    {
      action: tour.back,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Ясно. Идем дальше'
    }
  ],
},
{
  attachTo: {
    element: '.main',
    on: 'top'
  },
  highlightClass: "highlight-element-box",
  text: 'каждая задача содержит в себе больше информации,чем условие и ответ. ' +
    'Нажав на номер задачи мы сможем посмотреть более подробно её',
  title: "номер задачи",
  buttons: [
    {
      action: tour.back,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Ясно. Идем дальше'
    }
  ]
},
{
  attachTo: {
    element: '.content_toggle',
    on: 'top'
  },
  highlightClass: "highlight-element-box",
  text: 'при нажатии на кнопку "показать решение" собственно мы увидим решение данной задачи',
  title: "Показать решение",
  buttons: [
    {
      action: tour.back,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Ясно. Идем дальше'
    }
  ]
},
{
  attachTo: {
    element: '.favour',
    on: 'top'
  },
  highlightClass: "highlight-element-box",
  text: 'В магазине мы можем добавить товар в список. А здесь мы можем добавить задачи, чтобы прорешать их после' +
    'попробуем нажать на кнопку и добавить эти задачи к себе, например, 1 и 2 ',
  title: "Добавить в избранное",
  buttons: [
    {
      action: tour.back,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Ясно. Идем дальше'
    }
  ]
},

{
  attachTo: {
    element: '.filter',
    on: "right-start"
  },
  highlightClass: "highlight-element-box",
  text: '...В левой же части можно наблюдать фильтр к задачам...<img src="https://hot_data_kuzovkin_info_private.hb.bizmrg.com/study_video/filter_use.gif" alt="">',
  title: "Фильтр к задачам",
  buttons: [
    {
      action: tour.back,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Ясно. Идем дальше'
    }
  ]
},
{
  attachTo: {
    element: '.favourite',
    on: "right"
  },
  highlightClass: "highlight-element-box",
  text: 'Ну что, отоборали часть задач. Попробуем распечатать эти задачи либо сохранить эту подборку, чтобы потом с ней поработать',
  title: "Фильтр к задачам",
  buttons: [
    {
      action: tour.back,
      text: 'Вернемся на шаг назад',
    },
    {
      action: tour.next,
      text: 'Спасибо, дальше продолжу самостоятельно'
    }
  ]
}
]

const doNotShowHandler = (e) => {
  const isChecked = e.srcElement.checked;
  localStorage.setItem("shepherd-dontShowAgain", !!isChecked)
}


const progressBar = () => {
  const currentStep = Shepherd.activeTour?.getCurrentStep();
  const currentStepElement = currentStep?.getElement();
  const content = currentStepElement?.querySelector('.shepherd-content');
  const progress = document.createElement('div');

  progress.classList = ["shepherd-progress"]

  const currentStepValue = Shepherd.activeTour?.steps.indexOf(currentStep) + 1;
  const maxStepValue = Shepherd.activeTour?.steps.length

  progress.innerHTML = `<div class="shepherd-progressbar" style="width: ${(currentStepValue / maxStepValue * 100).toFixed(2)}%;"></div>`;

  content?.insertBefore(progress, currentStepElement.querySelector('.shepherd-footer'));
}

const doNotShowAgainBlock = () => {
  const currentStep = Shepherd.activeTour?.getCurrentStep();
  const currentStepElement = currentStep?.getElement();
  const content = currentStepElement?.querySelector('.shepherd-content');
  const inputBlock = document.createElement('div');

  const isChecked = localStorage.getItem('shepherd-dontShowAgain') === "true";

  inputBlock.classList = ["shepherd-dontShowAgain"]

  inputBlock.innerHTML = `<label><input ${isChecked ? "checked" : ""} type="checkbox" name="doNotShow"><span>Мне все ясно. Больше показывать не надо</span></label>`

  inputBlock.onclick = doNotShowHandler;

  content?.insertBefore(inputBlock, currentStepElement.querySelector('.shepherd-footer'))
}

const selectStepBullets = () => {
  const bulletsBlock = document.createElement('div');

  bulletsBlock.classList = ["shepherd-bullets"]

  const bulletsUl = document.createElement('ul');
  const currentStep = Shepherd.activeTour?.getCurrentStep();
  const currentStepElement = currentStep?.getElement();
  const steps = Shepherd.activeTour?.steps;
  const content = currentStepElement?.querySelector('.shepherd-content');

  steps.forEach(step => {
    const bulletLi = document.createElement('li');
    const bullet = document.createElement('a');

    bullet.classList = ["shepherd-bullets-item"]

    if (step.id === currentStep.id) {
      bullet.classList.add("shepherd-bullets-current");
    }

    bullet.onclick = () => {
      if (currentStep.id !== step.id) {
        Shepherd.activeTour?.show(step.id)
      }
    }

    bulletLi.appendChild(bullet)
    bulletsUl.appendChild(bulletLi)
  })

  bulletsBlock.appendChild(bulletsUl);

  content?.insertBefore(bulletsBlock, currentStepElement.querySelector('.shepherd-footer'))
}

tour.addSteps(steps);

const doNotShowCheck = localStorage.getItem('shepherd-dontShowAgain');

if (doNotShowCheck === "false" || !doNotShowCheck) {
  tour.start();
}

document.querySelector(".shepherd-modal-overlay-container")?.addEventListener("click", () => {
  tour.cancel()
})

document.body.addEventListener('touchmove', event => event.stopPropagation())