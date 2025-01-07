
import mongoose, {Schema, Types} from "mongoose";
const contentTypes = ['image', 'video', 'article', 'audio', "links", "other"]; 

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  isActive: { type: Boolean, default: true },
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});



const Content = mongoose.model("Content", contentSchema);
export default Content;