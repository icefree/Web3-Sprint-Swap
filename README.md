# ☯ Lingshi Pavilion (灵石阁)

> **A Xianxia-themed Web3 Token Swap Application.**
> **基于修仙背景的 Web3 代币兑换应用。**

[![Project Status](https://img.shields.io/badge/Project-Demo-blueviolet?style=for-the-badge)](https://github.com/icefree/Web3-Sprint-Swap)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Wagmi%20%7C%20Viem-success?style=for-the-badge)](https://wagmi.sh)

[English](#english) | [简体中文](#简体中文)

---

<a name="english"></a>

## 🌟 English Overview

**Lingshi Pavilion** is a premium Web3 decentralized exchange (DEX) demo built with a unique "Xianxia" (Cultivation) aesthetic. It provides a seamless interface for swapping tokens, managing allowances, and interacting with the Ethereum blockchain (and testnets like Sepolia).

### 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Web3 Essentials:** [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/)
- **State Management:** [TanStack Query](https://tanstack.com/query/latest)
- **Smart Contracts Interaction:** Uniswap V3 SDK & Periphery
- **Styling:** Custom CSS with mystical/Xianxia animations

### ✨ Key Features

- **Alchemy Furnace (DEX Swap):** Swap between "Spirit Stones" (ETH), "Stability Pills" (USDC), and "Golden Essence Pills" (DAI) with real-time quotes.
- **Magic Tool Connection (Wallet):** Integrated support for various wallets via Wagmi.
- **Alchemy Rituals (Transaction Tracking):** Visual feedback for transaction status (Signing → Confirming → Completed).
- **Allowance Management:** Easily "Approve" (authorize) or "Revoke" (cancel) token access for the exchange contract.
- **Responsive Mystical UI:** Dynamic particles, cloud decorations, and a responsive glassmorphism layout.

### 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/icefree/Web3-Sprint-Swap.git
   cd swap-demo
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Environments:**
   Create a `.env.local` based on your needs (e.g., WalletConnect project IDs).

4. **Run for development:**
   ```bash
   pnpm dev
   ```

---

<a name="简体中文"></a>

## 🏮 中文概述

**灵石阁** 是一款以“修仙”为主题背景的 Web3 去中心化代币兑换 Demo。它将枯燥的区块链交互转化为极具仪式感的“炼丹”过程，支持代币兑换、授权管理以及实时行情查询。

### 🛠 技术栈

- **前端框架:** [Next.js](https://nextjs.org/) (App Router)
- **Web3 工具链:** [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/)
- **状态管理:** [TanStack Query](https://tanstack.com/query/latest)
- **智能合约交互:** Uniswap V3 SDK & Periphery
- **视觉风格:** 原生 CSS 构建的唯美修仙风，包含粒子特效与云雾装饰

### ✨ 核心功能

- **炼丹炉 (代币兑换):** 在“以太灵石”(ETH)、“稳定丹”(USDC) 与“金元丹”(DAI) 之间自由兑换，支持实时报价。
- **法器连接 (钱包):** 通过 Wagmi 快速连接各类数字钱包。
- **炼丹进度 (事务追踪):** 可视化展示交易状态：签名 -> 确认 -> 功成。
- **灵材管理 (授权控制):** 提供直观的代币授权 (Approve) 与撤销 (Revoke) 功能，确保资产安全。
- **动态仙境交互:** 粒子背景、流动云雾以及响应式的磨砂玻璃 UI 设计。

### 🚀 快速开始

1. **克隆仓库:**

   ```bash
   git clone https://github.com/icefree/Web3-Sprint-Swap.git
   cd swap-demo
   ```

2. **安装依赖:**

   ```bash
   pnpm install
   ```

3. **配置环境:**
   根据需要创建 `.env.local` 文件。

4. **启动开发服务器:**
   ```bash
   pnpm dev
   ```

---

## 📂 Project Structure

- `src/app`: Application logic and page layouts.
- `src/components`: Reusable UI components (Alchemy icons, Token selectors, etc.).
- `src/hooks`: Custom Web3 hooks for Swapping, Quoting, and Approving.
- `src/constants`: Contract addresses and token configurations.
- `src/abi`: Smart contract ABIs.

---

## 📜 License

MIT License. Feel free to use and build upon this "Xianxia" adventure!
