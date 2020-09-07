var myButton = document.querySelector('button');
var tf = true;

function notice(){
    alert("歡迎使用共享專區！\n共享碼請前往班群索取")
}

function files() {
    let myName = prompt('你輸入你的共享碼');
    if (myName === ""){
        alert("共享碼不得留白");
    }
    else{
        if (myName === "5b95cbpv-3s4rzp35-qwhmp4w8-yuu92q6j"){
            localStorage.setItem('name', myName);
            document.location.href="https://github.com/knshedu/etools.s3-ap-northeast-1.amazonaws/raw/master/PDF/" + myName + ".pdf"
        }
        if (myName === "8a2urxta-2vtxnfax-3uwp5pzv-gxve4zrn"){
            localStorage.setItem('name', myName);
            document.location.href="https://github.com/knshedu/etools.s3-ap-northeast-1.amazonaws/raw/master/PDF/" + myName + ".pdf"
        }
        if (myName === "w7vkn8r8-xy4fe25w-araby2tn-xw6iqbur"){
            localStorage.setItem('name', myName);
            document.location.href="https://github.com/knshedu/etools.s3-ap-northeast-1.amazonaws/raw/master/PDF/" + myName + ".pdf"
        }
        if (myName === null){
            tf = false;
        }
    }
  }

notice()
while(tf){
    files()
}
