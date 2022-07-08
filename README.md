### `npm run start` for run user-management folder

### `npm run start` required to run server folder


I'm using sequilize and mysql for db connection in backend side.
### `server/config/config.json` file. it's created automatically when run below command
### `npm install --save-dev sequelize-cli`
### `npm install express sequelize mysql2 cors --save`

we need to run below three command for run project completely. 
### `npx sequelize-cli init` when run this command that time creating by default config, migration,models,seeders folder.

### `npx sequelize db:create` this command use for the create new database on mysql localhost server.
### `npx sequelize-cli db:migrate` this command use for the create table in database using migration.

no need to run this command it's just for information purpose.
### `npx sequelize-cli db:migrate:undo` this command use for the undo migration but not need to run right now.

### `npx sequelize-cli seed:generate --name tbl_pref_master` this command use for the create seeder for insert data in tbl_pref_master

### `npx sequelize-cli db:seed:all` this command use for the add default data using seeders in tbl_pref_master or another table

just for the information
### `npx sequelize-cli db:seed:undo` you can undo recent seed

### `npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data` you can undo specific seed using this command

### `npx sequelize-cli db:seed:undo:all` you can undo all seed using this command

--- I added id in user table as a primary key because we need to associate with