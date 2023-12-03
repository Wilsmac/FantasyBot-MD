let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾(𝙰) 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙰 𝚈𝙰 𝙿𝙾𝙳𝚁𝙰 𝚄𝚂𝙰𝚁 ${packname}`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
