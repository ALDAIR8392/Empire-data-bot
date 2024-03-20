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
const _0x44713f = _0x34b6;
function _0x34b6(_0x355db8, _0x38a593) {
    const _0x400972 = _0x5695();
    return _0x34b6 = function (_0x16a5bb, _0x27e0c3) {
        _0x16a5bb = _0x16a5bb - (0x1 * 0x12fa + -0x12dc + -0x16 * -0xb);
        let _0x5e2a77 = _0x400972[_0x16a5bb];
        return _0x5e2a77;
    }, _0x34b6(_0x355db8, _0x38a593);
}
function _0x5695() {
    const _0x4cecf4 = [
        '10QkaAWA',
        '50166towazJ',
        'split',
        '7930580BDnYXG',
        '16rFbvUv',
        ',;;;\x0aFN:',
        ',\x0aitem1.TEL;waid=',
        '1528180FrsxKo',
        'sender',
        '855510JLyYbE',
        './media/menus/Menu1.jpg',
        '2370321JHDFol',
        '2784531yQdyIG',
        'readFileSync',
        '46058790kkljpF',
        '25WXxsFt',
        '\x0aitem1.X-ABLabell:Ponsel\x0aEND:VCARD'
    ];
    _0x5695 = function () {
        return _0x4cecf4;
    };
    return _0x5695();
}
(function (_0x4d3b1a, _0x58b11c) {
    const _0x423612 = _0x34b6, _0x34f90f = _0x4d3b1a();
    while (!![]) {
        try {
            const _0x37ec1c = parseInt(_0x423612(0x111)) / (-0x1e * 0x11a + 0x2 * -0x4e4 + -0x891 * -0x5) * (-parseInt(_0x423612(0x112)) / (0x6b6 + 0x6a9 + -0xd5d)) + -parseInt(_0x423612(0x11d)) / (0x1ee + 0x255e + -0x2749) + -parseInt(_0x423612(0x118)) / (0x1 * 0x219d + -0x1156 + 0x17 * -0xb5) + parseInt(_0x423612(0x120)) / (-0x14a9 + -0x1 * -0xb5d + 0x3 * 0x31b) * (-parseInt(_0x423612(0x11a)) / (0x1e * 0x47 + 0x1588 + -0x1dd4)) + -parseInt(_0x423612(0x114)) / (-0x1c9c + 0x8a9 + 0x13fa) + parseInt(_0x423612(0x115)) / (0x12d * -0x1d + -0x257d + 0xb2 * 0x67) * (-parseInt(_0x423612(0x11c)) / (0x222 * 0x3 + -0x3af * -0x1 + -0x1 * 0xa0c)) + parseInt(_0x423612(0x11f)) / (0x89f * -0x1 + -0x15 * -0x81 + 0xf6 * -0x2);
            if (_0x37ec1c === _0x58b11c)
                break;
            else
                _0x34f90f['push'](_0x34f90f['shift']());
        } catch (_0x47fdc1) {
            _0x34f90f['push'](_0x34f90f['shift']());
        }
    }
}(_0x5695, 0xf371d + -0x1 * -0x6f85a + -0xbed97));
let fkontak2 = {
    'key': { 'participant': '0@s.whatsapp.net' },
    'message': {
        'contactMessage': {
            'displayName': wilmerofc,
            'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;' + author + _0x44713f(0x116) + author + _0x44713f(0x117) + m[_0x44713f(0x119)][_0x44713f(0x113)]('@')[-0x1484 * 0x1 + -0x666 + 0x1aea] + ':' + m['sender'][_0x44713f(0x113)]('@')[-0x162a + 0x546 + 0x10e4] + _0x44713f(0x110),
            'jpegThumbnail': fs[_0x44713f(0x11e)](_0x44713f(0x11b)),
            'thumbnail': fs['readFileSync']('./media/menus/Menu1.jpg'),
            'sendEphemeral': !![]
        }
    }
};
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

