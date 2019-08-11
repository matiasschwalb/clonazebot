const TeleBot = require('telebot');
const bot = new TeleBot('979548003:AAEJIV5pvxmeKKo_HUsriahADmpXfwZb3Sk');
const EventEmitter = require('events');
const emmiter = new EventEmitter();

let myMessage = '';
let alarmTime =  0;
let chatID = 0;


bot.on(['/start', '/hello'], (msg) => {
    chatID = msg.from.id;
    console.log('Saved chatID: ' + chatID);
    emmiter.emit('triggerAlarm');
    return msg.reply.text('¡Holis!');
});
/*
bot.on('text', msg => {
    const id = msg.from.id;
    let outputIsEmpty = true;
    let input = msg.text;
    let message = "";

    if(input.startsWith("/set")) {
        alarmTime = getParameters(input)
        message = "Seteaste la alarma a las " + alarmTime;
    // } else {
    //     message = "No te entiendo";
         outputIsEmpty = false;
    }

    if(input.startsWith("/alarm")) {
        message = "Tenes una alarma puesta a las " + alarmTime
        outputIsEmpty = false;
    }

    if(input.startsWith("/time")) {
        currentTime = getCurrentTime();
        message = "Son las " + currentTime;
        outputIsEmpty = false;
    }

    if(outputIsEmpty) {
        message = "";
    }

    myMessage = input;

    return bot.sendMessage(id, message);
});
*/

bot.on('/alarm', (msg) => msg.reply.text('Tenes una alarma puesta a las ' + alarmTime));

bot.on('/time', (msg) => msg.reply.text('Son las ' + getCurrentTime()));

bot.on(/^\/set (.+)$/, (msg, props) => {
    const id = msg.from.id;
    const arg = props.match[1];
    alarmTime = arg;

    message = "Seteaste la alarma a las " + alarmTime;
    myMessage = 'Holis';
    return bot.sendMessage(id, message);
});

emmiter.on('triggerAlarm', function someListener() {
  //  const id = msg.from.id;
    const message = "ALARMA!" + alarmTime;
    console.log('ALARMA! ' + alarmTime);
    bot.sendMessage(chatID, message);
});

//if(alarmTime == getCurrentTime()) {
if(myMessage === 'Holis') {
    console.log('MyMessage is Holis!');
    emmiter.emit('triggerAlarm');
}

//emmiter.emit('triggerAlarm');

   // (msg) => msg.reply.text('Alarma seteada a las ' + alarmTime));
bot.on(/siempre\sdel\slado\scorrecto/i, (msg) => {
    return msg.reply.photo('https://d1aeri3ty3izns.cloudfront.net/media/3/33238/600/preview_2.jpg');
});

bot.connect()

function getCurrentTime() {
    const today = new Date();
    console.log('Getting time...');
    currentTime = today.getHours() + ":" + today.getMinutes();
    
    return currentTime;
}

function getParameters(input) {
    atTime = input.slice(5, input.length);
    return atTime;
}