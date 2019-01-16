import * as express from 'express'
import * as storage from 'node-persist'


export async function setup() {

    await storage.init({dir: '/tmp/pushserver_tokenstore.db'})
}

export async function putToken(request: express.Request, response: express.Response) {

    console.log(`$$$ ${request.method} ${request.path}`);

    const key = request.body['key']
    const deviceToken = request.body['device_token']

    console.log("### key: " + key)
    console.log("### device_token: " + deviceToken)

    if (key && deviceToken) {
        await storage.setItem(key, deviceToken)
    }

    // console.log(await storage.getItem(key));
    response.sendStatus(200)
}

export function lookupToken(request: express.Request, response: express.Response, next: express.NextFunction) {

    console.log(`#### ${request.method} ${request.path}`);
    // request.params
    request.headers['x-target-device-token'] = 'af05cea58ffb2fbb313568ad2bdc9c9170bf5217a360d01024647ae6c7e016b7';
    next();
}
