let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = `*Instalar* °♡✧*𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫*✧♡°

*ೋ❀❀ೋ═══ • ═══ೋ❀❀ೋ*
 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙏𝙀𝙍𝙈𝙐𝙓
*≪━─━─━─━─◈─━─━─━─━≫*
cd && termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 

git clone https://github.com/Wilsmac/FantasyBot-MD

cd FantasyBot-MD

yarn install

npm install

npm update

npm start 

*╔═════════❖•ೋ° °ೋ•❖═════════╗*
  𝑷𝑹𝑶́𝑿𝑰𝑴𝑨𝑴𝑬𝑵𝑻𝑬 𝑵𝑼𝑬𝑽𝑨𝑺 𝑰𝑵𝑺𝑻𝑨𝑳𝑨𝑪𝑰𝑶𝑵𝑬𝑺 
*╚═════════❖•ೋ° °ೋ•❖═════════╝*

*ೋ❀❀ೋ═══ • ═══ೋ❀❀ೋ*`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler