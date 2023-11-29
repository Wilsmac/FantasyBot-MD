import fetch from 'node-fetch'  
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com/i 

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {  
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
 
if (chat.antiTiktok && isAntiLinkTik) {  
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsEnlaceTik']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`${lenguajeCD['smsAvisoFG']()} ${lenguajeCD['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsSoloOwner']()}`)
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsEnlaceYt']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`${lenguajeCD['smsAvisoFG']()} ${lenguajeCD['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsSoloOwner']()}`)
}}  
    
if (chat.antiTelegram && isAntiLinkTel) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsEnlaceTel']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`${lenguajeCD['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsSoloOwner']()}`)
}}    
    
if (chat.antiFacebook && isAntiLinkFb) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsEnlaceFb']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`${lenguajeCD['smsAvisoFG']()} ${lenguajeCD['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsSoloOwner']()}`)
}}  
    
if (chat.antiInstagram && isAntiLinkIg) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsEnlaceIg']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`${lenguajeCD['smsAvisoFG']()} ${lenguajeCD['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsSoloOwner']()}`)
}}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (isBotAdmin && bot.restrict) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsEnlaceTw']()} *@${toUser}*`, null, { mentions: [aa] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!isBotAdmin) {
return m.reply(`${lenguajeCD['smsAvisoFG']()} ${lenguajeCD['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeCD['smsAvisoAG']()}${lenguajeCD['smsSoloOwner']()}`)
}}
return !0
}


