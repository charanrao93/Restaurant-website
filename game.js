var rand = 0;
var word = " ";
var wordlength = 0;
var spaces = 0;
var numRight = 0;
var mistake = 7;
var nextImg = 1;
var divWidth = 55;
var sound = new Audio();
var carbrands = ["volvo","bmw","toyota","mercedes benz","kia","honda"];
var countries = ["africa","india","united states","canada","australia"];
function sp()
{
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}
function carbrand()
{
    rand = Math.floor(Math.random()*carbrands.length);
    word = carbrands[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Names of Car Brand";
    hangman();
}
function country()
{
    rand = Math.floor(Math.random() * countries.length);
    word = countries[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Name of Country";
    hangman();
}
function hangman()
{
    var x = word.length;
    var y = x - 1;
    divWidth = divWidth * word.length + 10 ;
    document.getElementById('wordWrap').style.width = divWidth + "px";
    while(x>0)
    {
        var letter = word.substring(y, x);
        if(letter  === " ")
        {
            document.getElementById('letter' + x).innerHTML = "&nbsp;";
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        }
        else
        {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('underline' + x).style.display = "block";
            document.getElementById('underline' + x).style.borderBottom = "3px solid black";
          
        }

        x--;
        y--;

    }
    wordlength = word.length - spaces;

    
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
}

function guessLetter()
{
    var target = event.target;
    var correct=false;
    target.style.visibility = "hidden";

    var lower = target.id;
    var upper = document.getElementById(lower).getAttribute('value');

    for(var a=1;a<=25;a++)
    {
        if(document.getElementById('letter'+a).innerHTML===lower || document.getElementById('letter'+a).innerHTML===upper)
        {
            document.getElementById('letter' + a).style.visibility = "visible";
            correct = true;
            numRight++;
        }

    }

    if (correct == false)
    {
        mistake--;
        ++nextImg;
        document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
        document.getElementById('hangImg').src = 'hang'+ nextImg +'.png';
    }
    if (mistake <= 0)
    {
        mistake = 0;
        document.getElementById('winStatus').innerHTML = 'You lose!!!';
        lose();
    }
    if(numRight==wordlength)
    {
        document.getElementById('winStatus').innerHTML = "You Win";
        win();
    }
}
function countChars(countFrom,displayTo)
{
    var len = document.getElementById(countFrom).value.length;
    document.getElementById(displayTo).innerHTML = len;
}


function readText()
{
    word = document.getElementById('input').value;
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('categoryName').innerHTML = 'Guess the word';
    hangman();
}
function win()
{
    document.getElementById('gamePage').style.display = "none";
    document.getElementById('endPage').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;
    
}
function lose() {
    document.getElementById('gamePage').style.display = "none";
    document.getElementById('endPage').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;

}

function playAgain()
{
    document.location.reload(true);
    document.getElementById('endPage').style.display = "none";
    hangman();
}
function mainMenu()
{
    document.location.reload(true);
    document.getElementById('endPage').style.display = "none";
    document.getElementById('introPage').style.display = "block";
}