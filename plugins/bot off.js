let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Miko disuruh owner tidur bye semua🥱😴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['yaemiko(on/off)']
handler.tags = ['main']
handler.command = /^(yaemikooff)$/i

handler.admin = true

export default handler