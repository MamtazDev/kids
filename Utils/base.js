import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS currencyAuth (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, loginkey TEXT NOT NULL);',
          [],
          () => {
            console.log('Table created successfully.');
          },
          error => {
            console.log('Error creating table:', error);
          }
        );
      });
};



const insertItem = (item, callback) => {
  const { name, id, datas, createdAt } = item;
  const objectData = JSON.stringify(item);

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO dihan (name, objectData) VALUES (?, ?);',
      [name, objectData],
      (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          console.log('Item inserted successfully.');
          callback();
        }
      },
      error => {
        console.log('Error inserting item:', error);
      }
    );
  });
};

const getItems = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM dihan;',
      [],
      (_, { rows }) => {
        const items = rows._array;
        callback(items);
      },
      error => {
        console.log('Error retrieving items:', error);
      }
    );
  });
};

export const database = {
  createTable,
  insertItem,
  getItems,
};

