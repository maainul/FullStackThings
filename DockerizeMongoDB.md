# Mongodb 

If you want to ensure that the /var/lib/mongodbsql/data directory is created automatically when the container starts, you can modify your Dockerfile to include a command to create the directory during the container's initialization.

```Dockerfile
FROM mongo

# Create data directory
RUN mkdir -p /var/lib/mongodbsql/data

```
Save the above content in a file named Dockerfile in the same directory where you're running your docker run command.

Then, build your Docker image using the following command:
```bash
docker build -t my-mongodb-gate-image .
```
Replace my-mongodb-image with the desired name for your Docker image.

Finally, run your MongoDB container using the image you just built:

```bash
docker run -d --name mongogatedb --network my-network -v mongodata:/var/lib/mongodbsql/data -p 27017:27017 --restart unless-stopped my-mongodb-gate-image
```

With this setup, the /var/lib/mongodbsql/data directory will be created automatically when the container starts, ensuring that it exists without the need for manual intervention.


