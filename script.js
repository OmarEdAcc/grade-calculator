// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", calculate);


function calculate () {
    // input 
    let num1 = +document.getElementById("1").value;
    let num2 = +document.getElementById("2").value;
    let num3 = +document.getElementById("3").value;
    let num4 = +document.getElementById("4").value;
    let num5 = +document.getElementById("5").value;
    let show = document.getElementById("span");
    // process
    let total = (num1+num2+num3+num4+num5) / 5;
    
    // output
show.innerHTML = total
}

