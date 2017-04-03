import mongoose from 'mongoose';
mongoose.Promise = Promise;

const mongodbURL = process.env.MONGODB_ULR || 'mongodb://localhost/test4';

const connect = () => mongoose.connect(mongodbURL);

export default {
	connect
};
