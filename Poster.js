TelegramBot = require('node-telegram-bot-api');

const botToken = process.env.token;

const posterBot = new TelegramBot(botToken, {polling: true});
const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Get security token', callback_data: 'sec_token' }]
    ]
  })
};

posterBot.onText(/\/start/,(msg, match) => {
  bot.sendMessage(msg.chat.id, 'Press button for getting auth token', options);
});

posterBot.on('callback_query', (msg) => {
  const chatId = msg.chat.id;
  const option = msg.data;

  if (option === 'sec_token') {
    bot.sendMessage(chatId, 'Press button for getting auth token', options);
  }
});