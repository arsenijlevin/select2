let steps_on_cite =  [{
    title: 'Приветствую тебя на станице всех задач',
    intro: 'Привет тебе, мой юный (а может быть и не очень) друг! 👋 Здесь ты можешь увидеть сборник всех задач,представленных на сайте. Пробежимся по ним',
    tooltipClass: 'tourTooltip'
  },
  {
    element: document.querySelector('.homework_div'),
    intro: 'В правой части располагаются задачи с условиями.'+
            'Тут есть задачи на самый различные темы',
    title: "Колонка с задачами",
    position: "center",
    tooltipClass: 'tourTooltip'
  },
  {
    element: document.querySelector('.main'),
    intro: 'каждая задача содержит в себе больше информации,чем условие и ответ. '+
    'Нажав на номер задачи мы сможем посмотреть более подробно её',
    title: "номер задачи",
    position: "center",
    tooltipClass: 'tourTooltip'
  },
  {
    element: document.querySelector('.content_toggle'),
    intro: 'при нажатии на кнопку "показать решение" собственно мы увидим решение данной задачи',
    title: "Показать решение",
    position: "center",
    tooltipClass: 'tourTooltip'

  },
  {
    element: document.querySelector('.favour'),
    intro: 'В магазине мы можем добавить товар в список. А здесь мы можем добавить задачи, чтобы прорешать их после'+
    'попробуем нажать на кнопку и добавить эти задачи к себе, например, 1 и 2 ',
    title: "Добавить в избранное",
    position: "center",
    tooltipClass: 'tourTooltip'
  },
  
  {
    element: document.querySelector('.filter'),
    intro: '...В левой же части можно наблюдать фильтр к задачам...<img src="https://hot_data_kuzovkin_info_private.hb.bizmrg.com/study_video/filter_use.gif" alt="">',
    title: "Фильтр к задачам",
    position: "right",
    tooltipClass: 'tourTooltip_2'
  },
  {
    element: document.querySelector('.favourite'),
    intro: 'Ну что, отоборали часть задач. Попробуем распечатать эти задачи либо сохранить эту подборку, чтобы потом с ней поработать',
    title: "Фильтр к задачам",
    position: "right",
    tooltipClass: 'tourTooltip'
  }

]

  const intro_programm = introJs()
  intro_programm.setOptions({steps: steps_on_cite});
  intro_programm.setOption("dontShowAgain", true);
  intro_programm.setOptions({showProgress: true});
  intro_programm.setOptions({nextLabel: 'Ясно. Идем дальше'});  
  intro_programm.setOptions({doneLabel: 'Спасибо, дальше продолжу самостоятельно'}); 
  intro_programm.setOptions({prevLabel: 'Вернемся на шаг назад'}); 
  intro_programm.setOptions({dontShowAgainLabel: 'Мне все ясно. Больше показывать не надо'}); 

  intro_programm.start();