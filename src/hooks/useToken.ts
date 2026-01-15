import { erc20Abi } from 'viem'
import { useReadContract } from 'wagmi'

export function useToken(
    tokenAddress: `0x${string}`,    // 代币合约地址
    userAddress: `0x${string}` | undefined  // 用户钱包地址
) {
    const { data: balance, isLoading, error } = useReadContract({
        abi: erc20Abi,
        address: tokenAddress,
        functionName: 'balanceOf',
        args: userAddress ? [userAddress] : undefined,  // 用户地址
        query: {
            enabled: !!userAddress,
        },  
    })
    return {
        balance,
        isLoading,
        error,
    }
}