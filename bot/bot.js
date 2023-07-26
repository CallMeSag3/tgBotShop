const { Telegraf } = require('telegraf')
const web_link = 'https://eclectic-valkyrie-37c5fa.netlify.app'

const BOT_TOKEN = '5595664023:AAENfaWQ2Ff9pqyLJa7_TEgD3KX2VfOw3oQ'
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome to the best place where u can buy any kind of food :)'))

bot.on('start', (ctx) => ctx.reply('Please, first of all select the food that you want to buy', {
    reply_markup: {
        button: [[
            { text: 'Start Order', web_app: { url: web_link } }
        ]],
    },
}))

bot.launch()