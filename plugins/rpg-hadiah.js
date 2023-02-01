let handler = async(m, { conn, args, usedPrefix }) => {
    //if (args[0] == '109080' || args[0] == 'DANZGAMTENK_091' || args[0] == 'BloowwXx' || args[0] == 'BbL016JJQBCSr54OwwW0' || args[0] == 'giftkey01389320007' || args[0] == 'kode013923') {
if (args.length == 0) return conn.reply(m.chat, `Harap masukan code hadiah anda..!!`, m)
    if (args[0] == '456789' || args[0] == '443321' || args[0] == '662522' || args[0] == '322929' || args[0] == '562622' || args[0] == '432282' || args[0] == '002819' || args[0] == '715611' || args[0] == '708090' || args[0] == '706080' || args[0] == '937100' || args[0] == '736390' || args[0] == '762837' || args[0] == '028393' || args[0] == '625529' || args[0] == '727638' || args[0] == '992719' || args[0] == '092739' || args[0] == '727269' || args[0] == '629461' || args[0] == '239210') {

   if (new Date - global.db.data.users[m.sender].lastcode > 86800000) {
     if (new Date - global.db.data.users[m.sender].lastcode < 86800000) throw `Anda sudah mengambill code gift, Code gift anda sudah kadaluarsa..\nTunggu besok iya kak..`
    conn.reply(m.chat, '*🎉 SELAMAT,INI HADIAH OWNER UNTUK KAMU!*\nKamu telah mendapatkan\n100000000 XP ✨\n 99999 Limit 🎫\n10000000000000 Money 💵\n100000 Potion 🥤\n1000000 Mythic 🎁\n1000000 Legendary 🗃️\n10000000000000 Trash 🗑\n10000000 Diamond 💎\n10000000 Emerald ❇️\n10000000 Gold 🪙\n1000000000 Wood 🪵\n\nBagaimana Hadiahnya Menarik Bukan Onichann>.<', m)
    global.db.data.users[m.sender].exp += 100000000
    global.db.data.users[m.sender].limit += 99999
    global.db.data.users[m.sender].money += 10000000000000
    global.db.data.users[m.sender].potion += 100000
    global.db.data.users[m.sender].mythic += 1000000
    global.db.data.users[m.sender].legendary += 1000000
    global.db.data.users[m.sender].trash += 10000000000000
    global.db.data.users[m.sender].diamond += 10000000
    global.db.data.users[m.sender].emerald += 10000000
    global.db.data.users[m.sender].gold += 10000000
    global.db.data.users[m.sender].wood += 10000000
   global.db.data.users[m.sender].lastcode = new Date * 1
} else conn.reply(m.chat, 'Kode anda hanya bisa di gunakan sekali, harap transaksi kembali..', m)
   } else {
        conn.reply(m.chat, `*「 KODE TIDAK VALID 」*`, m)
    }
}
handler.help = ['hadiah <kode>']
handler.tags = ['rpg']
handler.command = /^(hadiah)$/i

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}