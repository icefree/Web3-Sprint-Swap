// ==========================================
// 代币地址配置文件 - 多链支持
// ==========================================

export interface TokenInfo {
  address: `0x${string}`
  decimals: number
  symbol: string
  name: string
}

// 按链 ID 分组的代币配置
export const TOKENS_BY_CHAIN: Record<number, Record<string, TokenInfo>> = {
  // Mainnet (chainId: 1)
  1: {
    WETH: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether',
    },
    USDC: {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    DAI: {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    },
  },
  // Sepolia (chainId: 11155111)
  11155111: {
    WETH: {
      address: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether',
    },
    USDC: {
      address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    DAI: {
      address: '0x68194a729C2450ad26072b3D33ADaCbcef39D574',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    },
  },
}

// Quoter V2 地址 - 按链 ID 分组
export const QUOTER_V2_ADDRESS: Record<number, `0x${string}`> = {
  1: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',         // Mainnet
  11155111: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',  // Sepolia
}

// ==========================================
// 辅助函数
// ==========================================

// 获取指定链上的代币信息
export function getToken(chainId: number, symbol: string): TokenInfo | undefined {
  return TOKENS_BY_CHAIN[chainId]?.[symbol]
}

// 获取指定链上的 Quoter 地址
export function getQuoterAddress(chainId: number): `0x${string}` | undefined {
  return QUOTER_V2_ADDRESS[chainId]
}

// ETH 符号映射到 WETH (Uniswap 内部使用 WETH)
export function resolveTokenSymbol(symbol: string): string {
  return symbol === 'ETH' ? 'WETH' : symbol
}