---
name: reportgem-research
description: Search ReportGem research reports, filings, meeting notes, academic papers, charts, tables, and evidence; use when the user asks for company, industry, market, or investment research grounded in ReportGem sources.
---

# ReportGem Research

Use the ReportGem MCP tools to answer research questions with traceable evidence.

## Workflow

1. Identify the company, ticker, market, time range, and requested output.
2. For ticker queries, preserve the exact ticker and exchange suffix supplied by the user.
3. Search before drawing conclusions:
   - `search_research` for global, real-time, Chinese, and academic research.
   - `search_filings` for SEC and China company filings.
   - `search_meetings` for China and global meeting notes.
   - `search_visuals` for relevant charts and tables.
4. Use `get_evidence` for material numerical claims, quotations, forecasts, and disputed conclusions.
5. Cite the source title, date, source type, and page or evidence location whenever available.

## Reading long documents

- To verify one fact, number, or quotation, call `get_evidence` with `reading_mode="relevant"` and put what you are checking in `query`.
- When the user asks you to read or summarize a whole document, call `get_evidence` with `reading_mode="sequential"`. Pass `start_page` to begin at a specific page.
- When the response has `has_more=true`, pass `next_cursor` back unchanged in the next call and keep reading. Do not imitate full-text reading by swapping keywords to sample random pages.
- Each call returns at most 6 passages (about 18,000 characters); continue with the cursor for the rest. State which pages you covered and which ranges remain unread.
- Sequential reading is still subject to the user's permissions, subscription, usage quota, and audit controls. Never describe it as an unrestricted raw PDF export.

## Analysis rules

- Separate official disclosures, analyst opinions, ReportGem-derived synthesis, and unverified claims.
- Present supporting evidence, opposing evidence, conflicts, and important missing information.
- Preserve names, tickers, dates, units, and numbers when translating.
- If results are missing, stale, conflicting, or inaccessible, say so explicitly.
- Never expose credentials, access tokens, private URLs, or licensed full-text content unless the tool explicitly returns it for the authenticated user.
- Treat outputs as information and research, not personalized investment advice or trade execution.

## Recommended output structure

1. Key findings
2. Verified evidence (source, date, page)
3. Supporting and opposing views
4. Evidence conflicts or information gaps
5. Indicators to monitor
6. Source list
