import {
  ethers,
  Wallet,
  ContractInterface,
  Contract as EthersContract,
} from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';

export class Contract {
  rpc: string;
  privateKey: string;
  provider: JsonRpcProvider;
  signer: Wallet;
  constructor(rpc: string, privateKey: string) {
    this.rpc = rpc;
    this.privateKey = privateKey;
    this.provider = new ethers.providers.JsonRpcProvider(rpc);
    this.signer = new Wallet(privateKey, this.provider);
  }

  // create contract
  newContract(contractAddress: string, abi: ContractInterface): EthersContract {
    return new ethers.Contract(contractAddress, abi, this.provider).connect(
      this.signer
    );
  }
}
