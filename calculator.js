let text = document.getElementById("inputtext");

let calculate = (number) =>{
    text.value += number;
}

let result = () =>{
    try{
        text.value = eval(text.value)
    }
    catch(err){
        alert("Enter a valid input!!")
    }
}

//traditional way of using function
function clr(){
    text.value = "";
}

function del(){
    text.value = text.value.slice(0,-1);
    console.log("test=",text.value);
}