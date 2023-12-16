import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `${lenguajeGB['smsAvisoMG']()} *ESCRIBA EL NOMBRE DEL APK*`;
  try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `${eg}┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃𝙽𝙾𝙼𝙱𝚁𝙴: ${data5.name}\n✥---------------✥---------------✥\n┃𝙿𝙰𝙲𝙺𝙰𝙶𝙴: ${data5.package}\n✥---------------✥---------------✥\n┃𝚄𝙻𝚃𝙸𝙼𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾𝙽: ${data5.lastup}\n✥---------------✥---------------✥\n┃𝙿𝙴𝚂𝙾 |  𝚂𝙸𝚉𝙴: ${data5.size}\n✥---------------✥---------------✥\n┃ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝙰𝙿𝙺 🖕🏻\n⚊⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊⚊`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: '*EL APK ES MUY PESADO.*'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
} catch {
throw `${lenguajeGB['smsAvisoFG']()} *NO HAY RESULTADOS DE LO QUE SOLICITA*`;
}};
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
//handler.register = true
handler.limit = 2
export default handler;