## Creating an IAM User to be used in the AWS CLI

- Log into the [AWS Console](https://aws.amazon.com/console) as a Root User.

- Once in, navigate to **IAM**.

- On the _left-hand sidebar_, click **Users**.

- Click **Create user**.

Here is where I created the **cli-access** user. This user is _exclusively_ used to interact with the command line interface.

- In the _User name_ field, enter **cli-access**.

- Click **Next**.

- Click the option **Attach policies directly**.

- Click the _checkbox_ of the policy option **AdministratorAccess**.

- Scroll to the bottom and click **Next**.

- Scroll to the bottom and click **Create user**.

## Installing/Updating the AWS CLI

Install the AWS CLI from [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

Open up the Command Prompt with Win + R and type:

```
C:\Users\USR> aws --version
```

If you get a response that looks like this, _aws-cli/2.16.11_ it worked.

## Creating an Access Key

- Navigate to the **cli-access** user.

- Click the tab **Security credentials**.

- Scroll down and click **Create access key**.

- Click the _checkbox_ of the use case option **Command Line Interface (CLI)**.

- Click on the _checkbox confirmation_.

- Click **Next**.

- Click **Create access key**.

- Copy the _Access key_ and navigate to the terminal.

- Type **aws configure**.

- When prompted to enter the _AWS ACCESS KEY ID_, paste it into the terminal.

- Copy the _Secret access key_ and paste it into the terminal when prompted to enter the **AWS Secret Access Key**.

- Enter the region closest to you when prompted.

- Enter your default output format. _I prefer json_

You will know if the configuration worked because you would be able to use any command and _wouldn't get an error_.
