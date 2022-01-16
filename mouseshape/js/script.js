var $ = document;
var body = $.getElementsByTagName("body")[0];
$.onmousemove = circleAnimation;
var i = "0";
function circleAnimation(event){
    var circle = $.createElement("div")
    var colors = ["blue", "grean", "red", "yellow", "brown"]
    var maincolor = colors[Math.floor(Math.random() * colors.length)]
    if (i%5 ===0){
        circle.setAttribute("class", "circle i5")
    } else if (i%4 ===0){
        circle.setAttribute("class", "circle i4")
    } else if (i%3 ===0){
        circle.setAttribute("class", "circle i3")
        } else if (i%2 ===0){
        circle.setAttribute("class", "circle i2")
    } else if (i%1 ===0) {
        circle.setAttribute("class", "circle i1")
    }
    // circle.setAttribute("class", "circle")
    circle.setAttribute("id", i)
    circle.style.left = event.clientX + "px"
    circle.style.top = event.clientY + "px"
    circle.style.transition = "all .5s ease-in "
    $.body.appendChild(circle)
    circle.style.left = circle.offsetLeft - 20 + "px"
    circle.style.top = event.offsetTop - 20 + "px"
    circle.style.borderColor = maincolor
    circle.style.width = "20px"
    circle.style.height = "20px"
    circle.style.borderWidth = "8px"
    circle.style.opacity = "0"
    if (i>=20){
        var child = $.getElementById(i-20);
        body.removeChild(child);
    }
    i++;
}