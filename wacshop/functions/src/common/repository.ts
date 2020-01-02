import { Injectable } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

@Injectable()
export class Repository {

    db: Firestore;

    constructor() {
        console.log('constructor firestore');
        admin.initializeApp(functions.config().firebase);
        this.db = admin.firestore();
    }
}
