import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SwapRouter02
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const swapRouter02Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_factoryV2', internalType: 'address', type: 'address' },
      { name: 'factoryV3', internalType: 'address', type: 'address' },
      { name: '_positionManager', internalType: 'address', type: 'address' },
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
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'approveMax',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'approveMaxMinusOne',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'approveZeroThenMax',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'approveZeroThenMaxMinusOne',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'callPositionManager',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'paths', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
      { name: 'maximumTickDivergence', internalType: 'uint24', type: 'uint24' },
      { name: 'secondsAgo', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkOracleSlippage',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'maximumTickDivergence', internalType: 'uint24', type: 'uint24' },
      { name: 'secondsAgo', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkOracleSlippage',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IV3SwapRouter.ExactInputParams',
        type: 'tuple',
        components: [
          { name: 'path', internalType: 'bytes', type: 'bytes' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'amountOutMinimum',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'exactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IV3SwapRouter.ExactInputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'amountOutMinimum',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IV3SwapRouter.ExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'path', internalType: 'bytes', type: 'bytes' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'exactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IV3SwapRouter.ExactOutputSingleParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactOutputSingle',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
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
    inputs: [],
    name: 'factoryV2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getApprovalType',
    outputs: [
      {
        name: '',
        internalType: 'enum IApproveAndCall.ApprovalType',
        type: 'uint8',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IApproveAndCall.IncreaseLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'increaseLiquidity',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IApproveAndCall.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'amount0Min', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Min', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'mint',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'previousBlockhash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'multicall',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'multicall',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'positionManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pull',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'swapExactTokensForTokens',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMax', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'swapTokensForExactTokens',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenWithFee',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenWithFee',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9WithFee',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBips', internalType: 'uint256', type: 'uint256' },
      { name: 'feeRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9WithFee',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'wrapETH',
    outputs: [],
    stateMutability: 'payable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const swapRouter02Address = {
  11155111: '0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const swapRouter02Config = {
  address: swapRouter02Address,
  abi: swapRouter02Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouter02Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useReadSwapRouter02 = /*#__PURE__*/ createUseReadContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"WETH9"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useReadSwapRouter02Weth9 = /*#__PURE__*/ createUseReadContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
  functionName: 'WETH9',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"checkOracleSlippage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useReadSwapRouter02CheckOracleSlippage =
  /*#__PURE__*/ createUseReadContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'checkOracleSlippage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"factory"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useReadSwapRouter02Factory = /*#__PURE__*/ createUseReadContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"factoryV2"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useReadSwapRouter02FactoryV2 = /*#__PURE__*/ createUseReadContract(
  {
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'factoryV2',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"positionManager"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useReadSwapRouter02PositionManager =
  /*#__PURE__*/ createUseReadContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'positionManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02 = /*#__PURE__*/ createUseWriteContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveMax"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ApproveMax =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveMax',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveMaxMinusOne"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ApproveMaxMinusOne =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveMaxMinusOne',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveZeroThenMax"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ApproveZeroThenMax =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveZeroThenMax',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveZeroThenMaxMinusOne"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ApproveZeroThenMaxMinusOne =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveZeroThenMaxMinusOne',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"callPositionManager"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02CallPositionManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'callPositionManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactInput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactInputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ExactInputSingle =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactInputSingle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactOutput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactOutputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02ExactOutputSingle =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactOutputSingle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"getApprovalType"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02GetApprovalType =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'getApprovalType',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"increaseLiquidity"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02IncreaseLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'increaseLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02Mint = /*#__PURE__*/ createUseWriteContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"multicall"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02Multicall =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"pull"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02Pull = /*#__PURE__*/ createUseWriteContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
  functionName: 'pull',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"refundETH"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02RefundEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'refundETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SelfPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermitAllowed"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SelfPermitAllowed =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermitAllowed',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermitAllowedIfNecessary"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SelfPermitAllowedIfNecessary =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermitAllowedIfNecessary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermitIfNecessary"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SelfPermitIfNecessary =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermitIfNecessary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"swapExactTokensForTokens"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SwapExactTokensForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"swapTokensForExactTokens"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SwapTokensForExactTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'swapTokensForExactTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"sweepToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SweepToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'sweepToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"sweepTokenWithFee"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02SweepTokenWithFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'sweepTokenWithFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"uniswapV3SwapCallback"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02UniswapV3SwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'uniswapV3SwapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"unwrapWETH9"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02UnwrapWeth9 =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'unwrapWETH9',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"unwrapWETH9WithFee"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02UnwrapWeth9WithFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'unwrapWETH9WithFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"wrapETH"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useWriteSwapRouter02WrapEth = /*#__PURE__*/ createUseWriteContract(
  {
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'wrapETH',
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02 = /*#__PURE__*/ createUseSimulateContract({
  abi: swapRouter02Abi,
  address: swapRouter02Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveMax"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ApproveMax =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveMax',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveMaxMinusOne"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ApproveMaxMinusOne =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveMaxMinusOne',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveZeroThenMax"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ApproveZeroThenMax =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveZeroThenMax',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"approveZeroThenMaxMinusOne"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ApproveZeroThenMaxMinusOne =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'approveZeroThenMaxMinusOne',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"callPositionManager"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02CallPositionManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'callPositionManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactInput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactInputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ExactInputSingle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactInputSingle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactOutput"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"exactOutputSingle"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02ExactOutputSingle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'exactOutputSingle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"getApprovalType"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02GetApprovalType =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'getApprovalType',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"increaseLiquidity"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02IncreaseLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'increaseLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"multicall"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02Multicall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"pull"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02Pull =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'pull',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"refundETH"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02RefundEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'refundETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SelfPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermitAllowed"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SelfPermitAllowed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermitAllowed',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermitAllowedIfNecessary"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SelfPermitAllowedIfNecessary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermitAllowedIfNecessary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"selfPermitIfNecessary"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SelfPermitIfNecessary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'selfPermitIfNecessary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"swapExactTokensForTokens"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SwapExactTokensForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"swapTokensForExactTokens"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SwapTokensForExactTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'swapTokensForExactTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"sweepToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SweepToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'sweepToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"sweepTokenWithFee"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02SweepTokenWithFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'sweepTokenWithFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"uniswapV3SwapCallback"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02UniswapV3SwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'uniswapV3SwapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"unwrapWETH9"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02UnwrapWeth9 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'unwrapWETH9',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"unwrapWETH9WithFee"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02UnwrapWeth9WithFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'unwrapWETH9WithFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouter02Abi}__ and `functionName` set to `"wrapETH"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E)
 */
export const useSimulateSwapRouter02WrapEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouter02Abi,
    address: swapRouter02Address,
    functionName: 'wrapETH',
  })
