var myButton = document.querySelector('button');

function notice(){
    alert("歡迎使用共享專區！\n共享碼請前往班群索取")
}

function files() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    document.location.href="https://tzuhsiang.com/myName"
  }


files()