import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { erc20Abi } from "viem"

export function useApprove(tokenAddress: `0x${string}`, spender: `0x${string}`, amount: bigint) {
    const {mutate, data: hash, isPending} = useWriteContract()
    const {data: receipt, isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({
        hash
    })
    const approve = () => {
        mutate({
            abi: erc20Abi,
            address: tokenAddress,
            functionName: 'approve',
            args: [
                spender,
                amount
            ]
        })
    }
    return {
        approve,
        hash,
        receipt,
        isPending,
        isConfirming,
        isConfirmed
    }
}