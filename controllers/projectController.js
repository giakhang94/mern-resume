import BadRequestError from "../errors/badRequest.js";
import Project from "../models/Project.js";

const createPJ = async (req, res) => {
  const { link, github, title } = req.body;
  const thumb =
    "https://merncv.onrender.com/uploads/images/" + req.file.filename;
  if (!link || !github || !title) {
    throw new BadRequestError("please provide all value");
  }
  console.log(thumb);
  const project = await Project.create({ link, github, title, thumb });
  res.status(201).json({ project });
};
const getAllProject = async (req, res) => {
  const allProject = await Project.find();
  res.status(200).json({ allProject });
};

export { createPJ, getAllProject };
