const PORT = process.env.PORT || 9004
const MAXSIZE = process.env.MaxSize || 2 * 1024 * 1024 * 1024

const fs = require('fs')
const Readable = require('stream').Readable
const express = require('express')
const app = express()

app.get('/dummy', (req, res, next) => {
    let size = req.query.size
    if (!size) {
        res.status(400).send('size required')
        return
    }
    size = parseInt(size)
    if (size > MAXSIZE) {
        res.status(400).send('size must under ' + MAXSIZE + 'bytes')
        return
    }
    let emptyBuffer = Buffer.alloc(size)
        // console.log(emptyBuffer)
    let bufferStream = new Readable()
    bufferStream.push(emptyBuffer)
    bufferStream.push(null)
        // let bufferStream = fs.createReadStream(emptyBuffer)

    res.setHeader('Content-disposition', 'attachment; filename=dummyfile_' + new Date().getTime())
    res.setHeader('Content-type', 'application/octet-stream');
    res.setHeader('Content-Length', size)
    bufferStream.pipe(res)
    bufferStream.on('end', function() {
        res.end()
    })
})

app.listen(PORT, () => {
    console.log('server start')
})