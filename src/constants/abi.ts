// ==========================================
// Uniswap Quoter V2 ABI 配置
// ==========================================
//
// 你需要在这里定义 QUOTER_V2_ABI 常量
//
// 需要的函数签名: quoteExactInputSingle
// 
// 输入参数 (tuple):
//   - tokenIn: address     (输入代币地址)
//   - tokenOut: address    (输出代币地址)  
//   - amountIn: uint256    (输入数量)
//   - fee: uint24          (池费率: 500, 3000, 10000)
//   - sqrtPriceLimitX96: uint160 (价格限制，填0表示不限制)
//
// 输出参数:
//   - amountOut: uint256           (输出数量)
//   - sqrtPriceX96After: uint160   (交易后价格)
//   - initializedTicksCrossed: uint32 (跨越的tick数)
//   - gasEstimate: uint256         (gas估算)
//
// 提示：
// - 使用 `as const` 让 TypeScript 正确推断类型
// - stateMutability 是 'nonpayable'
// - type 是 'function'
//
// 参考 Uniswap 文档:
// https://docs.uniswap.org/contracts/v3/reference/periphery/lens/QuoterV2
// ==========================================
// import QuoterV2Json from '@uniswap/v3-periphery/artifacts/contracts/interfaces/IQuoterV2.sol/IQuoterV2.json'
import type { Abi } from 'viem'
export const QUOTER_V2_ABI = [{
    "inputs": [
    {
        "components": [
        {
            "internalType": "address",
            "name": "tokenIn",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "tokenOut",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
        },
        {
            "internalType": "uint160",
            "name": "sqrtPriceLimitX96",
            "type": "uint160"
        }
        ],
        "internalType": "struct IQuoterV2.QuoteExactInputSingleParams",
        "name": "params",
        "type": "tuple"
    }
    ],
    "name": "quoteExactInputSingle",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    },
    {
        "internalType": "uint160",
        "name": "sqrtPriceX96After",
        "type": "uint160"
    },
    {
        "internalType": "uint32",
        "name": "initializedTicksCrossed",
        "type": "uint32"
    },
    {
        "internalType": "uint256",
        "name": "gasEstimate",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
}] as const satisfies Abi