import { useChainId, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { SwapRouter02_ADDRESS } from '@/constants/tokens'
import { swapRouter02Abi } from '@/abi/swapRouterV2'

/**
 * Hook to unwrap WETH to ETH using the SwapRouter02 contract.
 */
export function useUnwrap() {
  const chainId = useChainId()
  const { mutate, data: hash, isPending } = useWriteContract()

  const {
    data: receipt,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  })

  /**
   * Unwraps WETH to ETH.
   * @param amount The amount of WETH to unwrap (in wei).
   * @param recipient The address to receive the ETH.
   */
  const unwrap = (amount: bigint, recipient: `0x${string}`) => {
    if (!amount || !recipient) return

    mutate({
      abi: swapRouter02Abi,
      address: SwapRouter02_ADDRESS[chainId],
      functionName: 'unwrapWETH9',
      args: [amount, recipient],
    })
  }

  return {
    unwrap,
    hash,
    receipt,
    isPending,
    isConfirming,
    isConfirmed,
  }
}
