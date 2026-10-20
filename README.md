# 报告驿站 ReportGem · 全球投研研报智能体与知识库（MCP）

全球投行研报知识库 + 投研智能体工具：接进你的 AI 工具，检索、取证、连续阅读全球研报。

官网：**[ReportGem 全球研报 https://www.reportgem.com](https://www.reportgem.com)** · **[报告驿站 https://www.nash-ai.cn](https://www.nash-ai.cn)** · [MCP 接入与套餐](https://www.reportgem.com/mcp.html)

**定位：全球投研研报智能体和知识库。** 知识库覆盖高盛、摩根士丹利、摩根大通、花旗、瑞银、汇丰、巴克莱、德意志银行、野村、大和等数十家海外投行的研报，1,600 万+ 份，实时外文每日更新，在线研报配中文标题与中文译文。另有中文券商研报、公告、会议纪要、论文作为配套。接进 WorkBuddy、Kimi Code、Codex、Claude、扣子、Cursor 等 AI 工具，用自然语言做投研。

报告驿站（中文名）与 ReportGem（英文名）是同一品牌：中文站 nash-ai.cn，国际站 reportgem.com。MCP 服务由 reportgem.com 提供，使用 ReportGem 账号（在 reportgem.com 注册）登录。

关键词：全球研报 · 投研智能体 · 研报知识库 · 外资投行研报 · 海外券商研报 · 高盛研报 · 大摩研报 · 投研 AI · Global sell-side research · Investment research agent · Research knowledge base · MCP server

**数据范围**
| 数据 | 规模 | 更新 |
| --- | --- | --- |
| **全球投行研报**（高盛、摩根士丹利、摩根大通、花旗、瑞银、汇丰、巴克莱、德银、野村等） | **1,600 万+ 份**，实时外文当日可查 | 每 10 分钟同步 |
| 全球研报中文标题与中文译文 | 随研报提供 | 随研报 |
| 中文券商研报（配套） | 500 万+ 份 | 每日 |
| 中国上市公司公告与调研纪要 | 50 万+ 份 | 实时 |
| 美股公告（SEC 8-K/10-K/6-K 等） | 1,500 家重点公司 | 每日 |
| 国际 / 中国会议纪要（业绩会、路演） | 3 万+ 场 | 每日 |
| 学术论文（金融、计算机等） | 14 万+ 篇 | 每日 |
| 研报内图表与表格 | 可按图搜 | 随研报 |

**MCP 工具**
| 工具 | 作用 |
| --- | --- |
| `search_research` | 检索研报（关键词、机构、行业、时间） |
| `search_filings` | 检索公告 |
| `search_meetings` | 检索会议纪要 |
| `search_visuals` | 检索研报里的图表和表格 |
| `get_evidence` | 读取原文段落（带页码，支持按页连续阅读），用于引用和核对 |

### 免费试用与计费
- **新账号赠送 10 积分（约 10 万返回资料 Token），30 天内有效。** 注册 ReportGem 账号（需绑定手机号）后用 OAuth 登录即到账，全部工具都能用。
- 只为实际返回的资料文字付费：正文摘录、图题、表格文字与摘要计费；标题、问题、URL、内部检索、失败或空结果不计费。1 积分 = 10,000 返回 Token，按实际用量扣，不向上取整。
- 每次调用最多 20 个来源、200,000 Token，达到上限会明确提示，不会自动拆单或额外收费。
- 用完后在官网购买积分（一次性，不自动续费，购买积分同样 30 天内有效）：

| 套餐 | 积分 | 价格 |
| --- | --- | --- |
| 轻量包 | 400 | ¥169 |
| 常用包 | 1,300 | ¥299 |
| 专业包 | 3,000 | ¥499 |

计费说明全文：https://www.reportgem.com/mcp.html#packages 。工具参数见 [docs/tools.md](docs/tools.md)，各客户端步骤见 [docs/clients.md](docs/clients.md)，示例见 [docs/examples.md](docs/examples.md)。

### 接入方式
远程 MCP 地址 `https://www.reportgem.com/mcp`，连接类型 Streamable HTTP，认证为 ReportGem 登录 + OAuth 授权。各客户端详细步骤见 https://www.reportgem.com/mcp.html（已实测范围以该页为准）。

**WorkBuddy（推荐，已对接连接器）**：客户端 →「连接器」→ 搜索「报告驿站」→ 连接，按提示在 ReportGem 页面授权。

**Kimi Code CLI**：`/mcp-config` 添加名为 `reportgem` 的 HTTP 远程服务（不要选 SSE），再 `/mcp-config login reportgem` 授权，`/mcp` 查看状态。或在 `~/.kimi-code/mcp.json` 的 `mcpServers` 里合并下面的配置。

**Codex**：
```
codex mcp add reportgem --url https://www.reportgem.com/mcp
codex mcp login reportgem
```

**Claude（网页/桌面）**：Customize → Connectors → Add custom connector，名称「报告驿站」，地址填上面的 MCP 地址，Connect 后授权。**Claude Code**：
```
claude mcp add --transport http reportgem https://www.reportgem.com/mcp
```

**通用 JSON 配置（Cursor、Cline 及其他支持 Streamable HTTP + OAuth 的客户端）**：
```json
{
  "mcpServers": {
    "reportgem": {
      "url": "https://www.reportgem.com/mcp"
    }
  }
}
```
地址只填 `/mcp`，不要填官网页面地址；保存后按客户端提示完成 OAuth 授权。

**扣子 / 豆包**：按 mcp.html 上对应说明配置（豆包普通聊天端与扣子是不同产品）。

### 示例
- "高盛最近一周关于英伟达的观点，给我来源页码"
- "对比花旗和摩根士丹利对 2026 年美联储降息的预测"
- "摩根大通最新的中国互联网行业研报说了什么，用中文总结"
- "瑞银和野村对日本央行加息的看法有什么分歧"
- "找一张显示全球 AI 服务器出货量预测的图，并告诉我出自哪份研报"
- "台积电最近一次业绩会上管理层怎么谈先进制程产能"

### 使用条款（摘要）
- 数据仅供个人投研使用，禁止批量抓取、建库、转售或向第三方提供。
- 每次调用有来源数（20 个）与返回量（20 万 Token）上限；异常调用会被限制。
- 完整条款：https://www.reportgem.com/terms/　隐私：https://www.reportgem.com/privacy/

### 官网与产品入口
在官网可以直接搜索和阅读，MCP 返回的每条结果都带官网链接，可在浏览器中打开原文。

| 产品 | 官网页面 |
| --- | --- |
| 实时外文研报（当日全球投行研报） | https://www.reportgem.com/foreign-rt.html |
| 普通外文研报（全球投行研报库） | https://www.reportgem.com/foreign.html |
| 中文券商研报 | https://www.nash-ai.cn （报告驿站中文站） |
| 中国公司公告与调研纪要 | https://www.reportgem.com/company-notices.html |
| 美股公告（SEC） | https://www.reportgem.com/sec-filings.html |
| 国际会议纪要 / 中国会议纪要 | https://www.reportgem.com/events.html · https://www.reportgem.com/events-cn.html |
| 学术论文 | https://www.reportgem.com/papers.html |
| AI 投研助手 | https://www.reportgem.com/ai-research.html |
| 全球商机查询 | https://www.reportgem.com/opportunities.html |
| 财经新闻 / 宏观分析 | https://www.reportgem.com/headlines.html · https://www.reportgem.com/macro.html |
| 英文站 | https://www.reportgem.com/en/research-live.html |
| 报告驿站（中文站） | https://www.nash-ai.cn · 实时外文 https://www.nash-ai.cn/foreign-rt.html |

### 联系
报告驿站 https://www.nash-ai.cn · ReportGem https://www.reportgem.com · contact@reportgem.com

---

## English

**ReportGem (报告驿站) — Global Investment Research Agent & Knowledge Base (MCP)** — a global sell-side research knowledge base and research-agent toolset for AI clients. 16 million+ reports from Goldman Sachs, Morgan Stanley, JPMorgan, Citi, UBS, HSBC, Barclays, Deutsche Bank, Nomura and more, with same-day real-time coverage, plus Chinese broker research, 500k+ company filings, SEC filings, earnings-call notes, academic papers and in-report charts. Search, read source passages with page numbers and get cited answers from Claude, Cursor, Codex or any MCP client. Free trial credits for new accounts. Endpoint: `https://www.reportgem.com/mcp` (Streamable HTTP + OAuth).

Keywords: global research reports · investment research agent · research knowledge base · sell-side research · investment bank research · Goldman Sachs research · Morgan Stanley research · research MCP server

Website: https://www.reportgem.com (English: https://www.reportgem.com/en/research-live.html) · Chinese site 报告驿站: https://www.nash-ai.cn

---

数据规模截至 2026-10-19。本仓库只包含接入说明与示例，不包含任何研报数据；数据查询与阅读请使用官网 https://www.reportgem.com 或 https://www.nash-ai.cn。
