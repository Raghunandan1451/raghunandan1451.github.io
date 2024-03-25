import { Schema, model } from 'mongoose'

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
}, {
	timestamps: true
})


export default model('user', userSchema)