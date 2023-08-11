import { getDb } from '../migrations-utils/database.helpers';

const LOCATIONS_COLLECTION = 'locations';

export const up = async () => {
  const db = await getDb();
  const collection = db.collection(LOCATIONS_COLLECTION);
  collection.insertOne({
    name: 'Extendz Pvt',
    city: 'Matale',
  });
};

export const down = async () => {
  const db = await getDb();
  db.dropCollection(LOCATIONS_COLLECTION);
};
