let steps_on_cite =  [
{
    title: 'Работа с избранными задачами',
    intro: 'Итак, ты выбрал задачи, последовал совету. МОлодец! '+
    'Теперь попробуем с этой подборкой что-то сделать. Подборку задач можно'+
    'во-первых, сохранить для будущих учеников. Это раз.Во-вторых просто распечатать себе на рабочий стол.'+
    'Попробуем это сделать! Вперед!'
  },
  {
    element: document.querySelector('.print'),
    title: 'Печать заданий',
    intro: 'Самое простое,что можно сделать,это просто распечатать в pdf. '+
           'Нажимаем на кнопку ниже и получаем документ'+
           '<img src="https://hot_data_kuzovkin_info_private.hb.bizmrg.com/study_video/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C%20pdf.gif" alt="">',
    position: "right"
  },
  {
    element: document.querySelector('.js-modal-trigger'),
    title: 'Сохранить подборку',
    intro: 'Совершенно не обязательно только распечатывать задание.'+
    'Его вполне можно сохранить себе, чтобы затем работать с ним. '+
    'Называем подборку каким либо образом и подборка оказывается в личном кабинете'+
    '<img src="https://hot_data_kuzovkin_info_private.hb.bizmrg.com/study_video/save_task_order.gif" alt="">'
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