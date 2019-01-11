import * as express from 'express';

export function tokenStoreMiddleware(request: express.Request, response: express.Response, next) {

    console.log(`### ${request.method} ${request.path}`);
    next();
}
