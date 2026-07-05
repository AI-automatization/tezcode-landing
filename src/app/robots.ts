import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES } from "@/lib/seo";

// AI assistant / answer-engine crawlers we explicitly welcome so Tezcode can be
// cited in ChatGPT, Claude, Perplexity, Gemini and similar answers (LLM SEO).
// Listing them explicitly (rather than relying only on "*") signals intent and
// guards against accidental future blocks.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — model training
  "OAI-SearchBot", // OpenAI — ChatGPT search index
  "ChatGPT-User", // OpenAI — live browsing on user request
  "ClaudeBot", // Anthropic — crawling
  "Claude-SearchBot", // Anthropic — Claude search index
  "Claude-User", // Anthropic — live browsing on user request
  "Claude-Web", // Anthropic — live browsing (legacy)
  "anthropic-ai", // Anthropic — legacy agent
  "PerplexityBot", // Perplexity — index
  "Perplexity-User", // Perplexity — live fetch
  "Google-Extended", // Google — Gemini / Vertex training
  "Applebot-Extended", // Apple — Apple Intelligence
  "CCBot", // Common Crawl — feeds many open LLMs
  "cohere-ai", // Cohere
  "Meta-ExternalAgent", // Meta AI
  "Bytespider", // ByteDance / Doubao
  "DuckAssistBot", // DuckDuckGo AI
  "YouBot", // You.com
  "bingbot", // Microsoft Bing — search index (also feeds Copilot answers)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // /_next/static + /_next/image must stay crawlable — Google needs the
        // JS/CSS assets to render pages; only the private /_next internals stay off.
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly allow AI crawlers full access to public content.
      {
        userAgent: AI_CRAWLERS,
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    // Per-locale sitemaps (generateSitemaps in app/sitemap.ts)
    sitemap: LOCALES.map((locale) => `${BASE_URL}/sitemap/${locale}.xml`),
    host: BASE_URL,
  };
}
