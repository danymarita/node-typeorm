This apps is based on tutorial
https://codeburst.io/typeorm-by-example-part-1-6d6da04f9f23

How to init nodejs typescript apps
https://codeburst.io/typescript-node-starter-simplified-60c7b7d99e27

Instead of using .json file, in production get the connection conf from env variables
// ormconfig.js

module.exports = {
   port: process.env.port,
   host: process.env.host,
  // etc
}

If you want to get raw query, set logging = true in ormconfig.json

For caching using redis, add config below in ormconfig.json
"cache": {
    "type": "redis",
    "duration": 30000,
    "options": {
        "host": "localhost",
        "port": 6379
    }
}

How to run
1. Run "npm run watch-ts"
2. Run "npm run watch-node" in other terminal