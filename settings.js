//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6283830241633']
global.premium = ['6283830241633']
global.ownernomer = '6283830241633'
global.ownername = 'Diego'
global.botname = 'DiegoBOT'
global.footer = 'DiegoBOT'
global.ig = '-'
global.region = 'India, NorthEast, Mizoram'
global.sc = 'https://github.com/Watashi-Diego/DiegoBot'
global.myweb = 'https://Diego.000webhostapp.com'
global.packname = 'DiegoBOT'
global.author = 'Diego'
global.sessionName = 'Diego'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Succes Dekk',
    admin: 'Cuman Bisa Digunain Sama Admin Dekk!',
    botAdmin: 'Harus Jadiin Admin Dlu Dekk!!',
    owner: 'Cuman Owner Dekkk!!',
    group: 'Bisa Di Grup Doang...!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Buat Bot',
    wait: 'Tunggu Bentar Epik...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Diego/Diego.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
