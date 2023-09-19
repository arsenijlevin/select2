let steps_on_cite =  [{
    title: 'страница регистрации',
    intro: 'Итак, принято решение зарегистрироваться на сайте. Решение абсолютно верное!'+
    'Регистрация на сайте даёт возможность сохранять задачи в личный кабинет,сохранять домашние задачи'+
    'работать с онлайн доской. Не будем медлить!'
  },
  {
    element: document.querySelector('.write_by_hand'),
    intro: 'Можно аккуратно заполнить все ячейки. После нажатия на кнопку, на почту придет письмо.',
    title: "регистрация по почте",
    position: "center"
  },
  {
    element: document.querySelector('.media'),
    intro: 'А можно зарегистрировать свой аккаунт с помощью соцсетей. Это гораздо быстрее!',
    title: "регистрация с помощью соцсетей",
    position: "center"
  }

]



const intro_programm = introJs()
intro_programm.setOptions({steps: steps_on_cite});
intro_programm.setOption("dontShowAgain", true);
intro_programm.setOptions({showProgress: true});
intro_programm.setOptions({tooltipClass: 'tourTooltip'});
intro_programm.setOptions({nextLabel: 'Ясно. Идем дальше'});  
intro_programm.setOptions({doneLabel: 'Спасибо, дальше продолжу самостоятельно'}); 
intro_programm.setOptions({prevLabel: 'Вернемся на шаг назад'}); 
intro_programm.setOptions({dontShowAgainLabel: 'Мне все ясно. Больше показывать не надо'}); 
intro_programm.start();