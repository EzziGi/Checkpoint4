b=false
i=false
u=false
function bold() {
    if(b==false){
        document.getElementById("text").style.fontWeight = "bold";
        console.log(b);
        b=true ;}
    else if(b==true){
        document.getElementById("text").style.fontWeight = "normal";
        console.log(b);
        b=false ;} }
function italic() {
    if(i==false){
        document.getElementById("text").style.fontStyle = "italic";
        console.log(i);
        i=true; }
    else if(i==true) {
        document.getElementById("text").style.fontStyle = "normal";
        console.log(i);
        i=false } }
function underlined() {
    if(u==false) {
        document.getElementById("text").style.textDecoration = "underline";
        console.log(u);
        u=true }
    else if(u==true) {
        document.getElementById("text").style.textDecoration = "none";
        console.log(u);
        u=false } }
function changeFont(font) {
        document.getElementById("text").style.fontFamily = font.value; }
function changeSize(font) {
        document.getElementById("text").style.fontSize = font.value; } 