const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Kullanıcı`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' <a:krmzyldz:761318503101759518>s!say',                        ' :white_small_square:Sunucudaki kişi sayısını sayar.')
             .addField(' <a:krmzyldz:761318503101759518>s!hava-durumu',                ' :white_small_square:Bölgenizin hava durumunu gösterir.')
             .addField(' <a:krmzyldz:761318503101759518>s!',                           '.')
             .addField(' <a:krmzyldz:761318503101759518>s!',                           '.')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['Kullanıcı','yardım-kullanıcı'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'kullanıcı',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
