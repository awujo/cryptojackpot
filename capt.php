<!DOCTYPE html>
<html>
<head>
    <script>
        var page_id = 1;
        </script>
    <title>Captcha Verification | Crypto jackpot | Win cryptocurrency</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
 <link rel="stylesheet" type="text/css" href="styles.css">
 <style>
     @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
 background-color: #232331;
 font-family: 'Roboto', sans-serif;
}
#captchaBackground {
 height: 220px;
 width: 250px;
 background-color: #2d3748;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
}
#captchaHeading {
 color: white;
}
#captcha {
 height: 80%;
 width: 80%;
 font-size: 30px;
 letter-spacing: 3px;
 margin: auto;
 display: block;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
}
.center {
 display: flex;
 flex-direction: column;
 align-items: center;
}
#submitButton {
 margin-top: 2em;
 margin-bottom: 2em;
 background-color: #08e5ff;
 border: 0px;
 font-weight: bold;
}
#refreshButton {
 background-color: #08e5ff;
 border: 0px;
 font-weight: bold;
}
#textBox {
 height: 25px;
}
.incorrectCaptcha {
 color: #FF0000;
}
.correctCaptcha {
 color: #7FFF00;
}
.yaa {
    text-align: center;
    color: white;
    font-size: medium;
}
 </style>
</head>
<body>
 <div class="center">
     <div><img src="catch.jpg"  ></div>
 <h1 id="captchaHeading">Verify I Am Human</h1>
 <div id="captchaBackground">
 <canvas id="captcha">captcha text</canvas>
 <input id="textBox" type="text" placeholder="Input the correct text" name="text">
 <div id="buttons">
 <input id="submitButton" value="Verify" type="submit">
 <button id="refreshButton" type="submit">Refresh</button>
 </div>
 <span id="output"></span>
 </div>
 </div>
 <script>
     // document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');

// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 7; i++) {
 emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);

// This event listener is stimulated whenever the user press the "Enter" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
userText.addEventListener('keyup', function(e) {
 // Key Code Value of "Enter" Button is 13
 if (e.keyCode === 13) {
 if (userText.value === c) {
 output.classList.add("correctCaptcha");
 output.innerHTML = "Correct!";
 } else {
 output.classList.add("incorrectCaptcha");
 output.innerHTML = "Incorrect, please try again";
 }
 }
});
// This event listener is stimulated whenever the user clicks the "Submit" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
submitButton.addEventListener('click', function() {
 if (userText.value === c) {
 output.classList.add("correctCaptcha");
 output.innerHTML = "Correct!";
 onclick = function() {
     location.href = "vliming.php";
 }
 } else {
 output.classList.add("incorrectCaptcha");
 output.innerHTML = "Incorrect, please try again";
 }
});
// This event listener is stimulated whenever the user press the "Refresh" button
// A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
refreshButton.addEventListener('click', function() {
 userText.value = "";
 let refreshArr = [];
 for (let j = 1; j <= 7; j++) {
 refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
 }
 ctx.clearRect(0, 0, captchaText.width, captchaText.height);
 c = refreshArr.join('');
 ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
 output.innerHTML = "";
});
 </script>
 <script src="script.js"></script>
</body>
</html>