# Starting with Google Cloud Functions

Using Cloud Functions native, without any framework like serverless to do this. it will initially run a express server in the future, whe will see.

## Local debug

To run the project locally you will need to use the the functions-framework from the google team, to install it execute the following command.

### `npm install @google-cloud/functions-framework`

To use it

### `FUNCTION_TARGET=helloHttp npx @google-cloud/functions-framework`

or just run

### `npm start`

to run with hot reload use

### `npm run start:watch`

It will probably run on port 8080, after that just be happy, target it with postman or your app.

## Local use with docker (recommended)

With docker installed in the machine, just run the following command

### `docker-compose up dev`

## Deploying

To deploy it use the following command

### `gcloud functions deploy helloHttp --runtime nodejs10 --trigger-http --allow-unauthenticated`

To consult the others flag and options just go to [official documentation](https://cloud.google.com/functions/docs/deploying/filesystem)