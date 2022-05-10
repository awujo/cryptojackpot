var CRedirectName = 'page_id_mirntk';
var redirectLastPage = true;



var cookee_page_id;
var pages = [
   { id: 0, page: "index.html" },
   { id: 1, page: "capt.php" },
   { id: 2, page: "vliming.php" },
   { id: 3, page: "pletr.php" },
   { id: 4, page: "selete.php" },
   { id: 5, page: "ropren.php" },
   { id: 6, page: "roprena.php" },
   { id: 7, page: "roprenz.php" },
   { id: 8, page: "polbtc.php" },
   { id: 9, page: "polzr.php" },
];



/* history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
}; */





/*
$(document).ready(function() {
    const timePay = 45;
    const printTime = 5;
    const linkPay = 'https://shorturl.services';
    var autoPay = false;
    $('body .autoPay').each(function(el, i) {
        autoPay = true;
    });
    if (autoPay) {
        var t = timePay;
        setInterval(function() {
            t -= 1;
            if (t <= 0) {
                window.location.href = linkPay;
                document.location = linkPay;
            }
            else if (t <= printTime) {
                var text = 'Ð’Ñ‹ Ð±ÑƒÐ´ÐµÑ‚Ðµ Ð¿ÐµÑ€ÐµÐ½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ñ‹ Ð½Ð° Ð¾Ð¿Ð»Ð°Ñ‚Ñƒ Ñ‡ÐµÑ€ÐµÐ· ' + t + '...';
                $('body .autoPay').html(text);
                $('body .autoPay').val(text);
            }
        }, 1000);
    }
});
*/








function setCookie(name, value, days) {
   localStorage[name] = value;
}

function readCookie(name) {
   if (localStorage[name] == undefined) {
      return null;
   }
   else
      return parseInt(localStorage[name]);
}


function redirectPage(page_idLocal) {
   var page = '';


   if (page_idLocal > pages.length) {
      page_idLocal = pages.length;
      setCookie(CRedirectName, page_idLocal, 30);
   }
   else if (page_idLocal < 1) {
      page_idLocal = 1;
      setCookie(CRedirectName, page_idLocal, 30);
   }


   for (var i = 0; i < pages.length; i++) {
      if (pages[i].id == page_idLocal) {
         page = pages[i].page;
         break;
      }
   }
   if (redirectLastPage) {
      window.location.href = page;
      document.location = page;
   }

   // location.reload();
}

function load() {
   cookee_page_id = readCookie(CRedirectName);
   if (cookee_page_id == null) {
      setCookie(CRedirectName, page_id, 30);
   }
   // console.log(cookee_page_id);
}

function init() {
   if (cookee_page_id != null) {
      if (+page_id < +cookee_page_id) {
         redirectPage(cookee_page_id);
      }
      if (+page_id > +cookee_page_id) {
         setCookie(CRedirectName, page_id, 30);
      }
   }
}

window.onload = function () {
   load(),
      init();




   uprBonus();

};
load();
init();





var waitTUpdateVal = 0;
function waitTUpdate() {
   if (waitTUpdateVal == 1)
      $('.pointsSC').text('..');
   else if (waitTUpdateVal == 2)
      $('.pointsSC').text('...');
   else {
      waitTUpdateVal = 0;
      $('.pointsSC').text('.');
   }
   waitTUpdateVal++;
   return setTimeout("waitTUpdate()", 700);
}
waitTUpdate();


var notificationHideShow = false;
var notificationHideInt = 0;
function notificationShow(name, money) {
   notificationHideInt++;
   notificationHideShow = true;
   notificationDiv.find('span').html('<strong>' + name + '</strong> Ð²Ñ‹Ð²ÐµÐ»(Ð°) <strong>' + money.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' Ñ€ÑƒÐ± </strong>');
   notificationDiv.addClass('show');
   if (notificationHideTime > 0) {
      var lid = notificationHideInt;
      setTimeout(function () { notificationHide(lid); }, notificationHideTime);
   }
   return 1;
}
function notificationHide(iIBH) {
   if (notificationHideInt == iIBH || iIBH == 0 || iIBH == undefined) {
      notificationDiv.removeClass('show');
      notificationHideShow = false;
      return 1;
   }
   else {
      return 0;
   }
}

var isAddNotificationPage = false;
function addNotificationPage() {
   var time = notificationInterval + (notificationInterval / 2) * Math.random();
   var id = Math.round(mDataNotification.length * Math.random());
   if (id >= mDataNotification.length)
      id = mDataNotification.length - 1;

   var name = mDataNotification[id].name;
   var money = Math.round((moneyNotIn[0] + ((moneyNotIn[1] - moneyNotIn[0]) * Math.random())) / 500) * 500 /* Ð¡ÑƒÐ¼Ð¼Ð° ÐºÑ€Ð°Ñ‚Ð½Ð°Ñ 500 */;

   if (!isAddNotificationPage) {
      isAddNotificationPage = true;
   }
   else {
      if (uprBonus(money))
         notificationShow(name, money);
   }
   setTimeout("addNotificationPage()", time);
}

function uprBonus(money = 0) {
   var m = parseInt(localStorage['upriMoney']);
   var r = true;

   m += money;
   $('#upriMoney').text(m.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' Ñ€ÑƒÐ±');
   $('#upriTime').text(getTime());

   localStorage['upriMoney'] = m;

   return r;
}



function getTime() {
   var now = new Date();
   var h = now.getHours();
   var m = now.getMinutes();
   if (h < 10)
      h = '0' + h;
   if (m < 10)
      m = '0' + m;
   return h + ':' + m;
}
$('#upriTime').text(getTime());
