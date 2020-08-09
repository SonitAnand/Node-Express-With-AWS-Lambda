const { v4: uuidv4 } = require('uuid');
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./index');
const server = awsServerlessExpress.createServer(app);

exports.handler = (event,context) => {
     const uuid = uuidv4();
     //return 'uuid: ' + uuid;
     awsServerlessExpress.proxy(server,event,context);
};
