import mongoose, { model } from "mongoose";
const ProjectSchema = mongoose.Schema({
  link: {
    type: String,
    required: [true, "please enter Link"],
  },
  github: {
    type: String,
    required: [true, "please enter github"],
  },
  title: {
    type: String,
    required: [true, "please enter title"],
  },
  thumb: {
    type: String,
    required: [true, "please provide thumbnail"],
  },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
