const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    about: String
}, {
    timestamps: true,
}
)

module.exports = mongoose.model("Form", formSchema);