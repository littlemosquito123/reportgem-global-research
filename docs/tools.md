# MCP 工具说明

连接后客户端会自动发现以下工具。参数以服务端实际定义为准（核对于 2026-10-19）。所有检索工具每次最多返回 20 条，取证工具每次最多 6 段；返回量超过 200,000 Token 或可用积分时会明确提示。

## search_research — 检索研报与论文
| 参数 | 说明 | 默认 |
| --- | --- | --- |
| query | 公司、代码、行业、主题或关键词（2–500 字） | 必填 |
| sources | 来源组：`global_research`（全球投行研报）、`realtime_research`（实时外文）、`chinese_research`（中文券商）、`academic_papers`（论文） | 全部 |
| date_from / date_to | 日期范围 | 不限 |
| limit | 条数，1–20 | 10 |

返回：标题、机构、日期、来源类型与 ID、页数等元数据；正文已索引且命中时附实际摘录。只对返回的摘录文字计费。

## search_filings — 检索公告
| 参数 | 说明 | 默认 |
| --- | --- | --- |
| query | 公司、代码或公告关键词 | 必填 |
| market | `us`（SEC）、`china`（沪深北公告）、`all` | all |
| form_type | SEC 表格类型：10-K、10-Q、8-K、6-K、20-F 或 all | all |
| date_from / date_to | 日期范围 | 不限 |
| limit | 1–20 | 10 |

返回：公告元数据与可核验的内部来源链接。

## search_meetings — 检索会议纪要
| 参数 | 说明 | 默认 |
| --- | --- | --- |
| query | 公司、代码、机构、行业或会议关键词 | 必填 |
| region | `global`、`china`、`all` | all |
| output_language | `en` / `zh` | en |
| date_from / date_to | 日期范围 | 不限 |
| limit | 1–20 | 10 |

返回：业绩会、路演、调研纪要；区分正文证据与仅标题命中。

## search_visuals — 检索图表与表格
| 参数 | 说明 | 默认 |
| --- | --- | --- |
| query | 用自然语言描述想找的图、表、示意图 | 必填 |
| visual_type | `all`、`chart`、`table`、`industry_diagram`、`product_image`、`map`、`screenshot` | all |
| date_from / date_to | 日期范围 | 不限 |
| limit | 1–20 | 12 |

返回：图表所在研报、页码与图题。

## get_evidence — 读取原文段落
| 参数 | 说明 | 默认 |
| --- | --- | --- |
| source_type | 检索结果里给出的来源类型，原样传回（研报、公告、会议纪要、论文各有对应取值） | 必填 |
| source_id | 检索结果给出的来源 ID | 必填 |
| query | 要核对的事实或数字（相关模式必填，连续阅读可留空） | 空 |
| max_passages | 每次返回段数，1–6 | 4 |
| reading_mode | `relevant`（按 query 找相关段落）或 `sequential`（按页顺序连续阅读） | relevant |
| start_page | 连续阅读的起始页 | 文档开头 |
| cursor | 上一次连续阅读返回的 `next_cursor`，原样传回 | 空 |

两种用法：
- 核对一个数字或引文：`reading_mode="relevant"`，把要核对的内容放在 query。
- 通读或总结整份文档：`reading_mode="sequential"`，返回 `has_more=true` 时把 `next_cursor` 传回继续读。每次最多 6 段（约 18,000 字符）。

返回的是真实摘录，带页码；没有匹配时不会把无关内容当证据。连续阅读同样受账号权限、积分和审计控制，不是原始 PDF 导出。

## 计费口径
- 计费：正文摘录、图题、表格文字与摘要；同次返回的重复文字只算一次。
- 不计费：标题、问题、URL、协议字段、内部检索、客户端生成的回答，以及失败、超时和无资料结果。
- 1 积分 = 10,000 返回资料 Token（tiktoken cl100k_base），按实际用量扣，优先扣赠送积分。
- 完整说明：https://www.reportgem.com/mcp.html#packages
