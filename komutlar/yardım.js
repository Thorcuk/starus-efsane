const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Yardım`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(' <a:krmzyldz:761318503101759518>s!kullanıcı',    '** :white_small_square:Kullanıcı Komutları.**')
             .addField(' <a:krmzyldz:761318503101759518>s!moderasyon',   '** :white_small_square:Moderasyon Komutları**.')
             .addField(' <a:krmzyldz:761318503101759518>s!moderasyon2',  '** :white_small_square:Moderasyon2 Komutları**')
             .addField(' <a:krmzyldz:761318503101759518>s!eğlence',      '** :white_small_square:Eğlence Komutları.**')
             .addField(' <a:krmzyldz:761318503101759518>s!koruma',       '** :white_small_square:Koruma Komutları.**')
             .addField(' <a:krmzyldz:761318503101759518>s!bot',          '** :white_small_square:Bot Komutları.**')
             .addField(' <a:krmzyldz:761318503101759518>s!eklenti',      '** :white_small_square:Eklenti Komutları.**')
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
