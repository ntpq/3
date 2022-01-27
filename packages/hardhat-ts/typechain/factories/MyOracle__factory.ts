/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyOracle, MyOracleInterface } from "../MyOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "AddLocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "AddWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "OracleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "RemoveWhitelist",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "addLocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "addWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "arr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dummy",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllLocations",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "lat",
            type: "string",
          },
          {
            internalType: "string",
            name: "lon",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct MyOracle.Location[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getArr",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getValueAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locations",
    outputs: [
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metaData",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "removeWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "sensors",
    outputs: [
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "sensorsValue",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[10]",
        name: "_values",
        type: "uint256[10]",
      },
    ],
    name: "setArr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setMeta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "updateValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "valueOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "values",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200248c3803806200248c833981810160405281019062000037919062000161565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505062000193565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200012982620000fc565b9050919050565b6200013b816200011c565b81146200014757600080fd5b50565b6000815190506200015b8162000130565b92915050565b6000602082840312156200017a5762000179620000f7565b5b60006200018a848285016200014a565b91505092915050565b6122e980620001a36000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638da5cb5b116100de578063c0c39c7e11610097578063f19ba20911610071578063f19ba209146104b0578063f80f5dd5146104cc578063f92ee84f146104e8578063fb8cbced1461051857610173565b8063c0c39c7e14610434578063cbc6097214610450578063edf26d9b1461048057610173565b80638da5cb5b146103485780639507d39a14610366578063a48028aa14610396578063b9e0db35146103c6578063baf2a4eb146103f8578063be1c766b1461041657610173565b806354fe9fd71161013057806354fe9fd71461024c57806370a082311461027c57806371e5ee5f146102ac57806378c8cda7146102dc57806381119130146102f8578063887a50421461031657610173565b80631076e967146101785780631b373f4e14610196578063207978a6146101c657806332e43a11146101e257806341566585146102005780634cc8221514610230575b600080fd5b610180610536565b60405161018d91906117bf565b60405180910390f35b6101b060048036038101906101ab9190611889565b61074b565b6040516101bd91906118d8565b60405180910390f35b6101e060048036038101906101db9190611a28565b610884565b005b6101ea610a0c565b6040516101f79190611b19565b60405180910390f35b61021a60048036038101906102159190611b3b565b610a49565b6040516102279190611b83565b60405180910390f35b61024a60048036038101906102459190611b9e565b610a69565b005b61026660048036038101906102619190611b3b565b610a8e565b60405161027391906118d8565b60405180910390f35b61029660048036038101906102919190611b3b565b610aa6565b6040516102a391906118d8565b60405180910390f35b6102c660048036038101906102c19190611b9e565b610aef565b6040516102d391906118d8565b60405180910390f35b6102f660048036038101906102f19190611b3b565b610b13565b005b610300610c34565b60405161030d9190611c89565b60405180910390f35b610330600480360381019061032b9190611cab565b610cc2565b60405161033f93929190611cf4565b60405180910390f35b610350610e9a565b60405161035d9190611d4f565b60405180910390f35b610380600480360381019061037b9190611b9e565b610ebe565b60405161038d91906118d8565b60405180910390f35b6103b060048036038101906103ab9190611b3b565b610ee6565b6040516103bd91906118d8565b60405180910390f35b6103e060048036038101906103db9190611b9e565b610f2f565b6040516103ef93929190611cf4565b60405180910390f35b610400611101565b60405161040d9190611b19565b60405180910390f35b61041e61118f565b60405161042b91906118d8565b60405180910390f35b61044e60048036038101906104499190611d6a565b61119c565b005b61046a60048036038101906104659190611b3b565b611250565b60405161047791906118d8565b60405180910390f35b61049a60048036038101906104959190611b9e565b611299565b6040516104a79190611d4f565b60405180910390f35b6104ca60048036038101906104c59190611edb565b6112d8565b005b6104e660048036038101906104e19190611b3b565b6112ed565b005b61050260048036038101906104fd9190611cab565b611488565b60405161050f9190611f25565b60405180910390f35b6105206114be565b60405161052d9190611ffe565b60405180910390f35b60606009805480602002602001604051908101604052809291908181526020016000905b82821015610742578382906000526020600020906003020160405180606001604052908160008201805461058d9061204f565b80601f01602080910402602001604051908101604052809291908181526020018280546105b99061204f565b80156106065780601f106105db57610100808354040283529160200191610606565b820191906000526020600020905b8154815290600101906020018083116105e957829003601f168201915b5050505050815260200160018201805461061f9061204f565b80601f016020809104026020016040519081016040528092919081815260200182805461064b9061204f565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b505050505081526020016002820180546106b19061204f565b80601f01602080910402602001604051908101604052809291908181526020018280546106dd9061204f565b801561072a5780601f106106ff5761010080835404028352916020019161072a565b820191906000526020600020905b81548152906001019060200180831161070d57829003601f168201915b5050505050815250508152602001906001019061055a565b50505050905090565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156107f8576001839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600060078260405161089691906120bd565b908152602001604051809103902060009054906101000a900460ff1660ff16146108f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ec90612120565b60405180910390fd5b7faefe92e1bf7f2683b747d69535718cc2b5af27d5dd6086df4862707451fde8a783838360405161092893929190611cf4565b60405180910390a1600160078260405161094291906120bd565b908152602001604051809103902060006101000a81548160ff021916908360ff1602179055506009604051806060016040528085815260200184815260200183815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190805190602001906109ca929190611516565b5060208201518160010190805190602001906109e7929190611516565b506040820151816002019080519060200190610a04929190611516565b505050505050565b60606040518060400160405280600381526020017f6865790000000000000000000000000000000000000000000000000000000000815250905090565b60046020528060005260406000206000915054906101000a900460ff1681565b60088181548110610a7d57610a7c612140565b5b906000526020600020016000905550565b60056020528060005260406000206000915090505481565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60088181548110610aff57600080fd5b906000526020600020016000915090505481565b600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b96906121bb565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff167fa6667e187c57c5b0fa4e1122a695ed0754287513bcb4901fa6c1f44ba22c018760405160405180910390a2600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905550565b60606001805480602002602001604051908101604052809291908181526020018280548015610cb857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c6e575b5050505050905090565b600681805160208101820180518482526020830160208501208183528095505050505050600091509050806000018054610cfb9061204f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d279061204f565b8015610d745780601f10610d4957610100808354040283529160200191610d74565b820191906000526020600020905b815481529060010190602001808311610d5757829003601f168201915b505050505090806001018054610d899061204f565b80601f0160208091040260200160405190810160405280929190818152602001828054610db59061204f565b8015610e025780601f10610dd757610100808354040283529160200191610e02565b820191906000526020600020905b815481529060010190602001808311610de557829003601f168201915b505050505090806002018054610e179061204f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e439061204f565b8015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b5050505050905083565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060088281548110610ed457610ed3612140565b5b90600052602060002001549050919050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60098181548110610f3f57600080fd5b9060005260206000209060030201600091509050806000018054610f629061204f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8e9061204f565b8015610fdb5780601f10610fb057610100808354040283529160200191610fdb565b820191906000526020600020905b815481529060010190602001808311610fbe57829003601f168201915b505050505090806001018054610ff09061204f565b80601f016020809104026020016040519081016040528092919081815260200182805461101c9061204f565b80156110695780601f1061103e57610100808354040283529160200191611069565b820191906000526020600020905b81548152906001019060200180831161104c57829003601f168201915b50505050509080600201805461107e9061204f565b80601f01602080910402602001604051908101604052809291908181526020018280546110aa9061204f565b80156110f75780601f106110cc576101008083540402835291602001916110f7565b820191906000526020600020905b8154815290600101906020018083116110da57829003601f168201915b5050505050905083565b6002805461110e9061204f565b80601f016020809104026020016040519081016040528092919081815260200182805461113a9061204f565b80156111875780601f1061115c57610100808354040283529160200191611187565b820191906000526020600020905b81548152906001019060200180831161116a57829003601f168201915b505050505081565b6000600880549050905090565b82600985815481106111b1576111b0612140565b5b906000526020600020906003020160000190805190602001906111d5929190611516565b5081600985815481106111eb576111ea612140565b5b9060005260206000209060030201600101908051906020019061120f929190611516565b50806009858154811061122557611224612140565b5b90600052602060002090600302016002019080519060200190611249929190611516565b5050505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600181815481106112a957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600890600a6112e992919061159c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561135d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135490612227565b60405180910390fd5b600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156113ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e190612293565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff167fe463fa6bdecb16f96f58191d902152633214e760ea443684105a7eef1ad16b9d60405160405180910390a26001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6007818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900460ff1681565b6060600880548060200260200160405190810160405280929190818152602001828054801561150c57602002820191906000526020600020905b8154815260200190600101908083116114f8575b5050505050905090565b8280546115229061204f565b90600052602060002090601f016020900481019282611544576000855561158b565b82601f1061155d57805160ff191683800117855561158b565b8280016001018555821561158b579182015b8281111561158a57825182559160200191906001019061156f565b5b50905061159891906115e9565b5090565b8280548282559060005260206000209081019282156115d8579160200282015b828111156115d75782518255916020019190600101906115bc565b5b5090506115e591906115e9565b5090565b5b808211156116025760008160009055506001016115ea565b5090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561166c578082015181840152602081019050611651565b8381111561167b576000848401525b50505050565b6000601f19601f8301169050919050565b600061169d82611632565b6116a7818561163d565b93506116b781856020860161164e565b6116c081611681565b840191505092915050565b600060608301600083015184820360008601526116e88282611692565b915050602083015184820360208601526117028282611692565b9150506040830151848203604086015261171c8282611692565b9150508091505092915050565b600061173583836116cb565b905092915050565b6000602082019050919050565b600061175582611606565b61175f8185611611565b93508360208202850161177185611622565b8060005b858110156117ad578484038952815161178e8582611729565b94506117998361173d565b925060208a01995050600181019050611775565b50829750879550505050505092915050565b600060208201905081810360008301526117d9818461174a565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611820826117f5565b9050919050565b61183081611815565b811461183b57600080fd5b50565b60008135905061184d81611827565b92915050565b6000819050919050565b61186681611853565b811461187157600080fd5b50565b6000813590506118838161185d565b92915050565b600080604083850312156118a05761189f6117eb565b5b60006118ae8582860161183e565b92505060206118bf85828601611874565b9150509250929050565b6118d281611853565b82525050565b60006020820190506118ed60008301846118c9565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61193582611681565b810181811067ffffffffffffffff82111715611954576119536118fd565b5b80604052505050565b60006119676117e1565b9050611973828261192c565b919050565b600067ffffffffffffffff821115611993576119926118fd565b5b61199c82611681565b9050602081019050919050565b82818337600083830152505050565b60006119cb6119c684611978565b61195d565b9050828152602081018484840111156119e7576119e66118f8565b5b6119f28482856119a9565b509392505050565b600082601f830112611a0f57611a0e6118f3565b5b8135611a1f8482602086016119b8565b91505092915050565b600080600060608486031215611a4157611a406117eb565b5b600084013567ffffffffffffffff811115611a5f57611a5e6117f0565b5b611a6b868287016119fa565b935050602084013567ffffffffffffffff811115611a8c57611a8b6117f0565b5b611a98868287016119fa565b925050604084013567ffffffffffffffff811115611ab957611ab86117f0565b5b611ac5868287016119fa565b9150509250925092565b600082825260208201905092915050565b6000611aeb82611632565b611af58185611acf565b9350611b0581856020860161164e565b611b0e81611681565b840191505092915050565b60006020820190508181036000830152611b338184611ae0565b905092915050565b600060208284031215611b5157611b506117eb565b5b6000611b5f8482850161183e565b91505092915050565b60008115159050919050565b611b7d81611b68565b82525050565b6000602082019050611b986000830184611b74565b92915050565b600060208284031215611bb457611bb36117eb565b5b6000611bc284828501611874565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c0081611815565b82525050565b6000611c128383611bf7565b60208301905092915050565b6000602082019050919050565b6000611c3682611bcb565b611c408185611bd6565b9350611c4b83611be7565b8060005b83811015611c7c578151611c638882611c06565b9750611c6e83611c1e565b925050600181019050611c4f565b5085935050505092915050565b60006020820190508181036000830152611ca38184611c2b565b905092915050565b600060208284031215611cc157611cc06117eb565b5b600082013567ffffffffffffffff811115611cdf57611cde6117f0565b5b611ceb848285016119fa565b91505092915050565b60006060820190508181036000830152611d0e8186611ae0565b90508181036020830152611d228185611ae0565b90508181036040830152611d368184611ae0565b9050949350505050565b611d4981611815565b82525050565b6000602082019050611d646000830184611d40565b92915050565b60008060008060808587031215611d8457611d836117eb565b5b6000611d9287828801611874565b945050602085013567ffffffffffffffff811115611db357611db26117f0565b5b611dbf878288016119fa565b935050604085013567ffffffffffffffff811115611de057611ddf6117f0565b5b611dec878288016119fa565b925050606085013567ffffffffffffffff811115611e0d57611e0c6117f0565b5b611e19878288016119fa565b91505092959194509250565b600067ffffffffffffffff821115611e4057611e3f6118fd565b5b602082029050919050565b600080fd5b6000611e63611e5e84611e25565b61195d565b90508060208402830185811115611e7d57611e7c611e4b565b5b835b81811015611ea65780611e928882611874565b845260208401935050602081019050611e7f565b5050509392505050565b600082601f830112611ec557611ec46118f3565b5b600a611ed2848285611e50565b91505092915050565b60006101408284031215611ef257611ef16117eb565b5b6000611f0084828501611eb0565b91505092915050565b600060ff82169050919050565b611f1f81611f09565b82525050565b6000602082019050611f3a6000830184611f16565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611f7581611853565b82525050565b6000611f878383611f6c565b60208301905092915050565b6000602082019050919050565b6000611fab82611f40565b611fb58185611f4b565b9350611fc083611f5c565b8060005b83811015611ff1578151611fd88882611f7b565b9750611fe383611f93565b925050600181019050611fc4565b5085935050505092915050565b600060208201905081810360008301526120188184611fa0565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061206757607f821691505b6020821081141561207b5761207a612020565b5b50919050565b600081905092915050565b600061209782611632565b6120a18185612081565b93506120b181856020860161164e565b80840191505092915050565b60006120c9828461208c565b915081905092915050565b7f4c6f636174696f6e20616c7265616479206578697374732e0000000000000000600082015250565b600061210a601883611acf565b9150612115826120d4565b602082019050919050565b60006020820190508181036000830152612139816120fd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f41646472657373206e6f7420666f756e64000000000000000000000000000000600082015250565b60006121a5601183611acf565b91506121b08261216f565b602082019050919050565b600060208201905081810360008301526121d481612198565b9050919050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b6000612211600f83611acf565b915061221c826121db565b602082019050919050565b6000602082019050818103600083015261224081612204565b9050919050565b7f416c72656164792077686974656c697374656400000000000000000000000000600082015250565b600061227d601383611acf565b915061228882612247565b602082019050919050565b600060208201905081810360008301526122ac81612270565b905091905056fea26469706673582212207e925d80aec22c7e8de303a66750380953f0c874689388d8fdcb5bc314601a5e64736f6c63430008090033";

type MyOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyOracle__factory extends ContractFactory {
  constructor(...args: MyOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MyOracle";
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyOracle> {
    return super.deploy(_owner, overrides || {}) as Promise<MyOracle>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): MyOracle {
    return super.attach(address) as MyOracle;
  }
  connect(signer: Signer): MyOracle__factory {
    return super.connect(signer) as MyOracle__factory;
  }
  static readonly contractName: "MyOracle";
  public readonly contractName: "MyOracle";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyOracleInterface {
    return new utils.Interface(_abi) as MyOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyOracle {
    return new Contract(address, _abi, signerOrProvider) as MyOracle;
  }
}