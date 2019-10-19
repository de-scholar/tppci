import migrateAllTables from './table-ops';

(async () => {
  console.log('creating tables ... ');
  await migrateAllTables();
})();
