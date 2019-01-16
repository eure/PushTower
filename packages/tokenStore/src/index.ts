import * as express from 'express'
import * as Levelup from 'levelup'
import * as Leveldown from 'leveldown'

export function saveToken(request: express.Request, response: express.Response) {

    // const levelup = Levelup.default
    // const leveldown = Leveldown.default

    console.log(`$$$ ${request.method} ${request.path}`);

    const key = request.params['key']
    const deviceToken = request.params['device_token']

    // const db = levelup(leveldown('./mydb'))


    // db.put('name', 'levelup', function (err) {
    //     if (err) return console.log('Ooops!', err) // some kind of I/O error
      
    //     // 3) Fetch by key
    //     db.get('name', function (err, value) {
    //       if (err) return console.log('Ooops!', err) // likely the key was not found
      
    //       // Ta da!
    //       console.log('name=' + value)
    //       response.sendStatus(200)
    //     })
    // })
    
    response.sendStatus(200)

}

export function lookupToken(request: express.Request, response: express.Response, next: express.NextFunction) {

    console.log(`#### ${request.method} ${request.path}`);
    // request.params
    request.headers['x-target-device-token'] = 'af05cea58ffb2fbb313568ad2bdc9c9170bf5217a360d01024647ae6c7e016b7';
    next();
}