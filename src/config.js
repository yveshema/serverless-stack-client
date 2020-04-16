const dev = {
    s3: {
        REGION:"us-west-2",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-q2yrfhpx76mt"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://api.rysapp.net/dev",
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_VkLQu1YbS",
        APP_CLIENT_ID: "73m3odvkdpt45mg1ehcv0c30c",
        IDENTITY_POOL_ID: "us-west-2:43ec556c-04f6-4a5a-8164-c3be8e1f3a1b"
    },
    STRIPE_KEY: "pk_test_uR2l1dWFDnXIWzrhJePt1Bq400ipYoMUXP",
};

const prod = {
    s3: {
        REGION:"us-west-2",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-ic8h45l34gen"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://api.rysapp.net/prod",
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_J1pWxNuuo",
        APP_CLIENT_ID: "745epeanojfc3i66533sntgbuj",
        IDENTITY_POOL_ID: "us-west-2:cf86ddef-4995-47f7-8caf-6de8007d0611"
    },
    STRIPE_KEY: "pk_test_uR2l1dWFDnXIWzrhJePt1Bq400ipYoMUXP",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};