// Copyright 2021  jjlrjjlr (https://github.com/jjlrjjlr)

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU Affero General Public License as published
//     by the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU Affero General Public License for more details.

//     You should have received a copy of the GNU Affero General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.
const {Client, Intents, Interaction} = require('discord.js')
const { readFile } = require('fs')
const {token} = require('./config.json')
const client = new Client({intents:[Intents.FLAGS.GUILDS]})


client.once('ready', () => {
    console.log('Ready');
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const {commandName} = interaction;

    if (commandName == 'ping') {
        await interaction.reply(client.uptime.toString());
    }
});

client.login(token);
