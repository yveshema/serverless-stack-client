export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION:"us-west-2",
        BUCKET: "rysapp-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://y9geu41bz4.execute-api.us-west-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "",
        USER_POOL_ID: "us-west-2_FUDbEVKDa",
        APP_CLIENT_ID: "37tqmjnlkisks90828oeuko1ma",
        IDENTITY_POOL_ID: "us-west-2:2b6b9741-218e-4f12-8c79-65d266324587"
    }
}