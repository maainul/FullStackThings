## Start

1. init node js

        npm init

2. create server.js file

3. install package

        npm  i express

4. if alrealy package dot json file dependencies is there and you delete it then for install node_module folder run this command

        npm install / npm i

5. Install nodemon : automatic restart after any changes

        npm install -g nodemon




5. Run :
        node server.js (default command)

        npm start (after change in the package json file "start": "node server.js")

        npm run server (nodemon run the project : "server": "nodemon server.js")
        
6. install morgan middle : it will give extra data about api : like 
```
Server Running On 5000
POST /contact-form-json 200 3.762 ms - 49
```
        npm i morgan

7. Colors package for color terminal :

        npm i colors

