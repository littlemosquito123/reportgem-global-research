# ReportGem (报告驿站) MCP — install guide for AI agents

This is a **remote** MCP server. Nothing to download or build.

- Endpoint: `https://www.reportgem.com/mcp`
- Transport: Streamable HTTP (not SSE)
- Auth: OAuth 2.0 with dynamic client registration. `initialize` and `tools/list` work anonymously; the first `tools/call` opens a browser login for a free ReportGem account (new accounts get 10 free credits, valid 30 days).
- Tools: `search_research`, `search_filings`, `search_meetings`, `search_visuals`, `get_evidence` (see [docs/tools.md](docs/tools.md)).

## Cline

Add to `cline_mcp_settings.json` (Cline → MCP Servers → Remote Servers also works: name `reportgem`, URL above):

```json
{
  "mcpServers": {
    "reportgem": {
      "type": "streamableHttp",
      "url": "https://www.reportgem.com/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Then click **Authenticate** / follow the OAuth prompt, log in with a ReportGem account (sign up at https://www.reportgem.com, phone binding required) and approve. Test with: *"Use reportgem to find Goldman Sachs' latest view on NVIDIA and quote the source page."*

## Any other client (Cursor, Claude Code, Codex, VS Code, Kimi Code, WorkBuddy)

```json
{ "mcpServers": { "reportgem": { "url": "https://www.reportgem.com/mcp" } } }
```

- Claude Code: `claude mcp add --transport http reportgem https://www.reportgem.com/mcp`
- Codex: `codex mcp add reportgem --url https://www.reportgem.com/mcp && codex mcp login reportgem`
- Full per-client steps: [docs/clients.md](docs/clients.md) · https://www.reportgem.com/mcp.html

## Troubleshooting

- 401 on a tool call = not logged in yet; complete the OAuth flow in the browser.
- Use the `/mcp` endpoint only, never the website page URL.
- Contact: ww@reportgem.com
