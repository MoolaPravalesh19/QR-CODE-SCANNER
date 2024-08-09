let qrimage=document.getElementById("qrimage");
let text=document.getElementById("url");
let qrcode=document.getElementById("qr-code");
function qrcodegenerate(){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    qrcode.classList.add("show-img");
}