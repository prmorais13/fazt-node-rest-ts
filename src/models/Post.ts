import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true, lowercase: true, unique: true },
    content: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)

export default model('Post', PostSchema)
