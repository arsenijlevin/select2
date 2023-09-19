/*
document.addEventListener('DOMContentLoaded', () =>{
    if($(".content_toggle")){
      $('.content_toggle').click(function(){
        $(this).parents('.homework_div').find('.secret').slideToggle(300);   
        return false;
      });
    }
  });
  */
  document.addEventListener('DOMContentLoaded', () =>{
  //  if($(".content_toggle")){

      $('.list-of-tasks').on('click', '.content_toggle',function(){
        $(this).parents('.homework_div').find('.secret').slideToggle(300);   
        return false;
      });
   // }
  });



  document.addEventListener('DOMContentLoaded', () =>{
    if($(".content_toggle_1")){
      $('.content_toggle_1').click(function(){
        $(this).parents('.trigger').find('.secret').slideToggle(300);   
        return false;
      });
    }
  });
  /*
  document.addEventListener('DOMContentLoaded', () =>{
    if($(".rubricator_toggle")){
      $('.rubricator_toggle').click(function(){
        $(this).parents('.homework_div').find('.rubricator').slideToggle(300);   
        return false;
      });
    }
  });
*/
document.addEventListener('DOMContentLoaded', () =>{
  $('.list-of-tasks').on('click', '.rubricator_toggle',function(){
      $(this).parents('.homework_div').find('.rubricator').slideToggle(300);   
      return false;
    });
  
});
  document.addEventListener('DOMContentLoaded', () =>{
    if($(".mobile_filter_toggle")){
      $('.mobile_filter_toggle').click(function(){
        $(this).parents('.filter').find('.mobile_filter_secret').slideToggle(300);   
        return false;
      });
    }
  });
  

  // РєРѕРґ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃС‡РµС‚С‡РёРєР°-РєР»РёРєРµСЂР°

  var counterVal  = 0;
  let countervals = Array(N_value).fill(1);

  function incrementClick(name,number) {
    document.getElementById(name).innerHTML = ++countervals[number];
}
function resetCounter(name,number) {
  if (countervals[number] > 0){
    document.getElementById(name).innerHTML = --countervals[number];
  }
}
  
