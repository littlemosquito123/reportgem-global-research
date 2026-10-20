# 各客户端接入步骤

通用信息：
- 远程 MCP 地址：`https://www.reportgem.com/mcp`
- 连接类型：Streamable HTTP（不要选 SSE）
- 认证：ReportGem 登录 + OAuth 授权。首次调用会打开浏览器，用 ReportGem 账号（reportgem.com 注册）登录并同意授权；已登录时沿用官网会话。
- 配置保存、授权完成、实际调用成功是三个步骤，以最后一步为准。
- 实测范围以官网 https://www.reportgem.com/mcp.html 为准（核对于 2026-09-23），下面是摘要。

## WorkBuddy（推荐，已对接连接器）
1. 打开 WorkBuddy 客户端 →「连接器」→ 搜索「报告驿站」。
2. 点击添加/连接，按提示打开 ReportGem 授权页，确认账号并同意授权；提示返回客户端时允许打开 WorkBuddy。
3. 回到客户端确认连接成功、工具已启用，新建任务后用自然语言提问。

找不到连接器时：MCP 服务管理 → 配置 MCP，把下面的通用 JSON 合并进现有 `mcpServers`，不要覆盖其他服务。

## Kimi Code CLI
适用于 Kimi Code CLI，不等同于 Kimi 普通聊天网页。
1. 安装并启动 Kimi Code CLI，输入 `/mcp-config`，添加名为 `reportgem` 的服务，选择 HTTP 远程服务，填入 MCP 地址并保存。
2. 输入 `/mcp-config login reportgem`，在浏览器中确认账号并授权。
3. 输入 `/mcp` 检查连接状态，然后在会话中要求"用报告驿站查…"。

也可在 `~/.kimi-code/mcp.json` 的 `mcpServers` 中合并通用 JSON 配置，再执行登录和状态检查。

## Codex
```
codex mcp add reportgem --url https://www.reportgem.com/mcp
codex mcp login reportgem
```
浏览器中确认账号并授权，看到 Authentication complete 后返回；新开会话输入 `/mcp` 确认 `reportgem` 工具可用。`codex mcp list` 只显示配置，不代表已连接。

手动配置：合并到 `~/.codex/config.toml`
```toml
[mcp_servers.reportgem]
url = "https://www.reportgem.com/mcp"
```
保存后执行 `codex mcp login reportgem`。ReportGem Research 插件（Codex 插件市场）审核通过后可直接安装，不需要手动配置。

## Claude
网页 / 桌面端：Customize → Connectors →「+」→ Add custom connector，名称「报告驿站」，地址填 MCP 地址，Add 后点 Connect，在 ReportGem 官网确认授权并返回；在对话的「+」→ Connectors 中启用。团队/企业账号可能需要管理员先在组织设置中添加。

Claude Code：
```
claude mcp add --transport http reportgem https://www.reportgem.com/mcp
```
之后在会话中按提示完成授权（`/mcp` 可查看状态）。

## Cursor、Cline 及其他支持 Streamable HTTP + OAuth 的客户端
在 MCP 设置里添加 HTTP 类型服务，或合并以下 JSON：
```json
{
  "mcpServers": {
    "reportgem": {
      "url": "https://www.reportgem.com/mcp"
    }
  }
}
```
地址只填 `/mcp`，不要填官网页面地址或旧授权链接；保存并启用后按客户端提示完成 OAuth 授权。

## 扣子 / 豆包
按官网 mcp.html 对应页签的说明配置。豆包普通聊天端与扣子是不同产品，豆包聊天端目前不支持自定义 MCP。

## 常见问题
- 授权页打不开：确认客户端允许打开外部浏览器，且地址是 `https://www.reportgem.com/mcp`。
- 工具列表为空：先完成登录授权，再重新打开会话。
- 调用返回"积分不足"：到 https://www.reportgem.com/mcp.html#packages 购买积分；新账号赠送的 10 积分 30 天内有效。
