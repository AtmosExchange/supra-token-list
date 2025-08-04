export type TokenInfo = {
  coinAddress: `0x${string}` | null
  faAddress: `0x${string}` | null
  name: string
  symbol: string
  decimals: number
  officialSymbol: string
  logoUrl: string | null
  projectUrl: string | null
  twiterUrl: string | null  
  telegramUrl: string | null
  discordUrl: string | null
  tags?: string[] | null
  atmosUiIndex?: number | null
  coinGeckoId: string | null
  coinMarketCapId: number | null
  verified: "Verified" | "Scam" | "Unverified" 
}
