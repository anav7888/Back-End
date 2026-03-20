const imageKit = require("@imagekit/nodejs").default

const client = new imageKit({
    privatKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile({buffer, filename , folder =""}){
    
}
