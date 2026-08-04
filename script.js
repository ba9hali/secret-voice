const lines = [

"Initializing...",

"Face Recognition... ✔ Match Found",

"Voice Recognition... ✔ Match Found",

"Human Verification... ✔ Human Confirmed",

"Decrypting Audio..."

];


let index = 0;



const line = document.getElementById("line");



function typeText(text, callback){


let i=0;


line.innerHTML="";


let timer=setInterval(()=>{


line.innerHTML += text[i];


i++;


if(i >= text.length){


clearInterval(timer);


setTimeout(callback,2000);


}


},50);



}




function startBoot(){


if(index < lines.length){


typeText(lines[index],()=>{


index++;

startBoot();


});


}


else{


setTimeout(()=>{


document.getElementById("boot").style.display="none";


document.getElementById("playBtn").style.display="inline-block";


},1000);



}



}



startBoot();





const btn=document.getElementById("playBtn");

const audio=document.getElementById("voice");



btn.onclick=function(){


btn.style.display="none";


audio.play();


};






audio.onended=function(){



document.getElementById("ending").style.display="block";



let messages=[

"Deleting cache...",

"Removing traces...",

"Wiping memory..."

];



let m=0;



let msgInterval=setInterval(()=>{


document.getElementById("deleteText").innerHTML=messages[m];


m++;


if(m>=messages.length){


clearInterval(msgInterval);


startLoading();


}


},1500);



};





function startLoading(){


let value=0;


let progress=document.getElementById("progress");

let percent=document.getElementById("percent");



let timer=setInterval(()=>{


value++;


progress.style.width=value+"%";

percent.innerHTML=value+"%";



if(value>=100){


clearInterval(timer);



setTimeout(()=>{


document.getElementById("makima").style.display="block";



setTimeout(()=>{


location.reload();


},1500);



},500);



}



},35);



} 
