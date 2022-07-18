var htmlLevel = 90;
var cssLevel = 90;
var javascriptLevel = 50;
var angularLevel = 3;
var nodeLevel = 10;
var playTitle = function () {
    var my = document.getElementById('my');
    var simple = document.getElementById('simple');
    var portfolio = document.getElementById('portfolio');
    var page = document.getElementById('page');
    my.classList.add('titleoneAnim');
    setTimeout(function () {
        simple.classList.add('titleoneAnim');
    }, 1000);
    setTimeout(function () {
        portfolio.classList.add('titleoneAnim');
    }, 2000);
    setTimeout(function () {
        page.classList.add('titleoneAnim');
    }, 3000);
};
window.addEventListener('load', function () {
    playTitle();
    console.log('działam');
});
/*
const procl = document.getElementsByClassName('proc').length-1;
var proc0 = 0;


let skillproc = () => {
    for (let index = 0; index < procl; index++) {
        document.getElementsByClassName('proc')[index];
        
    }

    proc0.innerHTML(htmlLevel + 'px');
    proc1.innerHTML(cssLevel + 'px');
}
*/ 
