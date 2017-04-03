import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const Schema = mongoose.Schema;

const urlSchema = new Schema ({
	original_url: String,
	short_url: {
		type: String,
		unique: true
	}
});

export const Url = mongoose.model('Url', urlSchema);
