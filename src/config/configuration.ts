export default () => ({
  apiVersion: process.env.GLOBAL_PREFIX || 'api/v1',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  discordjs: {
    token: process.env.DISCORD_BOT_TOKEN,
    guild: process.env.GUILD_ID_WITH_COMMANDS,
    roles: process.env.ROLE_WITHOUT_PLAYLIST_PERMISSION,
  },
});
