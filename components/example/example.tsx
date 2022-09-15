import React from "react";
/* import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core'; */
/* import { ethers } from 'ethers'; */
/* import getWeb3 from 'components/getWeb3';
import { Contract } from '@ethersproject/contracts';
import AbodeCollectionABI from '../../contracts/AbodeCollection.json'; */
/* import Web3 from 'web3'; */
/* import { useToasts } from 'react-toast-notifications'; */
import getWeb3 from "components/getWeb3";

/* import { ethers } from 'ethers'; */
export const ExampleComponent = () => {
  const [account, setAccount] = React.useState<any>("");

  const [isExecuted, setIsExecuted] = React.useState(false);

  /* 	 React.useEffect(() => {
		console.log('coñoelamadre');
	}, [account]);  */

  const connectWallet = async () => {
    /* 	setIsLoading(true); */

    try {
      // Use web3 to get the user's accounts.
      alert(`entro`);
      const web3 = await getWeb3();
      alert(`paso`);
      const accounts = await (web3 as any).eth.getAccounts();

      // Update State
      // setWeb3(web3);
      /* 		accounts.push(accounts[0]); */

      accounts[0] = (window as any).ethereum.selectedAddress;
      setAccount(accounts[0]);
      getAccountBalance(accounts);

      /* 		setIsLoading(false); */
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3 or accounts. Try to connect metamask again.`);
      console.error(error);
      /* 	setIsLoading(false); */
    }
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  const accountChangedHandler = async (newAccount: any) => {
    /* 		setIsLoading(true); */
    if (newAccount.length === 0) {
      /* 	setWeb3(null); */
      setAccount("");
      /* 		setIsLoading(false); */
      return false;
    }
    const web3 = await getWeb3();
    const accounts = await (web3 as any).eth.getAccounts();
    /* 	setWeb3(web3); */
    accounts.push(newAccount[0]);
    accounts[0] = (window as any).ethereum.selectedAddress;
    setAccount(accounts[0]);
    getAccountBalance(newAccount.toString());

    /* 		setIsLoading(false); */
  };

  const getAccountBalance = (account: string) => {
    (window as any).ethereum.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    });
    /*	.then((balance: any) => {
			 	console.log('balance', balance, ethers.utils.formatEther(balance)); 
			});*/
  };

  if (
    typeof window !== "undefined" &&
    (window as any).ethereum?.isConnected() &&
    !isExecuted
  ) {
    // Client-side-only code
    // connectWallet();
    (window as any).ethereum.on("accountsChanged", accountChangedHandler);
    (window as any).ethereum.on("chainChanged", chainChangedHandler);
    setIsExecuted(true);
  }
  return (
    <div>
      <div className="flex flex-col gap-y-16 px-60">
        <button
          onClick={() => {
            connectWallet();
          }}
          className="border"
        >
          Metamask
        </button>

        <button onClick={() => {}} className="border">
          Disconnect
        </button>
      </div>
      <div>{}</div>
      <div className="px-10 mt-20">
        <div>
          <strong>Account:</strong> {account}
        </div>
      </div>{" "}
    </div>
  );
};
