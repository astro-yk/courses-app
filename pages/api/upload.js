import multer from 'multer';
import nextConnect from 'next-connect';
import fs from 'fs';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = './public/uploads';
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.error('Error:', error);
    res.status(501).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'File uploaded successfully' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
