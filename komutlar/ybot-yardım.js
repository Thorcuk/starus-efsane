const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Bot Menüsü`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' <a:krmzyldz:761318503101759518>s!ping',       ' :white_small_square: Botunpingini gösterir')
             .addField(' <a:krmzyldz:761318503101759518>s!emojibilgi', ' :white_small_square:İsmini girdiniz emojinin bilgilerini gösterir.')
             .addField(' <a:krmzyldz:761318503101759518>s!istatistik', ' :white_small_square:Botun istatistiklerini atar.')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['bot','yardım-bot'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'bot',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  