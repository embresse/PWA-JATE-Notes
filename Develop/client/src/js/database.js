import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// look at activity 24 for ref !! 
// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('PUT to db');
const db = await openDB('jate', 1);
// opens database
const tx = db.transaction('jate', 'readwrite');
// starts new transaction passing in read/write and object store name
const store = tx.objectStore('jate');
// creates request to store content
// stores content in 'jate' objectStore
const request = store.put({ id: 1, value: content });
// waits for request 
const result = await request; 
// returns request once request is complete
console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from db');
  // opens database
  const db = await openDB('jate', 1);
  // starts new transaction
  const tx = db.transaction('jate', 'readonly');
  // request to store content
  // stores content in 'jate' objectStore
  const store = tx.objectStore('jate');
  // gets content from 'jate' objectStore w key value of '1'
  const request = store.get(1);
  // waits for request
  const result = await request;
  console.log('result.value', result);
  // returns the request/result
  return result;
};

initdb();
// initializes db
