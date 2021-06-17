/* eslint-disable */
import web3 from './web3';

const abi = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "creadorProyecto",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "tituloProyecto",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "descripcionProyecto",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "fechaLimiteRecaudacion",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "montoObjetivo",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "beneficiario",
				"type": "address"
			}
		],
		"name": "ArtistaPagado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "mecenas",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalActual",
				"type": "uint256"
			}
		],
		"name": "FondosRecibidos",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "artista",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "balanceActual",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "comprobarSiRecaudacionCompletadaOExpirada",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contribuir",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "descripcion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "direcciones_mecenas",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "estado",
		"outputs": [
			{
				"internalType": "enum Project.Estado",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fechaCompletado",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fechaLimite",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDetalles",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "creadorProyecto",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "tituloProyecto",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "descripcionProyecto",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "fechaLimiteRecaudacion",
				"type": "uint256"
			},
			{
				"internalType": "enum Project.Estado",
				"name": "estadoActual",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "montoActual",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "montoObjetivo",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "objetivo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "titulo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Your ABI goes here (Project contract)
// Example:
// const abi = [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "creator",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       } 
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];

export default (address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};