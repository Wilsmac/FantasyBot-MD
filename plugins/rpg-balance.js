let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 🔖 *𝑩𝑨𝑳𝑨𝑵𝑪𝑬* 〕━⬣
┃ *𝑼𝑺𝑼𝑨𝑹𝑰𝑶(𝑨) | 𝑼𝑺𝑬𝑹*
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *${global.db.data.users[who].limit} Diamantes* 💎
*┈┈┈┈『${vs}』┈┈┈┈*`  \n\n*COMPRAR DIAMANTES CON EXP*
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON FantasyCOINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`)

/*let d = `
*COMPRAR DIAMANTES CON EXP*
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON FantasyCOINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`
conn.sendButton(m.chat, d, wm, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu']
], m)
await conn.sendHydrated(m.chat, d, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu']
], m,)*/
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
