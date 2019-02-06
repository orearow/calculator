function calculator(clicked) {
    document.getElementById("answer").style.color = "black";
    var answerValue = document.getElementById("answer").textContent;
    if( (answerValue === "0" || answerValue ==="Error") && clicked!== "C") {
        document.getElementById("answer").textContent= clicked;
    }
    else{

        if(clicked !== "=" && clicked !== "C"){
            answerValue = document.getElementById("answer").textContent+clicked;
            document.getElementById("answer").textContent= answerValue;

        }
        if(clicked ==="C"){
            console.error("we are in here")
            if(!answerValue) document.getElementById("answer").textContent = "";
            document.getElementById("answer").textContent = answerValue.substring(0, answerValue.length - 1); // "12345.0"

        }

        if(clicked ==="="){

            try {
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