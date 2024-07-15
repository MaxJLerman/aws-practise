import * as cdk from "aws-cdk-lib";
import { CfnOutput, CfnParameter, Duration } from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, "L3Bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(expiration),
        },
      ],
    });
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //* create an s3 bucket 3 ways:

    //* 1. L1 construct
    new CfnBucket(this, "MyL1Bucket", {
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 1,
            status: "Enabled", //? status: "Enabled" is the default in L2
          },
        ],
      },
    });

    //? <duration of expiration> lifecycle rull parameter
    const duration = new CfnParameter(this, "duration", {
      type: "Number",
      description: "Duration in days for object expiration",
      default: 6,
      minValue: 1,
      maxValue: 10,
    });

    //* 2. L2 construct - more flexible configuration
    const myL2Bucket = new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber),
        },
      ],
    });
    // console.log("Bucket name: ", myL2Bucket.bucketName); //! won't work as the information attempting to log out is obly available AFTER the stack is deployed
    new CfnOutput(this, "MyL2BucketName", {
      value: myL2Bucket.bucketName, //? bucket name can be accessed here
      /**
       ** OUTPUT IN CONSOLE
       ** Outputs:
       ** CdkStarterStack.MyL2BucketName = cdkstarterstack-myl2bucketc842e3f4-3ahol7mwpzpv
       */
    });

    //* 3. L3 construct - using custom class that extends Construct class
    new L3Bucket(this, "MyL3Bucket", 3);
  }
}
