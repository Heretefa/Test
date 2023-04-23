btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);

function f_out (){
    console.log(f1.checed);
    console.log(f2.checed);
    console.log(f3.checed);

    if (f1.checed){
        right.classList.remove("hidden");
        wrong_div.classList.add("hidden");
    }else{
        right.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    } 

}

function f_out1(){
    answer.classList.toggle("hidden");
    butn1.classList.toggle("opend");
}