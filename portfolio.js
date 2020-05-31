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

function home_underline() {
    document.getElementById("home").setAttribute("style", "text-decoration: underline; text-decoration-style: double;");
    document.getElementById("about").setAttribute("style", "text-decoration: none;");
    document.getElementById("projects").setAttribute("style", "text-decoration: none;");
    document.getElementById("resume").setAttribute("style", "text-decoration: none;");

}

function about_underline() {
    document.getElementById("home").setAttribute("style", "text-decoration: none;");
    document.getElementById("about").setAttribute("style", "text-decoration: underline; text-decoration-style: double;");
    document.getElementById("projects").setAttribute("style", "text-decoration: none;");
    document.getElementById("resume").setAttribute("style", "text-decoration: none;");
}

function projects_underline() {
    document.getElementById("home").setAttribute("style", "text-decoration: none;");
    document.getElementById("about").setAttribute("style", "text-decoration: none;");
    document.getElementById("projects").setAttribute("style", "text-decoration: underline; text-decoration-style: double;");
    document.getElementById("resume").setAttribute("style", "text-decoration: none;");
}

function resume_underline() {
    document.getElementById("home").setAttribute("style", "text-decoration: none;");
    document.getElementById("about").setAttribute("style", "text-decoration: none;");
    document.getElementById("projects").setAttribute("style", "text-decoration: none;");
    document.getElementById("resume").setAttribute("style", "text-decoration: underline; text-decoration-style: double;");
}

document.onload = typeWriter();