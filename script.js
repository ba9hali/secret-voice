const texts = [

"Initializing...",

"Face Recognition... ✔ Match Found",

"Voice Recognition... ✔ Match Found",

"Human Verification... ✔ Human Confirmed",

"Decrypting Audio...",

];


let index = 0;


const line = document.getElementById("line");


function typeText(text, done){


let i = 0;


line.innerHTML="";


let timer=setInterval(()=>{


line.innerHTML += text[i];


i++;


if(i >= text.length){


clearInterval(timer);


setTimeout(done,2000);


}


},80);



}




function startBoot(){


if(index < texts.length){


typeText(texts[index],()=>{


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





const button=document.getElementById("playBtn");

const audio=document.getElementById("voice");



button.onclick=function(){


button.style.display="none";


audio.play();


};






audio.onended=function(){


document.getElementById("ending").style.display="block";


let progress=0;


let bar=document.getElementById("progress");

let percent=document.getElementById("percent");



let timer=setInterval(()=>{


progress++;


bar.style.width=progress+"%";


percent.innerHTML=progress+"%";



if(progress>=100){


clearInterval(timer);



setTimeout(()=>{


document.getElementById("makima").style.display="block";



setTimeout(()=>{


location.reload();


},1000);



},500);



}



},40);



};
