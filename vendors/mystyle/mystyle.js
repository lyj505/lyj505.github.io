(function($){

  //nprogress config

  NProgress.configure({ ease: 'ease', speed: 600 });
  NProgress.configure({ trickleSpeed: 60 });


  //jquery.pajax
  /*$.pjax({
    selector: '.article-more-link > a',
    container: '#main', //内容替换的容器
    show: 'fade',  //展现的动画，支持默认和fade, 可以自定义动画方式，这里为自定义的function即可。
    cache: true,  //是否使用缓存
    storage: true,  //是否使用本地存储
    titleSuffix: '', //标题后缀
    filter: function(){},
    callback: function(){}
  })*/
if ($.support.pjax) {
  $(document).pjax('a', '#main', { fragment: ('#main'), timeout: 10000 });
  $(document).on({
    'pjax:click': function() {
      NProgress.start();
     // beforePjax();
    },
    'pjax:start': function() {
      console.log("pjax start...");
    },
    'pjax:end':function(){
      NProgress.done();
      //setTimeout("NProgress.done()", 3000 );
      console.log("pjax end...");
      afterPjax();
    }
  });



function pjax_loadDuodsuo(){
    var dus=$(".ds-thread");
    if($(dus).length==1){
        var el = document.createElement('div');
        var sidetitle = document.getElementById('sidebar')
        el.setAttribute('data-thread-key',$(dus).attr("data-thread-key"));//必选参数
        el.setAttribute('data-url',$(dus).attr("data-url"));
        DUOSHUO.EmbedThread(el);
        $(dus).html(el);
    }
}

 function afterPjax(){
    pjax_loadDuodsuo();
     showPageCounter();
    showVisitorCounter();
  }
}
   })(jQuery);