window.addEventListener('load', function () {
    playTitle();
    fillProc();
    console.log('działam');
});
var playTitle = function () {
    var my = document.getElementById('my');
    var simple = document.getElementById('simple');
    var portfolio = document.getElementById('portfolio');
    var page = document.getElementById('page');
    var byMichal = document.querySelector('.byMichal');
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
    setTimeout(function () {
        byMichal.classList.add('titleduoAnim');
    }, 2000);
};
var fillProc = function () {
    var htmlLevel = 90;
    var cssLevel = 90;
    var javascriptLevel = 50;
    var angularLevel = 3;
    var nodeLevel = 10;
    document.querySelectorAll('.proc')[0].innerHTML = htmlLevel + "%";
    document.querySelectorAll('.proc')[1].innerHTML = cssLevel + "%";
    document.querySelectorAll('.proc')[2].innerHTML = javascriptLevel + "%";
    document.querySelectorAll('.proc')[3].innerHTML = angularLevel + "%";
    document.querySelectorAll('.proc')[4].innerHTML = nodeLevel + "%";
    document.querySelector('.progresbarHTML')[0].style.width = htmlLevel + '%';
};
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
