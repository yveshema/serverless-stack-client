import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry(){
    if (isLocal){
        return;
    }

    Sentry.init({dsn: "https://85c85bc5267f422b99a71fc82c14e71d@o379987.ingest.sentry.io/5205364"});
}

export function logError(error, errorInfo = null) {
    if (isLocal){
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if(!(error instanceof Error) && error.message){
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url){
        errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);
    
    alert(message);
}