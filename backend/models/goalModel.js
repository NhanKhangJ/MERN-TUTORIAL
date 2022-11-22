const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user:{
       type: mongoose.Schema.Types.ObjectId, //You want this type to be an object Id
       required: true,
       ref: 'User'//referencing/pertain to User model
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true //represnt for created at and updateed at
})

module.exports= mongoose.model('Goal', goalSchema)