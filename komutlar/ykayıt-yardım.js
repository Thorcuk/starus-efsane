const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Kayıt sistemi`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' <a:krmzyldz:761318503101759518>s!kayıt-yetkili',   ' :white_small_square: Kayıt sistemi yetkili komutları.')
             .addField(' <a:krmzyldz:761318503101759518>s!kayıt',           ' :white_small_square: Kayıt sistemi komutları.')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['kayıt-yardım','kayıt-yardım'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'kayıt-yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  