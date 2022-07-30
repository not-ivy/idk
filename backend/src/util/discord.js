import { Client, GatewayIntentBits } from 'discord.js';

// eslint-disable-next-line import/no-mutable-exports
let presences = {};

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences],
});

client.on('presenceUpdate', (_old, newPresence) => {
  if (newPresence.member.id !== '557429876618166283') return;
  presences = { status: newPresence.status, activities: [] };
  newPresence.activities.forEach((p) => {
    presences.activities.push({
      name: p.name,
      emoji: p.emoji,
      state: p.state,
      created: p.createdTimestamp,
    });
  });
});

client.once('ready', () => {
  // eslint-disable-next-line no-console
  console.log('Discord client ready.');
});

export default function startDiscordBot() {
  client.login(process.env.DISCORD_TOKEN);
}

export { presences };
