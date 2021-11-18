module.exports = {
    name: '8Ball',
    description: 'random q answering',
    execute(message, args){
        const replies = ["It is certain",
          "It is decidedly so",
              "Without a doubt",
          "Yes, definitely",
              "You may rely on it",
          "As I see it, yes",
              "Most likely",
          "Outlook good",
              "Yes",
          "Signs point to yes",
              "Reply hazy try again",
          "Ask again later",
              "Better not tell you now",
          "Cannot predict now",
              "Concentrate and ask again",
          "Don't count on it",
              "My reply is no",
          "My sources say no",
              "Outlook not so good",
          "Very doubtful",
              "Ask someone else"];
              message.replytext = Math.floor((Math.random() * replies.length) + 0);
        message.reply(replies[message.replytext]);
    }
}