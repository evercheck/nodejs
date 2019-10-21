import * as functions from 'firebase-functions';
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as express from 'express';


const server = express();

const createNestServer = async (expressInstance) => {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
    return app.init();
}

createNestServer(server)
    .then(v => console.log('Nest ready'))
    .catch(err => console.log('Nest broken'));

export const api = functions.https.onRequest(server);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
