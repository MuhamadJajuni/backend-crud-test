import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/userController.js";

import { userValidation } from "../validators/userValidators.js";
import { validationResult } from "express-validator";

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next();
};

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", userValidation, validate, createUser);
router.put("/users/:id", userValidation, validate, updateUser);
router.delete("/users/:id", deleteUser);

export default router;
