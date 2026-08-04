const texts = [
"Initializing...",
"Face Recognition... ✔ Match Found",
"Voice Recognition... ✔ Match Found",
"Human Verification... ✔ Human Confirmed",
"Decrypting Audio... ██████████ 100%"
];


let index = 0;


function typeLine(){

    if(index < texts.length){

        let id="line"+(index+1);
        let element=document.getElementById(id);

        element.innerHTML=texts[index];

        element.style.opacity=1;

        index++;

        setTimeout(typeLine,1000);

    }

    else {

        setTimeout(()=>{

            document.getElementById("boot").style.display="none";

            document.getElementById("playBtn").style.display="inline-block";

        },1000);

    }

}



typeLine();



const btn=document.getElementById("playBtn");
const audio=document.getElementById("voice");


btn.onclick=function(){

    btn.style.display="none";

    audio.play();

};



audio.onended=function(){


    document.getElementById("ending").style.display="block";


    setTimeout(()=>{


        document.getElementById("makima").style.display="block";


        setTimeout(()=>{

            location.reload();

        },1000);


    },2000);


};
