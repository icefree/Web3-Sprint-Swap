'use client'

import { useState, useEffect } from 'react'
import { useDisconnect, useConnection, useBalance, useChainId, useConnectors, useConnect } from 'wagmi'
import { formatUnits, parseUnits } from 'viem'
import { Particles } from '@/components/Particles'
import { CloudDecor } from '@/components/CloudDecor'
import { TokenSelector } from '@/components/TokenSelector'
import { useQuote } from '@/hooks/useQuote'
import { useToken } from '@/hooks/useToken'
import { getToken, resolveTokenSymbol, SwapRouter02_ADDRESS } from '@/constants/tokens'
import { useSwap } from '@/hooks/useSwap'
import { useAllownce } from '@/hooks/useAllownce'
import { useApprove } from '@/hooks/useApprove'
import { useUnwrap } from '@/hooks/useUnwrap'

// 模拟代币列表 - 修仙风格命名
const TOKENS = [
  { symbol: 'ETH', name: '以太灵石', icon: '💎', color: 'eth' },
  { symbol: 'WETH', name: '封装灵石', icon: '🌀', color: 'weth' },
  { symbol: 'USDC', name: '稳定丹', icon: '🔮', color: 'usdc' },
  { symbol: 'DAI', name: '金元丹', icon: '🌟', color: 'dai' },
]

// 区块浏览器配置
const BLOCK_EXPLORERS: Record<number, string> = {
  1: 'https://etherscan.io',
  11155111: 'https://sepolia.etherscan.io',
}

