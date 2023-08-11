import { getDb } from '../migrations-utils/database.helpers';

const USER_COLLECTION = 'users';

export const up = async () => {
  const db = await getDb();
  const collection = db.collection(USER_COLLECTION);
  collection.insertOne({
    email: 'admin@example.com',
    password: 'password',
    roles: ['ADMIN'],
    status: 'ACTIVE',
  });
};

export const down = async () => {
  const db = await getDb();
  db.dropCollection(USER_COLLECTION);
};
