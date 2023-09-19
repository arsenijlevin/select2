$('.trigger_alert_send_uchenik').click(function(){
    $('.alert_custom_bg').addClass('alert_custom_bg_active');
    $('.alert_custom').addClass('alert_custom_active');
});

$('.trigger_alert_send_desk').click(function(){
    $('.alert_custom_bg').addClass('alert_custom_bg_active');
    $('.alert_custom').addClass('alert_custom_active');
});

$('.alert_custom_close').click(function(){
    $('.alert_custom_bg').removeClass('alert_custom_bg_active');
    $('.alert_custom').removeClass('alert_custom_active');
});