import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { mainnet, sepolia, avalanche } from 'wagmi/chains'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, avalanche],
    //解决 Next.js 服务端渲染 (SSR) hydration mismatch
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
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
