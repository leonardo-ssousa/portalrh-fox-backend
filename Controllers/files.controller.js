import { SendEmail } from "../Services/NodemailerService.js";

const UploadFiles = async (req, res) => {
  const files = req.files;  

  if (!files) {
    return res
      .status(400)
      .json({ error: true, message: "No files found in body" });
  }

  try {
    const attachments = files.map((file) => ({
      filename: file.originalname,
      content: file.buffer
    }));
    console.log(attachments);

    await SendEmail(
      "leonardo.silva@foxaudit.com.br",
      "Teste envio arquivos",
      "",
      attachments
    )

    return res.status(200).json({ error: false, message: "Email enviado para Leonardo" })
  } catch (error) {
    return res.status(400).json({ error: true, message: error.message });
  }
};

const FilesControllers = {
  UploadFiles,
};
export default FilesControllers;
