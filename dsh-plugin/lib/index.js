/**
 * ReportGem plugin for DeepSeek Harness.
 * Registers ReportGem's hosted MCP server (OAuth) with the shared MCP manager,
 * tells the model how to refer to it, and shows a "Connect ReportGem" account
 * card on the Plugins page. Modeled on the official Linear connector.
 */

export const name = 'reportgem'
export const inject = ['mcpManager', 'systemPrompt']

const SERVER_NAME = 'reportgem'
const CREDENTIAL_KEY = 'mcp-client/reportgem'
const PACKAGE_NAME = 'dsh-plugin-reportgem-global-research'
const DEFAULT_URL = 'https://www.reportgem.com/mcp'
const GUIDANCE = 'Tools named `mcp__reportgem__*` come from the ReportGem plugin: global sell-side research reports, company filings, earnings-call notes and charts.'
  + ' Use them for investment-research questions, cite the returned source URL and page, and verify numbers with get_evidence before stating them.'
  + ' In user-facing replies, call it the ReportGem plugin (ReportGem 插件 in Chinese), not MCP.'
  + ' If no `mcp__reportgem__*` tool appears in your tool list, ReportGem is not connected yet; ask the user to connect it on the ReportGem plugin page in Plugins.'

const LANGS = ['ja', 'es', 'fr', 'de', 'ru', 'pt']
/** Chinese and English text; other shipped languages fall back to English. */
function t(zh, en) {
  const out = { zh, en }
  for (const lang of LANGS) out[lang] = en
  return out
}

const COPY = {
  title: t('ReportGem 全球研报', 'ReportGem Global Research'),
  connect: t('连接 ReportGem', 'Connect ReportGem'),
  activation: {
    title: t('连接 ReportGem 账号', 'Connect your ReportGem account'),
    body: t('ReportGem 插件已开启。连接你的 ReportGem 账号后，就可以在对话中检索全球投行研报。',
      'The ReportGem plugin is on. Connect your ReportGem account to search global investment research in conversations.'),
  },
  detail: {
    disconnected: t('连接 ReportGem 账号后，可以在对话中检索 1,600 万+ 份全球投行研报、公告、业绩会纪要和图表，答案附原文页码。新账号赠送 10 积分。',
      'Connect your ReportGem account to search 16M+ global investment-bank reports, filings, earnings calls and charts, with page-cited answers. New accounts get 10 free credits.'),
    waitingBrowser: t('已打开 ReportGem 授权页面。登录并确认后，回到这里查看结果。',
      'The ReportGem authorization page is open. Sign in and confirm, then come back here to see the result.'),
    authorizing: t('正在与 ReportGem 完成授权。', 'Finishing authorization with ReportGem.'),
    connecting: t('正在连接 ReportGem。', 'Connecting to ReportGem.'),
    connected: t('可以在对话中直接请 Agent 用 ReportGem 查研报。', 'Ask the agent to use ReportGem directly in a conversation.'),
    rejected: t('ReportGem 不再接受当前授权，请重新连接。', 'ReportGem no longer accepts the current authorization. Connect again.'),
    scope: t('当前授权缺少所需权限。重新连接时，请在 ReportGem 中确认权限。',
      'The current authorization lacks required permissions. Confirm them in ReportGem when you connect again.'),
  },
  signOut: {
    title: t('退出 ReportGem 登录？', 'Sign out of ReportGem?'),
    body: t('将删除 DSH 保存的 ReportGem 授权，之后对话中无法使用 ReportGem。',
      'This deletes the ReportGem authorization DSH saved, so conversations can no longer use ReportGem.'),
  },
  notice: {
    connected: t('ReportGem 已连接', 'ReportGem connected'),
    signedOut: t('已退出 ReportGem 登录', 'Signed out of ReportGem'),
  },
}

/** Optional overrides: url and toolLoading ('on-demand' default or 'eager'). */
export function apply(ctx, config = {}) {
  ctx.mcpManager.register(SERVER_NAME, {
    transport: 'streamable-http',
    url: config.url || DEFAULT_URL,
    oauth: { credentialKey: CREDENTIAL_KEY },
    toolLoading: config.toolLoading === 'eager' ? 'eager' : 'on-demand',
  })
  ctx.systemPrompt.section({
    name: SERVER_NAME,
    order: ctx.systemPrompt.getSectionOrder('MCP_SERVERS'),
    text: GUIDANCE,
  })
  ctx.inject(['mcpAccounts'], (scope) => {
    scope.effect(() => scope.mcpAccounts.register({ server: SERVER_NAME, packageName: PACKAGE_NAME, copy: COPY }), 'reportgem: Plugins page account')
  })
}
