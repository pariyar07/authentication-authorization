import mongoose from 'mongoose';

const connectDB = async () => {
  const connectionUri = process.env.MONGO_CONNECTION_URI as string;
  try {
    await mongoose.connect(connectionUri);
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
