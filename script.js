/* ===========================
   LETTER PAGE
=========================== */

const typedText = document.getElementById("typed-text");

if (typedText) {

const letter = `

since the day i met you, you've always seemed like the most perfect, kind, and sweetest soul.

the joy you bring to me, i can't even begin to describe. every moment i spend with you feels like a piece of heaven.

you're my heaven, abud.

I KNOW i've said this a lot of times, but i truly am grateful to have you in my life. you are the best person i know, and i don't want to spend my life with anyone other than you.

i love you so much, with all my heart. ♡

`;

let i = 0;

function typeLetter(){

    if(i < letter.length){

        typedText.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeLetter,30);

    }

    else{

        document.getElementById("signature").innerHTML =
        "love,<br><strong>yashi ♡</strong>";

        document.getElementById("continue-btn").style.display="block";

    }

}

window.onload = typeLetter;

}


/* ===========================
   PAGE 4
=========================== */

const line1 = document.getElementById("line1");

if(line1){

const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const choices = document.getElementById("choices");

const secondPart = document.getElementById("second-part");

window.onload = function(){

    setTimeout(()=>{

        line1.classList.remove("hidden");

    },500);

    setTimeout(()=>{

        line1.classList.add("hidden");

        line2.classList.remove("hidden");

    },2500);

    setTimeout(()=>{

        line3.classList.remove("hidden");

    },3800);

    setTimeout(()=>{

        choices.classList.remove("hidden");

    },4700);

}

}

function continueStory(){

    const choices = document.getElementById("choices");

    choices.style.opacity = "0";

    setTimeout(()=>{

        choices.style.display = "none";

        document.getElementById("second-part").classList.remove("hidden");

        const line4 = document.getElementById("line4");
        const line5 = document.getElementById("line5");
        const line6 = document.getElementById("line6");
        const button = document.getElementById("question-continue");

        line4.style.display="none";
        line5.style.display="none";
        line6.style.display="none";
        button.style.display="none";

        setTimeout(()=>{

            line4.style.display="block";
            line4.classList.add("fade");

        },300);

        setTimeout(()=>{

            line5.style.display="block";
            line5.classList.add("fade");

        },1400);

        setTimeout(()=>{

            line6.style.display="block";
            line6.classList.add("fade");

        },2400);

        setTimeout(()=>{

            button.style.display="block";
            button.classList.add("fade");

        },3800);

    },500);

}