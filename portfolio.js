var i=0;
var introtxt = "Hi there, my name is Rachel McCardell. I am a computer science student at Northwestern University in Evanston, IL.";
var speed = 50;

function typeWriter() {
    if (i < introtxt.length) {
        document.getElementById("intro-statement").innerHTML += introtxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.onload = typeWriter();