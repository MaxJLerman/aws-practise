# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
- `npx cdk init app --language typescript` specifies the app for which the project will be initialised in
- `npx cdk bootstrap` makes a starter environment for the cdk application
- `npx cdk list` lists all the buckets in the current AWS environment
- `npx cdk diff` shows detailed report of the difference between what resources are local and what are remotely deployed in AWS CloudFormation environment
- `npx cdk doctor` navigates through versions of different libraries related to CDK, notifying the user if there are any problems
- `npx cdk destroy <STACK_NAME>` destroys the specified stack

eg. Result of `npx cdk diff`:

```
Resources
[~] AWS::S3::Bucket MyL2Bucket MyL2BucketC842E3F4
 └─ [~] LifecycleConfiguration
     └─ [~] .Rules:
         └─ @@ -1,6 +1,6 @@
            [ ] [
            [ ]   {
            [-]     "ExpirationInDays": 2,
            [+]     "ExpirationInDays": 3,
            [ ]     "Status": "Enabled"
            [ ]   }
            [ ] ]
```

eg.2 Result of `npx cdk doctor`:

```
ℹ️ CDK Version: 2.148.1 (build 283525d)
ℹ️ AWS environment variables:
  - AWS_STS_REGIONAL_ENDPOINTS = regional
  - AWS_NODEJS_CONNECTION_REUSE_ENABLED = 1
  - AWS_SDK_LOAD_CONFIG = 1
ℹ️ No CDK environment variables
```
