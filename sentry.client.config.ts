import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0f72ce7cb4c5762a9ab937e56716a7a8@o4508264540209152.ingest.de.sentry.io/4508264541913168",

  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});