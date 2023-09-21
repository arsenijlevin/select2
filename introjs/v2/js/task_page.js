const tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'class-1 class-2',
    scrollTo: { behavior: 'smooth', block: 'center' },
  },
  useModalOverlay: true
});

tour.addStep({
  title: 'Приветствую тебя на станице всех задач',
  text: `Привет тебе, мой юный (а может быть и не очень) друг! 👋 Здесь ты можешь увидеть сборник всех задач,представленных на сайте. Пробежимся по ним`,
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
  ],
});

tour.start();