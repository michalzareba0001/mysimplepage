const htmlLevel = 90;
const cssLevel = 90;
const javascriptLevel = 50;
const angularLevel = 3;
const nodeLevel = 10;



let playTitle = () => {
    const my = document.getElementById('my');
    const simple = document.getElementById('simple');
    const portfolio = document.getElementById('portfolio');
    const page = document.getElementById('page');

    my.classList.add('titleoneAnim');
    setTimeout( () => {
    simple.classList.add('titleoneAnim');
    }, 1000);
        setTimeout( () => {

        portfolio.classList.add('titleoneAnim');
        }, 2000);

            setTimeout( () => {
            page.classList.add('titleoneAnim');
            }, 3000);
    
}


window.addEventListener('load', () => {
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