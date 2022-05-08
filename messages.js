var messages = Array(
   [
      ["Linda", "m1.jpg", "I received 0.0375 BTC to my Bitcoin address!"],
      ["William", "m2.jpg", "And I was paid 4.963 EHT!"],
      ["Jennifer", "m3.jpg", "William, well)"],
      ["David", "m4.jpg", "I won bitcoin too)))"],
      ["Susan", "m5.jpg", "I received an invitation by email"],
      ["Richard", "undefined", "and me"],
      ["Joseph", "m7.jpg", "I won 0.0568 Bitcoin, how do I get it?"],
      ["Thomas", "m8.jpg", "Hello"],
      ["Dorothy", "undefined", "I won)"],
      ["Thomas", "m8.jpg", "Pay the commission and you will get a win"],
      ["Lisa", "m9.jpg", "And I didn't win anything, fak!!!"],
      ["William", "m10.jpg", "Lisa, everything will be fine, you'll be lucky next time"],
      ["Jennifer", "m11.jpg", "no luck..."],
      ["Mark", "m12.jpg", 'I won a 1582 DODGE!!!!!'],
      ["Susan", "m13.jpg", "Will you share it?"],
      ["Mark", "m14.jpg", "Susan, Who would share it with me ?) "],
      ["Susan", "m15.jpg", "a good website"],
      ["William", "m16.jpg", "yes a good one"],
      ["Angelina", "m17.jpg", "I paid the commission and 0.037 Btc was transferred to my bitcoin address"],
      ["Mark", "m18.jpg", "Many people are winning today)"],
      ["Donald", "m19.jpg", "I lost yesterday and won today!"],
      ["Lisa", "m20.jpg", "This is the second time I've won)"],
      ["Helen", "m21.jpg", "I paid the commission and received bitcoin in 20 minutes!"],
      ["Angelina", "m22.jpg", "everything will be alright"],
      ["Harold", "m23.jpg", "I like it here!"],
      ["Thomas", "m24.jpg", "Yes, yes, I won!"],
      ["Sandra", "undefined", "Hi! Has anyone been paid?"],
      ["Linda", "m26.jpg", "Yes!"],
      ["Jose", "undefined", "I received my 0.985 BTC to a Bitcoin address!)"],
      ["Sandra", "undefined", "Yes! There are a lot of them here!"],
      ["Raymond", "undefined", "I got my winnings too"],
      ["Angela", "m30.jpg", "And I didn't win anything (("],
      ["Peter", "undefined", "It's a pity I didn't win anything. I'll try again tomorrow, maybe I'll get lucky."],
      ["Harold", "m32.jpg", "You're out of luck))"],
      ["Brenda", "m33.jpg", "has anyone received bitcoin?"],
      ["Linda", "m34.jpg", "I got."],
      ["Douglas", "undefined", "yes"],
      ["William", "m36.jpg", "Yes, yes"],
      ["Rebecca", "m37.jpg", "William, everything will be fine. many win"],
      ["Kathleen", "undefined", "Today I won 12.85 LTC , tomorrow I will also play!"],
      ["Pamela", "m39.jpg", "Congratulations!"],
      ["Angela", "m40.jpg", "Well done"],
      ["William", "m41.jpg", "I was lucky! I'll get drunk today :))"],
      ["Rebecca", "m42.jpg", "I don't"],
      ["Christine", "undefined", "Then you'll get lucky. The main thing is to keep playing!"],
      ["Christine", "undefined", 'I was lucky. I won 0.035 btc'],
      ["Monica", "m45.jpg", "congratulations"],
      ["Christine", "undefined", "I have paid the commission and the transaction has already been sent to my bitcoin address))"],
      ["Linda", "m47.jpg", "Write when it comes)"],
      ["Jennifer", "m48.jpg", "It's good here?"],
      ["Harold", "m49.jpg", "Yes, especially when I'm lucky since 0.0459 bitcoin has come to me"],
      ["Christine", "undefined", "Monica, The money came))))"],
      ["Jennifer", "m51.jpg", "Will you buy a fur coat tomorrow?))"],
      ["Christine", "undefined", "Not). I'll keep Bitcoin for myself"],
      ["Roger", "m53.jpg", "What is the commission????"],
      ["Roger", "m54.jpg", "Do I need to pay the commission?"],
      ["Sylvia", "undefined", "Yes"],
      ["Harold", "m56.jpg", "I received a bitcoin address of 0.158 BTC"],
      ["Roger", "m57.jpg", "Ryan, you paid a commission????"],
      ["Harold", "m58.jpg", "Yes, I paid for it"],
      ["Andrea", "undefined", "you have to pay to get paid."],
      ["Jennifer", "m60.jpg", "rules are rules, you have to pay a commission if you want to receive a payment"],
      ["Roger", "m61.jpg", "Now I'll pay for it too"],
      ["Jennifer", "m62.jpg", "where will you spend your winnings?"],
      ["Jane", "undefined", "I dreamed of a fur coat, I'll buy it!!"],
      ["Linda", "m64.jpg", "A mink fur coat???))"],
      ["Jane", "undefined", "Yes, it is her))"],
      ["Joe", "undefined", "I was paid 0.977 ETH"],
      ["Lauren", "undefined", "Congratulations!"],
      ["Joe", "undefined", "Did you pay the commission?"],
      ["Cindy", "undefined", "Yes"],
      ["Nicholas", "m70.jpg", "I paid and everything is fine"],
      ["Nicholas", "m71.jpg", "I paid the commission - I got the money!"],
      ["Joe", "undefined", "Have you been waiting long?"],
      ["Nicholas", "m73.jpg", "no"],
      ["Joe", "undefined", "quickly"],
      ["Angelina", "m75.jpg", "Yes, everyone pays quickly"],
      ["Roy", "m76.jpg", "I was paid too!)"],
   ]
);
function getMessageArrayID(page_id) {
   if (page_id < 1) {
      return 0;
   } else if (page_id < 1) {
      return 1;
   } else if (page_id < 1) {
      return 2;
   } else if (page_id < 1) {
      return 3;
   } else if (page_id < 1) {
      return 4;
   } else {
      return 0;
   }
}
function updateScriptMessages() {
   var ctime = Date.now();
   var arrayid = getMessageArrayID(page_id);
   var time =
      localStorage["chatmsgSCTIMELM"] == undefined
         ? ctime
         : parseInt(localStorage["chatmsgSCTIMELM"]);
   if (time <= ctime) {
      var last =
         localStorage["chatmsgSCLAST" + arrayid] == undefined
            ? 0
            : parseInt(localStorage["chatmsgSCLAST" + arrayid]);
      if (last < messages[arrayid].length) {
         localStorage["chatmsgSCTIMELM"] = Math.round(
            ctime + 4000 + Math.random() * 14000
         );
         if (last < 1 && arrayid == 0) {
            for (last = 0; last < 1; last++) {
               addChatMessage(
                  messages[arrayid][last][2],
                  messages[arrayid][last][0],
                  messages[arrayid][last][1],
                  false
               );
               var sound = new Howl({
                  src: ['audio1.mp3']
               });
               sound.play();
            }
            localStorage["chatmsgSCLAST" + arrayid] = last;
         } else {
            addChatMessage(
               messages[arrayid][last][2],
               messages[arrayid][last][0],
               messages[arrayid][last][1],
               false
            );
            var sound = new Howl({
               src: ['audio1.mp3']
            });
            sound.play();
            localStorage["chatmsgSCLAST" + arrayid] = last + 1;
         }
      }
   }
}

