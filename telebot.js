const TeleBot = require('telebot');
const bot = new TeleBot('979548003:AAEJIV5pvxmeKKo_HUsriahADmpXfwZb3Sk');
let alarmTime =  0;

bot.on(['/start', '/hello'], (msg) => msg.reply.text('¡Holis!'));
bot.on('text', msg => {
    var id = msg.from.id;
    var input = msg.text;
    var message = "";

    if (input.startsWith("/set")) {
        alarmTime = input.slice(5, input.length);
        message = "Seteaste la alarma a las " + alarmTime;
    } else {
        message = "No te entiendo";
    }

    return bot.sendMessage(id, message);
});
   // (msg) => msg.reply.text('Alarma seteada a las ' + alarmTime));
bot.on(/siempre\sdel\slado\scorrecto/i, (msg) => {
    return msg.reply.photo('https://d1aeri3ty3izns.cloudfront.net/media/3/33238/600/preview_2.jpg');
});

bot.connect()
