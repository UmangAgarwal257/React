import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export const Airdrop = () => {
  
  const [amount, setAmount] = useState(0);
  const wallet = useWallet();
  const {connection} = useConnection();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const sendAirdropToUser = async () => {
    if (!wallet.publicKey) {
      console.error("Wallet not connected");
      return;
    }
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert("Airdrop sent!");
    const balance = await connection.getBalance(wallet.publicKey); 
    alert(`New balance: ${balance / LAMPORTS_PER_SOL} SOL`);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
};
