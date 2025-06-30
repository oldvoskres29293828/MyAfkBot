const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Ochchim.aternos.me',
    port: 12280,
    username: 'AFK_Bot_' + Math.floor(Math.random() * 1000),
  });

  bot.on('spawn', () => {
    console.log('✅ Бот зашёл на сервер и стоит AFK');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000);
  });

  bot.on('end', () => {
    console.log('❌ Бот отключён. Переподключаем через 5 сек...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.error('Ошибка:', err.message);
  });
}

createBot();
