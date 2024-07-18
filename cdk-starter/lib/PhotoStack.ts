import * as cdk from "aws-cdk-lib";
import { Fn, CfnOutput } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class PhotosStack extends cdk.Stack {
  private stackSuffix: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initialiseSuffix();

    const photosBucket = new Bucket(this, "PhotosBucket", {
      bucketName: `photos-bucket-${this.stackSuffix}`,
    });

    new CfnOutput(this, "photos-bucket", {
      value: photosBucket.bucketArn,
      exportName: "photos-bucket",
    });
  }

  private initialiseSuffix() {
    const shortStackId = Fn.select(2, Fn.split("/", this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split("-", shortStackId));
  }
}
