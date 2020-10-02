const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Moderasyon`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField('s!otorol',                     '`Otorol sistemini gösterir.`')
             .addField('s!kilit <süre>',               '`Belirli bir süre kanalı kilitlersin.`')
             .addField('s!sil <sayı>',                 '`Kanaldaki mesajları siler.`')
             .addField('s!embed',                      '`Embed bir şekilde yaza bilirsin.`')
             .addField('s!reklam-engelle',             '`Sunucunuzdaki reklamları engeller.`')
             .addField('s!slow-mod <süre>',            '`Yavaş modu açarsınız.`')
             .addField('s!rol-ver',                    '`İstediğiniz kişiye rol verirsiniz.`')
             .addField('s!küfür-ayarla <aç kapat>',    '`Sunucunuzdaki küfürleri engeller.`')
             .addField('s!ban',                        '`Bir kullanıcıyı banlarsınız.`')
             .addField('s!capslock-engelle', '`Büyük harf ile yazmasını engeller.`') 
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['moderasyon','yardım-moderasyon'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'moderasyon  ',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
