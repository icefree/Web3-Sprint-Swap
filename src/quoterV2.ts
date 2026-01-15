import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuoterV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const quoterV2Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'address', type: 'address' },
      { name: '_WETH9', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'WETH9',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteExactInput',
    outputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      {
        name: 'sqrtPriceX96AfterList',
        internalType: 'uint160[]',
        type: 'uint160[]',
      },
      {
        name: 'initializedTicksCrossedList',
        internalType: 'uint32[]',
        type: 'uint32[]',
      },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IQuoterV2.QuoteExactInputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactInputSingle',
    outputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceX96After', internalType: 'uint160', type: 'uint160' },
      {
        name: 'initializedTicksCrossed',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteExactOutput',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      {
        name: 'sqrtPriceX96AfterList',
        internalType: 'uint160[]',
        type: 'uint160[]',
      },
      {
        name: 'initializedTicksCrossedList',
        internalType: 'uint32[]',
        type: 'uint32[]',
      },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IQuoterV2.QuoteExactOutputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactOutputSingle',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtPriceX96After', internalType: 'uint160', type: 'uint160' },
      {
        name: 'initializedTicksCrossed',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const quoterV2Address = {
  11155111: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const quoterV2Config = {
  address: quoterV2Address,
  abi: quoterV2Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link quoterV2Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useReadQuoterV2 = /*#__PURE__*/ createUseReadContract({
  abi: quoterV2Abi,
  address: quoterV2Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"WETH9"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useReadQuoterV2Weth9 = /*#__PURE__*/ createUseReadContract({
  abi: quoterV2Abi,
  address: quoterV2Address,
  functionName: 'WETH9',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"factory"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useReadQuoterV2Factory = /*#__PURE__*/ createUseReadContract({
  abi: quoterV2Abi,
  address: quoterV2Address,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactInputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useReadQuoterV2QuoteExactInputSingle =
  /*#__PURE__*/ createUseReadContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactInputSingle',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"uniswapV3SwapCallback"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useReadQuoterV2UniswapV3SwapCallback =
  /*#__PURE__*/ createUseReadContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'uniswapV3SwapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link quoterV2Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useWriteQuoterV2 = /*#__PURE__*/ createUseWriteContract({
  abi: quoterV2Abi,
  address: quoterV2Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactInput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useWriteQuoterV2QuoteExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactOutput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useWriteQuoterV2QuoteExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactOutputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useWriteQuoterV2QuoteExactOutputSingle =
  /*#__PURE__*/ createUseWriteContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactOutputSingle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link quoterV2Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useSimulateQuoterV2 = /*#__PURE__*/ createUseSimulateContract({
  abi: quoterV2Abi,
  address: quoterV2Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactInput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useSimulateQuoterV2QuoteExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactOutput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useSimulateQuoterV2QuoteExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link quoterV2Abi}__ and `functionName` set to `"quoteExactOutputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3)
 */
export const useSimulateQuoterV2QuoteExactOutputSingle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: quoterV2Abi,
    address: quoterV2Address,
    functionName: 'quoteExactOutputSingle',
  })
