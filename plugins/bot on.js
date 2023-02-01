let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Ada apa?😴🥱* ')
}


handler.tags = ['main']
handler.command = /^(yaemikoon)$/i

handler.admin = true

export default handler