import * as express from 'express';
export declare function saveToken(request: express.Request, response: express.Response): void;
export declare function lookupToken(request: express.Request, response: express.Response, next: express.NextFunction): void;
