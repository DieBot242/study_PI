const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/teste')
    console.log('Conectou ao banco Mongoose')
}
main().catch((err) => console.log(err))

module.exports = mongoose