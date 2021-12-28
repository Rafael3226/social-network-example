import { firebaseStorage } from '../firebase';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { Request, Response } from 'express';
export default class ImageController {
  public static async save(req: Request, res: Response) {
    try {
      const { name, data } = req.body;
      const newFile = new File(data, name);
      const path = Date.now() + newFile.name;
      const reference = ref(firebaseStorage, path);
      await uploadBytes(reference, newFile);
      const url = getDownloadURL(reference);
      res.send({ url });
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
      res.send({ message: 'The image was deleted' });
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
}
