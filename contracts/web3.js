import Web3 from 'web3';

if (window.ethereum) {

window.web3 = new Web3(ethereum);


try {

// Solicitar acceso si es necesario
ethereum.enable();

} catch (error) {

// Acceso denegado para usuario de la cuenta...

}

} else if (window.web3) {

// Navegadores antiguos...

window.web3 = new Web3(web3.currentProvider);

} else {

// Navegadores que no soportan Dapps...

console.log('Ethereum no ha sido detectado en tu navegador. Considera utilizar MetaMask!');

}

export default web3;