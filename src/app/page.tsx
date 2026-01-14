'use client'

import {useConfig, useBlockNumber ,useBalance ,useConnect, useConnection, useConnectors, useDisconnect } from 'wagmi'
import {formatUnits} from 'viem'

function App() {
  const connection = useConnection()
  const { connect, status, error } = useConnect()
  const connectors = useConnectors()
  const { disconnect } = useDisconnect()
  const balance = useBalance({address: connection?.address})
  const blockNumber = useBlockNumber()
  const config = useConfig()

  return (
    <>
      <div>
        <h2>Connection</h2>

        <div>
          status: {connection.status}
          <br />
          address: {connection.address}
          <br />
          chainId: {connection.chainId}
          <br />
          balance: {formatUnits(balance.data?.value ?? 0n, balance.data?.decimals ?? 18)} {balance.data?.symbol}
          <br />
          blockNumber: {blockNumber.data}
        </div>

        {connection.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      {
        config.chains.map((chain) => (
          <div key={chain.id}>
            <h2>{chain.name}</h2>
            <div>id: {chain.id}</div>
            <div>name: {chain.name}</div>
          </div>
        ))
      }
    </>
  )
}

export default App
