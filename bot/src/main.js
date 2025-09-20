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
})

bot.on("error", (err) => console.log("エラー:", err))
bot.on("end", () => console.log("Bot が切断されました"))
