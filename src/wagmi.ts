import { createConfig, createStorage, http } from 'wagmi'
import { mainnet, sepolia, avalanche } from 'wagmi/chains'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, avalanche],
    storage: createStorage({
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    }),
    ssr: false,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [avalanche.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
