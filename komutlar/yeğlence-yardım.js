const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Eğlence`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' <a:krmzyldz:761318503101759518>s!aşk-ölçer',  ' :white_small_square:Aşk çlçersin.')
             .addField(' <a:krmzyldz:761318503101759518>s!kralol',     ' :white_small_square:Kral olursun.') 
             .addField(' <a:krmzyldz:761318503101759518>s!tokat',      ' :white_small_square:Tokat atarsın.')
             .addField(' <a:krmzyldz:761318503101759518>s!efkarölçer', ' :white_small_square:Efkarınızı ölçer.')
             .addField(' <a:krmzyldz:761318503101759518>s!ara155',     ' :white_small_square:Polisi ararsınız.')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['eğlence','yardım-eğlence'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'eğlence',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  