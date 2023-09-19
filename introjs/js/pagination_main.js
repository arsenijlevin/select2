
/*$(document).ready(function() {
    $(".pages").pagination({
        dataSource: Array.from({length: 822}, (_, i) => i + 1),
        pageSize: 30,
        howSizeChanger: true,
        showSizeChanger: true,
        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);
        }
    })
});
*/
/*
$(document).ready(function() {
    $(".pages_two").pagination({
        dataSource: Array.from({length: 822}, (_, i) => i + 1),
        pageSize: 30,
        howSizeChanger: true,
        showSizeChanger: true,
        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);
        }
    })
});

*/
$(document).ready(function() {
    $('.pages').pagination({
        dataSource: Array.from({length: page_count*perPage}, (_, i) => i + 1),
        //pageSize: 30,
        pageSize: perPage,
        pageNumber: cur_page,
        showSizeChanger: true,
        sizeChangerOptions: [10,30,45,60,90],

        callback: function(data, pagination) {
          if (cur_page !== pagination.pageNumber || perPage!==pagination.pageSize) {
            
            perPage = pagination.pageSize;
            cur_page = pagination.pageNumber;
            
            // РћС‚РїСЂР°РІР»СЏРµРј AJAX-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ РґР»СЏ РїРѕР»СѓС‡РµРЅРёСЏ РґР°РЅРЅС‹С… Рѕ Р·Р°РґР°С‡Р°С… РЅР° РЅРѕРІРѕР№ СЃС‚СЂР°РЅРёС†Рµ
           // $('.task-preloader').show();
           $('.preloader_new').show();
            let newUrl = `/${url_path}?${parameters}&page=${cur_page}&per_page=${perPage}`.replace(/&amp;/g, '&');
            console.log(newUrl);
            window.history.pushState({path:newUrl},'',newUrl);
            $.ajax({
              url: newUrl,
              method: 'GET',
              dataType: 'html',
              beforeSend: function() {
                $('.MathJax').css('opacity', '0.6');
               // $('.preloader_new').hide();
               // $('.task-preloader').show();
            },
              success: function(response) {
                // РћР±РЅРѕРІР»СЏРµРј СЃРѕРґРµСЂР¶РёРјРѕРµ Р·Р°РґР°С‡ РЅР° СЃС‚СЂР°РЅРёС†Рµ
                $(target_block_class).html($(response).find(target_block_class).html());
                
                    // Р—Р°РїСѓСЃРєР°РµРј MathJax РїРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ СЃС‚СЂР°РЅРёС†С‹
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                // РћР±РЅРѕРІР»СЏРµРј URL РІ Р°РґСЂРµСЃРЅРѕР№ СЃС‚СЂРѕРєРµ Р±СЂР°СѓР·РµСЂР°

              },
              error: function() {
                console.log('РћС€РёР±РєР° РїСЂРё Р·Р°РіСЂСѓР·РєРµ РґР°РЅРЅС‹С… Рѕ Р·Р°РґР°С‡Р°С…');
              },
              complete: function() {
                // Р’РѕСЃСЃС‚Р°РЅР°РІР»РёРІР°РµРј opacity СЌР»РµРјРµРЅС‚РѕРІ MathJax Рё СЃРєСЂС‹РІР°РµРј preloader, РєРѕРіРґР° РІСЃРµ СЌР»РµРјРµРЅС‚С‹ Р·Р°РіСЂСѓР¶РµРЅС‹
                $('.MathJax').css('opacity', '1');
                $('.preloader_new').hide();
              //  $('.task-preloader').hide();
            }
            });
          }
        }
      });
      

});