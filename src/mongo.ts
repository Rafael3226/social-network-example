import mongoose from 'mongoose';
import { env } from 'process';

export default function setUpMongo() {
  if (env.MONGO_URL) {
    mongoose
      .connect(env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'social',
      })
      .then((m) =>
        console.log(`Mongo DB ${m.connection.db.databaseName} connected`)
      )
      .catch((e: Error) => console.error(e.message));
  } else {
    console.error('No se encuentra MONGO_URL en las variables de entrono');
  }
}
