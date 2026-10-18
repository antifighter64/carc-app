/**
 * Analytics configuration for carc.com
 *
 * Fill in the real IDs once the GA4 property, Search Console, and
 * Bing Webmaster Tools are set up (browser task, queued).
 * The layout reads these — no code changes needed after fill-in.
 */

export const ANALYTICS = {
  /** GA4 Measurement ID, e.g. "G-XXXXXXXXXX" — get from analytics.google.com */
  GA4_MEASUREMENT_ID: "G-L5HK75HB2S",

  /** Google Search Console HTML tag verification content value */
  GOOGLE_SITE_VERIFICATION: "gqNTjZ3Jdo6SO7X__MKu5Kt9ckNjE48H_FxIt9bYoyE",

  /** Bing Webmaster Tools meta tag verification content value */
  BING_SITE_VERIFICATION: "",
} as const;

export const analyticsConfigured = () =>
  ANALYTICS.GA4_MEASUREMENT_ID.length > 0;