var isactive = true;

var lastscroll = 0;
var toscroll = 0;
var divscroll = $(".messages");
var divscrollbutton = $(".buttonscrollend");
var isuserscrolltop = false;
function smarlScroll() {
   var currentScroll = divscroll.scrollTop();
   var toScroll = divscroll.prop("scrollHeight") - divscroll.outerHeight();

   if (!isuserscrolltop && currentScroll < toScroll) {
      if (toScroll - currentScroll > 500) {
         divscroll.scrollTop(toScroll - 100);
         lastscroll = toScroll - 100;
      } else {
         divscroll.scrollTop(currentScroll + 10);
         lastscroll = currentScroll + 10;
      }
   }
   if (lastscroll > toScroll) {
      lastscroll = toScroll;
   }
   if (isuserscrolltop && currentScroll >= toScroll) {
      isuserscrolltop = false;
   }
   if (isuserscrolltop && !divscrollbutton.hasClass("show")) {
      divscrollbutton.addClass("show");
   } else if (!isuserscrolltop && divscrollbutton.hasClass("show")) {
      divscrollbutton.removeClass("show");
   }
}
setInterval(smarlScroll, 20);
$(".messages").scroll(function () {
   var currentScroll = divscroll.scrollTop();
   if (currentScroll < lastscroll) {
      isuserscrolltop = true;
   }
});
divscrollbutton.on("click", function () {
   isuserscrolltop = false;
});

