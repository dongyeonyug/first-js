// document.title="hi from js!";

// const title=document.getElementById("title");

// title.innerText="gottcha!";

// console.dir(title)
// console.log(title.id);
// console.log(title.className);


///////////////////////////////////
const h1=document.querySelector("#title:first-child h1");



// function handleTitleClick()
// {
//     const currentColor=h1.style.color;
//     let newColor;
//     if(currentColor==="blue"){
//         newColor="green"
//     }

//     else {
//         newColor="blue";
//     }
//     h1.style.color=newColor;
// }


function handleTitleClick()
{
 
    const ActiveClass="active"
 
    h1.classList.toggle(ActiveClass);

    //==
    // if (h1.classList.contains(ActiveClass)){
    //     h1.classList.remove(ActiveClass)
    // }
    // else{
    //     h1.classList.add(ActiveClass);
    // }

}

function handleMouseEnter(){

    h1.innerText="mouse is here!";
}

function handleMouseLeave(){

    h1.innerText="mouse is gone!";
}

function handleWindowReszie(){

    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){

    alert("copied!");
}

function handleWindowOffline(){

    alert("No Wifi");
}

function handleWindowOnline(){

    alert("Good Wifi");
}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize",handleWindowReszie);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);


// hellos.innerText="gottcha!";

// console.dir(title)
// console.log(title.id);
// console.log(title.className);