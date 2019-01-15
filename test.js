import { reqToCurl } from './';
import { Request, Headers } from 'node-fetch';
import  'chai/register-expect';

// method,
// headers,
// body,
// mode,
// credentials,
// cache,
// redirect,
// referrer,
// integrity

describe('reqToCurl()', () => {
  it('should return correct cURL output when supplied with Request object ', () => {
    const req = new Request('mock', {
      headers: new Headers({ mock: 'header' })
    });

    expect(reqToCurl(req)).to.equal(`curl -X GET -H 'mock: header' 'mock'`);
  })  
  
})
