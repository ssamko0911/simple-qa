var thisImg = 1;
var imgCnt = 5;

function newSlide(direction) {
    thisImg = thisImg + parseInt(direction);
    if (thisImg === 0) {
        thisImg = imgCnt
    }

    if (thisImg === imgCnt + 1) {
        thisImg = 1
    }

    document.getElementById("sshow").src = "img/" + thisImg + ".jpg";
}

function swapImage(img)
{
    let imgfile = img.src.split('/').pop();
    if (imgfile === '1.jpg')
    {
        document.getElementById("sshow").src = "img/2.jpg";
    }
    else
    {
        document.getElementById("sshow").src = "img/1.jpg";
    }
}

function swapImageOptional(img)
{
        var imgfile = img.src.split('/').pop();
        if (imgfile === "1.jpg"){
            document.getElementById("sshow").src = "img/2.jpg";
            document.getElementById("titleTxt").innerHTML = "Some photo #1";
            document.getElementById("titleTxt").style.backgroundColor = "#020054";
            document.getElementById("footer").style.backgroundColor = "#020054";
            document.getElementById("banner").style.backgroundImage = 'url("img/2.jpg")';
        }
        else {
            document.getElementById("sshow").src = "img/1.jpg";
            document.getElementById("titleTxt").innerHTML = "Some photo #3";
            document.getElementById("titleTxt").style.backgroundColor = "#0c4c3f";
            document.getElementById("footer").style.backgroundColor = "#0c4c3f";
            document.getElementById("banner").style.backgroundImage = 'url("img/1.jpg")';
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
