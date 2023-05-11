import { Tag } from './tag.interface';

export const Tags: Record<string, Tag> = {
	botception: {
		keywords: ['botception'],
		content:
			"It's good practice to make your bots ignore other bots, including itself. This can be done through a single line of code:\n```js\nif (<message>.author.bot) return;\n```\n<message> being whatever you defined message as.\n"
	},
	'bot-about-me': {
		keywords: ['bot-about-me', 'bam'],
		content:
			"To add text to the `About Me` section of your bot's profile, head [here](https://discord.com/developers/applications), click on your bot's application, and fill in the `Description`. The description supports full markdown as well (bold, underline, etc.).\nhttps://imgur.com/zqsWi2d.jpg\n"
	},
	'api-docs': {
		keywords: ['api-docs', 'apidocs'],
		content:
			'The official Discord API documentation: [click](https://discord.com/developers/docs/intro)\n'
	},
	'api-down': {
		keywords: ['api-down', 'apisucc', 'api-succe', 'apidown', 'api-status', "apin't", 'outage'],
		content:
			"Guilds not online, bot login not resolving, can't send messages?\nDiscord might be having API issues! Check the [Discord API status](https://discordstatus.com) for more information.\n"
	},
	markdown: {
		keywords: ['markdown', 'md'],
		content:
			'Using markdown in Discord to spice up your messages:\n• [Discord support article](https://support.discord.com/hc/articles/210298617) \n• [Gist with examples](https://gist.github.com/matthewzring/9f7bbfd102003963f9be7dbcf7d40e51)\n'
	},
	quotes: {
		keywords: ['quotes', '>', '>-quote', '>>>-quote'],
		content:
			'• `> text`: single line blockquote\n• `>>> text`: quote until the end of the message \n'
	},
	'selectmenu-limits': {
		keywords: ['selectmenu-limits', 'sm-limits', 'select-menu-limits'],
		content:
			'Limits for select menus:\n• [Discord Developer Documentation](https://discord.com/developers/docs/interactions/message-components#select-menus)\n'
	},
	filesystem: {
		keywords: [
			'filesystem',
			'fs',
			'files-system',
			'filesystem',
			'writefile',
			'readfile',
			'write-file',
			'read-file'
		],
		content:
			'Reading from and writing to files with nodes fs module: [learn more](https://nodejs.org/api/fs.html#fs_file_system)\n'
	},
	'message-formatting': {
		keywords: [
			'message-formatting',
			'messageformatting',
			'message-formats',
			'formats',
			'emoji-format',
			'timestamp-format',
			'date-format'
		],
		content:
			'Message formatting (mentions, timestamps, emoji, etc.): [learn more](https://discord.com/developers/docs/reference#message-formatting)\n'
	},
	pm2: {
		keywords: ['pm2', 'restart'],
		content:
			'Manage your application state with pm2 so you can restart, stop and delete processes dynamically: [learn more](https://discordjs.guide/improving-dev-environment/pm2.html)\n'
	},
	'node-opus': {
		keywords: ['node-opus', 'discordjs/opus', 'opus-windows'],
		content:
			'    **__Installing @discordjs/opus on Windows__**\n    `@discordjs/opus` requires Node v12+, Python 3+, and Microsoft Build Tools 2017+\n    • Run the official Node.js installer for your node version\n    • On the page "Tools for Native Modules", check "Automatically install the necessary tools"\n    • Navigate to your project directory (where `node_modules` is located)\n    • Install the opus wrapper: `npm install @discordjs/opus`\n'
	},
	hierarchy: {
		keywords: ['hierarchy', 'roleorder'],
		content:
			"• Bots cannot moderate (kick/ban/nickname/...) a target with a higher or equally high highest role or the guild owner.\n• Bots cannot modify (edit/add/remove) roles that are higher or equally high compared to the bot's highest role.\n• The `Administrator` permission does not skip these checks.\n"
	},
	'edit-channel': {
		keywords: [
			'edit-channel',
			'editchannel',
			'channel-topic',
			'channel-name',
			'channel-limits'
		],
		content:
			'Channel name and topic changes are limited to roughly 2 times per 10 minutes.\nIf your channel changes are not going through, this might be why.\n'
	},
	'token-regen': {
		keywords: ['token-regen', 'token-refresh'],
		content:
			'> All my bot tokens are refreshing non stop!\nDiscord does not actually store any tokens in their database. Whenever you visit the page it will generate a new token for you.\nUnless you press the "generate new token" button all of these tokens are valid.\n'
	},
	faq: {
		keywords: ['faq', 'frequently-asked-questions', 'guide-faq', 'guidefaq'],
		content:
			'**F**requently **A**sked **Q**uestions: [learn more](https://discordjs.guide/popular-topics/faq)\n',
		hoisted: true
	},
	avatars: {
		keywords: ['avatars', 'avatar-methods', 'avatarmethods'],
		content:
			'• `User#avatarURL()` global custom avatar, if set\n• `User#defaultAvatarURL` default avatar (clyde with colored background)\n• `User#displayAvatarURL()` global custom avatar or default avatar, if none\n• `GuildMember#avatarURL()` guild specific avatar, if set\n'
	},
	'node-events': {
		keywords: ['node-events', 'nodeevents', 'events'],
		content:
			'• Node event API: [learn more](https://nodejs.org/api/events.html#events_events)\n• Node event loop: [learn more](https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick)\n'
	},
	spoiler: {
		keywords: ['spoiler', 'spoilers', 'image-spoilers', 'spoodler'],
		content:
			'• Text: `|| spoiler text ||` ➞ || spoiler text ||\n• Image: add `SPOILER_` to the beginning of the filename\n'
	},
	beautify: {
		keywords: ['beautify', 'beautifyer', 'indents'],
		content:
			'To make your code more readable (and easier for us to help you with) consider using a beautifier.\n• Quick online tool: [beautifier.io](https://beautifier.io)\n• Script and Editor integrations: [prettier](https://prettier.io/docs/en/editors.html)\n'
	},
	docs: {
		keywords: ['docs', 'djsdocs', 'thedocs', 'documentation'],
		content:
			'discord.js documentation:\n• stable release: [learn more](https://old.discordjs.dev/#/docs/discord.js/14.11.0/general/welcome)\n• developer release: [learn more](https://old.discordjs.dev/#/docs/discord.js/main/general/welcome)\n'
	},
	snipe: {
		keywords: ['snipe', 'snipe-command', 'snipe-commands', 'snipecommands'],
		content:
			'Snipe commands are widely considered a violation of user privacy. If a message is deleted it should stay that way.\n• Logs for moderation purposes are fine\n• Bringing back a deleted message by just anyone to expose or humiliate a user is not\n'
	},
	'specific-channel': {
		keywords: ['specific-channel', 'specificchannel', 'pick-channel'],
		content:
			'```js\nconst channel = client.channels.cache.get("222086648706498562");\nconst channel = guild.channels.cache.find(channel => channel.name === "general");\n```\n• Caches in discord.js are [Collections](https://discord.js.org/docs/packages/collection/stable) which extend the native [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) structure.\n• [learn more](https://discordjs.guide/additional-info/collections.html)\n'
	},
	'node-version': {
		keywords: [
			'node-version',
			'nv',
			'flat',
			'fields-flat',
			'catch-{',
			'update-node',
			'abortcontroller'
		],
		content:
			'Please update Node.js to version 16.9.0 or newer!\n• [Download](https://nodejs.org/en/download)\n• [Linux (nodesource)](https://github.com/nodesource/distributions)\n'
	},
	bug: {
		keywords: ['bug', '🪲', '🐞', '🐛', 'bugs', 'report-bugs', 'djs-bug', 'discord.js-bug'],
		content:
			'Found a bug in discord.js?\n• Please discuss your bug in support channels first, if you are unsure about it\n• Confirm the bug still happens after updating to the latest development release `npm i discord.js@dev`\n• [Open an issue on GitHub](https://github.com/discordjs/discord.js/issues/new/choose) and fill out the given template\n'
	},
	logit: {
		keywords: [
			'logit',
			'log-it',
			'debuglogs',
			'debug-log',
			'console.log',
			'consolelog',
			'console-log',
			'clog',
			'no-error',
			'noerror',
			'no-errors',
			'clg'
		],
		content:
			"If you aren't getting any errors, try to place `console.log` checkpoints throughout your code to find out where execution stops.\n• Once you do, log relevant values and if-conditions\n• More sophisticated debugging methods are breakpoints and runtime inspections: [learn more](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)\n",
		hoisted: true
	},
	'rpc-bot': {
		keywords: ['rpc-bot', 'rich-presence-bot', 'rpb', 'bot-rpc'],
		content:
			'• "Can I use Rich Presence for my bot?" - No.\n• "Will I ever be able to use Rich Presence for my Bot?" - Ask Discord.\n'
	},
	buildtools: {
		keywords: ['buildtools', 'windows-build-tools', 'build-tools', 'node-gyp', 'gyp', 'wbt'],
		content:
			'• Run `npm i windows-build-tools --production --vs2015 --add-python-to-PATH --global` as admin.\n• Restart your terminal or machine (if terminal is not sufficient).\n'
	},
	'get-undefined': {
		keywords: ['get-undefined'],
		content:
			'• The provided id is incorrect (copy role ids from context menus, not message mentions)\n• The client does not have this structure cached (try fetching instead)\n• The client is not yet ready (move the code into any event listener callback)\n'
	},
	'invalid-interaction': {
		keywords: [
			'invalid-interaction',
			'invalid-command',
			'invalid-interaction-command',
			'inv-command'
		],
		content:
			'`Invalid interaction application command`:\n• After updating a global command Discord prevents you from receiving stale data until the update rolled out\n• Refresh your commandlist to receive the updated command and try again\n'
	},
	canary: {
		keywords: ['canary', 'discord-canary'],
		content:
			'The "canary" client is Discord\'s public test build.\n• Install: [win](https://discord.com/api/downloads/distributions/app/installers/latest?platform=win&channel=canary&arch=x86) | [osx](https://discord.com/api/download/canary?platform=osx) | linux ([deb](https://discord.com/api/download/canary?platform=linux&format=deb) | [tar.gz](https://discord.com/api/download/canary?platform=linux&format=tar.gz)) \n• Report Discord client bugs: <https://dis.gd/bugreport>\n'
	},
	snowflake: {
		keywords: ['snowflake', '❄', 'discord-snowflake', 'discord-id', 'snowflakes'],
		content:
			'• Discord ids follow the snowflake format: [learn more](https://discord.com/developers/docs/reference#snowflakes)\n• Discord ids must be represented as strings as they are larger than `Number.MAX_SAFE_INTEGER`, the largest integer that can be represented in JavaScript\n```diff\n- client.guilds.cache.get(123456789012345678)\n+ client.guilds.cache.get("123456789012345678")\n```\n'
	},
	typescript: {
		keywords: ['typescript', 'ts', 'type-script', 'typings'],
		content:
			'TypeScript (TS) is a typed superset of JavaScript that compiles to plain JavaScript\n• [website](https://www.typescriptlang.org/index.html) | [GitHub](https://github.com/microsoft/TypeScript) | [book](https://basarat.gitbook.io/typescript)\n'
	},
	devmode: {
		keywords: ['devmode', 'developermode', 'developer-mode', 'copy-id', 'get-id', 'role-id'],
		content:
			'Enable developer mode to gain access to the "copy id" context menu: [learn more](https://support.discord.com/hc/articles/206346498)\n• copy role ids from context menus (guild settings, user profiles) not message mentions!\n'
	},
	'token-reset': {
		keywords: [
			'token-reset',
			'tokenreset',
			'reset-token',
			'token-danger',
			'token-compromised',
			'regen-token',
			'token-leak',
			'tokenleak'
		],
		content:
			'• Visit the [Discord developer application dashboard](https://discord.com/developers/applications) and select the corresponding application\n• Click on "Bot" on the left side\n• Click the "Reset Token" button and (if enabled) enter your 2FA code on the popup\n'
	},
	'allowed-mentions': {
		keywords: ['allowed-mentions', 'enable-mentions', 'disable-mentions', 'allow-mentions'],
		content:
			'You can control which entities receive notifications via the `allowedMentions` option. You can:\n• Set a [default on the client](https://old.discordjs.dev/#/docs/discord.js/14.11.0/typedef/ClientOptions)\n• Set for a [specific message](https://old.discordjs.dev/#/docs/discord.js/14.11.0/typedef/MessageMentionOptions)\n• Use the `repliedUser` key to disable [in-line reply mentions](https://old.discordjs.dev/#/docs/discord.js/14.11.0/typedef/MessageMentionOptions)\n```js\n{ ..., allowedMentions: { parse: ["users", "roles"] } }\n```\n'
	},
	'escape-emojis': {
		keywords: ['escape-emojis', 'emoji-id'],
		content:
			'• Custom emojis: `\\:name:` ➞ `<a:name:id>`\n• Twemojis: `\\:name:` ➞ unicode representation\n• Emoji picker: `WIN` + `.` / `CMD` + `CTRL` + `SPACE` / `CTRL` + `.` \n• Right-clicking any emoji will not copy its id!\n'
	},
	'dev-tos': {
		keywords: ['dev-tos', 'devtos', 'developer-terms-of-service'],
		content:
			'• Discord developer ToS: [learn more](https://discord.com/developers/docs/legal)\n• ToS Q&A summary: [learn more](https://gist.github.com/meew0/a3168b8fbb02d5a5456a06461b9e829e)\n'
	},
	notation: {
		keywords: ['notation', '<>', 'understanding-notation', 'notation-guide'],
		content:
			'Explaining `<Class>` and `Class#method` notation: [learn more](https://discordjs.guide/additional-info/notation.html)\n'
	},
	collection: {
		keywords: ['collection', 'collections', 'collection-methods'],
		content:
			'discord.js uses [Collection](https://discord.js.org/docs/packages/collection/stable), an extension of the JS native [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) structure.\n• Guide: [learn more](https://discordjs.guide/additional-info/collections.html) [🍪](https://gist.github.com/almostSouji/71a33e5f8e84a0960b4ed3a1609915f5)\n',
		hoisted: true
	},
	ffmpeg: {
		keywords: ['ffmpeg'],
		content:
			'• npm: `npm install ffmpeg-static`\n• Install: [Download](https://www.ffmpeg.org) | [chocolatey](https://chocolatey.org) | [homebrew](https://brew.sh) | your distributions package manager\n• Tutorial: [YouTube](https://www.youtube.com/watch?v=SW-iKrT_nJs)\n• ffmpeg-binaries is [deprecated](https://www.npmjs.com/package/ffmpeg-binaries), uninstall it with `npm rm ffmpeg-binaries`\n'
	},
	joinroles: {
		keywords: ['joinroles', 'join-roles', 'autoroles', 'auto-role'],
		content:
			'Join roles have often unwanted side effects!\n• Assigning a role bypasses verification and security features on Discord\n• Can quickly become API spam and hit rate limits rapidly\n• The server depends on the bot being online and the API to be functional\nThe `@everyone` role is much better suited for announcements\n'
	},
	fetch: {
		keywords: ['fetch', 'undici', 'node-fetch', 'http-requests', 'call-rest-apis'],
		content:
			'Making HTTP requests (for example to call rest APIs)\n• Node: [learn more](https://www.npmjs.com/package/undici)\n• MDN: [learn more](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) \n'
	},
	opus: {
		keywords: ['opus', 'opus-machine'],
		content:
			"`Error: Couldn't find an Opus engine.`\n• Opus: `npm i @discordjs/opus` *(requires build tools: compiler collection and python 2.x)*\n• Opusscript: `npm i opusscript` *(significantly less efficient, not recommended for production)*\n"
	},
	undefined: {
		keywords: ['undefined', 'not-defined', 'of-null', 'of-undefined', 'ofnull', 'ofundefined'],
		content:
			'• `ReferenceError: "x" is not defined`: [learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)\n• `TypeError: Cannot read properties of undefined/null (reading "x")`: [learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_property)\n',
		hoisted: true
	},
	oauth: {
		keywords: ['oauth', 'oauth2', 'oa', 'oa2'],
		content:
			'Oauth is about giving access to your stuff without sharing your identity\n• [oauth.net](https://oauth.net/code/nodejs) | [Discord API](https://discord.com/developers/docs/topics/oauth2) | [guide example](https://discordjs.guide/oauth2)\n'
	},
	'masked-links': {
		keywords: ['masked-links', 'embed-links', 'embedlinks', 'inline-links'],
		content:
			'You can use markdown syntax to display clickable links in embeds, webhook messages and interaction responses without showing the url:\n```markdown\n"[text](url)"\n\'[text](url "optional hovertext")\'\n"[text](url \'optional hovertext\')"\n```\n• Embeds only support this in description and field values\n'
	},
	'no-dm': {
		keywords: ['no-dm', 'cannot-send', "can't-send"],
		content:
			'`DiscordAPIError: Cannot send messages to this user`\nYour bot is trying to send a DM to a user, but failed to do so:\n• The user has DMs disabled or the bot blocked\n• The user no longer shares a guild with the bot (make sure to send informational DMs before banning/kicking)\n• The bot is trying to DM itself or another bot\nNote: You cannot check if you can send a DM beforehand but have to handle the [rejection case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)\n'
	},
	path: {
		keywords: [
			'path',
			'paths',
			'relative-path',
			'absolute-path',
			'path-types',
			'file-path',
			'filepath'
		],
		content:
			'• File paths explained in detail: [learn more](https://desktop.arcgis.com/en/arcmap/10.3/tools/supplement/pathnames-explained-absolute-relative-unc-and-url.htm)\n• `.` refers to the current directory\n• `..` refers to the parent directory\n• Node path module: [learn more](https://nodejs.org/api/path.html#path_path_join_paths)\n'
	},
	database: {
		keywords: [
			'database',
			'databases',
			'postgres',
			'maria',
			'mysql',
			'sql',
			'nosql',
			'mongo',
			'db'
		],
		content:
			'Persisting data through restarts requires a database. Check out the resources below to figure out which database fits your use case\n• PostgreSQL: [learn more](https://www.postgresql.org) | [tutorial](http://www.postgresqltutorial.com)\n• MariaDB: [learn more](https://mariadb.org/)\n• MongoDB: [learn more](https://www.mongodb.com) | [tutorials](https://www.mongodb.com/docs/manual/tutorial/)\n• SQLite: [learn more](https://www.sqlite.org/index.html) | [tutorial](https://www.sqlitetutorial.net/)\n'
	},
	wait: {
		keywords: ['wait', 'delay', 'sleep', 'setTimeout'],
		content:
			"```js\nconst { setTimeout } = require('timers/promises');\n// using async/await\nawait setTimeout(5000);\n...\n// using then-callbacks\nsetTimeout(5000).then(() => { ... });\n```\n"
	},
	sharding: {
		keywords: ['sharding', 'sharding-types', 'when-to-shard', 'wts'],
		content:
			"• Necessary at 2,500 guilds (Discord will not let your bot connect)\n• Internal sharding:\n```js\nconst client = new Discord.Client({ shards: 'auto' }); // auto shards\nconst client = new Discord.Client({ shards: [0, 1] }); // specific shards\n```\n• Sharding manager: [learn more](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/ShardingManager)\n"
	},
	'2fa': {
		keywords: ['2fa', '2-factor-auth', 'two-factor-auth', '2-factor-authentication'],
		content:
			'`DiscordAPIError: Two factor is required for this operation`\nElevated permissions are required to execute this action. You need to activate 2FA on your developer account in order to do this with the bot.\n• Elevated permissions: [learn more](https://discordjs.guide/popular-topics/permissions-extended.html#elevated-permissions)\n• Setting up 2FA: [learn more](https://support.discord.com/hc/articles/219576828)\n'
	},
	'embed-limits': {
		keywords: ['embed-limits', 'embedlimits'],
		content:
			'Limits for embed structures:\n• [Discord Developer Documentation](https://discord.com/developers/docs/resources/channel#embed-object-embed-limits)\n'
	},
	'matching-parameters': {
		keywords: ['matching-parameters', 'params', 'matching-params', 'parameters'],
		content:
			'The order of function parameters must match between definition and function call.\n```js\nfunction execute(client, interaction) { ... };\nexecute(interaction, client);\n```\n• mismatch! you pass an interaction where the client is expected\n• mismatch! you pass the client where an interaction is expected\n'
	},
	'mass-dm': {
		keywords: ['mass-dm', 'massdm', 'dmall', 'dmal-all'],
		content:
			'Mass DMing users is not allowed as per developer ToS, considered spam and can get you and your bot banned.\n• Mention `@everyone` to inform all your users at once instead\n• Discord Developer Terms of Service: [learn more](https://discordapp.com/developers/docs/legal) | [FAQ summary](https://gist.github.com/meew0/a3168b8fbb02d5a5456a06461b9e829e)\n'
	},
	send: {
		keywords: ['send', 'v13send', 'v13-send'],
		content:
			"Sending and editing now takes only a single object parameter!\n```diff\n- channel.send(embed);\n+ channel.send({ embeds: [embed, embed2] });\n- channel.send('Hello!', { embed });\n+ channel.send({ content: 'Hello!', embeds: [embed, embed2] });\n```\n• V12-v13 migration guide: [learn more](https://discordjs.guide/additional-info/changes-in-v13.html)\n• V13-v14 migration guide: [learn more](https://discordjs.guide/additional-info/changes-in-v14.html)\n"
	},
	codeblock: {
		keywords: ['codeblock', 'code-block', 'code-blocks', 'cb', 'code-box', 'codebox'],
		content:
			'**Codeblocks:**\n\\`\\`\\`js\nconst Discord = require("discord.js"); \n// further code\n\\`\\`\\`\nbecomes\n```js\nconst Discord = require("discord.js"); \n// further code\n```\n**Inline Code:**\n\\`console.log(\'inline!\');\\` becomes `console.log(\'inline!\');`\n'
	},
	'node-modules': {
		keywords: ['node-modules', 'modules', 'nodemodules'],
		content:
			'Managing modular code made easy:\n• Node.js at scale: [learn more](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/)\n• Node.js module documentation: [learn more](https://nodejs.org/api/modules.html#modules_modules)\n'
	},
	'bot-invite': {
		keywords: ['bot-invite', 'botinvite', 'invitelink'],
		content:
			"Bot invite structure:\n```prolog\nhttps://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=0\n```\n• `CLIENT_ID` needs to be replaced with your bot id\n• Permission calculator: [learn more](https://finitereality.github.io/permissions-calculator)\n• `bot` scope includes `applications.commands`. If you don't need the bot, use `applications.commands` instead\n• You can use #generateInvite instead: [learn more](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/Client?scrollTo=generateInvite)\n"
	},
	version: {
		keywords: ['version', 'discord.js-version', 'provide-version', 'find-version'],
		content:
			'Determining your discord.js version:\n• `npm list discord.js`\n• Make sure you use the right [documentation](https://old.discordjs.dev/#/docs) for your installed version (selector on the left)\n'
	},
	token: {
		keywords: [
			'token',
			'client-secret',
			'invalid-token',
			'secret',
			'incorrect-login-details',
			'incorrect-login'
		],
		content:
			'Finding your bot token:\n• Visit the [application dashboard](https://discord.com/developers/applications/me) and select your application\n• Navigate to the Bot tab (not General Information, not OAuth2)!\n• Click `Reset Token` and copy token | https://i.imgur.com/c12eP0t.png (image)\nNote: Remember to change the token in your application after you reset it\n'
	},
	promise: {
		keywords: [
			'promise',
			'promises',
			'async/await',
			'await',
			'async',
			'await-is-only-valid-in-async-function'
		],
		content:
			'Resources to understand Promise:\n• MDN: [learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)\n• Guide: [learn more](https://discordjs.guide/additional-info/async-await.html)\n• JavaScript info: [learn more](https://javascript.info/async-await)\n',
		hoisted: true
	},
	'embed-mentions': {
		keywords: ['embed-mentions', 'embedmentions'],
		content:
			'Some parts of an embed will **not** properly resolve mentions (leave them in the `<@348607796335607817>` format):\n• Author name\n• Footer text\n• Embed title\n• Embed field name\n'
	},
	'not-discord': {
		keywords: [
			'not-discord',
			'trustandsafety',
			'contact',
			'billing',
			'discord',
			'tns',
			'support'
		],
		content:
			'We are not Discord, just some nerds who develop Discord bots!\n• [/report](https://dis.gd/report) reports (harassment/hacking/spam/abuse) and appeals\n• [/support](https://dis.gd/support) anything Discord related\n• [/billing](https://dis.gd/billing) payment/nitro\n• [/feedback](https://dis.gd/feedback) feedback/feature requests\n'
	},
	docgen: {
		keywords: ['docgen', 'doc-gen', 'djs-docs'],
		content:
			'How we generate our documentation:\n• (1) Source code is run through the [docgen](https://github.com/discordjs/discord.js/tree/main/packages/docgen) to parse JSDocs and Markdown files, generating a single JSON file with documentation data\n• (2) The output JSON file is named by the branch or tag name and committed to the docs branch of its corresponding repository\n• (3) The [website](https://github.com/discordjs/website) pulls a list of branches and tags from GitHub, with the repo being specified in a [DataSource](https://github.com/discordjs/website/tree/main/src/data)\n• (4) The website downloads the JSON file from the docs branch for the selected tag/branch, then parses and displays it\n'
	},
	'slash-limits': {
		keywords: ['slash-limits', '/limits', 'slash-command-limits'],
		content:
			'Slash command limits:\n• [Discord Developer Documentation](https://discord.com/developers/docs/interactions/application-commands#registering-a-command) \n'
	},
	equals: {
		keywords: ['equals', '=', '==', '===', 'equaltypes', 'equal-types'],
		content:
			"In JavaScript, = is used for assignment, == for loose equality, and === for strict equality checks. \n```js\nx = 1; // assigning x to a value\n'1' == 1 // true\n'1' === 1 // false\n```\n• Equality and sameness in JavaScript: [learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)\n"
	},
	timers: {
		keywords: [
			'timers',
			'settimouet',
			'set-timeout',
			'interval',
			'set-interval',
			'immediate',
			'set-immediate',
			'node-timers'
		],
		content:
			'Controlling the flow of time in Node.js:\n• Guide on base Node.js timers: [learn more](https://nodejs.org/en/docs/guides/timers-in-node/)\n'
	},
	'paste-code': {
		keywords: ['paste-code', 'bins', 'code-bins', 'codepaste', 'bin'],
		content:
			'To share long code snippets use a service like [gist](https://gist.github.com), [sourcebin](https://sourceb.in), [starbin](https://starb.in), or similar instead of posting them as large code blocks.\n'
	},
	frameworks: {
		keywords: [
			'frameworks',
			'framework',
			'discord.js-framework',
			'djs-framework',
			'djs-frameworks'
		],
		content:
			'Currently the only actively maintained and updated framework is [Sapphire](https://github.com/sapphiredev/framework)\n'
	},
	inequality: {
		keywords: ['inequality', '!==', '!='],
		content:
			'Checking for things to not be equal in JavaScript:\n```diff\n- if (!yourVariable === yourOtherVariable) // !yourVariable is coerced to a boolean value\n+ if (yourVariable !== yourOtherVariable) // checks that one is not equal to the other\n```\n• Comparison operators in JavaScript: [learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)\n'
	},
	'member-user': {
		keywords: ['member-user', 'memberuser', 'user-member', 'usermember'],
		content:
			'Despite sounding similar there is a distinct difference between users and members in Discord:\n• [User](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/User): global Discord user data (global avatar, username, tag, id) \n• [GuildMember](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/GuildMember): user data associated to a guild (guild, nickname, roles, voice, guild avatar, etc.)\n• Conversion: [User ➞ GuildMember](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/GuildMemberManager?scrollTo=fetch) | [GuildMember ➞ User](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/GuildMember?scrollTo=user)\n\\* *Note: Events received in cached guilds will often have both the member and user available, eg. `interaction.user` and `interaction.member`*\n'
	},
	linter: {
		keywords: ['linter', 'lint', 'eslint', 'jslint'],
		content:
			'"Lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs." \n• Set up a linter in your development environment: [learn more](https://discordjs.guide/preparations/setting-up-a-linter.html)\n'
	},
	'voice-timeout': {
		keywords: ['voice-timeout', 'voice-connection-timeout', 'vct'],
		content:
			"`Error [VoiceConnectionTimeout]: Connection not established within 15 seconds.`\nMake sure you have provided the `GuildVoiceStates` intent to the client:\n```js\nconst { Client, GatewayIntentBits } = require('discord.js');\nconst client = new Client({\n    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates]\n});\n```\n"
	},
	'third-party-libraries': {
		keywords: [
			'third-party-libraries',
			'discord-buttons',
			'discordbuttons',
			'discord-modals',
			'discordmodals'
		],
		content:
			'**We do not provide any help with third party libraries**\nButtons and Modals are supported natively.\n• Buttons: [learn more](https://discordjs.guide/interactions/buttons.html)\n• Modals: [learn more](https://discordjs.guide/interactions/modals.html)\n'
	},
	'find-id': {
		keywords: ['find-id', 'find-by-id', 'id-find', 'fbi'],
		content:
			'Don\'t use the find method to query a [Collection](https://discord.js.org/docs/packages/collection/stable) by key (mostly the associated id)\n```diff\n- someCollection.find(structure => structure.id === "348607796335607817")\n+ someCollection.get("348607796335607817")\n```\n'
	},
	'no-work': {
		keywords: ['no-work', "doesn't-work", 'not-working', 'no-context', '3w', 'dnw'],
		content:
			'To help you we need more information:\n• What are you trying to do?\n• What is your code?\n• What errors and debug logs do you have?\n',
		hoisted: true
	},
	regex: {
		keywords: ['regex', 'regexp', 'regular-expressions', 'regularexpressions'],
		content:
			'Regular expressions can make parsing and validating strings effortless:\n• Beginner guide: [learn more](https://blog.bitsrc.io/9c58feb27eb4)\n• Online Tester/Debugger: [regex101](https://regex101.com) | [regexr](http://regexr.com) | [debuggex](https://www.debuggex.com)\n• Interactive Guide: [learn more](https://regexone.com)\n'
	},
	debug: {
		keywords: ['debug', 'debug-listeners'],
		content:
			'Please add the following code to your code base outside of any other event listeners and provide the full log output relevant to your issue.\n```js\nclient\n    .on("debug", console.log)\n    .on("warn", console.log)\n```\n• Note: if you initialize your Client as `bot` or other identifiers you need to use these instead of `client`\n• If the output is too long to post consider using a bin instead: [gist](https://gist.github.com) | [paste.gg](https://paste.gg/) | [sourceb.in](https://sourceb.in) | [hastebin](https://hastebin.com)\n',
		hoisted: true
	},
	install: {
		keywords: ['install', 'discord.js-stable', 'install-stable', 'djs-stable', 'install-djs'],
		content:
			'To install run: `npm install discord.js`\n• Documentation: [learn more](https://old.discordjs.dev/#/docs/discord.js/14.11.0/general/welcome)\n• Guide: [learn more](https://discordjs.guide)\n',
		hoisted: true
	},
	'token-anatomy': {
		keywords: [
			'token-anatomy',
			'token-parts',
			'tokenparts',
			'tokenformat',
			'token-breakdown',
			'tokenbreakdown'
		],
		content: 'https://i.imgur.com/7WdehGn.png\n'
	},
	'tag-username': {
		keywords: ['tag-username', 'tagusername', 'tag-username-difference'],
		content:
			'[user.username](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/User?scrollTo=username) ➞ `d.js docs`\n[user.discriminator](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/User?scrollTo=discriminator) ➞ `1083`\n[user.tag](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/User?scrollTo=tag) ➞ `d.js docs#1083`\n'
	},
	'boost-event': {
		keywords: ['boost-event', 'boost', 'boostevent'],
		content:
			'The Discord API does not provide a dedicated event for guild boosts, but you can check for it in the [guildMemberUpdate](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/Client?scrollTo=e-guildMemberUpdate) event:\n```js\nclient.on("guildMemberUpdate", (oldMember, newMember) => {\n    // Check if the member wasn\'t boosting before, but is now.\n    if (!oldMember.premiumSince && newMember.premiumSince) {\n        // Member started boosting.\n    }\n});\n```\n'
	},
	'self-invite': {
		keywords: ['self-invite', 'selfinvite', 'backdoor'],
		content:
			"Discord does not condone bots creating invites without the expressed consent of the guild owner/admins. [source (Discord Developer Policy)](https://discord.com/developers/docs/policy)\n> *You may not use the APIs in any way to [...] process Discord Data in a way that surprises or violates Discord users' expectations.*\n• If you are experiencing problems with a particular guild, have your bot leave and/or blacklist it\n"
	},
	selfbots: {
		keywords: ['selfbots', 'selfbot', 'userbot', 'userbots'],
		content:
			"> **Do not use self-bots or user-bots**. Each account must be associated with a human, not a bot. Self-bots put strain on Discord's infrastructure and our ability to run our services. For more information, you can read our Developer Policies [here](https://discord.com/developers/docs/policy).\n• [source](https://discord.com/guidelines)\n"
	},
	'parse-emojis': {
		keywords: ['parse-emojis', 'emoji-regex', 'em-regex', 'regexemoji', 'regex-emoji'],
		content:
			'• For unicode emojis (twemoji): [learn more](https://github.com/twitter/twemoji/blob/v12.0.1/2/twemoji.js#L228)\n• Custom emojis: `/<?(a)?:?(\\w{2,32}):(\\d{17,19})>?/`  [learn more](https://discordapp.com/developers/docs/reference#message-formatting)\n'
	},
	hacktober: {
		keywords: ['hacktober', 'doshirt', 'wantshirt', 'dotree', '🌳', '🎃'],
		content:
			'"Hacktober" contribute to open source, get a shirt or plant a tree: [learn more](https://hacktoberfest.digitalocean.com)\n• low-effort PRs will be invalidated, as will PR-farm repositories\n'
	},
	'delete-timeout': {
		keywords: ['delete-timeout', 'deletetimeout', 'delete', 'message#delete'],
		content:
			'The timeout option has been removed from the [Message#delete](https://old.discordjs.dev/#/docs/discord.js/14.11.0/class/Message?scrollTo=delete) method.\n```diff\n- message.delete(5000)\n- message.delete({ timeout: 5000 })\n+ setTimeout(() => { message.delete() }, 5000)\n```\n'
	},
	'embed-files': {
		keywords: ['embed-files'],
		content:
			"Files in embeds should be attached via the message option object and referenced in the embed:\n```js\nconst attachment = new AttachmentBuilder('./image.png', { name: 'image1.png' });\nconst embed = new EmbedBuilder()\n  .setTitle('Attachments')\n  .setImage(`attachment://${attachment.name}`);\n\nchannel.send({\n  embeds: [embed],\n  files: [attachment]\n});\n```\n"
	},
	'api-spam': {
		keywords: ['api-spam', 'api-abuse', 'rainbow-roles', 'rainbowroles', 'spam'],
		content:
			"Ratelimits are dynamically assigned by the API based on current load and may change at any point.\n• The scale from okay to API-spam is sliding and depends heavily on the action you are taking\n• Rainbow roles, clock and counter channels, and DM'ing advertisements to all members are all examples of things that are not okay\n"
	},
	abort: {
		keywords: ['abort', 'abort-error'],
		content:
			"`AbortError: The user aborted a request.`\nA request took longer than the specified [restRequestTimeout](https://old.discordjs.dev/#/docs/discord.js/14.11.0/typedef/ClientOptions) (15 seconds default), and was aborted to not lock up the request handler.\n• This can be caused by an internal server error on Discord's side, or just a slow connection.\n• In case of a slow connection, the `restRequestTimeout` option in [ClientOptions](https://old.discordjs.dev/#/docs/discord.js/14.11.0/typedef/ClientOptions) can be increased to prevent future AbortErrors.\n"
	},
	'v14-changes': {
		keywords: ['v14-changes', 'changes', 'v14', '14'],
		content:
			'Version 14 has released! Please update at your earliest convenience.\n• Update: `npm rm discord.js` `npm i discord.js`\n• [Update guide](https://discordjs.guide/additional-info/changes-in-v14.html) (use `CTRL` + `F` to search for the old method or property)\n',
		hoisted: true
	},
	filter: {
		keywords: ['filter'],
		content:
			'The filter for collectors has moved into the options:\n```diff\n- const collector = message.createReactionCollector(collectorFilter, { ...options });\n+ const collector = message.createReactionCollector({ filter: collectorFilter, ...options });\n```\n'
	},
	'event-removal': {
		keywords: ['event-removal', 'messageCreate', 'interactionCreate'],
		content:
			"The `message` and `interaction` events were renamed to `messageCreate` and `interactionCreate` respectively, to bring the library in line with Discord's naming conventions.\n\n```diff\n- client.on('message', message => { ... });\n+ client.on('messageCreate', message => { ... });\n- client.on('interaction', interaction => { ... });\n+ client.on('interactionCreate', interaction => { ... });\n```\n"
	},
	intents: {
		keywords: ['intents', 'no-members'],
		content:
			'• Websocket intents limit events and decrease memory usage: [learn more](https://discordjs.guide/popular-topics/intents.html)\n• See what intents you need [here](https://discord.com/developers/docs/topics/gateway#list-of-intents)\n'
	},
	'privileged-intents': {
		keywords: ['privileged-intents', 'privileged', 'p-intents', 'whitelisted-intents'],
		content:
			'`Error [DisallowedIntents]: Privileged intent provided is not enabled or whitelisted.`\n\nIf you are using the `GuildMembers`, `GuildPresences`, or `MessageContent` intents, you need to enable them in the developer portal:\n• [Developer Portal](https://discord.com/developers/applications) > Your app > Bot > Privileged Gateway Intents\n'
	},
	'collection-array': {
		keywords: ['collection-array', 'cta', 'collection-to-array'],
		content:
			'**Converting a Collection to an array**\nYou only need to convert it to an array if you need the index of an entry:\n• Iteration (looping) is possible with [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_map) over [`Collection#values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values) or [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)\n• You can transform a Collection to an array with [`Collection#map`](https://discord.js.org/docs/packages/collection/stable/Collection:Class#map)\n• If you need indices, you can get the array using [`[...collection.values()]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)\n'
	},
	'member-count': {
		keywords: ['member-count', 'user-count', 'uc'],
		content:
			"**Getting your bot's member count**\n• `client.users.cache.size` is unreliable because it will only return *cached* users\n• The preferred method is using [`collection.reduce()`](https://discord.js.org/docs/packages/collection/stable/Collection:Class#reduce) on `client.guilds.cache`\n```js\nclient.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)\n```\n"
	},
	'add-to-server-button': {
		keywords: [
			'add-to-server-button',
			'add-to-server',
			'ats',
			'profile-invite',
			'authorization-link',
			'auth-link'
		],
		content:
			'**"Add to Server" button**\n• [Developer Portal](https://discord.com/developers/applications) > Your app > OAuth2 (General) > Default Authorization Link\n• Set authorization method to "In-app Authorization"\n• Check scopes `bot` and `applications.commands`\n\nImage: https://i.imgur.com/taMHw7o.png\n'
	},
	'author-footer': {
		keywords: ['author-footer', 'footer', 'author', 'setFooter', 'setAuthor'],
		content:
			"`v13` `<MessageEmbed>.setFooter()` and `<MessageEmbed>.setAuthor()` now each take an object:\n```diff\n- embed.setAuthor('This is an example text', 'https://example.com/icon.png', 'https://websiteofauthor.com')\n+ embed.setAuthor({ name: 'This is an example text', url: 'https://websiteofauthor.com', iconURL: 'https://example.com/icon.png' })\n\n- embed.setFooter('This is an example text', 'https://example.com/icon.png')\n+ embed.setFooter({ text: 'This is an example text', iconURL: 'https://example.com/icon.png' })\n```\n"
	},
	'already-acknowledged': {
		keywords: ['already-acknowledged', 'interaction-acknowledged', 'already-replied'],
		content:
			"• `DiscordAPIError: Interaction has already been acknowledged`\n• `[InteractionAlreadyReplied]: The reply to this interaction has already been sent or deferred.`\n\nYou have already replied to the interaction.\n• Use `<Interaction>.followUp()` to send a new message\n• If you deferred reply it's better to use `<Interaction>.editReply()`\n• Responding to [slash commands](https://discordjs.guide/slash-commands/response-methods.html) / [buttons](https://discordjs.guide/interactions/buttons.html#responding-to-buttons) / [select menus](https://discordjs.guide/interactions/select-menus.html#responding-to-select-menus)\n"
	},
	'djs-sponsor': {
		keywords: ['djs-sponsor', 'sponsor', 'sponsor-role'],
		content:
			'Like what we do and want to put some money behind it? Donate to discord.js and rep your support with a role on our support server:\n• [OpenCollective](https://opencollective.com/discordjs): Use </claim-sponsor:1046604458991300619> and provide your OC slug *(Settings > Info > URL slug)*\n• [GitHub Sponsors](https://github.com/sponsors/discordjs):\n**1)** Create a private [gist](https://gist.github.com/)\n**2)** Include your Discord tag (`d.js docs#1083`) or user ID (`348607796335607817`)\n**3)** Include your Transaction id or screenshot of the donation\n**4)** Send the link to the gist to <@81440962496172032> (`Crawl#0002`) via direct message\n'
	},
	'duplicate-commands': {
		keywords: ['duplicate-commands', 'double-commands', 'guild-command', 'global-command'],
		content:
			'If you have duplicate commands on your server, you registered both global and guild commands. \n\nYou can remove the duplicates by resetting either the global or guild commands\n• Resetting global commands: `rest.put(Routes.applicationCommands(clientId), { body: [] })`\n• Resetting guild commands: `rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })`\n'
	},
	'no-content': {
		keywords: ['no-content', 'nocontent', 'message-content', 'messagecontent'],
		content:
			"If you aren't getting content, embeds or attachments of a message, make sure you have the `MessageContent` intent [enabled in the Developer Portal](https://discord.com/developers/applications) and provide it to your client:\n\n```js\nconst { Client, GatewayIntentBits } = require('discord.js');\nconst client = new Client({\n    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]\n});\n```\n"
	},
	case: {
		keywords: ['case', 'snaketopascal', 'change-case', 'changecase'],
		content:
			'`RangeError [BitFieldInvalid]: Invalid bitfield flag or number: undefined`\n• All `SCREAMING_SNAKE_CASE` enums have been changed to `PascalCase`\n• Intents: `Intents.FLAGS.GUILD_MESSAGES` -> `GatewayIntentBits.GuildMessages`\n• Permissions: `Permissions.FLAGS.SEND_MESSAGES` -> `PermissionFlagsBits.SendMessages`\n'
	},
	'dm-messages': {
		keywords: ['dm-messages', 'receive-dms', 'not-getting-dms', 'not-getting-dms'],
		content:
			'To receive direct message events on `"messageCreate"` with your bot, you will need:\n• The `DirectMessages` [gateway intent](https://discordjs.guide/popular-topics/intents)\n• The `Channel` [partial setting](https://discordjs.guide/popular-topics/partials)\n'
	},
	'all-intents': {
		keywords: ['all-intents', '98303', '32767', 'magic-intents', 'magic-all-intent'],
		content:
			'We highly recommend only specifying the [intents](https://discordjs.guide/popular-topics/intents) you actually need.\n• Note, that `98303`, `32767` or whatever other magic number you read that represents "all intents", gets outdated as soon as new intents are introduced.\n• The number will always represent the same set of intents, and will not include new ones. There is no magic "all intents" bit.\n'
	},
	'manager-functions': {
		keywords: ['manager-functions', 'structureless-actions', 'no-need-to-fetch', 'no-fetch'],
		content:
			'If you only have the id for a structure you can often avoid fetching it before taking an action on it\n• Managers have functions to directly target the API while providing the id\n• Examples: `guild.members.ban("348607796335607817")`, `channel.messages.edit("348607796335607817", "new content")`\n'
	},
	'channel-typeguards': {
		keywords: ['channel-typeguards', 'narrow-channel-types', 'narrow-types'],
		content:
			'Instead of using method-based type guard functions, you can narrow channel types with the `.type` property\n```diff\n- channel.isText()\n+ channel.type === ChannelType.GuildText\n```\n'
	},
	'member-fetch-timeout': {
		keywords: ['member-fetch-timeout', 'member-timeout', 'member-fetch-timeout'],
		content:
			'Fetching members can time out on large guilds, as they arrive in chunks through the WebSocket connections.\n• You can specify the `time` option in `FetchMembersOptions` to specify how long you want to wait.\n• Make sure you have the required `GuildMembers` [gateway intent](https://discordjs.guide/popular-topics/intents) enabled\n'
	},
	'custom-client-properties': {
		keywords: ['custom-client-properties', 'custom-properties-on-client'],
		content:
			'We highly recommend you extend the `Client` structure properly instead of just attaching custom properties like `.commands` to the regular discord.js `Client` instance.\n• Using typescript, you might want to consider [casting](https://www.typescripttutorial.net/typescript-tutorial/type-casting/) or [augmenting the module type](https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules)\n'
	},
	'components-per-message': {
		keywords: [
			'components-per-message',
			'message-component-collector',
			'collecting-on-message'
		],
		content:
			"If you are waiting for button or select menu input from a specific message, don't create the collector on the channel.\n• Channel collectors return component interactions for any component within that channel.\n```diff\n- <Channel>.createMessageComponentCollector(…)\n+ <Message>.createMessageComponentCollector(…)\n```\n"
	},
	'generic-actionrow': {
		keywords: [
			'generic-actionrow',
			'generic-builder',
			'component-builder',
			'generic-actionrowbuilder'
		],
		content:
			'In TypeScript the `ActionRowBuilder` class has a generic type parameter that specifies the type of component the action row holds:\n```ts\nconst row = new ActionRowBuilder<ButtonBuilder>().addComponents(button)\nconst row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu)\nconst row = new ActionRowBuilder<TextInputBuilder>().addComponents(textInput)\n```\n'
	},
	builder: {
		keywords: ['builder', 'components', 'embeds', 'from'],
		content:
			'Structures from the API cannot be edited directly. To do so, you can create a new structure (a builder) using the `.from()` method\n```js\nconst newEmbed = EmbedBuilder.from(embed).setTitle("title")\nconst newRow = ActionRowBuilder.from(row).addComponents(component)\n```\n'
	},
	'voice-debug': {
		keywords: ['voice-debug', 'voice-debugging', 'voice'],
		content:
			"To debug your voice connection and player:\n• Use `debug: true` when creating your `VoiceConnection` and `AudioPlayer`\n• Add an event listener to the <VoiceConnection> and the <AudioPlayer>: \n```js\n// Add one for each class if applicable\n<AudioPlayer | VoiceConnection>\n    .on('debug', console.log)\n    .on('error', console.error)\n```\n• Add an `error` listener to the stream you are passing to the resource:\n```js\n<Stream>.on('error', console.error)\n```\n\n> Note: The `<>` represents classes that need to be adapted to their respective name in your code\n"
	},
	'http-interactions-bot': {
		keywords: ['http-interactions-bot', 'no-status'],
		content:
			'HTTP-only applications receive interactions through HTTP webhooks instead of the Discord Gateway. Bots that are not connected to the Gateway, but use HTTP interactions appear as online without a status. Discord.js does not support HTTP interactions. Use [discord-interactions](https://www.npmjs.com/package/discord-interactions) instead.\n'
	},
	'interaction-buttons-in-webhooks': {
		keywords: ['interaction-buttons-in-webhooks', 'no-button'],
		content:
			'Only webhooks created by an application can send messages with components, so Discord knows which application to send the corresponding interactions to.\n• Creating webhooks with discord.js: [learn more](https://discordjs.guide/popular-topics/webhooks.html#creating-webhooks-with-discord-js)\n'
	},
	'force-fetch': {
		keywords: ['force-fetch', 'manager-force'],
		content:
			'Managers return results from cache, if available, before hitting the API. If you want to ensure that data is retrieved directly from the API, you need to specify the `force` option.\n• `structure.fetch()`\n• `manager.fetch(..., { ..., force: true })`\n• For concrete usage, check the documentation for the specific structure or manager.\n'
	},
	'util-functions': {
		keywords: ['util-functions', 'functions', 'utils'],
		content:
			"The `Util` class has been removed. Associated functions are now available as top-level imports:\n```diff\n- const { Util } = require('discord.js');\n- Util.escapeMarkdown('`string`');\n+ const { escapeMarkdown } = require('discord.js');\n+ escapeMarkdown('`string`');\n```\n"
	},
	'unknown-interaction': {
		keywords: ['unknown-interaction', 'DiscordAPIError[10062]:-Unknown-interaction', '10062'],
		content:
			'Common causes of `DiscordAPIError[10062]: Unknown interaction`:\n• Initial response took more than 3 seconds ➞ defer the response \\*.\n• Wrong interaction object inside a collector.\n\\* *Note: you cannot defer modal or autocomplete value responses*\n'
	},
	'unknown-webhook': {
		keywords: ['unknown-webhook', 'DiscordAPIError[10015]:-Unknown-webhook', '10015'],
		content:
			'Common causes of `DiscordAPIError[10015]: Unknown webhook`:\n• Application command followup/edit more than 15 minutes after the first acknowledgement.\n• Using a saved webhook token to initialize a new InteractionWebhook.\n'
	},
	'unauthorized-action': {
		keywords: [
			'unauthorized-action',
			'unauthorised-action',
			'DiscordAPIError[20012]:-You-are-not-authorized',
			'20012'
		],
		content:
			'DiscordAPIError[20012]: `You are not authorized to perform this action on this application`:\n• The supplied client id and token do not belong to the same application.\n• Usually encountered when trying to deploy application commands.\n'
	},
	subpackages: {
		keywords: ['subpackages', 'included-packages', 'obsolete-dependencies'],
		content:
			'discord.js includes multiple sub-packages, installing these separately can mess with internal code:\n```ansi\n\u001b[0;31mnpm \u001b[0;0muninstall discord-api-types @discordjs/rest @discordjs/builders\n\u001b[0;34myarn \u001b[0;0mremove discord-api-types @discordjs/rest @discordjs/builders\n\u001b[0;33mpnpm \u001b[0;0mremove discord-api-types @discordjs/rest @discordjs/builders\n```\n'
	},
	changelog: {
		keywords: ['changelog', 'releases'],
		content:
			'discord.js changelogs:\n• [all releases](https://github.com/discordjs/discord.js/releases)\n• [latest](https://github.com/discordjs/discord.js/releases/latest)\n'
	},
	'interaction-replies': {
		keywords: ['interaction-replies'],
		content:
			'Responding to interactions:\n• `#reply` immediately respond with a message\n• `#update` immediately update the original message *(buttons, select menus)*\n• `#showModal` immediately show a modal *(cannot be deferred)*\n• `#deferReply/Update` respond later *(up to 15 minutes)*\n• `#followUp` post an additional message\n\n*The initial response has to happen within 3s of receiving the interaction!*\n'
	},
	'shared-hosting': {
		keywords: ['shared-hosting', 'shared-ip', 'shared-ratelimits', 'shared-rl'],
		content:
			'Rate limits are determined based on the IP address of the sender.\n• If your bot shares its IP with other bots it will share their rate limits.\n• This is a common caveat with [shared hosting](https://en.wikipedia.org/wiki/Shared_web_hosting_service) providers and free plans!\n'
	}
};
