import Dexie from 'dexie';

const db = new Dexie('ReactReduxSampleDB');
db.version(1).stores({
  todos: '++id, title, isComplited, complitedAt, createdAt'
});
db.open({ autoOpen: true });
export default db;