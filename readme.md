# GenMint 🎨 

GenMint is a Discord bot that combines AI image generation with NFT minting capabilities. Create stunning AI-generated artwork directly in Discord and mint them as NFTs on Zora with a single click.

## Features ✨

- **AI Image Generation**: Generate unique images using state-of-the-art AI models
- **NFT Minting**: Seamlessly mint your generated artwork on Zora
- **Discord Integration**: Simple commands and intuitive interface
- **Real-time Updates**: Track your image generation and minting progress

## Prerequisites 📋

Before you begin, ensure you have:
- Node.js v16.x or higher installed
- npm (Node Package Manager)
- A Discord account with a registered application
- Access to the image generation API

## Setup Guide 🚀

### 1. Discord Bot Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Navigate to the "Bot" section
4. Click "Add Bot"
5. Enable these Privileged Gateway Intents:
   - PRESENCE INTENT
   - SERVER MEMBERS INTENT
   - MESSAGE CONTENT INTENT
6. Save your bot token for later use

### 2. Project Installation

```bash
# Clone the repository
git clone lyledavids/genmint

# Navigate to project directory
cd genmint

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### 3. Configuration

Create a `.env` file in the root directory with the following:

```env
DISCORD_TOKEN=your_discord_bot_token
GATEWAY_IP=your_gateway_ip
```

### 4. Invite Bot to Server

1. Go to OAuth2 → URL Generator in Discord Developer Portal
2. Select the following scopes:
   - bot
   - applications.commands
3. Select these bot permissions:
   - Send Messages
   - Embed Links
   - Attach Files
   - Read Message History
   - Use External Emojis
   - Add Reactions
   - Use Slash Commands
4. Copy and visit the generated URL to invite the bot

### 5. Running the Bot

```bash
# Start the bot
npm start
```

## Usage 💡

Generate an image:
```
!generate a cool cat on the beach
```

The bot will respond with:
1. Generated image
2. "Mint as NFT" button
3. Generation details

---

Made with ❤️ by Lyle
