import multer from "multer";
import express from "express";
import FilesControllers from "../Controllers/files.controller.js";


const router = express.Router();
const Multer = multer({ storage: multer.memoryStorage() })

router.post("/upload", Multer.array("files"), FilesControllers.UploadFiles)


export default router

