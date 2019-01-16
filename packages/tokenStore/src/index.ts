import * as express from 'express'

export function saveToken(request: express.Request, response: express.Response) {

    console.log(`$$$ ${request.method} ${request.path}`);
    response.sendStatus(200)
}

export function lookupToken(request: express.Request, response: express.Response, next: express.NextFunction) {

    console.log(`#### ${request.method} ${request.path}`);
    // request.params
    request.headers['x-target-device-token'] = 'af05cea58ffb2fbb313568ad2bdc9c9170bf5217a360d01024647ae6c7e016b7';
    next();
}