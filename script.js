const texts = [
    "Initializing...",
    "Face Recognition...",
    "✔ Match Found",
    "Voice Recognition...",
    "✔ Match Found",
    "Human Verification...",
    "✔ Human Confirmed",
    "Decrypting Audio..."
];


let index = 0;

const boot = document.getElementById("boot");
const button = document.getElementById("playBtn");
const audio = document.getElementById("voice");


function typeText(text, callback){

    let i = 0;

    let interval = setInterval(()=>{

        document.getElementById("line").innerHTML += text[i];

        i++;


        if(i >= text.length){

            clearInterval(interval);


            setTimeout(()=>{

                document.getElementById("line").innerHTML = "";

                callback();

            },2000);

        }


    },80);

}




function start(){

    if(index < texts.length){


        typeText(texts[index],()=>{

            index++;

            start();

        });


    }

    else{


        setTimeout(()=>{

            boot.style.display="none";

            button.style.display="inline-block";


        },1000);


    }

}


start();





button.onclick=function(){

    button.style.display="none";

    audio.play();

};





audio.onended=function(){


    document.getElementById("ending").style.display="block";


    let progress = 0;


    let bar = document.getElementById("progress");

    let percent = document.getElementById("percent");



    let timer=setInterval(()=>{


        progress++;


        bar.style.width = progress+"%";

        percent.innerHTML = progress+"%";



        if(progress >=100){


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
