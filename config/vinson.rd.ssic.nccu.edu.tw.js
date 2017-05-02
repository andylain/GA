/**
 * 適用網頁：http://vinson.rd.ssic.nccu.edu.tw/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-89833109-4";

var _local_debug = false;

if (_local_debug === true) {
    CSS_URL = "https://localhost/GA-project/config/vinson.rd.ssic.nccu.edu.tw.css";
    LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
    console.log("[LOCAL TEST MODE]");
}
else {
    CSS_URL = "https://billxu0521.github.io/GA-project/config/vinson.rd.ssic.nccu.edu.tw.css";
    LIB_URL = "https://billxu0521.github.io/GA-project/ga_inject_lib.js";
}

$(document).ready(function () {
            $.getJSON('http://ipinfo.io', function(data){
    console.log(data);
});
        });
var exec = function () {
    
};

// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});