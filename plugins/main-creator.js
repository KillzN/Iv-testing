let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:IVBOT;;\nFN:IVBOT\nORG:IVBOT\nTITLE:\nitem1.TEL;waid=5493492419916:5493492419916\nitem1.X-ABLabel:IVBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:IVBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'IVBOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
