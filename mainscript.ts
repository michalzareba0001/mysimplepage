

window.addEventListener('load', () => {
    playTitle();
    fillProc();
    console.log('działam');
});

let playTitle = () => {
    const my = document.getElementById('my');
    const simple = document.getElementById('simple');
    const portfolio = document.getElementById('portfolio');
    const page = document.getElementById('page');
    const byMichal =document.querySelector('.byMichal');

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

                setTimeout( () => {
                byMichal.classList.add('titleduoAnim');
                }, 2000);
      
}

let fillProc = () => {
    const htmlLevel = 90;
    const cssLevel = 90;
    const javascriptLevel = 50;
    const angularLevel = 3;
    const nodeLevel = 10;

    document.querySelectorAll('.proc')[0].innerHTML= `${htmlLevel}%`;
    document.querySelectorAll('.proc')[1].innerHTML= `${cssLevel}%`
    document.querySelectorAll('.proc')[2].innerHTML= `${javascriptLevel}%`
    document.querySelectorAll('.proc')[3].innerHTML= `${angularLevel}%`
    document.querySelectorAll('.proc')[4].innerHTML= `${nodeLevel}%`
   
    document.querySelector('.progresbarHTML')[0].style.width = htmlLevel + '%';
}




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