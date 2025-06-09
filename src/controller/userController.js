import db from "../models/index.js";

const { User } = db;

export const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (!users) {
    throw new Error({
      message: "Failed Get All Users",
    });
  }
  return res.json({
    message: "Successfully Get All Users",
    data: users,
  });
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw new Error({
      message: "Failed Get Users By ID / Users Not Found",
    });
  }
  return res.json({
    message: "Successfully Get Users By ID",
    data: user,
  });
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      throw new Error({
        message: "Failed Create Users",
      });
    }
    return res.json({
      message: "Successfully Create New Users",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error Server Create Users",
      error: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw new Error({
      message: "Users Not Found In Database",
    });
  }
  try {
    await user.update(req.body);
    res.status(201).json({
      message: "Succesdfully Update Users",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error Server Update User",
      error: err.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw new Error({
      message: "User Not Found",
    });
  }
  await user.destroy();
  return res.status(200).json({
    message: "Succesfully Deleted Users",
    dataRemove: user,
  });
};
