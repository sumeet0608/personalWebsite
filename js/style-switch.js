/* toggler */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler"); 
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide toggler on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        document.querySelector(".style-switcher").classList.remove("open")
})

/*=================theme colors = ==== ===*/
const alternateStyles= document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

/*=================dark theme = ==== ===*/
const darkTheme = document.querySelector(".day-night");
darkTheme.addEventListener("click", () => {
    darkTheme.querySelector("i").classList.toggle("fa-sun");
    darkTheme.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        darkTheme.querySelector("i").classList.add("fa-sun");
   
    }
    else{
        
        darkTheme.querySelector("i").classList.add("fa-moon");
    }
})
