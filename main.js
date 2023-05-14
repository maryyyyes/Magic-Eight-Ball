let userName = '';
userName? console.log('Hello, ${userName}!') : console.log('Hello!');
let userQuestion = 'Where is the Magic Eight Ball?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber) {
 case 0:
   eightBall = 'It is certain';
   break;
 case 1:
   eigthBall = 'It is decidedly so';
   break;
 case 2:
   eightBall = 'Reply hazy try again';
   break;
 case 3:
   eightBall = 'Cannot predict now';
   break;
 case 4:
   eightBall = 'Do not count on it';
 case 5:
   eightBall = 'My sources say no';
   break;
 case 6:
   eightBall = 'Outlook not so good'
   break;
 case 7:
   eightBall = 'Signs point to yes';
}
console.log( `The Magic 8 Ball says ${eightBall}` );