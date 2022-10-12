import { ethers, Wallet } from 'ethers';

export function createAccount(): Wallet {
  return ethers.Wallet.createRandom();
}
