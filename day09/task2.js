var canvas= document.getElementById('mycanvas')
var context = canvas.getContext("2d")
var color = document.getElementById("colorinp")
   var z=1;
   function drawRandomCircle() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 10; 

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle = color.value;
    context.stroke();
    context.closePath();
}
function count(){
    z=0;
}
function changeandgenreateofcircle(){
    context.clearRect(0, 0, canvas.width, canvas.height); 
    for (var i = 0; i < 15*z; i++) {
        drawRandomCircle();
    }
    console.log(z)

    z++;
}
function generateCrcles() {
    context.clearRect(0, 0, canvas.width, canvas.height); 
    for (var i = 0; i < 15*m; i++) {
        draewofthecircle();
        console.log(m);
    }
    m++;

}


// var canvas =document.getElementById("myCanvas");
// var context = canvas.getContext("2d")
// var col=document.getElementById("colorinp");
// var m= 1;

// function drawRandomCircle() {
//     const x = Math.random() * canvas.width;
//     const y = Math.random() * canvas.height;
//     const radius = 10; 

//     context.beginPath();
//     context.arc(x, y, radius, 0, Math.PI * 2);
//     context.strokeStyle = col.value;
//     context.stroke();
//     context.closePath();
// }




// function generateCircles() {
//     context.clearRect(0, 0, canvas.width, canvas.height); 
//     for (var i = 0; i < 15*m; i++) {
//         drawRandomCircle();
//         console.log(m);
//     }
//     m++;

// }
// function count(){
//     m=0;
// }