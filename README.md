NOTES app using nodejs
- Add note
node app.js add --title="title here" --body="body here"

- remove note
node app.js remove --title="title to remove"

- list notes
node app.js list

- read note
node app.js read --title="title to read"


npm packages used
-yargs (for arguments)
-chalk (colors on terminal)
-fs (read and write files)