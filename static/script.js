// NOTIFICATIONS
function showNotify(title, message, type = "success") {
    const icons = {
        success: "fa-check-circle",
        warning: "fa-exclamation-triangle",
        error: "fa-times-circle"
    };

    let container = document.getElementById("notify-container");
    if (!container) return;

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

    setTimeout(() => {
        box.style.animation = "fadeOut 0.4s forwards";
        setTimeout(() => box.remove(), 400);
    }, 5000);
}

// WHATSAPP
function sendWhatsApp() {
    fetch("/whatsapp_alert")
        .then(res => res.json())
        .then(data => {
            if (!data.msg) {
                showNotify("All Good", "No low stock items", "success");
                return;
            }
            let phone = "91XXXXXXXXXX";
            let url = `https://wa.me/${phone}?text=${encodeURIComponent(data.msg)}`;
            window.open(url, "_blank");
            showNotify("WhatsApp Ready", "Message opened in WhatsApp", "success");
        });
}

// CHECK ALERTS
function checkAlerts() {
    fetch("/check_alerts")
        .then(res => res.json())
        .then(data => {
            if (data.low.length > 0) {
                showNotify("⚠️ Low Stock", data.low.join(", "), "warning");
                let badge = document.getElementById("wa-badge");
                if (badge) {
                    badge.style.display = "block";
                    badge.innerText = data.low.length;
                }
            }
            if (data.exp.length > 0) {
                showNotify("🕐 Expiring Soon", data.exp.join(", "), "error");
            }
        });
}
