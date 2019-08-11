const TeleBot = require('telebot');
const bot = new TeleBot('979548003:AAEJIV5pvxmeKKo_HUsriahADmpXfwZb3Sk');
let alarmTime =  0;

bot.on(['/start', '/hello'], (msg) => msg.reply.text('¡Holis!'));
bot.on('text', msg => {
    const id = msg.from.id;
    var input = msg.text;
    var message = "";

    if(input.startsWith("/set")) {
        alarmTime = getParameters(input)
        message = "Seteaste la alarma a las " + alarmTime;
    // } else {
    //     message = "No te entiendo";
    }

    if(input.startsWith("/alarm")) {
        message = "Tenes una alarma puesta a las " + alarmTime
    }

    if(input.startsWith("/time")) {
        currentTime = getCurrentTime();
        message = "Son las " + currentTime;
    }

    return bot.sendMessage(id, message);
});

bot.on(alarmTime == getCurrentTime(), (msg) => {
    const id = msg.from.id;
    const message = "ALARMA!" + alarmTime;
    console.log('ALARMA! ' + alarmTime);

    return bot.sendMessage(id, message)
})

if(alarmTime == getCurrentTime()) {
    const id = msg.from.id;
    const message = 'ALARMA!!' + alarmTime
    console.log(message)
    bot.sendMessage(id, message);
}

   // (msg) => msg.reply.text('Alarma seteada a las ' + alarmTime));
bot.on(/siempre\sdel\slado\scorrecto/i, (msg) => {
    return msg.reply.photo('https://d1aeri3ty3izns.cloudfront.net/media/3/33238/600/preview_2.jpg');
});

bot.connect()

function getCurrentTime() {
    const today = new Date();
    currentTime = today.getHours() + ":" + today.getMinutes();
    
    return currentTime;
}

function getParameters(input) {
    atTime = input.slice(5, input.length);
    return atTime;
}