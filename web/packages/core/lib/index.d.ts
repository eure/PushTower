import * as apn from 'apn';
export declare type Descriptor = {
    deviceToken: string;
    payload: string;
    p8FilePath: string;
    keyID: string;
    teamID: string;
    topic: string;
    isProduction: boolean;
};
export declare function hoge(): void;
export declare function send(descriptor: Descriptor): Promise<apn.Responses>;
