import React from "react";
import { ExampleComponent } from "../components/example/example";
/* import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'; */
/* const DEFAULT_ETH_JSONRPC_URL =
	'https://eth-rinkeby.alchemyapi.io/v2/Az46mnE6lzw8ErBWbFNn_SBo-KnCzzmv';
const DEFAULT_CHAIN_ID = 4; */
/* import { useWeb3React } from '@web3-react/core'; */

/* import { GetServerSideProps } from 'next'; */
const Example = () => {
  return (
    <>
      <ExampleComponent></ExampleComponent>
    </>
  );
};
/* export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: '/',
			permanent: false,
		},
	};
}; */
export default Example;
