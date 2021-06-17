/* eslint-disable */
import web3 from './web3';

const address = '0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B'; // Your deployed contract's address goes here
// Example:
// const address = '0x09r80cnasjfaks93m9v2';

const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "direccionContrato",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creadorProyecto",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tituloProyecto",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "descripcionProyecto",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fechaLimite",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "montoObjetivo",
				"type": "uint256"
			}
		],
		"name": "ProjectoEmpezado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "titulo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "descripcion",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "duracionEnDias",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "montoARecaudar",
				"type": "uint256"
			}
		],
		"name": "crearProjecto",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devolverTodosLosProjects",
		"outputs": [
			{
				"internalType": "contract Project[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Your ABI goes here (Crowdfunding contract)
// Example:
// const abi = [
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "name": "contractAddress",
//                 "type": "address"
//             }
//         ],
//         "name": "ProjectStarted",
//         "type": "event"
//     }
// ];

const instance = new web3.eth.Contract(abi, address);

export default instance;