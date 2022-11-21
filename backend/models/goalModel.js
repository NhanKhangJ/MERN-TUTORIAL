const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true //represnt for created at and updateed at
})

module.exports= mongoose.model('Goal', goalSchema)