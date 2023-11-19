import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫', body: '[♥︎𝐿] 𝑌 [☆𝑊] 𝑋 𝗦𝗜𝗘𝗠𝗣𝗥𝗘', sourceUrl: `https://github.com/Wilsmac/FantasyBot-MD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
