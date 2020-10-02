const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Moderasyon 2`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField('s!sa-as <aç kapat> ', '`Sa as açar.`')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['moderasyon2','yardım-moderasyon2'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'moderasyon2',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
