import { SetUpDiscord } from './discord'
import { DiscordClient } from './clients/discordClient'
import { Client } from 'discord.js'
import { DISCORD_ACCESS_TOKEN, FRONTEND } from './config'
import { GetMarketDetails } from './actions'

let discordClient: Client

export async function Run(): Promise<void> {
  try {
    console.log('Running Bot')
    // set up discord
    global.MARKET_SETTINGS = {}
    await GetMarketDetails()
    await Promise.all([SetUpDiscord((discordClient = DiscordClient()), DISCORD_ACCESS_TOKEN, FRONTEND)])
  } catch (error) {
    console.log(error)
  }
}
