import {
    get
} from 'request';
import * as fs from 'fs';
import {
    Router
} from 'express';

export default (url, app) => {
    app.get('/page-import', (req, res) => {
        get(url, (err, data) => {
            if (err) {
                console.error('Problem in getting from ' + url, err);
            } else {
                console.log(data.body);
                fs.writeFileSync("../demo/magic/index.html", data.body);
                res.send(data.body)
            }

        });

    });

}