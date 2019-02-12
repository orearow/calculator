var shouldClear = false;

function backgroundColor(color){
    document.getElementById("calcBody").style.backgroundColor = color;

}

function calculator(clicked) {
    var answerValue = document.getElementById("answer").textContent;
    console.error(shouldClear)

    // kinda dumb code, used to clear the calculator after every new expression
    if(shouldClear && !isNaN(clicked)){
        document.getElementById("toptext").textContent= "Answer = " + answerValue  ;
        document.getElementById("answer").textContent= "";
        shouldClear = false;
    }
    if(shouldClear && isNaN(clicked)){
        document.getElementById("toptext").textContent= "Answer = " + answerValue  ;
        shouldClear = false;
    }
    else{
        shouldClear = false;
    }

    document.getElementById("answer").style.color = "black";
    if( (answerValue === "0" || answerValue ==="Error") && clicked!== "C") {
        document.getElementById("answer").textContent= clicked;
    }
    else{

        if(clicked !== "=" && clicked !== "C"){
            answerValue = document.getElementById("answer").textContent+clicked;
            document.getElementById("answer").textContent= answerValue;

        }
        if(clicked ==="C"){
            if(!answerValue) document.getElementById("answer").textContent = "";
            if(answerValue==="Error") document.getElementById("answer").textContent = "";

            else{
                document.getElementById("answer").textContent = answerValue.substring(0, answerValue.length - 1); // "12345.0"

            }

        }

        if(clicked ==="="){

            try {
                console.error("equal sign just clicked");
                console.error(!isNaN(clicked))
                shouldClear = true;

                document.getElementById("toptext").textContent= answerValue + " =" ;

                answerValue = eval(answerValue);
                document.getElementById("answer").textContent= answerValue ;

            }
            catch(err) {
                document.getElementById("answer").style.color = "red";
                document.getElementById("answer").textContent= "Error" ;
                document.getElementById("toptext").textContent= answerValue + " = " +  "Error";

            }

        }

    }

}
