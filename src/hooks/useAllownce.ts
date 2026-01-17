import { useChainId, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { erc20Abi } from "viem"
import { SwapRouter02_ADDRESS } from "@/constants/tokens"

export function useAllownce(tokenAddress: `0x${string}`, owner: `0x${string}`, spender: `0x${string}`) {
    const {data: allowance, isLoading, refetch} = useReadContract({
        abi: erc20Abi,
        address: tokenAddress,
        functionName: 'allowance',
        args: [
            owner,
            spender
        ]
    })

    // 用于撤销授权 (revoke)
    const { 
        writeContract: revokeApproval, 
        data: revokeHash, 
        isPending: isRevoking,
        error: revokeError 
    } = useWriteContract()

    const { isLoading: isRevokeConfirming, isSuccess: isRevokeConfirmed } = useWaitForTransactionReceipt({
        hash: revokeHash
    })

    // 撤销授权的函数
    const revoke = () => {
        revokeApproval({
            abi: erc20Abi,
            address: tokenAddress,
            functionName: 'approve',
            args: [spender, 0n] // 设置 allowance 为 0
        })
    }

    return {
        allowance,
        isLoading,
        refetch,
        // revoke 相关
        revoke,
        isRevoking,
        isRevokeConfirming,
        isRevokeConfirmed,
        revokeHash,
        revokeError
    }
}