 var count=0;
document.querySelector("#increase").addEventListener("click" ,()=>{
    changecount(1);
});
document.querySelector("#decrease").addEventListener("click" ,()=>{
    changecount(-1);
});
document.querySelector("#increaseby2").addEventListener("click" ,()=>{
    changecount(2);
});

changecount=(Number)=>{
    count+=Number;
    document.querySelector("#count").textContent=count;
}