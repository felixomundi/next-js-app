
# next 13 crash course by brad 
https://www.youtube.com/watch?v=Y6KDk5iyrYE

# push instructions

echo "# next-js-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/felixomundi/next-js-app.git
git push -u origin main

yarn sequelize-cli db:create
yarn sequelize-cli db:migrate
yarn sequelize-cli 

# sequelize migrations
npx sequelize-cli init
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all --to 20230924102817-create-cart.js

# connect to sequelize
https://github.com/alexrusin/nextjs-starter-sequelize

# redux_toolkit next-js
https://www.youtube.com/watch?v=Yokjzp91A4o

# next-js seo
https://www.youtube.com/watch?v=kFzXOuBFN9Q