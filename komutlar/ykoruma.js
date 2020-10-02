const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Bot Menüsü`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!ban-limit', 'Sunucunuzdan biri banlanırsa banlayan kişinin yetkisi alınır.')
             .addField(' s!sağ-tık-kick', 'Sunucunuzdan biri atılırsa atan kişinin yetkisi alınır.')
             .addField(' s!mod-log', 'Sunucunun denetim kaydını bir kanala atar.')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['koruma','yardım-koruma'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'koruma',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  