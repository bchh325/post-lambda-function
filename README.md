# post-lambda-function

Lambda function that is used for the application in 
https://github.com/bchh325/trading-site

This function is responsible for checking to see if the user already exists in DynamoDB,
updating data if the user exists already, or putting the data if the user does not.

Lambda runtime: Node.js 18.x

Using [AWS SDK v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
