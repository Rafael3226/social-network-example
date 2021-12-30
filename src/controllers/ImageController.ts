import { firebaseStorage } from '../firebase';
import {
  getDownloadURL,
  ref,
  deleteObject,
  uploadString,
} from 'firebase/storage';
import { Request, Response } from 'express';
export default class ImageController {
  public static async save(req: Request, res: Response) {
    try {
      const { name, data: base64 } = req.body;
      const path = Date.now() + name;
      const reference = ref(firebaseStorage, path);
      await uploadString(reference, base64, 'data_url');
      const data = await getDownloadURL(reference);
      res.send({ data, message: '' });
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { url } = req.body;
      const path = url.substr(url.lastIndexOf('/') + 1);
      const reference = ref(firebaseStorage, path);
      await deleteObject(reference);
      res.send({ data: '', message: 'The image was deleted' });
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
}
