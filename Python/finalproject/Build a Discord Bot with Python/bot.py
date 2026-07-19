import discord
import requests


def get_meme():
    response = requests.get('https://meme-api.com/gimme', timeout=10)
    response.raise_for_status()
    data = response.json()
    return data.get('title', 'Random meme'), data['url']

class MyClient(discord.Client):
  async def on_ready(self):
    print('Logged on as {0}!'.format(self.user))

  async def on_message(self, message):
    if message.author == self.user:
      return

    if message.content.startswith('$hello'):
      await message.channel.send('Hello World!')

    if message.content.startswith('$meme'):
      title, url = get_meme()
      await message.channel.send(f'{title}\n{url}')

intents = discord.Intents.default()
intents.message_content = True

client = MyClient(intents=intents)
client.run('YOUR_DISCORD_TOKEN_HERE') 

