console.log("Running 05-randomWords");
var nouns, verbs, descriptions, word1, word2, word3, sentence;
nouns = ["You", "A cat", "A group of mice", "A rogue block of cheese"];
verbs = ["danced", "jumped", "flew", "dove"];
descriptions = ["over a cow", "out of the window", "into the lake", "across the room"];

noun = nouns[Math.floor(Math.random()*nouns.length)];
verb = verbs[Math.floor(Math.random()*verbs.length)];
description = descriptions[Math.floor(Math.random()*descriptions.length)];

sentence = noun + " " + verb + " " + description + ".";

console.log(sentence);
alert(sentence);

console.log("05-randomWords Complete");
