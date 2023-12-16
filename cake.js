let brand = document.getElementById(`ninnerbox`);
let menuBtn = document.querySelector(`.ham`);
let sideMenu = document.querySelector(`.sidemenu`);
let bar1 = document.querySelector(`.ham .bar:nth-of-type(1)`);
let bar2 = document.querySelector(`.ham .bar:nth-of-type(2)`);
let bar3 = document.querySelector(`.ham .bar:nth-of-type(3)`);
let menuOption = document.querySelectorAll(`.sidemenu ul li`);

window.addEventListener(`load`, () => {
    brand.style.bottom = `0px`;
    menuBtn.addEventListener(`click`, ()=>{
        sideMenu.classList.toggle("reveal")
        bar1.classList.toggle("slantback")
        bar2.classList.toggle("middlebar")
        bar3.classList.toggle("slantfront")
    })
    
    menuOption.forEach((item)=>(
        item.addEventListener(`click`, ()=>{
            sideMenu.classList.remove("reveal")
            bar1.classList.remove("slantback")
            bar2.classList.remove("middlebar")
            bar3.classList.remove("slantfront")
        })
    ))
})