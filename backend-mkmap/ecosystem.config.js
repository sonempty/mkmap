module.exports = {
    apps : [
        {
          name: "strapi",
          script: "./src/server.js",
          watch: true,
          env: {
            "NODE_ENV": "production",
          }
        }
    ]
  }