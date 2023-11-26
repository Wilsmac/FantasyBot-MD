const comandos = /piedra|papel|tijera|estado|verificar|code|jadibot --code|--code|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `*@${m.sender.split`@`[0]} 𝙴𝚂𝚃𝙰́ 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙿𝙾𝚁 𝙿𝚁𝙸𝚅𝙰𝙳𝙾, 𝙿𝙾𝚁𝚀𝚄𝙴 𝙰𝚂𝙸́ 𝙻𝙾 𝚀𝚄𝙸𝚂𝙾 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁.\n\n⚠️ \`\`\`𝙿𝚁𝙸𝙼𝙴𝚁𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })  
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nnn, nnnt, nnntt, nnnttt ].getRandom()
mensaje = `*@${m.sender.split`@`[0]}  𝚂𝙴 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙾́ 𝚀𝚄𝙴 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙿𝙾𝚁 𝙿𝚁𝙸𝚅𝙰𝙳𝙾,\n𝙿𝚄𝙴𝙳𝙴 𝚄𝙽𝙸𝚁𝚂𝙴 𝙰𝙻 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙶𝚁𝚄𝙿𝙾\n${grupos}\n\n*SI VUELVE A ESCRIBIR SERÁ BLOQUEADO(A)* ‼️\n⚠️ 𝚂𝙴𝙶𝚄𝙽𝙳𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]} 𝚂𝙴𝚁𝙰́ 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾(𝙰). 😾 𝚂𝙴 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙾́ 𝙰𝙽𝚃𝙴𝚂 𝚀𝚄𝙴 𝙽𝙾 𝙿𝙾𝙳𝙸́𝙰 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾.*\n\n⚠️ 𝚃𝙴𝚁𝙲𝙴𝚁𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}

