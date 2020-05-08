const yargs = require('yargs')
const notes = require('./notes.js');

//console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//list
yargs.command({
    command: 'list',
    describe:'lists the notes',
    handler(){
        notes.listNotes()
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'read',
    builder:{
        title:{
            describe: "title to search",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }  
})
yargs.argv // or yargs.parse()
//add , remove, read, list