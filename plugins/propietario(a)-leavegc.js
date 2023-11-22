let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `*${packname} 𝑨𝑩𝑨𝑵𝑫𝑶𝑵𝑨 𝑬𝑳 𝑮𝑹𝑼𝑷𝑶, 𝑭𝑼𝑬 𝑭𝑬𝑵𝑰𝑨𝑳 𝑬𝑺𝑻𝑨𝑹 𝑨𝑸𝑼𝑼 𝑯𝑨𝑺𝑻𝑨 𝑷𝑹𝑶𝑵𝑻𝑶 😉*`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler
