/* 
# Créditos a https://github.com/Undefined17
•• @Azami19 ••
*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${mg} 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴 𝑈𝑁𝐴 𝐼𝑀𝐴𝑁𝐸𝑁 𝑂 𝑉𝐼𝐷𝐸𝑂`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `𝐸𝑁𝐿𝐴𝐶𝐸:\n${link}\n𝑇𝐴𝑀𝐴𝑁̃𝑂: ${media.length}\n𝐸𝑋𝑃𝐼𝑅𝐴: ${isTele ? '𝑁𝑂 𝐸𝑋𝑃𝐼𝑅𝐴 :𝐷𝐸𝑆𝐶𝑂𝑁𝑂𝐶𝐼𝐷𝑂'}\n𝐴𝐶𝑂𝑅𝑇𝐴𝐷𝑂: ${await shortUrl(link)}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
