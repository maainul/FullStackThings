https://www.youtube.com/watch?v=6-RtA6FlbgQ

RUNNING TEST
https://www.youtube.com/watch?v=9KVCxMrshIk

https://www.youtube.com/watch?v=JUKZVlIDrtY



## 1.Install Package : 

npm i jest supertest @babel/core @babel/preset-env @babel/register babel-jest jest mongodb-memory-server

## 2. Create 2 file

jest.config.mjs
```.mjs
// jest.config.mjs
export default {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json', 'node'],
};
```

.babelrc


```.babelrc
{
    "presets": [
        "@babel/preset-env"
    ]
}


```

## 3. Test Case : create folder __test__

## 4. Create file:

```.js
test('1+1=2', () => {
    expect(1 + 1).toBe(2)
})
```
## 5.Update Script 
```.json
 "scripts": {
    "test": "jest",  --new line
    "hr": "nodemon index.js",
    "start": "node index.js"
  },
```

## Test : npm test

## 6.With DB

```js
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import app from '../index.js'; // Ensure correct path
import DepartmentModel from '../model/departmentModel.js'; // Ensure correct path

const url = '/api/v1/department/create';

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    // Check if mongoose is already connected to avoid multiple connections
    if (mongoose.connection.readyState === 0) { // 0 means disconnected
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
});

afterAll(async () => {
    console.log('Disconnecting mongoose...');
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
    console.log('Stopping MongoMemoryServer...');
    if (mongoServer) {
        await mongoServer.stop();
    }
});


beforeEach(async () => {
    // Clear the database before each test
    await DepartmentModel.deleteMany({});
});

afterEach(async () => {
    // Ensure that no connections or open handles are left
    jest.clearAllTimers();
    await DepartmentModel.deleteMany({});
});


describe(`POST ${url}`, () => {
    it('should create a new department', async () => {
        const res = await request(app)
            .post('/api/v1/department/create')
            .send({
                name: 'HR',
                dptCode: 'HR001',
                dptLocation: 'New York',
                status: 1
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('newDepartment');
        expect(res.body.newDepartment).toHaveProperty('name', 'HR');
        expect(res.body.newDepartment).toHaveProperty('dptCode', 'HR001');
        expect(res.body.newDepartment).toHaveProperty('dptLocation', 'New York');
    });

    it('should not create a department with duplication name', async () => {
        await DepartmentModel.create({
            name: 'HR',
            dptCode: 'HR001',
            dptLocation: 'New York',
            status: 1
        });

        const res = await request(app)
            .post(url)
            .send({
                name: 'HR',
                dptCode: 'HR02',
                dptLocation: 'Los Angeles',
                status: 1
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('success', false);
        expect(res.body.error).toEqual(expect.arrayContaining([
            expect.objectContaining({
                label: 'name',
                message: 'Department Name Already Exists'
            })
        ]));
    });

    it('should not create a department with duplicate code', async () => {
        await DepartmentModel.create({
            name: 'HR',
            dptCode: 'HR001',
            dptLocation: 'New York',
            status: 1
        });

        const res = await request(app)
            .post(url)
            .send({
                name: 'Finance',
                dptCode: 'HR001',
                dptLocation: 'Los Angeles',
                status: 1
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('success', false);
        expect(res.body.error).toEqual(expect.arrayContaining([
            expect.objectContaining({
                label: 'dptCode',
                message: 'Department Code Already Exists'
            })
        ]));
    });
});

```