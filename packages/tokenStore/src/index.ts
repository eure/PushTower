import * as express from 'express';

// export type express.Request

// export const tokenStoreMiddleware = (request: express.Request, response: express.Response, next: express.NextFunction) => {

//     console.log(`### ${request.method} ${request.path}`);
//     next();
// }

// export function tokenStoreMiddleware(request: express.Request, response: express.Response, next: express.NextFunction) {
export function tokenStoreMiddleware(request, response, next) {

    console.log(`### ${request.method} ${request.path}`);
    next();
}

export function hoge(a: string) {
    console.log(a);
}

// export function saveToken(request, response, next) {

//     console.log(`### ${request.method} ${request.path}`);
//     next();
// }
