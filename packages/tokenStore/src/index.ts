import * as express from 'express'
import * as storage from 'node-persist'


export async function setup() {

    await storage.init({dir: '/tmp/mydb.db'})
}

export async function putToken(request: express.Request, response: express.Response) {

    console.log(`$$$ ${request.method} ${request.path}`);

    const key = request.params['key']
    const deviceToken = request.params['device_token']

    await storage.setItem('name','yourname')
    console.log(await storage.getItem('name')); // yourname
    response.sendStatus(200)
}

export function lookupToken(request: express.Request, response: express.Response, next: express.NextFunction) {

    console.log(`#### ${request.method} ${request.path}`);
    // request.params
    request.headers['x-target-device-token'] = 'af05cea58ffb2fbb313568ad2bdc9c9170bf5217a360d01024647ae6c7e016b7';
    next();
}
