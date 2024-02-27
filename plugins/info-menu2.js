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

let menu = `${lenguajeCD['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}\n${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}

╭━─━─━─━─≪✠≫─━─━─━─━╮
├┈‧͙⁺˚*･༓☾　　☽༓･*˚⁺‧͙ 
├┈ 𝒃𝒚 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʜᴏʀᴀʀɪᴏ
├• ✐; ₊˚✦୧︰  .
├┈‧͙⁺˚*･༓☾　　☽༓･*˚⁺‧͙ 
┣ ඬ⃟ 🌺 \`\`\`${horarioFecha}\`\`\`
*╘━ꥇ۬════•| ✿ |•════╝* 
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}add *numero*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sacar | ban | kick  *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}grupo *abrir : cerrar*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}group *open : close*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}daradmin | promote *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}quitar | demote *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banuser *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanuser *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}admins *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}invocar *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tagall *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}hidetag *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}infogrupo | infogroup_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}advertencia *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}deladvertencia *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delwarn *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}crearvoto | startvoto *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sivotar | upvote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}novotar | devote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}vervotos | cekvoto_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delvoto | deletevoto_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}enlace | link_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}newnombre | nuevonombre *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}newdesc | descripcion *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}setwelcome | bienvenida *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}setbye | despedida *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}nuevoenlace | resetlink_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}on_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}off_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ғᴏʀᴍᴀ ᴛᴜ ᴘᴀʀᴇᴊᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}listaparejas | listship_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}mipareja | mylove_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pareja | couple *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}aceptar | accept *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}rechazar | decline *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}terminar | finish *@tag*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴠᴏᴛᴀᴄɪᴏɴᴇs ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}crearvoto | startvoto *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sivotar | upvote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}novotar | devote_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}vervotos | cekvoto_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delvoto | deletevoto_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

 ${readMore}

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
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toimg | img | jpg *sticker*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toanime | jadianime *foto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tovn | vn *video o audio*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tovideo *audio*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tourl *video, imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}toenlace  *video, imagen o audio*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tts es *texto*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʟᴏɢᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}logos *efecto texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}menulogos2_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ᴇғᴇᴄᴛᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}simpcard *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}hornycard *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}lolice *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ytcomment *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}itssostupid_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}pixelar_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blur_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chica_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chico_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cristianoronaldo_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}messi_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}meme_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}meme2_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}itzy_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blackpink_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}kpop *blackpink : exo : bts*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}lolivid_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}loli_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}navidad_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ppcouple_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}neko_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}waifu__
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chiho_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}elaina_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}eba_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}emilia_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cosplay_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
 ${readMore}
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Eғᴇᴄᴛᴏsᴅ ᴅᴇ 
├• ✐; ₊˚✦୧︰ Aᴜᴅɪᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bass_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blown_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}deep_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}earrape_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}fast_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}fat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}nightcore_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}reverse_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}robot_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}slow_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}smooth_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}tupai_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
 ${readMore}
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  ʙᴜsǫᴜᴇᴅᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}animeinfo *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}mangainfo *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}google *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}letra | lirik *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}ytsearch | yts *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌺_${usedPrefix}wiki | wikipedia *texto*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴜᴅɪᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🎧 _${usedPrefix}audios_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}chatgpt *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}delchatgpt
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}afk *<motivo>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}hd *<responde a imagen>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}calc *<operacion math>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}del *<mensaje>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}whatmusic *<audio>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}qrcode *<texto>*__
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}horario_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}dropmail_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}botemporal *enlace* *cantidad*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}addbot *enlace* *cantidad*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}pase premium_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}pass premium_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}listapremium | listprem_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}transfer *tipo cantidad @tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}dar *tipo cantidad @tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}enviar *tipo cantidad @tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}balance_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cartera | wallet_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}experiencia | exp_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}top | lb | leaderboard_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}nivel | level | lvl_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}rol | rango_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}inventario | inventory_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}aventura | adventure_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}caza | cazar | hunt_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}pescar | fishing_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}animales_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}alimentos_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}curar | heal_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}buy_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}sell_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}verificar | registrar_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}perfil | profile_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}myns_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}unreg *numero de serie*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minardiamantes | minargemas_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minargatacoins | minarcoins_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minarexperiencia | minarexp_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}minar *:* minar2 *:* minar3_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}reclamar | regalo | claim_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cadahora | hourly_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cadasemana | semanal | weekly_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cadames | mes | monthly_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}cofre | abrircofre | coffer_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺  _${usedPrefix}trabajar | work_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ᴛᴏᴘ ɢʟᴏʙᴀʟ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
 『𝑇𝑂𝑃 𝐺𝐿𝑂𝐵𝐴𝐿𝐸𝑆』
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}top | lb | leaderboard_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

 ${readMore}
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷sᴛɪᴄᴋᴇʀ ʏ ғɪʟᴛʀᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sticker | s *imagen o video*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}sticker | s *url de tipo jpg*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}emojimix *😺+😆*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}scircle | círculo *imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}semoji | emoji *tipo emoji*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}attp *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}attp2 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp2 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp3 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp4 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp5 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}ttp6 *texto*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}dado_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}stickermarker *efecto : responder a imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cs *:* cs2_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
『𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝐹 𝑆𝑇𝐼𝐶𝐾𝐸𝑅』
├┈ ↷  ᴍᴏᴅɪғɪᴄᴀʀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺_${usedPrefix}wm *packname|author*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺_${usedPrefix}wm *texto1|texto2*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}palmaditas | pat *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bofetada | slap *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}golpear *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}besar | kiss *@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}alimentar | food *@tag*_
*╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ* 

 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ *Para mi creador(a) y*
├• ✐; ₊˚✦୧︰*Mᴏᴅᴇʀᴀᴅᴏʀᴇs.*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}autoadmin_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}grouplist_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}chetar_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}leavegc_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cajafuerte_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}blocklist_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addowner *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delowner *<@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}block *<@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unblock *<@tag*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}msg *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanchat_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}resetuser *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}unbanuser *_@tag_*
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}dardiamantes *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}añadirxp *<@tag> 
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banuser *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bc *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcchats *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc2 *<audio>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc2 *<video>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcgc2 *<imagen>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}bcbot *<texto>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}cleartpm_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}restart_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}update_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}banlist_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem *<@tag> 
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem2 *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem3 *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addprem4 *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delprem *<@tag>*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}listcmd_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _*${usedPrefix}setppbot*_
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}addcmd *<texto> 
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}delcmd
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}saveimage
┣ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌺 _${usedPrefix}viewimage
╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu2|Menu2|menú2|Menú2|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}