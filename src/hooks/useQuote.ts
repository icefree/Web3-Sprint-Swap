import { useChainId } from 'wagmi'
import { parseUnits, formatUnits } from 'viem'
import { getToken, getQuoterAddress, resolveTokenSymbol } from '../constants/tokens'
import { useReadQuoterV2QuoteExactInputSingle } from '../quoterV2'

export function useQuote(
    tokenInSymbol: string,
    tokenOutSymbol: string,
    amountIn: string,
    fee: number = 500
) {
    const chainId = useChainId()
    const tokenIn = getToken(chainId, resolveTokenSymbol(tokenInSymbol))
    const tokenOut = getToken(chainId, resolveTokenSymbol(tokenOutSymbol))
    const quoterAddress = getQuoterAddress(chainId)

    const canQuote = !!(tokenIn && tokenOut && quoterAddress && amountIn && Number(amountIn) > 0)

    const { data, isLoading , error} = useReadQuoterV2QuoteExactInputSingle({
        args: canQuote ? [{
            tokenIn: tokenIn!.address,
            tokenOut: tokenOut!.address,
            amountIn: parseUnits(amountIn, tokenIn!.decimals),
            fee,
            sqrtPriceLimitX96: 0n,
        }] : undefined,
        query: {
            enabled: canQuote
        }
    })
    console.log('chainId:', chainId)
    console.log('tokenIn:', tokenIn)
    console.log('tokenOut:', tokenOut)
    console.log('canQuote:', canQuote)
    console.log('data:', data)
    console.log('error:', error)

    // 格式化输出
    const amountOut = data ? formatUnits(data[0], tokenOut?.decimals || 0) : ''

    return {
      amountOut,
      isLoading,
      error,
    }
}
