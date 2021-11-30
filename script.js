var password="123";
var pwd=document.getElementById("password");
document.getElementById("newpassword").addEventListener('focus', function(){
    pwd=document.getElementById("newpassword");
});
document.getElementById("password").addEventListener('focus', function(){
    pwd=document.getElementById("password");
});
pwd.style.color="white";
pwd.style.letterSpacing = "5px";
function reset(){
    pwd.value = "";
}
function one(){
    pwd.value+='1';
}
function two(){
    pwd.value+='2';
}
function three(){
    pwd.value+='3';
}
function four(){
    pwd.value+='4';
}
function five(){
    pwd.value+='5';
}
function six(){
    pwd.value+='6';
}
function seven(){
    pwd.value+='7';
}
function eight(){
    pwd.value+='8';
}
function nine(){
    pwd.value+='9';
}
function hash(){
    pwd.value+='#';
}
function zero(){
    pwd.value+='0';
}
function astrick(){
    pwd.value+='*';
}
var count=3;
function submit(){
    console.log(pwd.value);
    if(pwd.value==password){
        alert("Welcome!");
        document.getElementsByClassName("header")[0].style.display="block";
        document.getElementsByClassName("alert")[0].style.display="none";
        document.getElementsByClassName("goback")[0].style.display="none";
        document.getElementsByClassName("changepwd")[0].style.display="block";
        
    }
    else{
        count--;
        if(count>0){
            alert("Password is wrong! Try again! You have "+count+" chances left!");
        }
        else{
            document.getElementsByClassName("header")[0].style.display="none";
            document.getElementsByClassName("alert")[0].style.display="block";
            document.getElementsByClassName("goback")[0].style.display="none";
            document.getElementsByClassName("changepwd")[0].style.display="none";
            //you have to give your own bot id and chat id which you created
            $.ajax("https://api.telegram.org/botbolt_id/sendMessage?chat_id=@chat_id&text=ALERT!%20Your%20doorlock%20password%20has%20been%20entered%20wrong%20more%20than%203%20times.%20Please%20check!").done(function (response) {
              console.log(response);
            }); 
        }
    }
}
function changepwd(){
    document.getElementsByClassName("header")[0].innerHTML="CHANGE PASSWORD";
    document.getElementsByClassName("submit-btn")[0].style.display="none";
    document.getElementsByClassName("submit-btn")[3].style.display="none";
    document.getElementsByClassName("alert")[0].style.display="none";
    document.getElementsByClassName("new-pwd")[0].style.display="block";
    document.getElementsByClassName("new-pwd")[1].style.display="block";
    document.getElementsByClassName("enter-pwd")[0].innerHTML = "Enter Old Password:";
    document.getElementsByClassName("goback")[0].style.display="block";
}
function goback(){
    document.getElementsByClassName("header")[0].innerHTML="DOORLOCK SYSTEM";
    document.getElementsByClassName("header")[0].style.display="block";
    document.getElementsByClassName("submit-btn")[0].style.display="block";
    document.getElementsByClassName("alert")[0].style.display="none";
    document.getElementsByClassName("submit-btn")[3].style.display="inline";
    document.getElementsByClassName("new-pwd")[0].style.display="none";
    document.getElementsByClassName("new-pwd")[1].style.display="none";
    document.getElementsByClassName("enter-pwd")[0].innerHTML = "Enter Password:";
    document.getElementsByClassName("changepwd")[0].style.display="block";
    document.getElementsByClassName("forgotpwd")[0].style.display="block";
    document.getElementsByClassName("goback")[0].style.display="none";
}
var otp=Math.floor(Math.random() * (9999 - 1000)) + 1000;

function forgotpwd(){
    document.getElementsByClassName("header")[0].innerHTML="FORGOT PASSWORD";
    document.getElementsByClassName("alert")[0].style.display="none";
    document.getElementsByClassName("submit-btn")[3].style.display="none";
    document.getElementsByClassName("new-pwd")[0].style.display="block";
    document.getElementsByClassName("new-pwd")[1].style.display="block";
    document.getElementsByClassName("enter-pwd")[0].innerHTML = "Enter OTP:";
    document.getElementsByClassName("goback")[0].style.display="block";
    document.getElementsByClassName("forgotpwd")[0].style.display="none";
    document.getElementsByClassName("new-pwd")[0].style.display="block";
    //you have to give your own bot id and chat id which you created
    $.ajax("https://api.telegram.org/botbot_id/sendMessage?chat_id=@chat_id&text=Here%20is%20your%20One%20Time%20Password%20for%20Doorlock%20System%20-%20"+otp+"%20.Please%20do%20not%20share%20this%20with%20anybody.%20This%20otp%20is%20valid%20for%203%20minutes.").done(function (response) {
        console.log(response);
    });
}
function newpwd(){
    if(document.getElementsByClassName("header")[0].innerHTML=="FORGOT PASSWORD"){
        var otp_from_user=document.getElementById("password").value;
        if(otp==otp_from_user){
            password=document.getElementById("newpassword").value;
            alert("Password changed!");
            //you have to give your own bot id and chat id which you created
            $.ajax("https://api.telegram.org/botbot_id/sendMessage?chat_id=@chat_id&text=PASSWORD%20CHANGED!%20Your%20doorlock%20password%20has%20been%20changed%20to%20"+password).done(function (response) {
                console.log(response);
            });
        }
        else alert("OTP is wrong!");
    }
    else{
        var old=document.getElementById("password").value;
        if(password==old){
            password=document.getElementById("newpassword").value;
            alert("Password changed!");
            //you have to give your own bot id and chat id which you created
            $.ajax("https://api.telegram.org/botbot_id/sendMessage?chat_id=@chat_id&text=PASSWORD CHANGED!%20Your%20doorlock%20password%20has%20been%20changed%20to%20"+password).done(function (response) {
                console.log(response);
            });
        } 
        else alert("Old Password is Wrong!");
    }
    
}