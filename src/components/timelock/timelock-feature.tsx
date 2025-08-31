import { WalletButton } from '../solana/solana-provider'
import { TimelockProgram, TimelockProgramExplorerLink } from './timelock-ui'
import { AppHero } from '../app-hero'
import { useWalletUi } from '@wallet-ui/react'

export default function TimelockFeature() {
  const { account } = useWalletUi()

  if (!account) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="hero py-[64px]">
          <div className="hero-content text-center">
            <WalletButton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <AppHero title="Timelock" subtitle={'Lock your SOL for safe-keeping'}>
      </AppHero>
      <TimelockProgram />
    </div>
  )
}
