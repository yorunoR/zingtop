import { createBot } from "mineflayer"

// import * as mineflayerViewer from "prismarine-viewer"

const host = process.env.BOT_MINECRAFT_HOST
const username = process.env.BOT_USERNAME

const bot = createBot({
  username,
  host,
  port: 4000,
  version: "1.21.4", // 2025/09/05 時点では 1.21.5 以上はエラーが起こる
})

bot.on("spawn", () => {
  console.log("Bot がログインしました！")
  bot.chat("こんにちは！Bot君です！")
  // mineflayerViewer.mineflayer(bot, { port: 3000, firstPerson: false })
})

bot.on("chat", (username, message) => {
  console.log(`[${username}]: ${message}`)
  if (username === bot.username) return

  if (message === "ping") {
    bot.chat("pong!")
  }

  if (message === "go") {
    bot.chat("Moving forward!")
    bot.setControlState("forward", true)
    setTimeout(() => {
      bot.setControlState("forward", false)
      bot.chat("Stopped.")
    }, 3000)
  }

  if (message === "back") {
    bot.chat("Moving backward!")
    bot.setControlState("back", true)
    setTimeout(() => {
      bot.setControlState("back", false)
      bot.chat("Stopped.")
    }, 3000)
  }

  if (message === "right") {
    const currentYaw = bot.entity.yaw
    const currentPitch = bot.entity.pitch
    const turnAngle = Math.PI / 4 // 45度（ラジアン）

    bot.look(currentYaw - turnAngle, currentPitch, true)
    bot.chat("Turned right 45°")
  }

  if (message === "left") {
    const currentYaw = bot.entity.yaw
    const currentPitch = bot.entity.pitch
    const turnAngle = Math.PI / 4 // 45度（ラジアン）

    bot.look(currentYaw + turnAngle, currentPitch, true)
    bot.chat("Turned left 45°")
  }

  if (message === "jump") {
    bot.setControlState("jump", true)
    setTimeout(() => bot.setControlState("jump", false), 400)
  }
})

bot.on("error", (err) => console.log("エラー:", err))
bot.on("end", () => console.log("Bot が切断されました"))
