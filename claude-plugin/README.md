# ReportGem for Claude

This plugin connects Claude to ReportGem's hosted MCP server so Claude can search investment research and cite it. It covers sell-side research from global investment banks (Goldman Sachs, Morgan Stanley, JPMorgan, UBS, Citi, HSBC and others), Chinese broker research, US SEC filings and China company announcements, earnings-call and meeting notes, academic papers, and charts and tables taken from reports. Every result carries a source link and a page reference, so answers can be checked against the original document.

## What it contains

- **MCP server** `reportgem` at `https://www.reportgem.com/mcp` (remote, Streamable HTTP). Tools: `search_research`, `search_filings`, `search_meetings`, `search_visuals` and `get_evidence`. All five only read data; none of them changes anything in your account or elsewhere.
- **Skill** `reportgem-research`: tells Claude which tool fits which question, how to verify numbers with `get_evidence`, how to read a long report page by page, and how to lay out an answer with sources.

## Sign-in

The server uses OAuth. The first time Claude calls a ReportGem tool, you are asked to sign in to your ReportGem account in the browser and approve access. No API key is stored in the plugin. You can create an account at [reportgem.com](https://www.reportgem.com).

## Data handling

- The plugin sends your search terms, filters and document identifiers to `https://www.reportgem.com/mcp`, and nothing else. It runs no local code and reads no local files.
- ReportGem records each tool call (query text, time, account) for billing, abuse prevention and support. See the [privacy policy](https://www.reportgem.com/privacy/) and [terms](https://www.reportgem.com/terms/).
- Usage is measured in credits on your ReportGem account, based on the amount of research text returned. Empty results are not charged. Details: [MCP setup and pricing](https://www.reportgem.com/en/mcp.html).

## Example prompts

- "Which investment banks published research on NVIDIA in the last two weeks? Give bank, date, rating, target price, report title and page."
- "Find the latest earnings-call notes for TSMC and summarise what management said about capex, with page references."
- "Search charts on global data-centre power demand and show the source report and page for each."
- "Read the most recent Goldman Sachs report on CATL page by page and list the key forecasts."

## Support

Email [contact@reportgem.com](mailto:contact@reportgem.com) or see [reportgem.com/support](https://www.reportgem.com/support/). Results are research material, not personalised investment advice.
