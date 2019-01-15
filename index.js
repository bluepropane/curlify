function extractHeaderParams(req) {
  return Array.from(req.headers.entries())
    .map(([key, values]) => {
      return ['-H', `'${key}: ${values}'`];
    })
    .reduce((accum, headerArg) => accum.concat(headerArg), []);
}

export function reqToCurl(req) {
  let cmd = ['curl'];
  cmd = cmd.concat(['-X', req.method]);
  cmd = cmd.concat(extractHeaderParams(req));
  if (req._bodyText) {
    cmd = cmd.concat(['-d', `'${req._bodyText}'`]);
  }
  cmd.push(`'${req.url}'`);
  return cmd.join(' ');
};

export function curlToReq(curl) {

}