var myButton = document.querySelector('button');
var tf = true;

function notice(){
    alert("歡迎使用 202 共享專區！\n共享碼請前往班群索取\n\nPDF 檔案開啟教學\n1. 使用共享碼下載檔案\n2. 將檔案開啟（若預設開啟程式為瀏覽器）\n    或將檔案拖移至你專的網頁瀏覽器    \n（Internet Explorer 暫不支援）\n\n3. 即可瀏覽，Enjoy :)")
}

function files() {
    let myName = prompt('你輸入你的共享碼');
    if (myName === ""){
        alert("共享碼不得留白");
    }
    else{
        if (myName === "5b95cbpv-3s4rzp35-qwhmp4w8-yuu92q6j"){
            document.location.href="https://github.com/knshedu/pdfs/raw/master/knsh-chinese-3-teacher-l1-l3.pdf"
        }
        if (myName === "8a2urxta-2vtxnfax-3uwp5pzv-gxve4zrn"){
            document.location.href="https://github.com/knshedu/pdfs/raw/master/knsh-chinese-3-teacher-l4-l6.pdf"
        }
        if (myName === "w7vkn8r8-xy4fe25w-araby2tn-xw6iqbur"){
            document.location.href="https://github.com/knshedu/pdfs/raw/master/knsh-chinese-3-teacher-l7-l10.pdf"
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
