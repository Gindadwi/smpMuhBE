## apa saja yang di install untuk membuat service user

- npm
- masuk ke dalam service user (cd service-user)
- npm install
- npm install dotenv

## sateup sequelize

- npm install sequelize sequelize-cli --save
- npx sequelize
- npx sequeliza init

## Membuat migrations tabel user dan tabel refresh token menggunakan sequelize

- npx sequelize migration:create --name=create-table-users
- npx sequelize migration:create --name=create-table-refresh-tokens

## ketika sudah membuat tabel user dan refresh token lakukan migrate ke xmpp

- npm install mysql2 --save
- npx sequelize db:migrate
- npx sequelize db:migrate:undo:all (untuk menghapus tabel di xmpp)

## membuat seeder menggunakan sequelize dan mengirim data seeder ke tabel users

- npx sequelize seed:create --name=user-seeders
- npx sequelize db:seed:all (mengirim data ke tabel users)
- npx sequelize db:seed:undo:all

## untuk menghash atau membuat password menjadi token ketika tersimpan di database

- npm install bcrypt --save

## instal jwt untuk membuat token login

- npm install jsonwebtoken

## untuk membuat validasi register install

- npm install fastest-validator --save

## install Dayjs untuk mengatur tanggal

- npm install dayjs --save

## install multer untuk menyimpan gambar di mysql

- npm install multer
