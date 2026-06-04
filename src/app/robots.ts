import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

// AI assistant / answer-engine crawlers we explicitly welcome so Tezcode can be
// cited in ChatGPT, Claude, Perplexity, Gemini and similar answers (LLM SEO).
// Listing them explicitly (rather than relying only on "*") signals intent and
// guards against accidental future blocks.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — model training
  "OAI-SearchBot", // OpenAI — ChatGPT search index
  "ChatGPT-User", // OpenAI — live browsing on user request
  "ClaudeBot", // Anthropic — crawling
  "Claude-Web", // Anthropic — live browsing
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
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly allow AI crawlers full access to public content.
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
