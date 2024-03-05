
function firstJava() {
    document.getElementById('demo').innerHTML = 'Hello'+'<br>'+ 'Javascript';
}
function SecondEx() {
    document.getElementById('bulb').src = 'bulbon.jpg';
}
function SecondEx1() {
    document.getElementById('bulb').src = 'bulboff.png';
}
function fourthEx() {
    let text = document.getElementById("rep").innerHTML;
    document.getElementById("rep").innerHTML =
        text.replace("Microsoft", "W3Schools");
}
function fourthEx1() {
    let text = document.getElementById("rep1").innerHTML;
    document.getElementById("rep1").innerHTML =
        text.toUpperCase();
}

function myArray() {
    const a = ["Harshit", "Arpit", "Suresh", "Neetu", "Sanjeev"];
    let k = a.length;
    let text = "<ul>";
    for (i = 0; i < k; i++) {
        text += "<li>" + a[i] + "</li>";

    }
    text += "</ul>";
    document.getElementById("arrays").innerHTML = text;
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("arrays1").innerHTML = fruits.join(" ! ");
    fruits.pop();
    document.getElementById("arrays2").innerHTML = fruits.join(" ^ ");
    fruits.push("kiwi");
    fruits.push("Grapes");
    document.getElementById("arrays3").innerHTML = fruits.join(" * ");
    fruits.sort();
    document.getElementById("arrays4").innerHTML = fruits.join(" , ");
    fruits.reverse();
    document.getElementById("arrays5").innerHTML = fruits.join(" % ");
}

function myDay() {
    let day;
    let text;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    if (day) {
        document.getElementById("day").innerHTML = "<b>" + "Today is : " + "</b>" + day;
    } else {
        document.getElementById("day").innerHTML = "<b>" + text + "</b>";
    }
}

function regEx() {
    let text = document.getElementById("text").innerHTML;
    const pattern = /Regular/;
    document.getElementById('regex').innerHTML = pattern.test(text);

}

function error() {
    const message = document.getElementById("errors");
    message.innerHTML = "";
    let x = document.getElementById("number").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "<b>" + "Input is " + err + "</b>";
    }
}

function myApi() {
    var x = document.getElementById("myapi");
    try {
        navigator.geolocation.getCurrentPosition(showPosition);

    } catch (error) {
        x.innerHTML = err;
    }

    function showPosition(position) {
        x.innerHTML = "Lattitude : " + position.coords.latitude + "<br>" +
            "Longitude : " + position.coords.longitude;
    }
}