const { LineBot } = require("bottender");
const { createServer } = require("bottender/express");

const bot = new LineBot({
  accessToken: "RVPUtr9S+FKNCOsU2NbsScUq2D/PbCNvgfwQYFn2j3yc5phB+PjDiX96f5P2zfp1zCVzwEymeXjyebTSrWkxn64/lfaaDmsOsWTi9ZvFS7bJrrki01a503aOZacbA+AOzlT3E1IR7Ke/GsE75koGxAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "d49971225a5f5f2cf5942369fd4d837c"
});

bot.onEvent(async context => {
  // 1. Pengecekan apakah bot menerima chat berupa text
  if (context.event.isText) {
    // // 2. Ambil value text yang dikirim oleh user, simpan di variabel receivedMessage
    // const receivedMessage = context.event.text;

    // if (receivedMessage.split(" ").length === 1) {
    //     await context.replyText("sheed");
    // }
    // else if (receivedMessage.split(" ").length === 2) {
    //   await context.replyText(sumResult);
    // } 
    // else {
    //   // 8. Beri respon kepada user jika format pesan yang diberikan tidak sesuai
    //   await context.replyText(
    //     "Maaf pesanmu tidak sesuai format, contoh yang benar: 1 3 atau 10 12"
    //   ); 
    //}

        var rand = Math.floor(Math.random() * 11);
        
        if (rand === 0){
            await context.replyText("sheed");
        }
        if (rand === 1){
            await context.replyText("woakwokaowkaok");
        }
        if(rand === 2){
            await context.replyText("fugg");
        }
        if(rand === 3){
            await context.replyText("noice");
        }
        if(rand === 4){
            await context.replyText("boom");
        }
        if(rand === 5){
            await context.replyText("skibb");
        }
        if(rand === 5){
            await context.replyText("paramennn");
        }
        if(rand === 6){
            await context.replyText("mantulll");
        }
        if(rand === 7){
            await context.replyText("anj");
        }
        if(rand === 8){
            await context.replyText("wut");
        }
        if(rand === 9){
            await context.replyText("weanjai");
        }
        else{
            await context.replyText("doggo");
        }
    }
});
const server = createServer(bot);
server.listen(process.env.PORT || 5000, () => {
  console.log("server is running on 5000 port...");
});