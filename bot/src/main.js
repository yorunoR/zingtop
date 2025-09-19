import { createBot } from "mineflayer"

const bot = createBot({
  host: "localhost",
  port: 5000,
  username: "Bot",
})

bot.on("spawn", () => {
  console.log("Bot がログインしました！")
  bot.chat("こんにちは！Bot君です！")
})

bot.on("chat", (username, message) => {
  console.log(`[${username}]: ${message}`)
  if (username === bot.username) return

  if (message === "ping") {
    bot.chat("pong!")
  }
})

bot.on("error", (err) => console.log("エラー:", err))
bot.on("end", () => console.log("Bot が切断されました"))
