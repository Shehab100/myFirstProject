$("#options-container i").click(function() {
    $(".option").toggle();
    
})

var lis = $(".option ul li")

lis.eq(0).css("backgroundColor","gray")
lis.eq(1).css("backgroundColor","#008")
lis.eq(2).css("backgroundColor","#000")
lis.eq(3).css("backgroundColor","#F00")
lis.eq(4).css("backgroundColor","#080")


lis.click(function() {
    var bg = $(this).css("backgroundColor")
    
    $("body").css("backgroundColor",bg);
})














/*
var canvas = document.getElementById("c");

var h = window.innerHeight
var w = window.innerWidth
canvas.width = w;
canvas.height = h;
var ctx = canvas.getContext("2d");

var circleCont = [];

for (var i = 0; i < 400; i++) {
    var circle = {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 4 + 1
    }
    circleCont.push(circle);
}

function drawCircle() {

    ctx.clearRect(0, 0, w, h)
    ctx.beginPath()
    for (var i = 0; i < circleCont.length; i++) {
        var c = circleCont[i];
        ctx.moveTo(c.x, c.y);
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    }

    ctx.fillStyle = "#fff";
    ctx.fill()

    moveCircle();

}


function moveCircle() {
    for (var i = 0; i < circleCont.length; i++) {
        var c = circleCont[i];
        c.y += 1;
        c.x += 1;

        if (c.y > h) {
            circleCont[i].y = -20;
        }
   
    if (c.x > w) {
        circleCont[i].x = -20;
    }
         }
}
setInterval(drawCircle, 10)


*/






/*

var username = document.getElementById("uname");
var userphone = document.getElementById("uphone");
var usermail = document.getElementById("umail");
var userlocation = document.getElementById("ulocation");

var allData=[];


function validName(){
    var r = /^[A-Z]/;
    console.log(r.test(username.value))
}
function validphone(){
    var p = /^(010|011|012|015)/
    console.log(p.test(userphone.value))
    
}

function addRecord(){
    var person = {name:username.value,phone:userphone.value,mail:usermail.value,location:userlocation.value,};
    allData.push(person);
    displayData();
    validName();
    validphone();
    
}

function displayData()
{
    var rows = "";
    for(var i =0; i<allData.length;i++){
        rows += "<tr><td>"+allData[i].name+"</td><td>"+allData[i].phone+"</td><td>"+allData[i].mail+"</td><td>"+allData[i].location+"</td></tr>"
    }
    document.getElementById("result").innerHTML=rows;
}
















function toggleForm() {
    var div = document.getElementById("form-container");
    var btn = document.getElementById("btntoggle");

    if (div.style.display == "none") {
        div.style.display = "block"
        btn.innerHTML = 'hide  <i class="fas fa-arrow-circle-up"></i>'
    } else {
        div.style.display = "none"
        btn.innerHTML = 'show  <i class="fas fa-arrow-circle-up"></i>'
    }
}









*/