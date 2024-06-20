module.exports = {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, 
    password: {
        type: String,
        required: true
    },
    profilePic: { type: String },
    //add more field here 
}