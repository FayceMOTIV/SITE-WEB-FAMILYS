"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }
  console.log("analytics_event", { eventName, ...params });
}

export function trackCtaClick(label: string, page: string) {
  trackEvent("cta_click", { label, page });
  trackEvent("select_content", { content_type: "cta", item_id: label, page });
}

export function trackCalendlyOpen(label: string, page: string, url: string) {
  trackEvent("calendly_open", { label, page, url });
  trackEvent("generate_lead", { method: "calendly", page, label });
}
