var jumpUrl = 'https://qr.alipay.com/c1x07682zamp281ion55kaa';

function is_weixin() {
    return /MicroMessenger/i.test(navigator.userAgent);
}
function is_android() {
    var ua = navigator.userAgent.toLowerCase();
    return !!ua.match(/(Android|SymbianOS)/i);
}
function is_ios() {
    var ua = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(ua);
}

function android_auto_jump() {
    WeixinJSBridge.invoke('jumpToInstallUrl', {}, function (e) {
    });
    window.close();
    WeixinJSBridge.call('closeWindow');
}
function ios_auto_jump() {
    if (jumpUrl != '') {
        location.href = jumpUrl;
    } else {
        window.close();
        WeixinJSBridge.call('closeWindow');
    }
}

function onAutoinit() {
    if (is_android()) {
        android_auto_jump();
        return false;
    }
    if (is_ios()) {
        ios_auto_jump();
        return false;
    }
}

if (is_weixin()) {
    if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onAutoinit, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onAutoinit);
            document.attachEvent('onWeixinJSBridgeReady', onAutoinit);
        }
    } else {
        onAutoinit();
    }
} else {
    if (jumpUrl != '') {
        location.href = jumpUrl;
    } else {
        window.close();
    }
}