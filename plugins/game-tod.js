module.exports = {
  command: ["truth", "dare", "tod"],
  description: "Play WhatsApp-based Truth or Dare",
  category: "Game",
  group: false,
  botadmin: false,
  admin: false,
  owner: false,

  execute: async (m, { command }) => {
    const truths = [
      "Have you ever stalked someone’s WhatsApp DP without replying to them?",
      "Who’s the last person you ghosted on WhatsApp?",
      "Ever deleted a message and hoped they didn’t see it?",
      "Have you ever ignored someone’s message on purpose?",
      "Who do you reply fastest to on WhatsApp?",
      "What's the longest you left someone on read?",
      "Ever sent a message to the wrong group or person?",
      "Who’s the person you check the last seen of most?",
      "Have you ever taken a screenshot of someone’s status?",
      "Who’s your secret crush on WhatsApp?",
      "Have you ever pretended to be busy just to avoid chatting?",
      "Ever muted someone permanently?",
      "Have you read a message and replied in your head but forgot to text back?",
      "Ever lied using 'network issue' as an excuse on WhatsApp?",
      "Who do you stalk most in groups?",
      "Have you blocked someone and unblocked them silently?",
      "Have you ever archived a chat to hide it?",
      "Ever sent ‘typing...’ just to make someone wait?",
      "Have you ever replied 😂 but didn’t laugh at all?",
      "Who do you want to talk to but haven’t yet?"
    ];

    const dares = [
      "Text your crush: 'I had a dream about you 🫣'",
      "Send ‘I love you’ to the third person in your chat list.",
      "Post a funny status and leave it for 1 hour.",
      "Type 'I miss you 😢' to the last person you chatted.",
      "Change your DP to a monkey for 10 minutes.",
      "Reply ‘ok baby’ to your best friend without context.",
      "Send a voice note singing your favorite song.",
      "Type your last emoji used in the group.",
      "Screenshot this group and post it on your status with 'Guess what? 🤫'",
      "Send your last 5 emojis here.",
      "Call someone and say 'Did you just WhatsApp me?' then hang up.",
      "Forward the last meme you saved to the group.",
      "Send a sticker without looking.",
      "Message your ex (or pretend to): 'I still think about us.'",
      "Send a ‘good morning’ message to 3 people you rarely talk to.",
      "Change your WhatsApp name to 'I need attention 😭' for 5 minutes.",
      "Send your last photo in gallery here.",
      "Voice note: ‘I’m bored. Talk to me now!’",
      "Ask someone randomly: ‘Did you delete my number?’",
      "Send your last copied message here now."
    ];

    let text = "";
    if (command === "truth") {
      text = `*WHATSAPP TRUTH:*\n${truths[Math.floor(Math.random() * truths.length)]}`;
    } else if (command === "dare") {
      text = `*WHATSAPP DARE:*\n${dares[Math.floor(Math.random() * dares.length)]}`;
    } else {
      const pick = Math.random() > 0.5 ? "truth" : "dare";
      const list = pick === "truth" ? truths : dares;
      text = `*WHATSAPP ${pick.toUpperCase()}:*\n${list[Math.floor(Math.random() * list.length)]}`;
    }

    m.reply(text);
  }
};
