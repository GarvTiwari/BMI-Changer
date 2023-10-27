const form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt( document.getElementById("weight").value);
    const result = document.getElementById("result")
    if(height<0 || weight<0 || height === '' || weight === ''){
        result.innerHTML = "Please enter a valid value";
    }
    else{
       const bmi = (weight/(height*height)*703).toFixed(2);
       result.innerHTML = bmi;
    }
},false)