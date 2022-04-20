const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'caughtin65536k',
    description: 'caughtin65536k',
    usage: 'cauthin65536k',
    aliases: ['caughtin4k', 'caughtin65536k'],
    cooldown: 1,
    async execute(client, message, args) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username, `${message.author.displayAvatarURL({ dynamic: true })}?size=1024`)
            .setDescription('Caught in 64K UHD surround sound 16 Gigs ram, HDR GEFORCE RTX, TI-80 texas insturments, Triple A duracell battery ultrapower100 Cargador Compatible iPhone 1A 5 W 1400 + Cable 100% 1 Metro Blanco Compatible iPhone 5 5 C 5S 6 SE 6S 7 8 X XR XS XS MAX GoPro hero 1 2 terrabyte xbox series x Dell UltraSharp 49 Curved Monitor - U4919DW Sony HDC-3300R 2/3" CCD HD Super Motion Color Camera, 1080p Resolution Toshiba EM131A5C-SS Microwave Oven with Smart Sensor, Easy Clean Interior, ECO Mode and Sound On/Off, 1.2 Cu. ft, Stainless Steel HP LaserJet Pro M404n Monochrome Laser Printer with Built-in Ethernet (W1A52A) GE Voluson E10 Ultrasound Machine LG 23 Cu. Ft. Smart Wi-Fi Enabled InstaView Door-in-Door Counter-Depth Refrigerator with Craft Ice Maker GFW850SPNRS GE 28" Front Load Steam Washer 5.0 Cu. Ft. with SmartDispense, WiFi, OdorBlock and Sanitize and Allergen - Royal Sapphire Kohler K-3589 Cimarron Comfort Height Two-Piece Elongated 1.6 GPF Toilet with AquaPiston Flush Technology., Quick Charge 30W Cargador 3.0 Cargador de Viaje Enchufe Cargador USB Carga Rápida con 3 Puertos carga rápida Adaptador de Corriente para iPhone x 8 7 Xiaomi Pocophone F1 Mix 3 A1 Samsung S10 S9 S8AUKEY Quick Charge 3.0 Cargador de Pared 39W Dual Puerto Cargador Móvil para Samsung Galaxy S8 / S8+/ Note 8, iPhone XS / XS Max / XR, iPad Pro / Air, HTC 10, LG G5 / G6 AUKEY Quick Charge 3.0 Cargador USB 60W 6 Puerto Cargador Móvil para Samsung Galaxy S8 / S8+ / Note 8, LG G5 / G6, Nexus 5X / 6P, HTC 10, iPhone XS / XS Max / XR, iPad Pro/ Air, Moto G4 SAMSUNG 85-inch Class Crystal UHD TU-8000 Series - 64K UHD HDR Smart TV with Alexa Built-in (UN85TU8000FXZA, 2020 Model) GE 38846 Premium Slim LED Light Bar, 18 Inch Under Cabinet Fixture, Plug-In,  Bagless, Ur mom Xiaomi mix  5G 12gb RAM 256GB storage Samsung smart fridge twitter for LG smartfridge + LG G7 thinq S21 ultra 5G 12GB RAM 256GB storage Xiaomi mi home easy to connect')
        message.channel.send({ embeds: [embed] });
    }
}