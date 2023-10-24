## Start

1.  init node js

        npm init

2.  create server.js file

3.  install package

        npm  i express

4.  if alrealy package dot json file dependencies is there and you delete it then for install node_module folder run this command

        npm install / npm i

5.  Install nodemon : automatic restart after any changes

        npm install -g nodemon

6.  Run :
    node server.js (default command)

        npm start (after change in the package json file "start": "node server.js")

        npm run server (nodemon run the project : "server": "nodemon server.js")

7.  install morgan middle : it will give extra data about api : like

        Server Running On 5000
        POST /contact-form-json 200 3.762 ms - 49

        npm i morgan

8.  Colors package for color terminal :

        npm i colors

9.  Dependencise

        npm install nodemon
        npm install bcrypt
        npm install colors
        npm install dotenv
        npm install express
        npm install mongoose
        npm install morgan
        npm install jsonwebtoken

## Some Problems Points :

1.  In new mongoose versions, document.remove() is deprecated. Replace remove() with deleteOne() or deleteMany().

2.  throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))

    <b>answer</b> : In any one of your js pages you are missing

        module.exports = router;

3.  TypeError: Cannot read property 'hash' of undefined

         const bcrypt = require("bcrypt");

    instead of this

         const {bcrypt} = require('bcryptjs');

4.  Error: data must be a string or Buffer and salt must either be a salt string or a number of rounds

    This error is getting while you pass the newPassword as number. So, better to pass the newPassword as string or you can convert the newPassword to string like newPassword.toString().

    Example.

         const saltRounds = 10;
         const passFromUserToString = pass.toString();
         const toHashedPass = await bcrypt.hash(passFromUserToString, saltRounds);
