import mongoose from 'mongoose';

const tiktokSchema = new mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    likes: Number,
    song: String,
    messages: Number,
    shares: Number,
});

export default mongoose.model('tiktokVideos', tiktokSchema);