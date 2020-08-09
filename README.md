# Node-Express-With-AWS-Lambda
step1 : create application having app.js/index.js and package.json file in node with express dependencies
step2 : write your actual business logic in app.js/index.js (if possible test the endpoints in local server)
step3 : To deploy in AWS Lambda
		a) configure AWS CLI first and later install two npm modules
		b) use npm i aws-serverless-express to install AWS Serverless Express
		c) use npm i serverless --dev to configure AWS Lambda with serverless.yml file
		d) create a lambda.js file which acts as a entry point for AWS Lambda having some boiler plate code
		e) create serverless.yml file which you can give details for how the lambda to be configured
		f) now deploy by using serverless deploy (this will create a .serverless folder which you can ignore by adding it in .gitignore)

Note : If you want to upload from AWS CLI then navigate to root folder and run : aws lambda update-function-code --function-name lambdafunctionname --zip-file fileb://deploy.zip  
