import * as express from 'express';
export declare function setup(): Promise<void>;
export declare function putToken(request: express.Request, response: express.Response): Promise<void>;
export declare function lookupToken(request: express.Request, response: express.Response, next: express.NextFunction): void;
