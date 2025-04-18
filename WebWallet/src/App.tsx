import { generateMnemonic } from "bip39";
import './App.css'
import { useState } from "react";
import { SolanaWallet } from "./components/SolanaWallet";

function App() {
  const [mnemonic, setMnemonic] = useState<string>('')

  return (
    <>
    <input type="text" value={mnemonic}></input>
      <button onClick={async function() {
          const mn = await generateMnemonic();
          setMnemonic(mn)
        }}>
          Create Seed Phrase
        </button>

        {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
    </>
  )
}

export default App