function App() {
  const { connect, isPending: isConnecting, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useConnection()
  const chainId = useChainId()

  // Swap 状态
  const [fromToken, setFromToken] = useState(TOKENS[0])
  const [toToken, setToToken] = useState(TOKENS[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [showConnectors, setShowConnectors] = useState(false)

  const { data: balance, refetch } = useBalance({ address })
  const formattedBalance = balance ? `${Number(formatUnits(balance.value, balance.decimals)).toFixed(4)} ${balance.symbol}` : '0'

  const { amountOut } = useQuote(fromToken.symbol, toToken.symbol, fromAmount)

  const fromTokenInfo = getToken(chainId, fromToken.symbol)
  const { balance: fromTokenBalance, refetch: refetchTokenBalance } = useToken(fromTokenInfo?.address!, address)
  const formattedTokenBalance = fromTokenBalance ? `${Number(formatUnits(fromTokenBalance, fromTokenInfo?.decimals!)).toFixed(4)} ${fromToken.symbol}` : '0'

  // 计算正确的 amountIn（根据代币 decimals）
  const fromTokenDecimals = fromTokenInfo?.decimals ?? 18
  const amountIn = fromAmount && Number(fromAmount) > 0
    ? parseUnits(fromAmount, fromTokenDecimals)
    : 0n

  const { swap, hash, isPending, isConfirming, isConfirmed } = useSwap(
    getToken(chainId, resolveTokenSymbol(fromToken.symbol))?.address!,
    getToken(chainId, resolveTokenSymbol(toToken.symbol))?.address!,
    amountIn,
    500,
    address!,
    0n,
    fromToken.symbol === 'ETH'
  )

  const {
    approve,
    isPending: isApprovePending,
    isConfirming: isApproveConfirming,
    isConfirmed: isApproveConfirmed
  } = useApprove(
    getToken(chainId, resolveTokenSymbol(fromToken.symbol))?.address!,
    SwapRouter02_ADDRESS[chainId],
    amountIn
  )

  const {
    allowance,
    refetch: refetchAllowance,
    revoke,
    isRevoking,
    isRevokeConfirming,
    isRevokeConfirmed
  } = useAllownce(
    getToken(chainId, resolveTokenSymbol(fromToken.symbol))?.address!,
    address!,
    SwapRouter02_ADDRESS[chainId]
  )

  const { unwrap, isConfirmed: isUnwrapConfirmed, hash: unwrapHash } = useUnwrap()

  // 是否需要 approve（非 ETH 且 allowance 不足）
  const needsApproval = fromToken.symbol !== 'ETH' &&
    amountIn > 0n &&
    (!allowance || allowance < amountIn)

  useEffect(() => {
    setToAmount(amountOut)
  }, [amountOut])

  useEffect(() => {
    if (isConfirmed) {
      refetch() // 刷新 ETH 余额
      refetchTokenBalance?.() // 刷新 token 余额（安全调用）

      // 如果换成的是 WETH，自动执行 unwrap
      // if (toToken.symbol === 'WETH' && amountOut) {
      //   const amountOutMin = parseUnits(amountOut, 18)
      //   if (amountOutMin > 0n) {
      //     console.log('Detected swap to WETH, auto unwrapping...')
      //     unwrap(amountOutMin, address!)
      //   }
      // }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfirmed, toToken.symbol, amountOut, address])

  // unwrap 成功后刷新余额
  useEffect(() => {
    if (isUnwrapConfirmed) {
      refetch()
    }
  }, [isUnwrapConfirmed, refetch])

  // approve 成功后刷新 allowance
  useEffect(() => {
    if (isApproveConfirmed) {
      refetchAllowance()
    }
  }, [isApproveConfirmed, refetchAllowance])

  // revoke 成功后刷新 allowance
  useEffect(() => {
    if (isRevokeConfirmed) {
      refetchAllowance()
    }
  }, [isRevokeConfirmed, refetchAllowance])

  // 交换代币
  const handleSwapTokens = () => {
    const tempToken = fromToken
    const tempAmount = fromAmount
    setFromToken(toToken)
    setToToken(tempToken)
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  // 截断地址显示
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  // 获取汇率显示
  const getRate = () => {
    if (!fromAmount || !amountOut || Number(fromAmount) <= 0) {
      return ''
    }
    const rate = Number(amountOut) / Number(fromAmount)
    return `1 ${fromToken.symbol} ≈ ${rate.toFixed(4)} ${toToken.symbol}`
  }

  return (
    <>
      <div className="mystical-bg" />
      <Particles />
      <CloudDecor position="left" />
      <CloudDecor position="right" />

      <div className="app-container">
        <header className="header">
          <div className="logo">
            <div className="logo-icon">☯</div>
            <span className="logo-text">灵石阁</span>
          </div>

          {isConnected ? (
            <button
              className="wallet-btn connected"
              onClick={() => disconnect()}
            >
              <div className="wallet-badge">仙</div>
              <div>
                <div style={{ fontWeight: 600 }}>{truncateAddress(address!)}</div>
                <div style={{ fontSize: '12px', color: '#a09080' }}>
                  {balance ? formattedBalance : '加载中...'}
                </div>
              </div>
            </button>
          ) : (
            <button
              className="wallet-btn"
              onClick={() => setShowConnectors(true)}
            >
              <div className="wallet-badge">🔗</div>
              <span>连接法器</span>
            </button>
          )}
        </header>

        <div className="swap-card">
          <div className="corner-decor corner-tl" />
          <div className="corner-decor corner-tr" />
          <div className="corner-decor corner-bl" />
          <div className="corner-decor corner-br" />

          <h1 className="card-title">炼丹炉</h1>
          <p className="card-subtitle">以灵石炼万丹，以万丹换灵石</p>

          <div className="token-input-wrapper">
            <div className="token-input-label">
              <span>投入灵材</span>
              <span>余额: {isConnected ? (fromToken.symbol === 'ETH' ? formattedBalance : formattedTokenBalance) : '--'}</span>
            </div>
            <div className="token-input-row">
              <input
                type="number"
                className="amount-input"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
              />
              <TokenSelector token={fromToken} tokens={TOKENS} onSelect={(token) => {
                if (token.symbol === toToken.symbol) {
                  setToToken(fromToken)
                }
                setFromToken(token)
              }} />
            </div>
          </div>

          <button className="swap-direction-btn" onClick={handleSwapTokens} />

          <div className="token-input-wrapper output">
            <div className="token-input-label">
              <span>炼成丹药</span>
              <span>余额: {isConnected ? '∞' : '--'}</span>
            </div>
            <div className="token-input-row">
              <input
                type="number"
                className="amount-input"
                placeholder="0.0"
                value={toAmount}
                readOnly
              />
              <TokenSelector token={toToken} tokens={TOKENS} onSelect={(token) => {
                if (token.symbol === fromToken.symbol) {
                  setFromToken(toToken)
                }
                setToToken(token)
              }} />
            </div>
          </div>

          {fromAmount && toAmount && (
            <div className="rate-info">
              <span className="rate-label">汇率</span>
              <span className="rate-value">
                <span className="rate-icon">⚡</span>
                {getRate()}
              </span>
            </div>
          )}

          {(isPending || isConfirming || isConfirmed || hash) && (
            <div className="tx-status">
              <div className="tx-progress">
                <div className={`tx-step ${isPending || isConfirming || isConfirmed ? 'active' : ''} ${isConfirming || isConfirmed ? 'done' : ''}`}>
                  <div className="tx-step-icon">{isConfirming || isConfirmed ? '✓' : isPending ? '◉' : '○'}</div>
                  <span>签名</span>
                </div>
                <div className={`tx-step-line ${isConfirming || isConfirmed ? 'done' : ''}`} />
                <div className={`tx-step ${isConfirming || isConfirmed ? 'active' : ''} ${isConfirmed ? 'done' : ''}`}>
                  <div className="tx-step-icon">{isConfirmed ? '✓' : isConfirming ? '◉' : '○'}</div>
                  <span>确认</span>
                </div>
                <div className={`tx-step-line ${isConfirmed ? 'done' : ''}`} />
                <div className={`tx-step ${isConfirmed ? 'active done' : ''}`}>
                  <div className="tx-step-icon">{isConfirmed ? '✓' : '○'}</div>
                  <span>完成</span>
                </div>
              </div>

              <div className="tx-message">
                {isPending && (
                  <span className="tx-pending">
                    <span className="tx-spinner" /> 请在钱包中确认交易...
                  </span>
                )}
                {isConfirming && (
                  <span className="tx-confirming">
                    <span className="tx-spinner" /> 交易确认中，请稍候...
                  </span>
                )}
                {isConfirmed && (
                  <span className="tx-success">
                    ✨ 炼丹成功！灵材已转化
                  </span>
                )}
              </div>

              {hash && (
                <a
                  href={`${BLOCK_EXPLORERS[chainId] || 'https://etherscan.io'}/tx/${hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tx-hash-link"
                >
                  🔗 查看仙籍记录 ({hash.slice(0, 8)}...{hash.slice(-6)})
                </a>
              )}
              {unwrapHash && (
                <a
                  href={`${BLOCK_EXPLORERS[chainId] || 'https://etherscan.io'}/tx/${unwrapHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tx-hash-link"
                  style={{ marginTop: '4px' }}
                >
                  🔗 查看化茧成蝶记录 ({unwrapHash.slice(0, 8)}...{unwrapHash.slice(-6)})
                </a>
              )}
            </div>
          )}

          {isConnected ? (
            needsApproval ? (
              <button
                className="swap-btn approve"
                disabled={!fromAmount || Number(fromAmount) <= 0 || isApprovePending || isApproveConfirming}
                onClick={approve}
              >
                {isApprovePending ? '等待签名...' : isApproveConfirming ? '授权中...' : `授权 ${fromToken.symbol}`}
              </button>
            ) : (
              <button
                className="swap-btn"
                disabled={!fromAmount || Number(fromAmount) <= 0 || isPending || isConfirming}
                onClick={swap}
              >
                {isPending ? '等待签名...' : isConfirming ? '确认中...' : fromAmount && Number(fromAmount) > 0 ? '开始炼制' : '请输入灵材数量'}
              </button>
            )
          ) : (
            <button
              className="swap-btn connect-prompt"
              onClick={() => setShowConnectors(true)}
            >
              连接法器以开启炼丹
            </button>
          )}

          {isConnected && (
            <div className="status-info">
              <div className="status-row">
                <span className="status-label">仙籍地址</span>
                <span className="status-value address">{truncateAddress(address!)}</span>
              </div>
              <div className="status-row">
                <span className="status-label">灵力余额</span>
                <span className="status-value balance">
                  {formattedBalance}
                </span>
              </div>
              <div className="status-row">
                <span className="status-label">修炼境界</span>
                <span className="status-value">链ID: {chainId}</span>
              </div>
              {fromToken.symbol !== 'ETH' && allowance && allowance > 0n && (
                <div className="status-row">
                  <span className="status-label">{fromToken.symbol} 授权</span>
                  <span className="status-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#4ade80' }}>已授权</span>
                    <button
                      className="revoke-btn"
                      onClick={revoke}
                      disabled={isRevoking || isRevokeConfirming}
                    >
                      {isRevoking ? '签名中...' : isRevokeConfirming ? '撤销中...' : '撤销'}
                    </button>
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showConnectors && (
        <div className="connectors-modal" onClick={() => setShowConnectors(false)}>
          <div className="connectors-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="connectors-title">选择法器</h2>
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                className="connector-btn"
                onClick={() => {
                  connect({ connector })
                  setShowConnectors(false)
                }}
                disabled={isConnecting}
              >
                <div className="connector-icon">⚡</div>
                <span>{connector.name}</span>
                {isConnecting && <span className="loading-spinner" />}
              </button>
            ))}
            <button
              className="close-modal-btn"
              onClick={() => setShowConnectors(false)}
            >
              取消
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