let menu = `${lenguajeCD['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}\n${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* _*NIXX GPT BETA AI*_ 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}

╭━─━─━─━─≪✠≫─━─━─━─━╮
├┈‧͙⁺˚*･༓☾　creadores: +51 954 413 664 - +54 9 351 718-7839 ☽༓･*˚⁺‧͙ 
├┈ ↷  ʜᴏʀᴀʀɪᴏ
├• ✐; ₊˚✦୧︰  .
├┈‧͙⁺˚*･༓☾　　☽༓･*˚⁺‧͙ 
┣ ඬ⃟ 🌺 \`\`\`${horarioFecha}\`\`\`
*╘━ꥇ۬════•| ✿ |•════╝* 
 ${readMore}

✞͙͙͙͙͙͙͙͙͙͙· · ─────── ·𖥸· ─────── · ✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ ɪɴғᴏ ᴅᴇ ʙᴏᴛ
├• ✐; ₊˚✦୧︰  .
├┈»»————- *️ ————-««
╠ ☬⃝ᩎ🌹 *${lenguajeCD['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *Registrados »* ${rtotalreg}/${totalreg}    
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsUptime']()}* ➺ _${uptime}_ 
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeCD['smsModePrivate']().charAt(0).toUpperCase() + lenguajeCD['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeCD['smsModePublic']().charAt(0).toUpperCase() + lenguajeCD['smsModePublic']().slice(1).toLowerCase()}`}_
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌹 *${lenguajeCD['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌹 *${lenguajeCD['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
*╘━ꥇ۬════•| ✿ |•════╝* 
 ${readMore}

╭· · ─────── ·𖥸· ───── · 
┃ *< *información de ti* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}_` : '❌ _Sin registro_'}
┣ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
┣ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
┣ *${lenguajeCD['smsBotonM7']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏
 ${readMore}

*╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃*< *información* />*
├┈・─・﹕₊˚ ✦・୨୧・
╠ *${lenguajeCD['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeCD['smsResultPareja']()}`}
╠ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏
 ${readMore}

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
╰──── +˚👾 *NixxCoins* :.
˙·.˙··.˙·.┊ *°*+↷❯ ${money}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🪙 Tokens:.
˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─ 
*༺═───────────────────────═༻*
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ACERCA DE:📝*
├➽ *.join <se une el bot a tu grupo>*
├➽ *.logos <menu de logos>*
├➽ *.link <de del grupo actual>*
├➽ *.menu2 <audios del bot>*
├➽ *.animes [imagenes]*
├➽ *.grupos <grupos del creador>*
├➽ *.owner [creador]*
├➽ *.enable [Opciones para admin"s]*
├➽ *.hidetag <texto>
├➽ *.tagall*
├➽ *.shop [tienda]*
├➽ *.reporte [reportar cmd con errores]*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *JUEGOS* 🎮
├➽ *tictactoe <nombre de la sala>*
├➽ *.Mates <modo>*
├➽ *.ppt <papel/piedra/tijera>*
├➽ *.gay* <@tag> [perfil gay]*
├➽ *.doxear <@tag>*
├➽ *.Top <ejemplo: <.top pendejos>*
├➽ *.love <@tag>*
├➽ *.pvp <@tag>*
├➽ *.juego [piedra/papel/tijera]*
├➽ *.acertijo*
├➽ *.formarpareja [parejas ramdon]*
├➽ *.slot [ruleta]*
︎╰───────────────
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *CHATGPT* 📡
├➽ *.ia *<Chatgpt>*
├➽ *.ia2 <Regenerador de imágenes>*
├➽ *.iavoz <respuesta con audio>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *REGISTRO* 🧑🏻‍💻
├➽ *.reg <nombre.edad>*
├➽ *.unreg <número de serie>*
├➽ *.mysn <Tú número de serie>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *STICKERS* ❥」
├➽ *.s*
├➽ *.sticker*
├➽ *.stickersearch <buscador de 📦 de stickers>
├➽ *.sermoverbg [sticker sin fondo]*
├➽ *.scircle [sticker circular]*
├➽ *.emojimix ☺&😈*
├➽ *.attp*
├➽ *.dados*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *FUN* 🤖
├➽ *.lolice @tag*
├➽ *.simpcard @tag*
├➽ *.hornycard <licencia virtual FUN>*
├➽ *.estúpido @tag*
├➽ *.meme*
├➽ *.toimg*
├➽ *.mp3 <vídeo a Audio>*
├➽ *.readvo*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *PREMIUM* 🏆 
├➽ *.join <se une el bot a tu grupo>* 
├➽ *.mediafire <link>*
├➽ *.ia2 <Regenerador de imágenes*
├➽ *.horario <de todos los países>*
︎╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *MAKER* ❥」
├➽ *.lolivid*
├➽ *.loli*
├➽ *.neko*
├➽ *.waifu*
├➽ *.messi*
├➽ *.cr7*
├➽ *.kpop*
├➽ *.blackpink*
├➽ *.cat*
├➽ *.wallpaper*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *GRUPO*  ❥」
├➽ *.promote @tag*
├➽ *.demote @tag*
├➽ *.infogp <info del grupo>*
├➽ *.hidetag*
├➽ *.afk <razón>
├➽ *.delete*
├➽ *.warn @tag*
├➽ *.unwarn @tag*
├➽ *.ban @tag*
├➽ *.unban @tag*
├➽ *.kick @tag*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TRANSFERENCIA"S*
├➽ *.transferjoincount <cantidad>* @tag
├➽ *.transferlimit <cantidad>* @tag
├➽ *.transferxp <cantidad>* @tag
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ECONOMÍA Y RECOMPENSAS* ❥」
├➽ *.minar*
├➽ *.minar2*
├➽ *.minar3*
├➽ *.claim*
├➽ *.coffer*
├➽ *.bal* 
├➽ *.busyall*
├➽ *.bus <cantidad>* 
├➽ *.buyall*
├➽ *.buy <cantidad>*
├➽ *.dolares*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *REACCIONES* ❥」
├➽ *.kiss <tag>*
├➽ *.pat* <tag>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *DESCARGAS ⎙*
├➽ *.wikipedia <busqueda>*
├➽ *.animeinfo <nombre>*
├➽ *.audio* <nombre de la música>
├➽ *.video* <nombre del video>
├➽ *.ytmp3 <url>
├➽ *.ytmp4 <url>*
├➽ *.tiktok* <link>
├➽ *.mediafire <link>*
├➽ *.twitter*
├➽ *.google*
├➽ *.ytbuscar*
├➽ *.gdrive*
╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TOOLS* 🧑🏻‍💻
├➽ *.hd <imagen>*
├➽ *.calculadora*
├➽ *.perfil*
├➽ *.clima*
├➽ *.styletext <texto>
├➽ *.covid*
├➽ *.horario*
︎╰────────────────╯`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak2)

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(prueba00|m|menú|Menú|menu|Menu|menucompleto|menubot|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
