const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6285854337533']
global.premium = ['6285854337533']
global.youtube = 'https://youtube.com/channel/UCHEHOIHj-7z9K3QTapYdNpg'
global.ownername = 'Xynels'
global.botname ='Sayu-Ogiwara'
global.donasi = {
    saweria: 'https://saweria.co/SayuOgiwaraa4',
    nomor: '085854337533'
}
global.packname = '🎫Sayu-Ogiwara'
global.author = 'WhatsApp Bot Xynels'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/lol.jpg')
global.vn = './sound/menu2.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
