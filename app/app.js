function addNumbers()
{
    var val1 = parseInt(document.getElementById("inputField1").value);
    var val2 = parseInt(document.getElementById("inputField2").value);
    var ansD = document.getElementById("answer");
    ansD.value = val1 + val2;
}

function myForLoop()
{
    var myArray = ["dog", "cat", "red", "blue", "rabbit", "mouse", "yellow", "jings", "Frank", "ten" ];
    var text = "";
    var i;
    for (i = 0; i < myArray.length; i++)
    {
        text += myArray[i] + "<br>";
    }
    var pan = document.getElementById("outPan");
    pan.innerHTML += "<br>" + text;
}

function swapImage(img)
{
    var imgfile = img.src.split('/').pop();
    if (imgfile === "Spike.PNG"){
        document.getElementById("pic").src = "img/Judy.png";
        document.getElementById("titleTxt").innerHTML = "Judy Dench";
        document.getElementById("titleTxt").style.backgroundColor = "#020054";
        document.getElementById("footer").style.backgroundColor = "#020054";
        document.getElementById("subTit").style.backgroundColor = "#020054";
        document.getElementById("banner").style.backgroundImage = 'url("images/Judy.jpg")';
    }
    else {
        document.getElementById("pic").src = "img/Spike.PNG";
        document.getElementById("titleTxt").innerHTML = "Spike Milligan";
        document.getElementById("titleTxt").style.backgroundColor = "#0c4c3f";
        document.getElementById("footer").style.backgroundColor = "#0c4c3f";
        document.getElementById("subTit").style.backgroundColor = "#0c4c3f";
        document.getElementById("banner").style.backgroundImage = 'url("images/spike.jpg")';
    }
}

var thisImg = 1;
var imgCnt = 10;
function newSlide(direction)
{
    thisImg = thisImg + parseInt(direction);
    if (thisImg	== 0) {thisImg = imgCnt};
    if (thisImg	== imgCnt+1) {thisImg = 1};
    document.getElementById("sshow").src = "images/" + thisImg + ".jpg";
}

function checkEmail()
{
    try
    {
        var myString = document.getElementById("emlAdd").value;
        if(myString.indexOf("@")!= -1 && myString.indexOf(".")!= -1)
        {
            document.getElementById("exceptHand").innerHTML = "Good e-mail address";
        }
        else{
            throw new RangeError("Data entry error:  Not a valid e-mail") ;
        }
    }
    catch(err)
    {
        document.getElementById("errors").innerHTML = "<b>" + err.message + "</b><br>" + "You entered: " + myString;
    }
}

//-------Calculator--------------------------------------------------------------------
function clearScrn(val)
{
    document.getElementById("ip").value = val;
}

function append(val)
{
    document.getElementById("ip").value += val;
}

function evaluateScrn()
{
    try
    {
        clearScrn(eval(document.getElementById("ip").value))
    }
    catch(e)
    {
        document.getElementById("disp").value = "Err!"
    }
}
//------------Calculator----Memory Functions------------------------------------

function addToMem()
{

    var val = document.getElementById("ip").value;
    if( (val ==="") || (val === null) )
    {
        document.getElementById("ip").value = "Mem Null Err";
    }
    else{
        localStorage.setItem("memVal", val);
        document.getElementById("ip").value = "";
    }
}

function recallMem()
{
    if( (localStorage.getItem("memVal") ==="") || (localStorage.getItem("memVal")=== null) )
    {
        document.getElementById("ip").value = "Null";
    }
    else{
        document.getElementById("ip").value += localStorage.getItem("memVal");
    }
}
function clearMem()
{
    if( (localStorage.getItem("memVal") ==="") || (localStorage.getItem("memVal")=== null) )
    {
        document.getElementById("ip").value = "Mem Empty";
    }
    else{
        localStorage.removeItem("memVal");
        document.getElementById("ip").value = "";
    }
}

//---------------Form-------------------------------------------------
function init()
{
    document.getElementById("store").onclick = storeName;
    document.getElementById("recall").onclick = recallName;
    document.getElementById("remove").onclick = removeName;
    document.getElementById("reset").onclick = reSet;
}document.addEventListener("DOMContentLoaded", init, false);

//-------------------------------------------------------------------------
function storeName()
{

    var username = document.getElementById("username").value;
    if( (username ==="") || (username === null) )
    {
        alert("Please enter your name");
    }
    else{
        localStorage.setItem("user", username);
        document.getElementById("leg").innerHTML = "<h4>" + "item: " + username + " has been stored" + "</h4>";
        document.getElementById("username").value = "";
    }
}
//-------------------------------------------------------------------------
function recallName()
{
    if( (localStorage.getItem("user") ==="") || (localStorage.getItem("user")=== null) )
    {
        alert("No user stored");
    }
    else{
        document.getElementById("username").value = localStorage.getItem("user");
        document.getElementById("leg").innerHTML = "<h4>" +  "Item: " + localStorage.getItem("user") + " has been recalled" + "</h4>";
    }
}
//------------------------------------------------------------------------
function removeName()
{
    if( (localStorage.getItem("user") ==="") || (localStorage.getItem("user")=== null) )
    {
        alert("No user available");
    }
    else{
        document.getElementById("leg").innerHTML = "<h4>" +  "Item: "+ localStorage.getItem("user") + " has been removed" + "</h4>";
        localStorage.removeItem("user");
        document.getElementById("username").value = "";
    }
}
//--------------------------------------------------------------------------------
function reSet()
{
    document.getElementById("leg").innerHTML = "<h4>" +  "Enter Name: " + "</h4>";
    document.getElementById("username").value = "";
    if( (localStorage.getItem("user") ==="") || (localStorage.getItem("user")=== null) )
    {
        localStorage.removeItem("user");
    }
}
/*
switch (expression) {
    case label :
        statementlist
    case label :
    default :
        statementlist
}
*/
//Switch statement example - Overcomes multiple if statements
function smallNumber() {
    var num = parseInt(document.getElementById("pass").value);
    switch (num) {
        case 1:
            document.getElementById("ans").innerHTML ="Well done - You entered the number one.";
            break;
        case 2:
            document.getElementById("ans").innerHTML ="Well done - You entered the number two.";
            break;
        case 3:
            document.getElementById("ans").innerHTML ="Well done - You entered the number three.";
            break;
        default:
            document.getElementById("ans").innerHTML ="Sorry try again?????";
    }
}
//------------------------------------------------------------------------------
