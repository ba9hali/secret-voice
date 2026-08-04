const texts = [
"Initializing...",
"Face Recognition... ✔ Match Found",
"Voice Recognition... ✔ Match Found",
"Human Verification... ✔ Human Confirmed",
"Decrypting Audio..."
];


let index = 0;


function typeLine(){

    if(index < texts.length){

        let id = "line" + (index + 1);
        let element = document.getElementById(id);

        let text = texts[index];
        let char = 0;


        let typing = setInterval(()=>{

            element.innerHTML += text[char];

            char++;


            if(char >= text.length){

                clearInterval(typing);

                index++;

                // مکث ۲ ثانیه بعد از هر خط
                setTimeout(typeLine,2000);

            }


        },70);


    }

    else {

        setTimeout(()=>{

            document.getElementById("boot").style.display="none";

            document.getElementById("playBtn").style.display="inline-block";

        },1000);

    }

}


typeLine();




const btn = document.getElementById("playBtn");
const audio = document.getElementById("voice");


btn.onclick=function(){

    btn.style.display="none";

    audio.play();

};





audio.onended=function(){


    document.getElementById("ending").style.display="block";


    let loading = document.getElementById("loading");


    loading.innerHTML = "0%";


    let percent = 0;


    let timer = setInterval(()=>{


        percent++;


        loading.innerHTML = "█".repeat(Math.floor(percent/10)) 
        + "░".repeat(10-Math.floor(percent/10))
        + " " + percent + "%";



        if(percent >= 100){


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
