'use client'

// 代币类型
export interface Token {
  symbol: string
  name: string
  icon: string
  color: string
}

interface TokenSelectorProps {
  token: Token
  tokens: Token[]
  onSelect?: (token: Token) => void
}

export function TokenSelector({ token, tokens, onSelect }: TokenSelectorProps) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedToken = tokens.find((t) => t.symbol === e.target.value)
    if (selectedToken) {
      onSelect?.(selectedToken)
    }
  }

  return (
    <div className="token-selector">
      {/* 当前选中代币的展示 */}
      <div className={`token-icon ${token.color}`}>
        {token.icon}
      </div>
      <span className="token-name">{token.name}</span>
      
      {/* 隐藏式 select 覆盖在整个区域上 */}
      <select
        className="token-select"
        onChange={handleSelect}
        value={token.symbol}
      >
        {tokens.map((t) => (
          <option key={t.symbol} value={t.symbol}>
            {t.icon} {t.name} ({t.symbol})
          </option>
        ))}
      </select>
      
      {/* 下拉箭头 */}
      <span className="token-dropdown-icon">▼</span>
    </div>
  )
}
