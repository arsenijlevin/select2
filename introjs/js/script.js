//
  // РљРћР” Р”Р›РЇ Р РђР‘РћРўР« РЎРћРћР‘Р©Р•РќРРЇ РџР РћР¤РР›РЇ
  function fun() {
    document.getElementById('succes_profile').classList.add('succes_profile_active');
  };


//РљРћР” Р”Р›РЇ Р РђР‘РћРўР« РњР•РќР®-Р“РђРњР‘РЈР Р“Р•Р Рђ РќРђ РњРћР‘РР›Р¬РќРћР™ Р’Р•Р РЎРР

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
    
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
    
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
    
        });
      });
    }
    
    });

// РљРћР” Р”Р›РЇ Р РђР‘РћРўР« РџР Р•Р›РћРђР”Р•Р Рђ

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);

}

function click_btn_one(){
  document.getElementById('is-link-pdf').classList.remove('dif-link');
  document.getElementById('is-link-pres').classList.add('dif-link');
  document.getElementById('is-link-gif').classList.add('dif-link');
  document.getElementById('secret_pdf').classList.add('active_secret_file');
  document.getElementById('secret_pres').classList.remove('active_secret_file');
  document.getElementById('secret_gif').classList.remove('active_secret_file');
};

function click_btn_two(){
  document.getElementById('is-link-pdf').classList.add('dif-link');
  document.getElementById('is-link-pres').classList.remove('dif-link');
  document.getElementById('is-link-gif').classList.add('dif-link');
  document.getElementById('secret_pdf').classList.remove('active_secret_file');
  document.getElementById('secret_pres').classList.add('active_secret_file');
  document.getElementById('secret_gif').classList.remove('active_secret_file');
};

function click_btn_three(){
  document.getElementById('is-link-pdf').classList.add('dif-link');
  document.getElementById('is-link-pres').classList.add('dif-link');
  document.getElementById('is-link-gif').classList.remove('dif-link');
  document.getElementById('secret_pdf').classList.remove('active_secret_file');
  document.getElementById('secret_pres').classList.remove('active_secret_file');
  document.getElementById('secret_gif').classList.add('active_secret_file');
};


// РљРћР” Р”Р›РЇ РњРћР”РђР›Р¬РќРћР“Рћ РћРљРќРђ
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
 // (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
  $('.list-of-tasks').on('click', '.js-modal-trigger', function(){
    const modal = this.dataset.target;
    //const data_order = $trigger.dataset.order;
    const $target = document.getElementById(modal);
    console.log('I did it!!!!!!!!!');


 //   $trigger.addEventListener('click', () => {
      //document.getElementById('modal_send_order').value=data_order;
      openModal($target);
 //   });
  });

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger-base') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });



  (document.querySelectorAll('.js-modal-trigger-2') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const data_order = $trigger.dataset.order;
    const $target = document.getElementById(modal);


    $trigger.addEventListener('click', () => {
      $.ajax({
        type: "POST",
        url: "/get_students_in_friends_not_order",
        data: JSON.stringify({'data_order':data_order}),
        contentType: 'application/json',
        success: function (result) 
        {
            console.log(result);
            window.students_combo_tree.setSource(result);
  //        y = window.x
 //         studients = y.setSource(studients)

        }
    });



      document.getElementById('modal_send_order').value=data_order;
      openModal($target);
    });
  });

var studients;




  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button,.modal-file .delite-file') || []).forEach(($close) => {


    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});



//РљРћР” Р”Р›РЇ Р—РђР“Р РЈР—РљР Р¤РђР™Р›РћР’
  const fileInput = document.querySelector('#file-js-example input[type="file"]');
  if (fileInput) {
    fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#file-js-example .file-name');
      fileName.textContent = fileInput.files[0].name;
    }
  }
}

//






  