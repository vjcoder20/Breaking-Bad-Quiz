var readlineSync=require("readline-sync");
const chalk = require('chalk');

var questions =[
  {
    ques : "Where Walter White and Jesse Pinkman Initially setup drug manufacturing?\n\na. Lab\nb. Garage\nc. RV\nd. Underground\n",
    ans: 'c'
  },
  {
ques : "What is the name of the drug they sell?\n\na. methamphetamine  \nb. methylamine \nc. phenylacetone\nd. pseudoephedrine\n",
    ans: 'a'
  },
  {
ques : "What is the professional name of Walter White?\n\na. Pablo\nb. Escobar\nc. Fring \nd. Heisenberg\n",
    ans: 'd'
  },
  
  {
ques : "What is the name of the company co-founded by Walter White?\n\na. Grey Solutions \nb. Gray Matter\nc. FlipShope\n",
    ans: 'b'
  },
  
  {
ques : "What is the relation of Walter White with Hank?\n\na. Father-in-law   \nb. Brother-in-law \nc. Cousins\n",
    ans: 'b'
  }
 ];


var l1Questions =[
  {
    ques : "What product does Gus Fring Company Los Pollos hermanos make? \n\na. Soft drinks\nb. Fried Chicken\nc. Chocolate \nd. None of the above.\n",
    ans: 'b'
  },
  {
ques : "How many people actually know the recipe of Walter White cooking?\n\na. 2  \nb. 5\nc. 4\nd. 3\n",
    ans: 'c'
  },
  {
ques : "What is the name of daughter of Walter White?\n\na. Stacey  \nb. Holly\nc. Marie\nd. None of the above.\n",
    ans: 'b'
  },
  
  {
ques : "Who Killed Gus Fring?\n\na. Walter White \nb. Hector Salamanca \nc. Both of the above. \nd. None of the above.\n",
    ans: 'c'
  },
  
  {
ques : "How did Walter White died?\n\na. cancer    \nb. Freezing \nc. Heart Attack\nd. Gunshot Wound",
    ans: 'd'
  }
 ];



// Global Variables

var instruction = " Hello! I hope you all guys are Fine.\n\n Welcome to the Breaking Bad Quiz \n\n Please don't try to search on the Internet while playing if you are serious fan \n\n Here are the rules:\n\n 1. Every correct answer adds one point to the score \n 2. There is no penalty for wrong answers \n 3. You have to score 3 or above in Level1 for qualifying the advance level \n\n-----------------------------\n\n";
var score = 0;
var highscores = [
  {
    name:"codemaster",
    score:10
  },
  {
    name:"Sambhav",
    score:9
  },
  {
    name:"Siddharth",
    score:8
  }
]

// Logic funtion 
function checkAns(para1, para2)
 {
   if(para1.ans.toLowerCase()===para2.toLowerCase())
   {
     console.log(chalk.bold.cyanBright("correct answer\n"));
     score+=1;
   }
   else
   {
     console.log(chalk.bold.redBright("wrong answer\n The correct answer is " + para1.ans));
   }
 }
 function playQuiz(para1,para2)
 {
  var i=0;
  while(para1.toLowerCase()!='q'&& i<5)
  {
    if(i===0)
    console.log(chalk.bold.cyanBright("Starting the quiz:\n--------------\n"));
    var ans=readlineSync.question(chalk.visible.green("Ques: "+para2[i].ques +"\n"));
    if(ans.toLowerCase()==='q')
      break;
    checkAns(para2[i],ans);
    i+=1
  }
}

// Programm
console.log(chalk.bold.green(instruction));
var ch=readlineSync.question(chalk.bold.cyanBright("press any key to start the Level 1 quiz(q to exit) \n\n"));
  if(ch.toLowerCase()!='q'){
playQuiz(ch,questions);
if(score>=3)
{
  console.log(chalk.bold.cyanBright("Congratulation!!! You have qualified for Advance quiz\n\n Your Score is :",score, "\n"));
  var say=readlineSync.question(chalk.bold.cyanBright("press any key to start the Level 2(q to exit) \n\n"));
  if(say.toLowerCase()!='q')
  playQuiz(say,l1Questions);
}
else
{
  console.log(chalk.bold.cyanBright("Opps!!! You have not qualified for Advance quiz\n\n Your Score is :",score,"\n"));
}
console.log(chalk.bold.cyanBright("Thankyou for playing the quiz"));
}
for(var i=0;i<highscores.length;i+=1)
{
  if(highscores[i].score<=score)
  {
    var r=i+1;
    console.log(chalk.bold.cyanBright("Your Rank is " + r));
    break;
  }
}
console.log(chalk.bold.cyanBright("Your final score is " + score));