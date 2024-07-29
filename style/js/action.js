let lamp        = document.querySelector('#imgbgar');

/*
اپن شد توسط چنل پامیک و اکس دی 
اصکی میری منبع بزن!!

@PaMicK - @XdRoBotCh
*/

function getMessageHTML(message) {
    return `<div class="baby-chat-user text-right"><span>${message}</span></div>`;
}
function getMessageHTML2(message) {
    return `<div class="baby-chat-bot text-right" ><span>${message}</span></div>`;
}

lamp.addEventListener('click', xdlamp);

function xdlamp() {
    let lamp = document.querySelector('#imgbgar');
    var hasClass = lamp.classList.contains("on");

    if (hasClass) {
        lamp.classList.remove('on');
        lamp.src = "off.gif";
        theme('black');
    } else {
        lamp.classList.add('on');
        lamp.src = "on.gif";
        theme('white');
    }
}

function theme(xd) {
    if(xd == "white"){
        document.querySelector('#home_page').style.background = 'white';
        document.querySelector('#home_page .container .body').style.backgroundColor = '#10a37f';
        document.querySelector('.lord1 button').style.background = 'black';
    }
    // XD TEAM
    if(xd == "black"){
        document.querySelector('#home_page').style.background = 'linear-gradient(to left, rgb(41, 41, 41), rgb(0, 0, 0))';
        document.querySelector('#home_page .container .body').style.backgroundColor = 'rgb(29, 29, 29)';
        document.querySelector('.lord1 button').style.background = '#10a37f';
    }
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});

/*
اپن شد توسط چنل پامیک و اکس دی 
اصکی میری منبع بزن!!

@PaMicK - @XdRoBotCh
*/

function sendMessagephp(message) {
    var xhr = new XMLHttpRequest();
    var url = 'https://api-free.ir/api/black-box/?text=' + encodeURIComponent(message);
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    addMessage(response);
    }
};
    xhr.send();
}

function addMessage(message) {
    const messageHTML = getMessageHTML2(message);
    document.getElementById("chatBody").insertAdjacentHTML("beforeend", messageHTML);
    document.getElementById("messageInput").disabled = false;
}

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    
    if (message !== "") {
      sendMessagephp(message);
      const messageHTML = getMessageHTML(message);
      document.getElementById("chatBody").insertAdjacentHTML("beforeend", messageHTML);
      document.getElementById("messageInput").disabled = true;
      messageInput.value = "";
    }
}

/*
اپن شد توسط چنل پامیک و اکس دی 
اصکی میری منبع بزن!!

@PaMicK - @XdRoBotCh
*/
