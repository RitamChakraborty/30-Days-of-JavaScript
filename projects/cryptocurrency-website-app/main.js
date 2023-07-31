const bitcoin = document.querySelector('#bitcoin');
const ethereum = document.querySelector('#ethereum');
const dogecoin = document.querySelector('#dogecoin');

fetch('https://api.coincap.io/v2/assets')
.then(data => data.json())
.then(data => {
    const bitcoinValue = data.data.filter(i => i.name === 'Bitcoin')[0].priceUsd.toString().substring(0, 8);
    const ethereumValue = data.data.filter(i => i.name === 'Ethereum')[0].priceUsd.toString().substring(0, 8);
    const dogecoinValue = data.data.filter(i => i.name === 'Dogecoin')[0].priceUsd.toString().substring(0, 8);
    bitcoin.textContent = bitcoinValue;
    ethereum.textContent = ethereumValue;
    dogecoin.textContent = dogecoinValue;
});