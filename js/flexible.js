!function(e, t) {
    var tmp = true;
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            tmp = true;
        } else {
            tmp = false;
        }
    }
    browserRedirect();
    function n() {
        t.body ? t.body.style.fontSize = 12 * o + "px" : t.addEventListener("DOMContentLoaded", n)
    }
    function d() {
        browserRedirect();
        if(tmp) {
            var e = i.clientWidth / 10;
            i.style.fontSize = e + "px"
        }else {
            i.style.fontSize = 42 + "px"
        }
    }
    var i = t.documentElement
        , o = e.devicePixelRatio || 1;
    if (n(),
        d(),
        e.addEventListener("resize", d),
        e.addEventListener("pageshow", function(e) {
            e.persisted && d()
        }),
    o >= 2) {
        var a = t.createElement("body")
            , s = t.createElement("div");
        s.style.border = ".5px solid transparent",
            a.appendChild(s),
            i.appendChild(a),
        1 === s.offsetHeight && i.classList.add("hairlines"),
            i.removeChild(a)
    }
    window.tmp = tmp;
}(window, document);