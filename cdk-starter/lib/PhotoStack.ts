import * as cdk from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class PhotosStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, "PhotosBucket", {
      bucketName: "photosbucket-5614e9",
    });

    //! ONLY change the logical ID of the S3 bucket (after already deploying it) via the method below, NOT by modifying the string ID above
    (myBucket.node.defaultChild as CfnBucket).overrideLogicalId(
      "PhotosBucket2guebgfuebgu",
    );
  }
}
