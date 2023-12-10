let theme= document.querySelector("mode");
let currMode= "light";

// if currMode is light then change into dark
//if currMode is dark then change into light

 mode.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";

        console.log("dark");
        document.querySelector('body').style.backgroundColor="Black";


    }

    else{

        currMode="light";
        console.log("light");
        document.querySelector("body").style.backgroundColor="white";



    }

 });