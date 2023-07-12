document.querySelector("#generate-qr-btn").addEventListener('click', handleGenerateQrButtonClick);

function handleGenerateQrButtonClick() {
    const input = document.querySelector("#input").value;
    if (!input) return;
    const qr = document.querySelector('#qr');
    new QRious({
        element: qr,
        value: input
    });
    qr.style.display = "block";
}