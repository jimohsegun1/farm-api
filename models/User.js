
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  farmLocation: { type: String, required: true },
  isBanned: { type: Boolean, default: false },
  role: { type: String, enum: ['farmer', 'admin'], default: 'farmer' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
