module.exports = {
  apps: [
    {
      name: "alpha72", // Name of the application
      script: "node_modules/next/dist/bin/next", // Using npm to run the app
      args: "start", // Start command for the app
      cwd: "/rvdata/alpha72", // The project directory (path to your Next.js app)
      env: {
        NODE_ENV: "production", // Default environment variables
        PORT: 3017,
      },
      env_file: "/rvdata/env-files/alpha72.env", // Path to the custom .env file
    },
  ],
};
