import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `${lenguajeCD['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}\n${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/${global.conn.user.jid.split`@`[0]}`}

╭━─━─━─━─≪✠≫─━─━─━─━╮
├┈・─・﹕₊˚ ✦・୨୧・
├┈ 𝒃𝒚 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʜᴏʀᴀʀɪᴏ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 \`\`\`${horarioFecha}\`\`\`
*╘━ꥇ۬════•| ✿ |•════╝* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ɪɴғᴏ ᴅᴇ ʙᴏᴛ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌹 *${lenguajeCD['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
┣ ඬ⃟ 🌹 *Registrados »* ${rtotalreg}/${totalreg}    
┣ ඬ⃟ 🌹 *${lenguajeCD['smsUptime']()}* ➺ _${uptime}_ 
┣ ඬ⃟ 🌹 *${lenguajeCD['smsVersion']()}* ➺ _${vs}_
┣ ඬ⃟ 🌹 *${lenguajeCD['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeCD['smsModePrivate']().charAt(0).toUpperCase() + lenguajeCD['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeCD['smsModePublic']().charAt(0).toUpperCase() + lenguajeCD['smsModePublic']().slice(1).toLowerCase()}`}_
┣ ඬ⃟ 🌹 *${lenguajeCD['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
┣ ඬ⃟ 🌹 *${lenguajeCD['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
*╘━ꥇ۬════•| ✿ |•════╝* 

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *información de ti* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}_` : '❌ _Sin registro_'}
┣ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
┣ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
┣ *${lenguajeCD['smsBotonM7']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

*╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃*< *información* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣ *${lenguajeCD['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeCD['smsResultPareja']()}`}
┣ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

╭─╮︹︹︹⊹︹︹︹⊹︹︹︹
│   *「 Info Usuario.*
*︶︶♡꒷꒦︶꒦꒷♡꒷꒦︶꒦꒷♡︶︶*
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
╭──╮ - ̗̀ °︹︹︹⊹︹︹︹° 
┊🕸️┊ꦿ⿻ ❜ೃ ¡ Tu nivel:
╰──╯ ░ - ̗̀↳🗝:❯ *${lenguajeCD['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}

╰───────────────────
╰──── +˚🧰 Experiencia:.
˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚⚓ Rango:.
˙·.˙··.˙·.┊ *°*+↷❯ *${lenguajeCD['smsBotonM5']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚💎 Diamantes:.
˙·.˙··.˙·.┊ *°*+↷❯ ${limit}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚👾 *TokitoCoins* :.
˙·.˙··.˙·.┊ *°*+↷❯ ${money}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🪙 Tokens:.
˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─ 
*༺═───────────────────────═༻*
${readMore}
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   ɪɴғᴏ
├• ✐; ₊˚✦୧︰ Bᴏᴛ .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}terminosycondiciones_
┣ ඬ⃟ 🌺 _${usedPrefix}grupos_
┣ ඬ⃟ 🌺 _${usedPrefix}estado_
┣ ඬ⃟ 🌺 _${usedPrefix}infobot_
┣ ඬ⃟ 🌺 _${usedPrefix}speedtest_
┣ ඬ⃟ 🌺 _${usedPrefix}donar_
┣ ඬ⃟ 🌺 _${usedPrefix}owner_
┣ ඬ⃟ 🌺 _${usedPrefix}script_
╘━ꥇ۬════•| ✿ |•════╝

*╭━『𝐹𝑈𝑁𝐶𝐼𝑂𝑁 𝐷𝐸 𝑆𝐸𝑅 𝑆𝑈𝐵 𝐵𝑂𝑇』* 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ 💻 _${usedPrefix}serbot | jadibot_
┣ 💻 _${usedPrefix}serbot --code | jadibot --code_
┣ 💻 _${usedPrefix}detener | stop_
┣ 💻 _${usedPrefix}bcbot_
*╘━ꥇ─────────────────═༻*

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< 𝑅𝐸𝑃𝑂𝑅𝑇𝐴𝑅 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 𖤍 💌 _${usedPrefix}reporte *texto*_
┣ ඬ⃟ 𖤍 💌 _${usedPrefix}report *texto*_
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Uɴᴇ ᴜɴ ʙᴏᴛ
├• ✐; ₊˚✦୧︰A ᴛᴜ ɢʀᴜᴘᴏ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟🌹 _${usedPrefix}botemporal *enlace* *cantidad*_
┣   🌹 _${usedPrefix}addbot *enlace* *cantidad*>
*╘━ꥇ۬─────────────────═༻*

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷sᴇʀ ᴜsᴜᴀʀɪᴀ(ᴏ)
├• ✐; ₊˚✦୧︰ᴘʀᴇᴍɪᴜᴍ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ 🌹 _${usedPrefix}listapremium | listprem_
┣ ඬ 🌹 _${usedPrefix}pase premium_
┣ ඬ 🌹 _${usedPrefix}pass premium_
*╘━ꥇ۬─────────────────═༻*

	
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴊᴜᴇɢᴏs, ᴇsᴘᴇʀᴏ 
├• ✐; ₊˚✦୧︰ᴛᴇ ᴅɪᴠɪᴇʀᴛᴀs.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}mates | matemáticas | math_
┣ ඬ⃟ 🌺 _${usedPrefix}lanzar *cara* | *cruz*
┣ ඬ⃟ 🌺 _${usedPrefix}ppt *piedra : papel : tijera*_
┣ ඬ⃟ 🌺 _${usedPrefix}tictactoe | ttt *sala*_
┣ ඬ⃟ 🌺 _${usedPrefix}deltictactoe | delttt_
┣ ඬ⃟ 🌺 _${usedPrefix}topgays_
┣ ඬ⃟ 🌺 _${usedPrefix}topotakus_
┣ ඬ⃟ 🌺 _${usedPrefix}toppajer@s_
┣ ඬ⃟ 🌺 _${usedPrefix}topput@s_
┣ ඬ⃟ 🌺 _${usedPrefix}topintegrantes | topintegrante_
┣ ඬ⃟ 🌺 _${usedPrefix}toplagrasa | topgrasa_
┣ ඬ⃟ 🌺 _${usedPrefix}toppanafrescos | toppanafresco_
┣ ඬ⃟ 🌺 _${usedPrefix}topshiposters | topshipost_
┣ ඬ⃟ 🌺 _${usedPrefix}toplindos | toplind@s_
┣ ඬ⃟ 🌺 _${usedPrefix}topfamosos | topfamos@s_
┣ ඬ⃟ 🌺 _${usedPrefix}topparejas | top5parejas_
┣ ඬ⃟ 🌺 _${usedPrefix}gay | gay *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}gay2 *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}lesbiana *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}manca *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}manco *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}pajero *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}pajera *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}puto *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}puta *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}rata *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}love *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}doxear *nombre : @tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}doxxeame_
┣ ඬ⃟ 🌺 _${usedPrefix}pregunta *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}apostar | slot *cantidad*_
┣ ඬ⃟ 🌺 _${usedPrefix}formarpareja_
┣ ඬ⃟ 🌺 _${usedPrefix}dado_
┣ ඬ⃟ 🌺 _${usedPrefix}verdad_
┣ ඬ⃟ 🌺 _${usedPrefix}reto_
┣ ඬ⃟ 🌺 _${usedPrefix}multijuegos_
┣ ඬ⃟ 🌺 _${usedPrefix}juegos_
*╘━ꥇ۬─────────────────═༻* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ɪᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}simi | okgoogle *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}alexa | siri | cortana *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}simsimi | bixby *texto*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *bienvenida | welcome*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *avisos | detect*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *autonivel | autolevelup*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *restringir | restrict*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antillamar | anticall*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *publico | public*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *autovisto | autoread*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *temporal*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *stickers*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *autosticker*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *reacciones | reaction*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *audios*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *modocaliente | modohorny*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antiver | antiviewonce*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antieliminar | antidelete*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antinternacional | antifake*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antienlace | antilink*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antitiktok | antitk*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antitelegram | antitel*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antifacebook | antifb*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antinstagram | antig*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *antitwitter | antitw*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *soloprivados | pconly*_
┣ ඬ⃟ 🌺 _${usedPrefix}on *:* off *sologrupos | gconly*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ʀᴇsᴜᴍᴇɴ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}configuracion_
┣ ඬ⃟ 🌺 _${usedPrefix}settings_
┣ ඬ⃟ 🌺 _${usedPrefix}vergrupo_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴅᴇsᴄᴀʀɢᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}imagen | image *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}pinterest | dlpinterest *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}wallpaper|wp *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}play | play2 *texto o link*_
┣ ඬ⃟ 🌺 _${usedPrefix}play.1 *texto o link*_
┣ ඬ⃟ 🌺 _${usedPrefix}play.2 *texto o link*_ 
┣ ඬ⃟ 🌺 _${usedPrefix}ytmp3 | yta *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}ytmp4 | ytv *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}pdocaudio | ytadoc *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}pdocvieo | ytvdoc *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}tw |twdl | twitter *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}facebook | fb *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}instagram *link video o imagen*_
┣ ඬ⃟ 🌺 _${usedPrefix}verig | igstalk *usuario(a)*_
┣ ඬ⃟ 🌺 _${usedPrefix}ighistoria | igstory *usuario(a)*_
┣ ඬ⃟ 🌺 _${usedPrefix}tiktok *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}tiktokimagen | ttimagen *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┣ ඬ⃟ 🌺 _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┣ ඬ⃟ 🌺 _${usedPrefix}mediafire | dlmediafire *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}clonarepo | gitclone *link*_
┣ ඬ⃟ 🌺 _${usedPrefix}clima *país ciudad*_
┣ ඬ⃟ 🌺 _${usedPrefix}consejo_
┣ ඬ⃟ 🌺 _${usedPrefix}morse codificar *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}morse decodificar *morse*_
┣ ඬ⃟ 🌺 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🌺 _${usedPrefix}historia_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄʜᴀᴛ ᴀɴᴏ́ɴɪᴍᴏ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}chatanonimo | anonimochat_
┣ ඬ⃟ 🌺 _${usedPrefix}anonimoch_
┣ ඬ⃟ 🌺 _${usedPrefix}start_
┣ ඬ⃟ 🌺 _${usedPrefix}next_
┣ ඬ⃟ 🌺 _${usedPrefix}leave_
*╘━════•| ✿ |•════╝* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}add *numero*_
┣ ඬ⃟ 🌺 _${usedPrefix}sacar | ban | kick  *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}grupo *abrir : cerrar*_
┣ ඬ⃟ 🌺 _${usedPrefix}group *open : close*_
┣ ඬ⃟ 🌺 _${usedPrefix}daradmin | promote *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}quitar | demote *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}banchat_
┣ ඬ⃟ 🌺 _${usedPrefix}unbanchat_
┣ ඬ⃟ 🌺 _${usedPrefix}banuser *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}unbanuser *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}admins *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}invocar *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}tagall *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}hidetag *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}infogrupo | infogroup_
┣ ඬ⃟ 🌺 _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┣ ඬ⃟ 🌺 _${usedPrefix}advertencia *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}deladvertencia *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}delwarn *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}crearvoto | startvoto *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}sivotar | upvote_
┣ ඬ⃟ 🌺 _${usedPrefix}novotar | devote_
┣ ඬ⃟ 🌺 _${usedPrefix}vervotos | cekvoto_
┣ ඬ⃟ 🌺 _${usedPrefix}delvoto | deletevoto_
┣ ඬ⃟ 🌺 _${usedPrefix}enlace | link_
┣ ඬ⃟ 🌺 _${usedPrefix}newnombre | nuevonombre *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}newdesc | descripcion *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}setwelcome | bienvenida *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}setbye | despedida *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}nuevoenlace | resetlink_
┣ ඬ⃟ 🌺 _${usedPrefix}on_
┣ ඬ⃟ 🌺 _${usedPrefix}off_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ғᴏʀᴍᴀ ᴛᴜ ᴘᴀʀᴇᴊᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}listaparejas | listship_
┣ ඬ⃟ 🌺 _${usedPrefix}mipareja | mylove_
┣ ඬ⃟ 🌺 _${usedPrefix}pareja | couple *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}aceptar | accept *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}rechazar | decline *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}terminar | finish *@tag*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴠᴏᴛᴀᴄɪᴏɴᴇs ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}crearvoto | startvoto *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}sivotar | upvote_
┣ ඬ⃟ 🌺 _${usedPrefix}novotar | devote_
┣ ඬ⃟ 🌺 _${usedPrefix}vervotos | cekvoto_
┣ ඬ⃟ 🌺 _${usedPrefix}delvoto | deletevoto_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴᴛᴇɴɪᴅᴏ +18
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞➺ _${usedPrefix}hornymenu_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}toimg | img | jpg *sticker*_
┣ ඬ⃟ 🌺 _${usedPrefix}toanime | jadianime *foto*_
┣ ඬ⃟ 🌺 _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┣ ඬ⃟ 🌺 _${usedPrefix}tovn | vn *video o audio*_
┣ ඬ⃟ 🌺 _${usedPrefix}tovideo *audio*_
┣ ඬ⃟ 🌺 _${usedPrefix}tourl *video, imagen*_
┣ ඬ⃟ 🌺 _${usedPrefix}toenlace  *video, imagen o audio*_
┣ ඬ⃟ 🌺 _${usedPrefix}tts es *texto*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʟᴏɢᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}logos *efecto texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}menulogos2_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ᴇғᴇᴄᴛᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}simpcard *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}hornycard *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}lolice *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}ytcomment *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}itssostupid_
┣ ඬ⃟ 🌺 _${usedPrefix}pixelar_
┣ ඬ⃟ 🌺 _${usedPrefix}blur_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}chica_
┣ ඬ⃟ 🌺 _${usedPrefix}chico_
┣ ඬ⃟ 🌺 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 🌺 _${usedPrefix}messi_
┣ ඬ⃟ 🌺 _${usedPrefix}meme_
┣ ඬ⃟ 🌺 _${usedPrefix}meme2_
┣ ඬ⃟ 🌺 _${usedPrefix}itzy_
┣ ඬ⃟ 🌺 _${usedPrefix}blackpink_
┣ ඬ⃟ 🌺 _${usedPrefix}kpop *blackpink : exo : bts*_
┣ ඬ⃟ 🌺 _${usedPrefix}lolivid_
┣ ඬ⃟ 🌺 _${usedPrefix}loli_
┣ ඬ⃟ 🌺 _${usedPrefix}navidad_
┣ ඬ⃟ 🌺 _${usedPrefix}ppcouple_
┣ ඬ⃟ 🌺 _${usedPrefix}neko_
┣ ඬ⃟ 🌺 _${usedPrefix}waifu__
┣ ඬ⃟ 🌺 _${usedPrefix}chiho_
┣ ඬ⃟ 🌺 _${usedPrefix}elaina_
┣ ඬ⃟ 🌺 _${usedPrefix}eba_
┣ ඬ⃟ 🌺 _${usedPrefix}emilia_
┣ ඬ⃟ 🌺 _${usedPrefix}cosplay_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Eғᴇᴄᴛᴏsᴅ ᴅᴇ 
├• ✐; ₊˚✦୧︰ Aᴜᴅɪᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🌺 _${usedPrefix}bass_
┣ ඬ⃟ 🌺 _${usedPrefix}blown_
┣ ඬ⃟ 🌺 _${usedPrefix}deep_
┣ ඬ⃟ 🌺 _${usedPrefix}earrape_
┣ ඬ⃟ 🌺 _${usedPrefix}fast_
┣ ඬ⃟ 🌺 _${usedPrefix}fat_
┣ ඬ⃟ 🌺 _${usedPrefix}nightcore_
┣ ඬ⃟ 🌺 _${usedPrefix}reverse_
┣ ඬ⃟ 🌺 _${usedPrefix}robot_
┣ ඬ⃟ 🌺 _${usedPrefix}slow_
┣ ඬ⃟ 🌺 _${usedPrefix}smooth_
┣ ඬ⃟ 🌺 _${usedPrefix}tupai_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʙᴜsǫᴜᴇᴅᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟_${usedPrefix}animeinfo *texto*_
┣ 🌺_${usedPrefix}mangainfo *texto*_
┣ 🌺_${usedPrefix}google *texto*_
┣ 🌺_${usedPrefix}letra | lirik *texto*_
┣ 🌺_${usedPrefix}ytsearch | yts *texto*_
┣ 🌺_${usedPrefix}wiki | wikipedia *texto*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴜᴅɪᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🎧 _${usedPrefix}audios_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ⚙️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}chatgpt *<texto>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}delchatgpt
┣ ඬ⃟ ⚙️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}hd *<responde a imagen>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}qrcode *<texto>*__
┣ ඬ⃟ ⚙️ _${usedPrefix}horario_
┣ ඬ⃟ ⚙️ _${usedPrefix}dropmail_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}botemporal *enlace* *cantidad*_
┣ ඬ⃟ 🌺  _${usedPrefix}addbot *enlace* *cantidad*_
┣ ඬ⃟ 🌺  _${usedPrefix}pase premium_
┣ ඬ⃟ 🌺  _${usedPrefix}pass premium_
┣ ඬ⃟ 🌺  _${usedPrefix}listapremium | listprem_
┣ ඬ⃟ 🌺  _${usedPrefix}transfer *tipo cantidad @tag*_
┣ ඬ⃟ 🌺  _${usedPrefix}dar *tipo cantidad @tag*_
┣ ඬ⃟ 🌺  _${usedPrefix}enviar *tipo cantidad @tag*_
┣ ඬ⃟ 🌺  _${usedPrefix}balance_
┣ ඬ⃟ 🌺  _${usedPrefix}cartera | wallet_
┣ ඬ⃟ 🌺  _${usedPrefix}experiencia | exp_
┣ ඬ⃟ 🌺  _${usedPrefix}top | lb | leaderboard_
┣ ඬ⃟ 🌺  _${usedPrefix}nivel | level | lvl_
┣ ඬ⃟ 🌺  _${usedPrefix}rol | rango_
┣ ඬ⃟ 🌺  _${usedPrefix}inventario | inventory_
┣ ඬ⃟ 🌺  _${usedPrefix}aventura | adventure_
┣ ඬ⃟ 🌺  _${usedPrefix}caza | cazar | hunt_
┣ ඬ⃟ 🌺  _${usedPrefix}pescar | fishing_
┣ ඬ⃟ 🌺  _${usedPrefix}animales_
┣ ඬ⃟ 🌺  _${usedPrefix}alimentos_
┣ ඬ⃟ 🌺  _${usedPrefix}curar | heal_
┣ ඬ⃟ 🌺  _${usedPrefix}buy_
┣ ඬ⃟ 🌺  _${usedPrefix}sell_
┣ ඬ⃟ 🌺  _${usedPrefix}verificar | registrar_
┣ ඬ⃟ 🌺  _${usedPrefix}perfil | profile_
┣ ඬ⃟ 🌺  _${usedPrefix}myns_
┣ ඬ⃟ 🌺  _${usedPrefix}unreg *numero de serie*_
┣ ඬ⃟ 🌺  _${usedPrefix}minardiamantes | minargemas_
┣ ඬ⃟ 🌺  _${usedPrefix}minargatacoins | minarcoins_
┣ ඬ⃟ 🌺  _${usedPrefix}minarexperiencia | minarexp_
┣ ඬ⃟ 🌺  _${usedPrefix}minar *:* minar2 *:* minar3_
┣ ඬ⃟ 🌺  _${usedPrefix}reclamar | regalo | claim_
┣ ඬ⃟ 🌺  _${usedPrefix}cadahora | hourly_
┣ ඬ⃟ 🌺  _${usedPrefix}cadasemana | semanal | weekly_
┣ ඬ⃟ 🌺  _${usedPrefix}cadames | mes | monthly_
┣ ඬ⃟ 🌺  _${usedPrefix}cofre | abrircofre | coffer_
┣ ඬ⃟ 🌺  _${usedPrefix}trabajar | work_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴛᴏᴘ ɢʟᴏʙᴀʟ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
 『𝑇𝑂𝑃 𝐺𝐿𝑂𝐵𝐴𝐿𝐸𝑆』
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}top | lb | leaderboard_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷sᴛɪᴄᴋᴇʀ ʏ ғɪʟᴛʀᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺 _${usedPrefix}sticker | s *imagen o video*_
┣ ඬ⃟ 🌺 _${usedPrefix}sticker | s *url de tipo jpg*_
┣ ඬ⃟ 🌺 _${usedPrefix}emojimix *😺+😆*_
┣ ඬ⃟ 🌺 _${usedPrefix}scircle | círculo *imagen*_
┣ ඬ⃟ 🌺 _${usedPrefix}semoji | emoji *tipo emoji*_
┣ ඬ⃟ 🌺 _${usedPrefix}attp *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}attp2 *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp2 *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp3 *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp4 *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp5 *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}ttp6 *texto*_
┣ ඬ⃟ 🌺 _${usedPrefix}dado_
┣ ඬ⃟ 🌺 _${usedPrefix}stickermarker *efecto : responder a imagen*_
┣ ඬ⃟ 🌺 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┣ ඬ⃟ 🌺 _${usedPrefix}cs *:* cs2_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
『𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝐹 𝑆𝑇𝐼𝐶𝐾𝐸𝑅』
├┈ ↷  ᴍᴏᴅɪғɪᴄᴀʀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺_${usedPrefix}wm *packname|author*_
┣ ඬ⃟ 🌺_${usedPrefix}wm *texto1|texto2*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}palmaditas | pat *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}bofetada | slap *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}golpear *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}besar | kiss *@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}alimentar | food *@tag*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 


✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ *Para mi creador(a) y*
├• ✐; ₊˚✦୧︰*Mᴏᴅᴇʀᴀᴅᴏʀᴇs.*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌺 _${usedPrefix}autoadmin_
┣ ඬ⃟ 🌺 _${usedPrefix}grouplist_
┣ ඬ⃟ 🌺 _${usedPrefix}chetar_
┣ ඬ⃟ 🌺 _${usedPrefix}leavegc_
┣ ඬ⃟ 🌺 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 🌺 _${usedPrefix}blocklist_
┣ ඬ⃟ 🌺 _${usedPrefix}addowner *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}delowner *<@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}block *<@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}unblock *<@tag*_
┣ ඬ⃟ 🌺 _${usedPrefix}msg *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}banchat_
┣ ඬ⃟ 🌺 _${usedPrefix}unbanchat_
┣ ඬ⃟ 🌺 _${usedPrefix}resetuser *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}unbanuser *_@tag_*
┣ ඬ⃟ 🌺 _${usedPrefix}dardiamantes *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}añadirxp *<@tag> 
┣ ඬ⃟ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc2 *<audio>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc2 *<video>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcgc2 *<imagen>*_
┣ ඬ⃟ 🌺 _${usedPrefix}bcbot *<texto>*_
┣ ඬ⃟ 🌺 _${usedPrefix}cleartpm_
┣ ඬ⃟ 🌺 _${usedPrefix}restart_
┣ ඬ⃟ 🌺 _${usedPrefix}update_
┣ ඬ⃟ 🌺 _${usedPrefix}banlist_
┣ ඬ⃟ 🌺 _${usedPrefix}addprem *<@tag> 
┣ ඬ⃟ 🌺 _${usedPrefix}addprem2 *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}addprem3 *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}addprem4 *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}listcmd_
┣ ඬ⃟ 🌺 _*${usedPrefix}setppbot*_
┣ ඬ⃟ 🌺 _${usedPrefix}addcmd *<texto> 
┣ ඬ⃟ 🌺 _${usedPrefix}delcmd
┣ ඬ⃟ 🌺 _${usedPrefix}saveimage
┣ ඬ⃟ 🌺 _${usedPrefix}viewimage
╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
