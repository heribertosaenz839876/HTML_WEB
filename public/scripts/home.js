const iGame = document.getElementById("iGame");
iGame.src = "./game/index.html#id=" + sessionStorage.getItem("id");

console.log("iGame.src =", iGame.src);






const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
  chat.value += "\n" + msg.value;
  msg.value = "";
};

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMsg();
  }
});



