import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  }
})


const User = mongoose.model('user', UserSchema);

module.exports = User;  // common to only export model/class