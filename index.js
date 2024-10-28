import 'dotenv/config';
import { Client, GatewayIntentBits, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import fetch from 'node-fetch';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.DirectMessages,
  ]
});

// Command handler
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  if (message.content.startsWith('!generate')) {
    const prompt = message.content.slice('!generate'.length).trim();
    if (!prompt) {
      message.reply('Please provide a prompt! Usage: !generate <your prompt>');
      return;
    }

    try {
      // Send initial response
      const loadingMessage = await message.reply('🎨 Generating your image...');

      // Make request to image generation API
      const response = await fetch(`https://${process.env.GATEWAY_IP}/text-to-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model_id: 'ByteDance/SDXL-Lightning',
          prompt: prompt,
          width: 1024,
          height: 1024
        })
      });

      const data = await response.json();
      const imageUrl = data.images[0].url;

      // Create embed with the generated image
      const embed = new EmbedBuilder()
        .setTitle('Generated Image')
        .setDescription(`Prompt: ${prompt}`)
        .setImage(imageUrl)
        .setColor('#00ff00');

      // Create mint button
      const mintButton = new ButtonBuilder()
        .setCustomId('mint_nft')
        .setLabel('Mint as NFT on Zora')
        .setStyle(ButtonStyle.Primary);

      const row = new ActionRowBuilder()
        .addComponents(mintButton);

      // Edit the loading message with the result
      await loadingMessage.edit({
        content: '',
        embeds: [embed],
        components: [row]
      });

    } catch (error) {
      console.error('Error:', error);
      message.reply('Sorry, there was an error generating your image.');
    }
  }
});

// Button interaction handler
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'mint_nft') {
    // zora sdk stuff
    await interaction.reply({
      content: 'Minting functionality will be implemented in the next phase!',
      ephemeral: true
    });
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// error handling
client.on('error', (error) => {
  console.error('Discord client error:', error);
});

// Login to Discord with error handling
client.login(process.env.DISCORD_TOKEN).catch(error => {
  console.error('Failed to login:', error);
});