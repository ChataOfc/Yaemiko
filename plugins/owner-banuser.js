let handler = async (m, { conn, text }) => {
    if (!text) throw 'Who wants to be banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'sᴜᴄᴄᴇs!', m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.rowner = true

export default handler
