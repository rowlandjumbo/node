
' use strict ';

const common = require ('../common');
const assert = require('assert');

// const {
//     codes: {
//       ERR_INVALID_ARG_TYPE,
//     },
//     hideStackFrames
//   } = require('../../lib/internal/errors');

// const { UV_DIRENT_UNKNOWN } = internalBinding('constants').fs;

const { getDirents } = require ('../../lib/internal/fs/utils');
//const pathModule = require('path');

//test 1 - ERR - path is ERRONEOUS
//pass erroneous path to trigger err condition in the callback
{ 
    const errPathModule = ';#?^!';
    const name = 'foo';
    const type = UV_DIRENT_UNKNOWN;
    common.expectsError(
        getDirents(errPathModule, [name, type], ()=>{
            //callback placeholder to execute the 'if' statement in getDirents()
        }),
        {
            code: 'ERR_INVALID_ARG_TYPE',
            type: TypeError,
            message: 'An invalid path was used for the test, expecting an error'
        }
    )
}  

//test 2 - SUCCESS - path is CORRECT
//call getDirents(path, name, callback);
//pass a valid path so as the err condition in the callback will NOT be executed
//assert that no error occurred and that name[i] is of type i.e. 'typeof' DirentFromStats

//test 3 - ERR - name is ERRONEOUS
//call getDirents(path, name, callback);

//test 4 - SUCCESS - name is CORRECT
//call getDirents(path, name, callback);