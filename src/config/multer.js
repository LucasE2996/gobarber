import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    // if we want to storage in cloud it wont be diskStorage config
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (error, response) => {
                if (error) return callback(error);

                // file format e.g. "45abf4f99b.png"
                return callback(
                    null,
                    response.toString('hex') + extname(file.originalname)
                );
            });
        },
    }),
};
