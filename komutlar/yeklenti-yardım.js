const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Bot Menüsü`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' <a:krmzyldz:761318503101759518>s!kayıt-yardım',       ' :white_small_square:Kayıt Sistemi.')
             .addField('s!',         '`.`')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['eklenti','yardım-eklenti'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'eklenti',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  