import { swapRouter02Abi } from "../abi/swapRouterV2";
import {useChainId, useWaitForTransactionReceipt, useWriteContract} from 'wagmi'
import { SwapRouter02_ADDRESS } from "@/constants/tokens";

export function useSwap(tokenIn: `0x${string}`, tokenOut: `0x${string}`, amountIn: bigint, fee = 500, recipient: `0x${string}`, sqrtPriceLimitX96 = 0n, isETH = false) {
    const chainId = useChainId()
    const {mutate, data: hash, isPending} = useWriteContract()
    const amountOutMinimum = 0n
    const swap = () => {
        console.log('swap', tokenIn, tokenOut, amountIn, fee, recipient, sqrtPriceLimitX96)
        mutate({
            abi: swapRouter02Abi,
            address: SwapRouter02_ADDRESS[chainId],
            functionName: 'exactInputSingle',
            args: [
                {
                    tokenIn,
                    tokenOut,
                    fee,
                    recipient,
                    amountIn,
                    amountOutMinimum,
                    sqrtPriceLimitX96
                }
            ],
            value: isETH ? amountIn : 0n
        })
    }
    const {data: receipt, isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({
        hash
    })

    return {
        swap,
        hash,
        receipt,
        isPending,
        isConfirming,
        isConfirmed
    }
}