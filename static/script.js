function toast(msg){

    let t = document.getElementById("toast");

    t.innerText = msg;

    t.style.display = "block";

    setTimeout(()=>{

        t.style.display = "none";

    },2000);

}
function onScanSuccess(decodedText) {

    let barcodeInput = document.getElementById("barcode");

    barcodeInput.value = decodedText;

    // trigger input event manually
    barcodeInput.dispatchEvent(new Event("input"));

}
function onScanSuccess(decodedText) {

    let barcodeInput = document.getElementById("barcode");

    barcodeInput.value = decodedText;
    barcodeInput.dispatchEvent(new Event("input"));

    setTimeout(() => {
        document.querySelector("form").submit();
    }, 1000);

}
if(low.length > 0){
    showToast("Low stock items found! ","WARNING" + low.join(", "));
}


if(Notification.permission !== "granted"){
    Notification.requestPermission();
}

function notify(msg){
    new Notification(msg);
}

let low = JSON.parse('{{ low_list | tojson | safe }}');
let exp = JSON.parse('{{ exp_list | tojson | safe }}');



if(low.length > 0){
    notify("Low stock: " + low.join(", "));
}

if(exp.length > 0){
    notify("Expiring soon: " + exp.join(", "));
}
function showToast(msg, type="success"){

    let icons = {
        success: "fa-check-circle",
        warning: "fa-exclamation-triangle",
        error: "fa-times-circle"
    };

    let container = document.getElementById("toast-container");

    let toast = document.createElement("div");
    toast.className = "toast " + type;

    toast.innerHTML = `
        <i class="fa ${icons[type]}"></i>
        <span>${msg}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}
function showNotify(title, message, type="success"){

    const icons = {
        success: "fa-check-circle",
        warning: "fa-exclamation-triangle",
        error: "fa-times-circle"
    };

    let container = document.getElementById("notify-container");

    let box = document.createElement("div");
    box.className = "notify " + type;

    box.innerHTML = `
        <i class="fa ${icons[type]}"></i>
        <div class="notify-content">
            <div class="notify-title">${title}</div>
            <div class="notify-msg">${message}</div>
        </div>
    `;

    container.appendChild(box);

    // auto remove
    setTimeout(() => {
        box.style.animation = "fadeOut 0.4s forwards";
        setTimeout(() => box.remove(), 400);
    }, 5000);
}