function htmlAddChatMessage(name, text, img, time) {
   if (name == undefined || name == "undefined") {
      return $(".messages").append(
         '<div class="onemessagevbr sender"><img src="me.jpg" class="avavbr"><div class="messagetxt"><div class="chatvbrname">You</div><div class="jegkergd"><span class="djhg">' +
         text +
         '</span><div class="timechatvbr">' +
         time +
         "</div></div></div></div>"
      );
   }
   if (img == undefined || img == "undefined") {
      return $(".messages").append(
         '<div class="onemessagevbr"><img src="me.jpg" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' +
         name +
         '</div><div class="jegkergd"><span class="djhg">' +
         text +
         '</span><div class="timechatvbr">' +
         time +
         "</div></div></div></div>"
      );
   } else {
      return $(".messages").append(
         '<div class="onemessagevbr"><img src="' +
         img +
         '" class="avavbr"><div class="messagetxt"><div class="chatvbrname">' +
         name +
         '</div><div class="jegkergd"><span class="djhg">' +
         text +
         '</span><div class="timechatvbr">' +
         time +
         "</div></div></div></div>"
      );
   }
}

function loadingChatMessage() {
   var last =
      localStorage["lastChatMSG"] == undefined
         ? 0
         : parseInt(localStorage["lastChatMSG"]);
   for (var i = 0; i < last; i++) {
      htmlAddChatMessage(
         localStorage["chatmsgtmNAME" + i],
         localStorage["chatmsgtmTEXT" + i],
         localStorage["chatmsgtmIMG" + i],
         localStorage["chatmsgtmTIME" + i]
      );
   }
   if (last > 0) {
   }
}

loadingChatMessage();

function addChatMessage(text, name, img, rep) {
   var last =
      localStorage["lastChatMSG"] == undefined
         ? 0
         : parseInt(localStorage["lastChatMSG"]);
   localStorage["lastChatMSG"] = last + 1;

   var timeInMs = new Date();
   var time =
      (timeInMs.getHours() > 9
         ? timeInMs.getHours()
         : "0" + timeInMs.getHours()) +
      ":" +
      (timeInMs.getMinutes() > 9
         ? timeInMs.getMinutes()
         : "0" + timeInMs.getMinutes());
   localStorage["chatmsgtmNAME" + last] = name;
   localStorage["chatmsgtmTEXT" + last] = text;
   localStorage["chatmsgtmIMG" + last] = img;
   localStorage["chatmsgtmTIME" + last] = time;
   htmlAddChatMessage(name, text, img, time);
}

function updateMessage() {
   var tmUpdate = localStorage["sendMSGCHAT"] != undefined ? 10000 : 15000;
   setTimeout(updateMessage, tmUpdate);
}
function sendMessage(text) {
   var city =
      (localStorage.country != undefined && localStorage.country != "undefined"
         ? localStorage.country
         : "") +
      (localStorage.city != undefined && localStorage.city != "undefined"
         ? " Ð³. " + localStorage.city
         : "");
   if (city == "") {
      city = "undefined";
   }
}

function sendchatmsg() {
   if ($(".inputVBRSC").val().length > 0) {
      isuserscrolltop = false;
      if (isactive) {
         sendMessage($(".inputVBRSC").val());
         addChatMessage($(".inputVBRSC").val());
         $(".inputVBRSC").val("");

         localStorage["chatmsgSCTIMELM"] = Math.round(
            Date.now() + 40000 + Math.random() * 20000
         );
         localStorage["sendMSGCHAT"] = true;
      } else {
         noplgerr();
      }
   }
}

function updateonline() {
   var vals = [
      "62 people",
      "61 people",
      "62 people",
      "63 people",
      "60 people",
      "64 people",
      "62 people",
      "65 people",
      "61 people",
      "63 people",
   ];
   var id = Math.round(Math.random() * vals.length);
   $(".vbronline").html(vals[id]);
}

function noplgerr() {
   alert('Unknown error, try later.');
}

updateMessage();
updateScriptMessages();
setInterval(updateonline, 5000);
setInterval(updateScriptMessages, 500);