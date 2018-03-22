var facebookProfile = {
  name: "Dina Ahmetspahic",
  friends:50,
  messages:["This is my page", "Hello everyone"],
 postMessage(message){
     facebookProfile.messages.push(message);

  },

 deleteMessage(index){
  facebookProfile.messages.splice(index,1);
},
addFriend(){
  facebookProfile.friends ++;
},
removeFriend() {
    facebookProfile.friends--;
},

};

facebookProfile.postMessage("zivcira me radi sve grr");
console.log(facebookProfile.messages);
