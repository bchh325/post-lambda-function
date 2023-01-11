import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { UpdateCommand, PutCommand } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDB({});
const ddbDocClient = DynamoDBDocument.from(client)

export async function updateItem(event) {
    const data = event.queryStringParameters

    const params = {
        TableName: "trading-site",
        Key: {
            "cognito_user_id": data.username
        },
        UpdateExpression: "set tickers = list_append(tickers, :tickerToAdd)",
        ExpressionAttributeValues: {
            ":tickerToAdd": [data.tickerToAdd]
        }
    }

    try {
        await ddbDocClient.send(new UpdateCommand(params))
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

export async function putItem(event) {
    const data = event.queryStringParameters

    const params = {
        TableName: "trading-site",
        Item: {
            "cognito_user_id": data.username,
            "tickers": [data.tickerToAdd]
        }
    }

    try {
        await ddbDocClient.send(new PutCommand(params))
    } catch (err) {
        throw err
    }
}