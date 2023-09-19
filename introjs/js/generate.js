$(document).ready(function(){
    $(".generate_a").click(function(){
      $(this).parents(".homework_div_branch").addClass('homework_div_branch_active');
      $(this).parents(".homework_div_branch").append($(this).parents('.homework_div').clone(true).addClass('homework_div_new'));
      $(this).parents(".homework_div_branch").find('.homework_div_new .homework_header').hide();
      $(this).parents(".homework_div_branch").find('.homework_div_new .generate_a').hide();
      $(this).parents(".homework_div_branch").find('.homework_div_new .js-modal-trigger').hide();
      $(this).parents(".homework_div_branch").find('.homework_div_new .homework_text').css('color', '#485fc7')
      // $(this).parents(".homework_div").append('<div class="homework_div_new mt-3"></div>');
     });
  }); 


