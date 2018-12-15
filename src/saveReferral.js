const DynamoDB = require('aws-sdk/clients/dynamodb');

const { REFERRAL_TABLE, AWS_REGION } = process.env;

const DefaultParams = { TableName: REFERRAL_TABLE };

const service = new DynamoDB({ region: AWS_REGION });

const client = new DynamoDB.DocumentClient({ service, params: DefaultParams })

module.exports = Item => client.put({ Item }).promise();