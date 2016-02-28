"use strict"

let redis = require("redis"),
	client = redis.createClient();


client.on("error", (err) => {
	console.log(`Error: ${err}`);
});


client.hset("hash_key", "hashtest 1", "some value", redis.print);

client.quit();
