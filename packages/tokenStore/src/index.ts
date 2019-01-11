import * as express from 'express';

// export type express.Request

// export function tokenStoreMiddleware(request: express.Request, response: express.Response, next) {
export function tokenStoreMiddleware(request, response, next) {

    console.log(`### ${request.method} ${request.path}`);
    next();
}
