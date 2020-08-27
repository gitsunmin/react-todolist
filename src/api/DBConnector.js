import Dexie from 'dexie';

const db = new Dexie('ReactReduxSampleDB');
db.version(1).stores({
  todos: '++id, title'
});
db.open({ autoOpen: true });
export default db;