import BadRequestError from "../errors/badRequest.js";
import NotFoundError from "../errors/not-found.js";
import Project from "../models/Project.js";
import fs from "fs";
import path from "path";

const createPJ = async (req, res) => {
  const { link, github, title } = req.body;
  const thumb =
    "https://merncv.onrender.com/uploads/images/" + req.file.filename;
  if (!link || !github || !title) {
    throw new BadRequestError("please provide all value");
  }
  const project = await Project.create({ link, github, title, thumb });
  res.status(201).json({ project });
};
const getAllProject = async (req, res) => {
  const allProject = await Project.find();
  res.status(200).json({ allProject });
};
const getPJById = async (req, res) => {
  const PJ = await Project.findOne({ _id: req.params.id });
  res.status(200).json({ PJ });
};
const updateProject = async (req, res) => {
  const pj = await Project.findOne({ _id: req.params.id });
  let thumb = undefined;
  if (!pj) {
    throw new NotFoundError("Project not found");
  }
  const thumb_old = pj.thumb;
  if (req.file) {
    thumb = "https://merncv.onrender.com/uploads/images/" + req.file.filename;
  } else {
    thumb = thumb_old;
  }
  const { title, link, github } = req.body;
  if (!title && !link && !github && !req.file) {
    throw new BadRequestError("Please provide at least 1 field");
  }
  const result = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title,
      link,
      github,
      thumb,
    },
    { new: true }
  );

  if (result && req.file && thumb_old) {
    const newThumb = thumb_old.replace(
      "https://merncv.onrender.com/uploads/images",
      ""
    );
    let deleteThumb = path.join("uploads", "images") + newThumb;
    fs.unlink(deleteThumb, (err) => {
      console.log(err);
    });
  }
  res.status(201).send();
};

export { createPJ, getAllProject, updateProject, getPJById };
