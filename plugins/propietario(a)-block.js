let handler = async (m, { conn, participants, usedPrefix, command }) => {
let blocktext = `*ETIQUTE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE bloqueo*\n\n*EJEMPLO: ${usedPrefix + command} @${global.owner[0][0]}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(blocktext, m.chat, { mentions: conn.parseMention(blocktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await sock.updateBlockStatus("xyz@s.whatsapp.net", "block")}
handler.command = /^(block|bloquear|block2)$/i
handler.group = true
handler.chat = true
