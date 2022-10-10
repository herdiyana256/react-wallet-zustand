import React from 'react';

import useWalletStore, { selectBalance, selectUser } from '../store/wallet';

const Wallet = () => {
  const user = useWalletStore(selectUser);
  const balance = useWalletStore(selectBalance);

  return (
    <div>
      <h1>{user.first_name} Wallet</h1>
      <h2>Balance: Rp {balance.toLocaleString('ID')}</h2>
      <button>Withdraw Rp 10.000</button>
      <button>Deposit Rp 10.000</button>
      <br />
      <br />
      <input/>
      <button>withdraw</button>
      <button>deposit</button>
    </div>
  );
};

export default Wallet;
