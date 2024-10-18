import { Telegraf, Markup } from 'telegraf';

const token = '7857828826:AAGHukJnFH_qIZy37amwoGvOAILe5cjq5hI';
const webAppURL = 'https://google.com';
const youtubeURL = 'https://m.youtube.com';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку, чтобы продолжить',
        Markup.keyboard([
            Markup.button.webApp(
                'Запутить бота',
                webAppURL
            ),
            Markup.button.webApp(
                'Посмотреть ютубчик',
                youtubeURL
            )
        ])
    );
});

bot.launch();
