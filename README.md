# Supra Token List

An Atmos-managed token list for tokens on the Supra blockchain. This repository maintains a comprehensive registry of all well-known, tradable, and scam tokens on the Supra network.

## Token Categories

### Native
Tokens that are native to the Supra blockchain, including the main SUPRA token and other core protocol tokens.

### Bridged
Tokens that have been bridged from other blockchains (e.g., Ethereum, Solana) to operate on the Supra network.

### Meme
Community-driven meme tokens and experimental tokens created on the Supra blockchain.

## Verification Status

Tokens in this list are categorized by their verification status:

- **Verified**: Officially verified tokens with confirmed legitimacy
- **Recognized**: Well-known tokens that are widely accepted but may not have full verification
- **Scam**: Identified scam or malicious tokens (included for user protection)
- **Unverified**: Tokens that have not yet been verified or recognized

## How to Add or Modify Token Details

If you're not familiar with GitHub, please refer to our documentation or open a ticket on Discord - we'll help you. The fastest way to submit your token is through GitHub.

Follow these steps to submit your token for inclusion in the list:

### 1. Fork the Repository
Fork this repository to your GitHub account.

### 2. Add Your Token Icon
- Add your token's logo to the `logos/` directory
- Use a high-quality image (preferably SVG or PNG)
- Name the file using your token's symbol (e.g., `MYTOKEN.svg`)

### 3. Submit Token Request
- Open `token-addition-request.ts`
- Add your token details following the provided template:

```typescript
const tokenRequest: TokenRequestType = {
    coinAddress: null, //  your token's coin address
    faAddress: "0x1234567890123456789012345678901234567890", // your token's FA address
    name: "Your Token Name",
    symbol: "YOURTOKEN",
    decimals: 8,
    logoUrl: "https://raw.githubusercontent.com/AtmosExchange/supra-token-list/main/logos/YOURTOKEN.svg",
    projectUrl: "https://yourproject.com",
    twitterUrl: "https://twitter.com/yourproject",
    telegramUrl: "https://t.me/yourproject",
    discordUrl: "https://discord.gg/yourproject",
    coinGeckoId: "your-token-gecko-id", // optional
    coinMarketCapId: 1234567890, // optional
}
```

### 4. Commit and Create Pull Request
- Commit your changes with a descriptive message
- Create a pull request with details about your token
- Include any relevant documentation or links

### 5. Fast Verification (Recommended)
For faster verification, tweet about your token addition request and tag [@AtmosProtocol](https://twitter.com/AtmosProtocol) on Twitter, including a link to your pull request. This helps our team prioritize legitimate requests.

## Important Reminder

**Tokens are always available for trading by pasting the complete token address into our token picker, regardless of their validation status.** This list is primarily for user convenience and safety.

## Fetching Token Data

### GitHub Raw Content
You can fetch the token list directly from GitHub:

```bash
curl https://raw.githubusercontent.com/AtmosExchange/supra-token-list/main/token-list.json
```

### API Endpoint
For production use, we recommend using our hosted API (documentation coming soon).

## Token Data Structure

Each token in the list contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `coinAddress` | `string \| null` | The token's coin address  |
| `faAddress` | `string \| null` | The token's fungible asset (FA) address |
| `name` | `string` | Full name of the token |
| `symbol` | `string` | Token symbol/ticker |
| `decimals` | `number` | Number of decimal places for the token |
| `officialSymbol` | `string` | Official symbol as recognized by the protocol |
| `logoUrl` | `string \| null` | URL to the token's logo image |
| `projectUrl` | `string \| null` | Official project website URL |
| `twitterUrl` | `string \| null` | Official Twitter/X profile URL |
| `telegramUrl` | `string \| null` | Official Telegram group/channel URL |
| `discordUrl` | `string \| null` | Official Discord server URL |
| `tags` | `string[] \| null` | Array of category tags (e.g., ["Native", "Meme"]) |
| `atmosUiIndex` | `number \| null` | UI display index for Atmos interface |
| `coinGeckoId` | `string \| null` | CoinGecko API identifier |
| `coinMarketCapId` | `number \| null` | CoinMarketCap API identifier |
| `verified` | `string` | Verification status: "Verified", "Recognized", "Scam", or "Unverified" |
| `is_featured` | `boolean` | Whether the token is featured in the UI |

## Contributing

We welcome contributions to improve this token list. Please ensure:

1. All token information is accurate and up-to-date
2. Logo images are high quality and properly formatted
3. URLs are valid and accessible
4. Follow the existing data structure and naming conventions

## License

This token list is maintained by Atmos and is available for public use.

## Support

For questions or support regarding token listings, please:
- **Primary support**: Open a ticket on [Discord](https://discord.gg/TAzMQbucFX)
- Open an issue in this repository
- Contact us on [Twitter](https://twitter.com/AtmosProtocol)