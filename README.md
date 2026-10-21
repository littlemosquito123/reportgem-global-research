# ReportGem (报告驿站) · Global Investment Research Agent & Knowledge Base (MCP)

**English** | [中文](README.zh-CN.md)

A global sell-side research knowledge base exposed as a remote MCP server. Connect it to your AI assistant to search, cite and read investment research end to end.

[![ReportGem MCP connector](https://glama.ai/mcp/connectors/com.reportgem/report-gem-global-research/badges/score.svg)](https://glama.ai/mcp/connectors/com.reportgem/report-gem-global-research)

[![Install in Cursor](https://img.shields.io/badge/Cursor-Install_MCP-000000?style=flat&logo=cursor&logoColor=white)](cursor://anysphere.cursor-deeplink/mcp/install?name=reportgem&config=eyJ1cmwiOiJodHRwczovL3d3dy5yZXBvcnRnZW0uY29tL21jcCJ9)
[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_MCP-0098FF?style=flat&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=reportgem&config=%7B%22name%22%3A%22reportgem%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwww.reportgem.com%2Fmcp%22%7D)
[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.reportgem%2Fglobal--research-6A5ACD?style=flat)](https://registry.modelcontextprotocol.io/v0/servers?search=com.reportgem%2Fglobal-research)
[![mcp.so](https://img.shields.io/badge/mcp.so-listed-2EA44F?style=flat)](https://mcp.so/servers/reportgem-global-research)

One-click install: use the **Cursor / VS Code** buttons above (endpoint `https://www.reportgem.com/mcp`), then finish the OAuth login on first use. Cline users: see [llms-install.md](llms-install.md).

Website: **[ReportGem https://www.reportgem.com](https://www.reportgem.com)** · Chinese site **[报告驿站 https://www.nash-ai.cn](https://www.nash-ai.cn)** · [MCP setup & pricing](https://www.reportgem.com/en/mcp.html)

**What it is:** a research agent toolkit and knowledge base covering research from dozens of global investment banks — Goldman Sachs, Citi, HSBC, UBS, JPMorgan, Morgan Stanley, Barclays, Nomura and more — with 16 million+ reports, same-day real-time coverage and Chinese titles and translations. It also includes 5 million+ reports from 200+ Chinese brokers and futures firms, plus company filings, earnings-call notes and academic papers. Ask research questions in natural language from Claude, Cursor, Codex, Kimi Code, WorkBuddy or any MCP client; answers come with page-cited source passages.

报告驿站 (Chinese name) and ReportGem (English name) are the same brand: Chinese site nash-ai.cn, international site reportgem.com. The MCP service is run on reportgem.com and uses a ReportGem account (sign up at reportgem.com).

Keywords: global sell-side research · investment bank research reports · investment research agent · research knowledge base · broker research API · Goldman Sachs research · Morgan Stanley research · equity research for AI · MCP server · 全球研报 · 投研智能体

## Data coverage

| Data | Scale | Update |
| --- | --- | --- |
| **Global investment-bank research** (Goldman Sachs, Citi, HSBC, UBS, JPMorgan, Morgan Stanley, Barclays, Nomura…) | **16 million+ reports**, real-time reports available the same day | Every 10 minutes |
| Chinese titles and translations of global research | With each report | With each report |
| Chinese broker and futures research (200+ institutions) | 5 million+ reports | Daily |
| China listed-company announcements and investor-meeting notes | 20 million+ | Real time |
| US SEC filings (8-K, 10-K, 6-K…) | 1,500 key companies | Daily |
| Global and China earnings calls and meeting notes | 130,000+ events | Daily |
| Academic papers (finance, computer science…) | 5 million+ | Daily |
| Charts and tables inside reports | Searchable by image | With each report |

## MCP tools

| Tool | What it does |
| --- | --- |
| `search_research` | Search research reports and papers by keyword, company, ticker, broker, industry or date |
| `search_filings` | Search SEC filings and China company announcements |
| `search_meetings` | Search earnings calls and meeting notes |
| `search_visuals` | Find charts and tables inside reports |
| `get_evidence` | Read source passages with page numbers; `reading_mode="sequential"` reads a whole document page by page |

## Free trial and pricing

- **New accounts get 10 credits (≈100,000 returned tokens), valid 30 days.** Sign up for a ReportGem account (phone binding required) and log in via OAuth; all tools are included.
- You pay only for delivered research text: passage excerpts, chart captions, table text and summaries. Titles, your questions, URLs, internal retrieval and failed or empty results are free. 1 credit = 10,000 returned tokens, metered on actual usage and never rounded up.
- Each call returns at most 20 sources and 200,000 tokens; when a limit is reached you get a clear notice, with no automatic splitting or extra charges.
- Credit packages (one-time, no auto-renewal, valid 30 days):

| Package | Credits | Price |
| --- | --- | --- |
| Lite | 400 | ¥169 |
| Standard | 1,300 | ¥299 |
| Pro | 3,000 | ¥499 |

Full pricing: https://www.reportgem.com/en/mcp.html#pricing. Tool parameters: [docs/tools.md](docs/tools.md). Client guides: [docs/clients.md](docs/clients.md). Examples: [docs/examples.md](docs/examples.md).

## Connect

Endpoint `https://www.reportgem.com/mcp`, transport Streamable HTTP (not SSE), auth via ReportGem login + OAuth 2.0 (dynamic client registration). `initialize` and `tools/list` work without login; tool calls require OAuth. Step-by-step guides: https://www.reportgem.com/en/mcp.html.

**Claude Code**
```bash
claude mcp add --transport http --scope user reportgem https://www.reportgem.com/mcp
```
Run `claude`, type `/mcp`, choose `reportgem` and finish the browser login.

**Codex CLI**
```bash
codex mcp add reportgem --url https://www.reportgem.com/mcp
codex mcp login reportgem
```

**Claude (web / desktop):** Customize → Connectors → Add custom connector, name it "ReportGem", paste the endpoint, then Connect and approve. Leave Client ID / Secret empty.

**Cursor, Cline, VS Code, Windsurf and other clients** — merge into your `mcpServers` config:
```json
{
  "mcpServers": {
    "reportgem": {
      "url": "https://www.reportgem.com/mcp"
    }
  }
}
```
Use the `/mcp` endpoint only, never the website page URL, then complete the OAuth prompt.

**Kimi Code CLI:** `/mcp-config` → add `reportgem` as an HTTP remote server → `/mcp-config login reportgem` → `/mcp` to check status.

**WorkBuddy:** Connectors → search "报告驿站" → Connect.

## Example prompts

- "Goldman Sachs' view on NVIDIA this week, with page citations."
- "Compare Citi and Morgan Stanley forecasts for Fed rate cuts in 2026."
- "Summarize JPMorgan's latest China internet sector report."
- "Where do UBS and Nomura disagree on Bank of Japan rate hikes?"
- "Find a chart of global AI server shipment forecasts and tell me which report it comes from."
- "What did TSMC management say about advanced-node capacity on the last earnings call?"

## Terms (summary)

- Data is for personal investment research only. Bulk scraping, database building, resale or redistribution to third parties is not allowed.
- Per-call limits apply (20 sources, 200,000 tokens); abnormal usage may be restricted.
- Full terms: https://www.reportgem.com/terms/ · Privacy: https://www.reportgem.com/privacy/

## Websites

Every MCP result links back to the source on the website, where you can also search and read directly.

| Product | Page |
| --- | --- |
| Real-time global broker research | https://www.reportgem.com/en/research-live.html |
| Global research archive | https://www.reportgem.com/foreign.html |
| Chinese broker and futures research | https://www.nash-ai.cn (报告驿站) |
| China company announcements | https://www.reportgem.com/company-notices.html |
| US SEC filings | https://www.reportgem.com/sec-filings.html |
| Earnings calls and meeting notes | https://www.reportgem.com/en/earnings-calls.html |
| Academic papers | https://www.reportgem.com/papers.html |
| AI research assistant | https://www.reportgem.com/ai-research.html |
| Market news | https://www.reportgem.com/en/market-news.html |

## Contact

ReportGem https://www.reportgem.com · 报告驿站 https://www.nash-ai.cn · ww@reportgem.com

---

Coverage figures as of October 2026. This repository contains setup instructions and examples only — no research data. Research results are for reference and are not investment advice.
