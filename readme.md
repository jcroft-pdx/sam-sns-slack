## SNS TO SLACK

A simple lambda for creating a slack message from an SNS topic.

Uses Node 12.13.x

To Build the app
```sam build```

To deploy the app.
```sam deploy --guided```

1. Create a new channel in slack for testing
2. Get webhook url from slack
3. Build and Deploy the application
4. Enter webhook url into environment variable
5. Use the test event to check if things are working


