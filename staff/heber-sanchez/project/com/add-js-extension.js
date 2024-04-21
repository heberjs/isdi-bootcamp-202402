import { readdir, readFile, writeFile } from 'fs/promises'

readdir('.')
    .then(files => {
        const jsFiles = files.filter(file => file.endsWith('.js'))
    })