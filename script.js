var words = new Array();
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                text = allText;
            }
        }
    }
    rawFile.send(null);
}

function PushWordsIntoArray()
{
    words = text.split(",");
}




readTextFile("vardi.txt");
PushWordsIntoArray();
var wordLength = words.length;
var chosenDefinition;
var chosenNumber;
var correctWord;
var answer;
var incorrect = 0;
document.getElementById("correctAns").value = "";
document.getElementById("statuss").innerHTML = "....";
document.getElementById("statuss").style.color = "#2C2A4A";
document.getElementById("statuss").style.visibility = "hidden";
StartProgram();

function StartProgram()
{
    readTextFile("vardi.txt");
    PushWordsIntoArray();
    wordLength = words.length;
    chosenDefinition = "";
    chosenNumber;
    correctWord = "";

    chosenNumber = Math.floor(Math.random() * (wordLength - 0) + 0);
    while(chosenNumber%2 == 1)
    {
        chosenNumber = Math.floor(Math.random() * (wordLength - 0) + 0);
    }
    chosenDefinition = words[chosenNumber];
    document.getElementById("def").innerHTML = chosenDefinition;
    document.getElementById("correctAns").innerHTML = "";
    answer = words[chosenNumber+1] .toLowerCase();
}
function Guess()
{
    var guessedWord = document.getElementById("input").value.toLowerCase();
    if(String(guessedWord) == String(answer))
    {
        document.getElementById("input").value = "";
        document.getElementById("statuss").style.color = "#2C2A4A";
        document.getElementById("statuss").style.visibility = "hidden";
        incorrect = 0;
        StartProgram();
    }
    else
    {
        incorrect += 1;
        document.getElementById("statuss").innerHTML = "Nepareizi x"+incorrect;
        document.getElementById("statuss").style.color = "#ebdefd";
        document.getElementById("statuss").style.visibility = "visible";
    }
}

function giveUp()
{
    document.getElementById("correctAns").innerHTML = answer;
}








