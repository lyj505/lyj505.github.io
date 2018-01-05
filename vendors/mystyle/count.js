var canvasFP = {
  getFP: function() {
    var _t = this;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'http://lyjnc.me';
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial";
    ctx.textBaseline = "ncLi";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);


    var b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
    var bin = atob(b64);
    var crc = _t.bin2hex(bin.slice(-16, -12));

    return crc;
  },

  bin2hex: function(s) {
    var i, l, o = '',
      n;
    s += '';
    for (i = 0, l = s.length; i < l; i++) {
      n = s.charCodeAt(i).toString(16);
      o += n.length < 2 ? '0' + n : n;
    }
    return o;
  }
};





var io10blogFirebase = new Firebase("https://io10.firebaseio.com/");

var showPageCounter = function() {
  // 明细由当前页面的url表示，将反斜线替换成下划线，并将中文decode出来
  var current_url = decodeURI(window.location.pathname.replace(new RegExp('\\/|\\.', 'g'), "_"));

  // 获取总数，并将总访问量展示在页面上
  io10blogFirebase.child("sum").on("value", function(data) {
    var current_counter = data.val();
    if ($("#sum_counter").length > 0 && current_counter > 1) {
      $("#sum_counter").html(
        "<i class='fa fa-user blue-1'></i>本站总访问量&nbsp;<font class='blue-1'>" + current_counter  + "</font>&nbsp;次"
      );
    };
  });

  // 获取明细，并将明细也展示在页面上
  io10blogFirebase.child("detail/" + current_url).on("value", function(data) {
    var detail_counter = data.val();
    if ($("#detail_counter").length > 0 && detail_counter > 1) {
      $("#detail_counter").html(
        "<i class='fa fa-file-o'></i>&nbsp;本页访问量&nbsp;<font style='color:#000;'>" + detail_counter + "</font>&nbsp;次"
      );
    }
  });

  // 总数+1
  io10blogFirebase.child("sum").transaction(function(current_counter) {
    return (current_counter || 0) + 1;
  });


  // 明细+1
  io10blogFirebase.child("detail/" + current_url).transaction(function(current_counter) {
    return (current_counter || 0) + 1;
  });


  // 记录最后更新时间
  var n = new Date();
  var time = n.getFullYear() + '-' + (n.getMonth() + 1) + '-' + n.getDate() + '_' + n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds() + ' ' + n.getMilliseconds();
  io10blogFirebase.child("lastupdatetime").set({
    timer: time,
    url: current_url
  });

};

var disablePageCounter = function(){
  // 明细由当前页面的url表示，将反斜线替换成下划线，并将中文decode出来
  var current_url = decodeURI(window.location.pathname.replace(new RegExp('\\/|\\.', 'g'), "_"));
  io10blogFirebase.child("sum").off("value");
  io10blogFirebase.child("detail/" + current_url).off("value");
};

showPageCounter();



var io10blogVisitorCounter = new Firebase("https://visitorcount.firebaseio.com/");

var showVisitorCounter = function() {
  var visitorFP = canvasFP.getFP();

  io10blogVisitorCounter.child(visitorFP).transaction(function(counter) {
    return (counter || 0) + 1;
  });

  io10blogVisitorCounter.child(visitorFP).on("value", function(data) {
    count_value = data.val();
    if (count_value > 1) {
      //这是你第n次访问本站啦
      if ($("#welcome_counter").length > 0) {
        $("#welcome_counter").html("这是你第&nbsp;" + count_value + "&nbsp;次访问本站啦");
      }
    } else {
      //欢迎你第一次访问本站
      if ($("#welcome_counter").length > 0) {
        $("#welcome_counter").html("欢迎你第一次访问本站");
      }
    }
  });
};

var disableVisitorCounter = function(){
  var visitorFP = canvasFP.getFP();
  io10blogVisitorCounter.child(visitorFP).off("value");
};

showVisitorCounter();