/*
  function incrementClick() {
      updateDisplay(++counterVal);
  }
  function incrementClick_1() {
    updateDisplay_1(++counterVal);
  }
  function incrementClick_2() {
    updateDisplay_2(++counterVal);
  }
  function incrementClick_3() {
    updateDisplay_3(++counterVal);
  }
  function incrementClick_4() {
    updateDisplay_4(++counterVal);
  }
  function incrementClick_5() {
    updateDisplay_5(++counterVal);
  }
  function incrementClick_6() {
    updateDisplay_6(++counterVal);
  }
  function incrementClick_7() {
    updateDisplay_7(++counterVal);
  }
  function incrementClick_8() {
    updateDisplay_8(++counterVal);
  }
  function incrementClick_9() {
    updateDisplay_9(++counterVal);
  }
  function incrementClick_10() {
    updateDisplay_10(++counterVal);
  }
  function incrementClick_11() {
    updateDisplay_11(++counterVal);
  }
  function incrementClick_12() {
    updateDisplay_12(++counterVal);
  }
  function incrementClick_13() {
    updateDisplay_13(++counterVal);
  }
  function incrementClick_14() {
    updateDisplay_14(++counterVal);
  }
  function incrementClick_15() {
    updateDisplay_15(++counterVal);
  }
  function incrementClick_16() {
    updateDisplay_16(++counterVal);
  }
  function incrementClick_17() {
    updateDisplay_17(++counterVal);
  }
  function incrementClick_18() {
    updateDisplay_18(++counterVal);
  }
  function incrementClick_19() {
    updateDisplay_19(++counterVal);
  }
  function incrementClick_20() {
    updateDisplay_20(++counterVal);
  }
  function incrementClick_21() {
    updateDisplay_21(++counterVal);
  }
  function incrementClick_22() {
    updateDisplay_22(++counterVal);
  }
  function incrementClick_23() {
    updateDisplay_23(++counterVal);
  }
  function incrementClick_24() {
    updateDisplay_24(++counterVal);
  }
  

  
  function resetCounter() {
      if (counterVal > 0){
        updateDisplay(--counterVal);
      }
  }
  function resetCounter_1() {
    if (counterVal > 0){
      updateDisplay_1(--counterVal);
    }
  }
  function resetCounter_2() {
    if (counterVal > 0){
      updateDisplay_2(--counterVal);
    }
  }
  function resetCounter_3() {
    if (counterVal > 0){
    updateDisplay_3(--counterVal);
    }
  }
  function resetCounter_4() {
    if (counterVal > 0){
      updateDisplay_4(--counterVal);
    }
}
function resetCounter_5() {
  if (counterVal > 0){
    updateDisplay_5(--counterVal);
  }
}
function resetCounter_6() {
  if (counterVal > 0){
    updateDisplay_6(--counterVal);
  }
}
function resetCounter_7() {
  if (counterVal > 0){
  updateDisplay_7(--counterVal);
  }
}
function resetCounter_8() {
  if (counterVal > 0){
    updateDisplay_8(--counterVal);
  }
}
function resetCounter_9() {
if (counterVal > 0){
  updateDisplay_9(--counterVal);
}
}
function resetCounter_10() {
if (counterVal > 0){
  updateDisplay_10(--counterVal);
}
}
function resetCounter_11() {
if (counterVal > 0){
updateDisplay_11(--counterVal);
}
}
function resetCounter_12() {
  if (counterVal > 0){
    updateDisplay_12(--counterVal);
  }
}
function resetCounter_13() {
if (counterVal > 0){
  updateDisplay_13(--counterVal);
}
}
function resetCounter_14() {
if (counterVal > 0){
  updateDisplay_14(--counterVal);
}
}
function resetCounter_15() {
if (counterVal > 0){
updateDisplay_15(--counterVal);
}
}
function resetCounter_16() {
  if (counterVal > 0){
  updateDisplay_16(--counterVal);
  }
}
function resetCounter_17() {
  if (counterVal > 0){
    updateDisplay_17(--counterVal);
  }
}
function resetCounter_18() {
if (counterVal > 0){
  updateDisplay_18(--counterVal);
}
}
function resetCounter_19() {
if (counterVal > 0){
  updateDisplay_19(--counterVal);
}
}
function resetCounter_20() {
if (counterVal > 0){
updateDisplay_20(--counterVal);
}
}
function resetCounter_21() {
  if (counterVal > 0){
    updateDisplay_21(--counterVal);
  }
}
function resetCounter_22() {
if (counterVal > 0){
  updateDisplay_22(--counterVal);
}
}
function resetCounter_23() {
if (counterVal > 0){
  updateDisplay_23(--counterVal);
}
}
function resetCounter_24() {
if (counterVal > 0){
updateDisplay_24(--counterVal);
}
}





  
  function updateDisplay(val) {
      document.getElementById("counter-label").innerHTML = val;
  }
  function updateDisplay_1(val) {
    document.getElementById("counter-label_1").innerHTML = val;
  }
  function updateDisplay_2(val) {
    document.getElementById("counter-label_2").innerHTML = val;
  }
  function updateDisplay_3(val) {
    document.getElementById("counter-label_3").innerHTML = val;
  }
  function updateDisplay_4(val) {
      document.getElementById("counter-label_4").innerHTML = val;
  }
  function updateDisplay_5(val) {
    document.getElementById("counter-label_5").innerHTML = val;
  }
  function updateDisplay_6(val) {
    document.getElementById("counter-label_6").innerHTML = val;
  }
  function updateDisplay_7(val) {
    document.getElementById("counter-label_7").innerHTML = val;
  }
  function updateDisplay_8(val) {
      document.getElementById("counter-label_8").innerHTML = val;
  }
  function updateDisplay_9(val) {
    document.getElementById("counter-label_9").innerHTML = val;
  }
  function updateDisplay_10(val) {
    document.getElementById("counter-label_10").innerHTML = val;
  }
  function updateDisplay_11(val) {
    document.getElementById("counter-label_11").innerHTML = val;
  }
  function updateDisplay_12(val) {
    document.getElementById("counter-label_12").innerHTML = val;
  }
  function updateDisplay_13(val) {
    document.getElementById("counter-label_13").innerHTML = val;
  }
  function updateDisplay_14(val) {
      document.getElementById("counter-label_14").innerHTML = val;
  }
  function updateDisplay_15(val) {
    document.getElementById("counter-label_15").innerHTML = val;
  }
  function updateDisplay_16(val) {
    document.getElementById("counter-label_16").innerHTML = val;
  }
  function updateDisplay_17(val) {
    document.getElementById("counter-label_17").innerHTML = val;
  }
  function updateDisplay_18(val) {
      document.getElementById("counter-label_18").innerHTML = val;
  }
  function updateDisplay_19(val) {
    document.getElementById("counter-label_19").innerHTML = val;
  }
  function updateDisplay_20(val) {
    document.getElementById("counter-label_20").innerHTML = val;
  }
  function updateDisplay_21(val) {
    document.getElementById("counter-label_21").innerHTML = val;
  }
  function updateDisplay_22(val) {
    document.getElementById("counter-label_22").innerHTML = val;
  }
  function updateDisplay_23(val) {
    document.getElementById("counter-label_23").innerHTML = val;
  }
  function updateDisplay_24(val) {
    document.getElementById("counter-label_24").innerHTML = val;
  }
  */