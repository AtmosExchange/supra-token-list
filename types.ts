export type TokenType = {
  coinAddress: `0x${string}` | null
  faAddress: `0x${string}` | null
  name: string
  symbol: string
  decimals: number
  officialSymbol: string
  logoUrl: string | null
  projectUrl: string | null
  twitterUrl: string | null
  telegramUrl: string | null
  discordUrl: string | null
  tags?: string[] | null
  atmosUiIndex?: number | null
  coinGeckoId: string | null
  coinMarketCapId: number | null
  verified: "Verified" | "Recognized" | "Scam" | "Unverified"
  is_featured: boolean
}

export type TokenRequestType = {
  coinAddress: `0x${string}` | null
  faAddress: `0x${string}` | null
  name: string
  symbol: string
  decimals: number
  logoUrl: string
  projectUrl: string
  twitterUrl: string | null
  telegramUrl: string | null
  discordUrl: string | null
  coinGeckoId: string | null
  coinMarketCapId: number | null
}
