import { createAccount } from '../../src/eth';
import { getLogger } from '../../src/utils';
const logger = getLogger();
describe('Account', () => {
  it('createAccount', function() {
    const account = createAccount();
    const { address, privateKey, publicKey, mnemonic } = account;
    logger.info({ address, privateKey, publicKey, mnemonic: mnemonic.phrase });
  });
});
