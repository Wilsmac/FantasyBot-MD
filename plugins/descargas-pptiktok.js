import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝑬𝑺𝑪𝑹𝑰𝑩𝑨 𝑬𝑳 𝑵𝑶𝑴𝑩𝑹𝑬 𝑫𝑬 𝑼𝑺𝑼𝑨𝑹𝑰𝑶 𝑫𝑬 𝑻𝑰𝑲𝑻𝑶𝑲 𝑺𝑰𝑵 𝑼𝑺𝑨𝑹 "@"\n𝑬𝑱𝑬𝑴𝑷𝑳𝑶\n*${usedPrefix + command} mundo_dos_animes81*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
await conn.sendFile(m.chat, res, 'error.jpg', `✅ 𝙁𝙊𝙏𝙊 𝘿𝙀 𝙋𝙀𝙍𝙁𝙄𝙇 💟 *${text}*`, m, false)
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`}}})
/*conn.sendHydrated(m.chat, info, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)*/
}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
