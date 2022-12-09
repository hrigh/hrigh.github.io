//Change Image 
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.svg"){
        myImage.setAttribute("src", "images/firefox2.png");
    }
    else{
        myImage.setAttribute("src", "images/firefox-icon.svg");
    }
};

//The new button and the heading storing each inside variables.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//Add the following function to set the personalized greeting.
function  setUserName(){
    const myName = prompt("Please Enter Your Name.");
    if (!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is Cool, ${myName}`;
    }
}

//Add the following condition block. We could call this initialization code, as it structures the app when it first loads.
if (!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

//onclick event handler (below) on the button. When clicked, setUserName() runs. This allows the user to enter a different name by pressing the button.
myButton.onclick = () => {
    setUserName()
};

