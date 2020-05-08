const fs = require('fs')
const chalk = require('chalk')
const getNotes = () =>{
    return 'your notes......'
}
const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse("note title taken"))
    }  
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    //return array of notes
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        //console.log(JSON.parse)
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}   

const removeNote = (title) =>{
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) =>note.title !== title)
    if (updatedNotes.length === notes.length){
        console.log(chalk.red.inverse("no matching notes found"))
        // console.log(updatedNotes)
    }
    else{
        // console.log("matching note found")
        console.log(chalk.green.inverse('removed note with title: ',title))
        saveNotes(updatedNotes)
        console.log(updatedNotes)
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.cyan.inverse(note.title))
        console.log(chalk.blue.inverse(note.body))
    });
}
const readNote = (title) =>{
    const notes = loadNotes()
    noteToRead = notes.find((note)=>note.title === title)
    if (noteToRead){
        console.log(chalk.blue.inverse(noteToRead.title))
        console.log(chalk.cyan.inverse(noteToRead.body))
    } else{
        console.log(chalk.red.inverse("Note not found"))
    }

}
//exporting an object with 2 properties
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}