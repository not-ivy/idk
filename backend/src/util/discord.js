import { Client, GatewayIntentBits } from 'discord.js';

// eslint-disable-next-line import/no-mutable-exports
let presence = [];

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences],
});

client.on('presenceUpdate', (_old, newPresence) => {
  if (newPresence.member.id !== '557429876618166283') return;
  presence = {
    status: newPresence.status,
    custom: {
      name: newPresence.activities[0].name,
      emoji: (newPresence.activities[0].emoji) ? newPresence.activities[0].emoji.url : undefined,
      text: newPresence.activities[0].state ?? undefined,
    },
  };
});

client.once('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Discord client ready.');
});

export default function startDiscordBot() {
  client.login(process.env.DISCORD_TOKEN);
}

export { presence };
