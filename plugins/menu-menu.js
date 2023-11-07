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

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${horarioFecha}\`\`\`

• ✐; información 
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: *${lenguajeGB['smsUptime']()}* ➺ _${uptime}_ 
✧: *Registrados »* ${rtotalreg}/${totalreg}
✧: *${lenguajeGB['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
✧:  * ${lenguajeGB['smsVersion']()}* ➺ _${vs}_
✧:  *${lenguajeGB['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
✧:  *${lenguajeGB['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
✧:  *${lenguajeGB['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
╰──────────────✧ 🌹 •°•°

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< info del usuario/>*
├┈・─・﹕₊˚ ✦・୨୧・
┣ *Tipo de registro * ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo ' : 'Registro Rápido '}_` : '❌ _Sin registro_'}
┣ *Mi estado * ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
┣ *Registrado * ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
┣ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯


╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *pareja* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣  *${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *pasatiempos* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣  *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

╭─╮︹︹︹⊹︹︹︹⊹︹︹︹
│   *「 Info Usuario.*
*︶︶♡꒷꒦︶꒦꒷♡꒷꒦︶꒦꒷♡︶︶*
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
╭──╮ - ̗̀ °︹︹︹⊹︹︹︹° 
┊🕸️┊ꦿ⿻ ❜ೃ ¡ Tu nivel:
╰──╯ ░ - ̗̀↳🗝: ⊜ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
╰───────────────────
╰──── +˚🧰 Experiencia:.
˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚⚓ Rango:.
˙·.˙··.˙·.┊ *°*+↷❯ ⊜ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
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
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

*╭━『𝐹𝑈𝑁𝐶𝐼𝑂𝑁 𝐷𝐸 𝑆𝐸𝑅 𝑆𝑈𝐵 𝐵𝑂𝑇』* 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ 💻 _${usedPrefix}serbot | jadibot_
┣ 💻 _${usedPrefix}serbot --code | jadibot --code_
┣ 💻 _${usedPrefix}bots | listjadibots_
┣ 💻 _${usedPrefix}detener | stop_
┣ 💻 _${usedPrefix}bcbot_
╰━━━━━━━━━━━━⬣

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< REPORTAR COMANDO />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 𖤍 _${usedPrefix}reportar_
┣➤${usedPrefix}reportar (comand)
┣ ඬ⃟ 𖤍 _${usedPrefix}dsowner_
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

*╭━〔 ÚNETE AL GRUPO 〕━⬣*
┃ *Une a TOKITOBOT-MD en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${_
*╰━━━━━━━━━━━━⬣*
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Uɴᴇ ᴜɴ ʙᴏᴛ
├• ✐; ₊˚✦୧︰A ᴛᴜ ɢʀᴜᴘᴏ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🌹 _${usedPrefix}botemporal *enlace* *cantidad*_
┣┃  _${usedPrefix}addbot *enlace* *cantidad*>
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

╭─╮︹︹︹⊹︹︹︹⊹︹︹︹
┃ *Convierte en un(a)*
┃ *Usuario(a) Premium!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎟️ _${usedPrefix}listapremium | listprem_
┃🎟️ _${usedPrefix}pase premium_
┃🎟️ _${usedPrefix}pass premium_
*╰──────〰─◠─〰─◠─〰─◠─〰─◠─*

*╭━〔 JUEGOS - MULTI JUEGOS 〕━⬣*
┃🎡➺ _${usedPrefix}mates | matemáticas | math_
┃🎡➺ _${usedPrefix}lanzar *cara* | *cruz*
┃🎡➺ _${usedPrefix}ppt *piedra : papel : tijera*_
┃🎡➺ _${usedPrefix}tictactoe | ttt *sala*_
┃🎡➺ _${usedPrefix}deltictactoe | delttt_
┃🎡➺ _${usedPrefix}topgays_
┃🎡➺ _${usedPrefix}topotakus_
┃🎡➺ _${usedPrefix}toppajer@s_
┃🎡➺ _${usedPrefix}topput@s_
┃🎡➺ _${usedPrefix}topintegrantes | topintegrante_
┃🎡➺ _${usedPrefix}toplagrasa | topgrasa_
┃🎡➺ _${usedPrefix}toppanafrescos | toppanafresco_
┃🎡➺ _${usedPrefix}topshiposters | topshipost_
┃🎡➺ _${usedPrefix}toplindos | toplind@s_
┃🎡➺ _${usedPrefix}topfamosos | topfamos@s_
┃🎡➺ _${usedPrefix}topparejas | top5parejas_
┃🎡➺ _${usedPrefix}gay | gay *@tag*_
┃🎡➺ _${usedPrefix}gay2 *nombre : @tag*_
┃🎡➺ _${usedPrefix}lesbiana *nombre : @tag*_
┃🎡➺ _${usedPrefix}manca *nombre : @tag*_
┃🎡➺ _${usedPrefix}manco *nombre : @tag*_
┃🎡➺ _${usedPrefix}pajero *nombre : @tag*_
┃🎡➺ _${usedPrefix}pajera *nombre : @tag*_
┃🎡➺ _${usedPrefix}puto *nombre : @tag*_
┃🎡➺ _${usedPrefix}puta *nombre : @tag*_
┃🎡➺ _${usedPrefix}rata *nombre : @tag*_
┃🎡➺ _${usedPrefix}love *nombre : @tag*_
┃🎡➺ _${usedPrefix}doxear *nombre : @tag*_
┃🎡➺ _${usedPrefix}doxxeame_
┃🎡➺ _${usedPrefix}pregunta *texto*_
┃🎡➺ _${usedPrefix}apostar | slot *cantidad*_
┃🎡➺ _${usedPrefix}formarpareja_
┃🎡➺ _${usedPrefix}dado_
┃🎡➺ _${usedPrefix}verdad_
┃🎡➺ _${usedPrefix}reto_
┃🎡➺ _${usedPrefix}multijuegos_
┃🎡➺ _${usedPrefix}juegos_
*╰━━━━━━━━━━━━⬣*

*╭━〔 IA 〕━⬣*
┃ *Tienes la Ocasión de*
┃ *Conversar con GataBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ _${usedPrefix}simi | okgoogle *texto*_
┃🪄➺ _${usedPrefix}alexa | siri | cortana *texto*_
┃🪄➺ _${usedPrefix}simsimi | bixby *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ AJUSTES - CHATS ]━━━⬣*
┃ *Configura si eres Propietario(a) y/o*
┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
┃⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
┃⚙️ _${usedPrefix}on *:* off *publico | public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 GRUPO - RESUMEN 〕━⬣*
┃ *Ahora puedes ver el resumen*
┃ *de configuracion de Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧾➺ _${usedPrefix}configuracion_
┃🧾➺ _${usedPrefix}settings_
┃🧾➺ _${usedPrefix}vergrupo_
*╰━━━━━━━━━━━━⬣*

*╭━[ DESCARGAS | DOWNLOADS ]━⬣*
┃🚀➺ _${usedPrefix}imagen | image *texto*_
┃🚀➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃🚀➺ _${usedPrefix}wallpaper|wp *texto*_
┃🚀➺ _${usedPrefix}play | play2 *texto o link*_
┃🚀➺ _${usedPrefix}play.1 *texto o link*_
┃🚀➺ _${usedPrefix}play.2 *texto o link*_ 
┃🚀➺ _${usedPrefix}ytmp3 | yta *link*_
┃🚀➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🚀➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🚀➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🚀➺ _${usedPrefix}tw |twdl | twitter *link*_
┃🚀➺ _${usedPrefix}facebook | fb *link*_
┃🚀➺ _${usedPrefix}instagram *link video o imagen*_
┃🚀➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🚀➺ _${usedPrefix}tiktok *link*_
┃🚀➺ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃🚀➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
┃🚀➺ _${usedPrefix}clima *país ciudad*_
┃🚀➺ _${usedPrefix}consejo_
┃🚀➺ _${usedPrefix}morse codificar *texto*_
┃🚀➺ _${usedPrefix}morse decodificar *morse*_
┃🚀➺ _${usedPrefix}fraseromantica_
┃🚀➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*

*╭━[ CHAT ANONIMO ]━⬣*
┃ *¡Escribe con Alguien* 
┃ *de forma Anónima!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃👤➺ _${usedPrefix}chatanonimo | anonimochat_
┃👤➺ _${usedPrefix}anonimoch_
┃👤➺ _${usedPrefix}start_
┃👤➺ _${usedPrefix}next_
┃👤➺ _${usedPrefix}leave_
*╰━━━━━━━━━━━━⬣*

*╭━[ CONFIGURACIÓN - GRUPOS ]━⬣*
┃ *Mejora tú Grupo con GataBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _${usedPrefix}add *numero*_
┃🌐➺ _${usedPrefix}sacar | ban | kick  *@tag*_
┃🌐➺ _${usedPrefix}grupo *abrir : cerrar*_
┃🌐➺ _${usedPrefix}group *open : close*_
┃🌐➺ _${usedPrefix}daradmin | promote *@tag*_
┃🌐➺ _${usedPrefix}quitar | demote *@tag*_
┃🌐➺ _${usedPrefix}banchat_
┃🌐➺ _${usedPrefix}unbanchat_
┃🌐➺ _${usedPrefix}banuser *@tag*_
┃🌐➺ _${usedPrefix}unbanuser *@tag*_
┃🌐➺ _${usedPrefix}admins *texto*_
┃🌐➺ _${usedPrefix}invocar *texto*_
┃🌐➺ _${usedPrefix}tagall *texto*_
┃🌐➺ _${usedPrefix}hidetag *texto*_
┃🌐➺ _${usedPrefix}infogrupo | infogroup_
┃🌐➺ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┃🌐➺ _${usedPrefix}advertencia *@tag*_
┃🌐➺ _${usedPrefix}deladvertencia *@tag*_
┃🌐➺ _${usedPrefix}delwarn *@tag*_
┃🌐➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃🌐➺ _${usedPrefix}sivotar | upvote_
┃🌐➺ _${usedPrefix}novotar | devote_
┃🌐➺ _${usedPrefix}vervotos | cekvoto_
┃🌐➺ _${usedPrefix}delvoto | deletevoto_
┃🌐➺ _${usedPrefix}enlace | link_
┃🌐➺ _${usedPrefix}newnombre | nuevonombre *texto*_
┃🌐➺ _${usedPrefix}newdesc | descripcion *texto*_
┃🌐➺ _${usedPrefix}setwelcome | bienvenida *texto*_
┃🌐➺ _${usedPrefix}setbye | despedida *texto*_
┃🌐➺ _${usedPrefix}nuevoenlace | resetlink_
┃🌐➺ _${usedPrefix}on_
┃🌐➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ PAREJAS 💞 ]━━⬣*
┃ *Declarate con alguien*
┃ *para que sean Parejas!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃❤️➺ _${usedPrefix}listaparejas | listship_
┃❤️➺ _${usedPrefix}mipareja | mylove_
┃❤️➺ _${usedPrefix}pareja | couple *@tag*_
┃❤️➺ _${usedPrefix}aceptar | accept *@tag*_
┃❤️➺ _${usedPrefix}rechazar | decline *@tag*_
┃❤️➺ _${usedPrefix}terminar | finish *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[ VOTACIONES EN GRUPOS 📧 ]━⬣*
┃ *Ahora puedes hacer*
┃ *Votaciones en Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃📧➺ _${usedPrefix}sivotar | upvote_
┃📧➺ _${usedPrefix}novotar | devote_
┃📧➺ _${usedPrefix}vervotos | cekvoto_
┃📧➺ _${usedPrefix}delvoto | deletevoto_
*╰━━━━━━━━━━━━⬣*

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴍᴇɴᴜʜᴏʀɴʏ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ _${usedPrefix}menuhorny_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Cᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ♻️ _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ ♻️ _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ ♻️ _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tovn | vn *video o audio*_
┣ ඬ⃟ ♻️ _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tts *<idioma> <texto>*_
┣ ඬ⃟ ♻️ _${usedPrefix}tts *<efecto> <texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʟᴏɢᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃🔆 _${usedPrefix}logos *efecto texto*_
┃🌅 _${usedPrefix}menulogos2_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ᴇғᴇᴄᴛᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃⛺ _${usedPrefix}simpcard *@tag*_
┃⛺ _${usedPrefix}hornycard *@tag*_
┃⛺ _${usedPrefix}lolice *@tag*_
┃⛺ _${usedPrefix}ytcomment *texto*_
┃⛺ _${usedPrefix}itssostupid_
┃⛺ _${usedPrefix}pixelar_
┃⛺ _${usedPrefix}blur_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🕹️ _${usedPrefix}kpop *<blackpink _
┣ ඬ⃟ 🕹️ _${usedPrefix}cat_
┣ ඬ⃟ 🕹️ _${usedPrefix}dog_
┣ ඬ⃟ 🕹️ _${usedPrefix}meme_
┣ ඬ⃟ 🕹️ _${usedPrefix}itzy_
┣ ඬ⃟ 🕹️ _${usedPrefix}blackpink_
┣ ඬ⃟ 🕹️ _${usedPrefix}navidad_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpmontaña_
┣ ඬ⃟ 🕹️ _${usedPrefix}pubg_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpgaming_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 🕹️ _${usedPrefix}wprandom_
┣ ඬ⃟ 🕹️ _${usedPrefix}wallhp_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 🕹️ _${usedPrefix}wpmoto_
┣ ඬ⃟ 🕹️ _${usedPrefix}coffee_
┣ ඬ⃟ 🕹️ _${usedPrefix}pentol_
┣ ඬ⃟ 🕹️ _${usedPrefix}caricatura_
┣ ඬ⃟ 🕹️ _${usedPrefix}ciberespacio_
┣ ඬ⃟ 🕹️ _${usedPrefix}technology_
┣ ඬ⃟ 🕹️ _${usedPrefix}doraemon_
┣ ඬ⃟ 🕹️ _${usedPrefix}hacker_
┣ ඬ⃟ 🕹️ _${usedPrefix}planeta_
┣ ඬ⃟ 🕹️ _${usedPrefix}randomprofile_
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
┣ ඬ⃟ ⚙️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ ⚙️ _${usedPrefix}ocr *<responde a imagen>*_
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
┣ ඬ⃟ 🌺 _${usedPrefix}adventure_
┣ ඬ⃟ 🌺 _${usedPrefix}cazar_
┣ ඬ⃟ 🌺 _${usedPrefix}cofre_
┣ ඬ⃟ 🌺 _${usedPrefix}balance_
┣ ඬ⃟ 🌺 _${usedPrefix}claim_
┣ ඬ⃟ 🌺 _${usedPrefix}heal_
┣ ඬ⃟ 🌺 _${usedPrefix}lb_
┣ ඬ⃟ 🌺 _${usedPrefix}levelup_
┣ ඬ⃟ 🌺 _${usedPrefix}myns_
┣ ඬ⃟ 🌺 _${usedPrefix}perfil_
┣ ඬ⃟ 🌺 _${usedPrefix}work_
┣ ඬ⃟ 🌺__${usedPrefix}pase premium_
┣ ඬ⃟ 🌺_${usedPrefix}minar2_
┣ ඬ⃟ 🌺_${usedPrefix}buy_
┣ ඬ⃟ 🌺 _${usedPrefix}buyall_
┣ ඬ⃟ 🌺 _${usedPrefix}verificar_
┣ ඬ⃟ 🌺 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 🌺 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 🌺_${usedPrefix}unreg *<numero de serie>*_
┣ ඬ⃟ 🌺_${usedPrefix}listapremium | listprem_
┣ ඬ⃟ 🌺_${usedPrefix}rol  (rango)_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴛᴏᴘ ɢʟᴏʙᴀʟ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
 『𝑇𝑂𝑃 𝐺𝐿𝑂𝐵𝐴𝐿𝐸𝑆』
┃ *Averigua en que Top te encuentras!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆➺ _${usedPrefix}top | lb | leaderboard_
*╰━━━━━━━━━━━━⬣*

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
『𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝐹 𝑆𝑇𝐼𝐶𝐾𝐸𝑅』
├┈ ↷  ᴍᴏᴅɪғɪᴄᴀʀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ඬ⃟ 🌺_${usedPrefix}wm *packname|author*_
┣ ඬ⃟ 🌺_${usedPrefix}wm *texto1|texto2*_
*╰━━━━━━━━━━━━⬣*

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┃⛱️ _${usedPrefix}bofetada | slap *@tag*_
┃⛱️ _${usedPrefix}golpear *@tag*_
┃⛱️ _${usedPrefix}besar | kiss *@tag*_
┃⛱️ _${usedPrefix}alimentar | food *@tag*_
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
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
