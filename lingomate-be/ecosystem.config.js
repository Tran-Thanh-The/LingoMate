const MAX_OLD_SPACE_SIZE = process.env.MAX_OLD_SPACE_SIZE || 2048;
const MAX_MEMORY_RESTART = process.env.MAX_MEMORY_RESTART || 2048;

module.exports = {
  apps: [
    {
      scripts: 'dist/main.js',
      name: 'LingoMate',
      node_args: [`--max_old_space_size=${MAX_OLD_SPACE_SIZE}`],
      max_memory_restart: `${MAX_MEMORY_RESTART}M`,
    },
  ],
};
