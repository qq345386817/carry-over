const fs = require("fs");
const path = require("path");

const root = __dirname;
const siteUrl = "https://carryover.luopeike.com";
const appName = "CarryOver";
const appStoreId = "6755507048";
const appStoreUrl = `https://apps.apple.com/app/id${appStoreId}`;
const macDownloadUrl = "https://pub-921ff78698074a30a8b3a65a51a6faa8.r2.dev/carryover/macos/CarryOver.dmg";
const supportEmail = "cameoshell09@gmail.com";
const lastmod = "2026-05-15";
const appIconPath = "../images/app-icon.png";
const appStoreIconPath = "../images/app-store-icon.svg";
const socialImageUrl = `${siteUrl}/images/app-icon.png`;

const languages = [
  {
    code: "en-US",
    hreflang: "en",
    htmlLang: "en",
    label: "English",
    ogLocale: "en_US"
  },
  {
    code: "zh-Hans",
    hreflang: "zh-Hans",
    htmlLang: "zh-Hans",
    label: "简体中文",
    ogLocale: "zh_CN"
  },
  {
    code: "zh-Hant",
    hreflang: "zh-Hant",
    htmlLang: "zh-Hant",
    label: "繁體中文",
    ogLocale: "zh_TW"
  },
  {
    code: "ja",
    hreflang: "ja",
    htmlLang: "ja",
    label: "日本語",
    ogLocale: "ja_JP"
  },
  {
    code: "ko",
    hreflang: "ko",
    htmlLang: "ko",
    label: "한국어",
    ogLocale: "ko_KR"
  },
  {
    code: "de-DE",
    hreflang: "de",
    htmlLang: "de",
    label: "Deutsch",
    ogLocale: "de_DE"
  },
  {
    code: "fr-FR",
    hreflang: "fr",
    htmlLang: "fr",
    label: "Français",
    ogLocale: "fr_FR"
  },
  {
    code: "es-MX",
    hreflang: "es-MX",
    htmlLang: "es-MX",
    label: "Español",
    ogLocale: "es_MX"
  }
];

const languageSelectLabels = {
  "en-US": "Language",
  "zh-Hans": "语言",
  "zh-Hant": "語言",
  ja: "言語",
  ko: "언어",
  "de-DE": "Sprache",
  "fr-FR": "Langue",
  "es-MX": "Idioma"
};

const copy = {
  "en-US": {
    nav: { home: "Home", help: "Help", support: "Support", privacy: "Privacy", appStore: "App Store" },
    home: {
      title: "CarryOver - Capture Now, Action Later",
      description: "CarryOver helps you save links, text, and moments of interest from iPhone, iPad, and Mac, then review them later with iCloud sync across your Apple devices.",
      keywords: "CarryOver, read later app, save links, share extension, iCloud sync, capture ideas, iPhone productivity, Mac productivity",
      eyebrow: "Capture now, action later",
      h1: "Carry ideas from mobile discovery to focused work.",
      lead: "CarryOver is a reliable net for links, text, and ideas you find while browsing. Save them from any app, sync across devices, and return to them when you are ready to think, verify, or act.",
      primary: "View on App Store",
      macDownload: "Download Mac DMG",
      secondary: "Read help",
      sections: [
        {
          title: "Built for quick capture",
          items: [
            ["System Share Sheet", "Save text and links from Safari, Notes, social apps, and other apps that support sharing."],
            ["Smart URL detection", "CarryOver finds URLs inside shared text and keeps the original context with the item."],
            ["iCloud sync", "Saved items sync through CloudKit so your iPhone, iPad, and Mac stay in step."]
          ]
        },
        {
          title: "Move from passive reading to real follow-up",
          items: [
            ["Recent list", "Review new captures in one focused queue instead of leaving them scattered across apps."],
            ["History", "Archive handled items and keep a record of what you have already reviewed."],
            ["Pro upgrade", "Unlock unlimited daily saves when CarryOver becomes part of your daily workflow."]
          ]
        }
      ],
      footer: `Questions or feedback? Contact support at ${supportEmail}.`
    },
    help: {
      title: "CarryOver Help - Save Links, Text, and Ideas Across Apple Devices",
      description: "Learn how to use CarryOver on iPhone, iPad, and Mac, including Share Sheet capture, URL detection, iCloud sync, history, deletion, and sync troubleshooting.",
      keywords: "CarryOver help, save links, read later guide, Share Sheet, iCloud sync, URL detection, Apple devices",
      eyebrow: "Help and support",
      h1: "How to use CarryOver",
      lead: "CarryOver helps you capture links, text, and moments of interest now, then review and act on them later from the device that fits the work.",
      groups: [
        {
          title: "Save content",
          steps: [
            ["Open any app", "Start in Safari, Notes, a social app, or any app that can share text or URLs."],
            ["Select text or a URL", "Choose the content you want to keep for later review."],
            ["Use Share", "Tap the system Share button and choose CarryOver. If CarryOver is not visible, open More and enable it."],
            ["Confirm the save", "The item is added to your recent list and prepared for sync through iCloud."]
          ]
        },
        {
          title: "Manage your list",
          steps: [
            ["Review recent captures", "Open CarryOver to see the latest items you saved."],
            ["Open detected links", "When an item contains a URL, use Open Link to continue in the browser."],
            ["Delete items", "Remove items you no longer need from the list."],
            ["Use history", "Move through handled items from History when you need to check what you already reviewed."]
          ]
        },
        {
          title: "Sync and troubleshooting",
          steps: [
            ["Use the same iCloud account", "Sync works across devices signed in to the same Apple ID with iCloud available."],
            ["Retry failed sync", "If an item shows a sync issue, tap the status icon to retry."],
            ["Check iCloud storage", "If the app reports sync success but another device does not update, iCloud may be out of storage or waiting for background upload."]
          ]
        }
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        ["Why do I not see CarryOver in the Share Sheet?", "Open the More section in the Share Sheet and enable CarryOver. You can also reorder it for faster access."],
        ["Why did sync not appear on another device immediately?", "iCloud sync can be delayed by network status, Low Power Mode, or insufficient iCloud storage. Keep the app installed on both devices and allow the system time to finish background sync."],
        ["Does CarryOver require an account?", "No separate CarryOver account is required. Sync uses Apple's iCloud services when available."]
      ],
      footer: `Need help? Contact ${supportEmail}.`
    },
    privacy: {
      title: "CarryOver Privacy Policy - Local Capture and iCloud Sync",
      description: "CarryOver privacy policy: no CarryOver account required, local storage for saved items, optional iCloud sync through Apple services, no advertising SDKs, and support email only when you contact us.",
      keywords: "CarryOver privacy policy, iCloud sync privacy, local storage, no account, no advertising SDK",
      eyebrow: "CarryOver",
      h1: "Privacy Policy",
      effective: "Effective date: May 15, 2026",
      lead: "CarryOver is designed for private capture and later review. The app does not require a CarryOver account and does not sell personal information.",
      groups: [
        {
          title: "Privacy at a glance",
          items: [
            ["No CarryOver account", "You do not need to register, log in, or create a personal profile to use the app."],
            ["Saved items stay under your control", "Text and links you save are stored on your device and may sync through iCloud when iCloud is enabled."],
            ["No advertising SDKs", "The app does not include third-party advertising SDKs and does not sell personal information."],
            ["Support is email-based", "If you contact support, your email is used only to respond to your request."]
          ]
        },
        {
          title: "Information the app uses",
          items: [
            ["Shared content", "CarryOver stores the text and URLs you choose to save through the app or the system Share Sheet."],
            ["Local storage", "The app uses local storage for saved items, app preferences, history, and sync status."],
            ["iCloud", "When iCloud sync is available, saved items may be synchronized through Apple's CloudKit infrastructure for your devices."],
            ["Purchase status", "The app may check App Store purchase status to unlock Pro features."]
          ]
        },
        {
          title: "Retention, deletion, and changes",
          items: [
            ["Deleting items", "Items you delete in the app are removed from your list and handled according to the system's sync behavior."],
            ["Removing the app", "Removing the app deletes local app data from the device. iCloud data is managed through Apple's iCloud settings and sync behavior."],
            ["Policy updates", "If this policy changes, the updated version will be posted on this page with a revised effective date."]
          ]
        }
      ],
      footer: `For privacy questions, contact ${supportEmail}.`
    }
  },
  "zh-Hans": {
    nav: { home: "首页", help: "帮助", support: "支持", privacy: "隐私", appStore: "App Store" },
    home: {
      title: "CarryOver - 现在捕捉，稍后行动",
      description: "CarryOver 帮助你在 iPhone、iPad 和 Mac 上保存链接、文字和灵感片段，并通过 iCloud 在 Apple 设备间同步，方便稍后回顾和处理。",
      keywords: "CarryOver,稍后读,保存链接,分享扩展,iCloud同步,灵感收集,iPhone效率,Mac效率",
      eyebrow: "现在捕捉，稍后行动",
      h1: "把移动端的灵感顺畅带到专注工作中。",
      lead: "CarryOver 是一个可靠的收集网，用来保存浏览时遇到的链接、文字和想法。你可以从任何 App 快速保存，并在准备好思考、验证或行动时回到它们。",
      primary: "在 App Store 查看",
      macDownload: "下载 Mac DMG",
      secondary: "阅读帮助",
      sections: [
        {
          title: "为快速捕捉而设计",
          items: [
            ["系统分享菜单", "从 Safari、备忘录、社交 App 以及其他支持分享的 App 保存文字和链接。"],
            ["智能链接识别", "CarryOver 会识别分享文本中的 URL，并保留原始上下文。"],
            ["iCloud 同步", "保存的内容通过 CloudKit 同步，让 iPhone、iPad 和 Mac 保持一致。"]
          ]
        },
        {
          title: "从被动浏览过渡到真正跟进",
          items: [
            ["最近列表", "把新捕捉的内容集中在一个队列中回顾，而不是散落在多个 App 里。"],
            ["历史记录", "归档已处理项目，并保留已经回顾过的记录。"],
            ["Pro 升级", "当 CarryOver 成为日常工作流的一部分时，可解锁无限每日保存。"]
          ]
        }
      ],
      footer: `如有问题或反馈，请联系 ${supportEmail}。`
    },
    help: {
      title: "CarryOver 帮助 - 在 Apple 设备间保存链接、文字和想法",
      description: "了解如何在 iPhone、iPad 和 Mac 上使用 CarryOver，包括分享菜单保存、链接识别、iCloud 同步、历史记录、删除和同步问题排查。",
      keywords: "CarryOver帮助,保存链接,稍后读指南,分享菜单,iCloud同步,链接识别,Apple设备",
      eyebrow: "帮助与支持",
      h1: "如何使用 CarryOver",
      lead: "CarryOver 帮助你现在捕捉链接、文字和灵感片段，稍后再从最适合处理工作的设备上回顾和行动。",
      groups: [
        {
          title: "保存内容",
          steps: [
            ["打开任意 App", "可以从 Safari、备忘录、社交 App 或任何支持分享文字和 URL 的 App 开始。"],
            ["选择文字或 URL", "选中你想保留以便稍后回顾的内容。"],
            ["使用分享", "点击系统分享按钮并选择 CarryOver。如果没有看到 CarryOver，打开“更多”并启用它。"],
            ["确认保存", "项目会加入最近列表，并准备通过 iCloud 同步。"]
          ]
        },
        {
          title: "管理列表",
          steps: [
            ["查看最近捕捉", "打开 CarryOver 查看最新保存的项目。"],
            ["打开识别到的链接", "当项目包含 URL 时，使用“打开链接”继续在浏览器中查看。"],
            ["删除项目", "删除不再需要的项目。"],
            ["使用历史记录", "需要查看已处理内容时，可以从历史记录中回看。"]
          ]
        },
        {
          title: "同步与排查",
          steps: [
            ["使用同一个 iCloud 账号", "设备需要登录同一个 Apple ID，并且 iCloud 可用。"],
            ["重试同步失败项目", "如果项目显示同步问题，点击状态图标重试。"],
            ["检查 iCloud 存储", "如果 App 显示同步成功但另一台设备没有更新，可能是 iCloud 空间不足或后台上传尚未完成。"]
          ]
        }
      ],
      faqTitle: "常见问题",
      faq: [
        ["为什么分享菜单里看不到 CarryOver？", "打开分享菜单中的“更多”区域并启用 CarryOver，也可以调整顺序以便更快使用。"],
        ["为什么另一台设备没有马上同步？", "iCloud 同步可能受到网络状态、低电量模式或 iCloud 存储空间不足影响。请保持两台设备都安装 App，并给系统一点时间完成后台同步。"],
        ["CarryOver 需要注册账号吗？", "不需要单独的 CarryOver 账号。可用时，同步使用 Apple 的 iCloud 服务。"]
      ],
      footer: `需要帮助？请联系 ${supportEmail}。`
    },
    privacy: {
      title: "CarryOver 隐私政策 - 本地保存与 iCloud 同步",
      description: "CarryOver 隐私政策：无需 CarryOver 账号，保存内容存储在本地，可通过 Apple 服务进行 iCloud 同步，不含广告 SDK，仅在你主动联系时使用支持邮件。",
      keywords: "CarryOver隐私政策,iCloud同步隐私,本地存储,无需账号,无广告SDK",
      eyebrow: "CarryOver",
      h1: "隐私政策",
      effective: "生效日期：2026 年 5 月 15 日",
      lead: "CarryOver 为私密捕捉和稍后回顾而设计。App 不需要 CarryOver 账号，也不会出售个人信息。",
      groups: [
        {
          title: "隐私概览",
          items: [
            ["无需 CarryOver 账号", "你不需要注册、登录或创建个人资料即可使用 App。"],
            ["保存内容由你掌控", "你保存的文字和链接会存储在设备上；启用 iCloud 时，可能会通过 iCloud 同步。"],
            ["无广告 SDK", "App 不包含第三方广告 SDK，也不会出售个人信息。"],
            ["支持通过邮件处理", "如果你联系支持，你的邮件只会用于回复你的请求。"]
          ]
        },
        {
          title: "App 使用的信息",
          items: [
            ["分享内容", "CarryOver 会存储你通过 App 或系统分享菜单主动保存的文字和 URL。"],
            ["本地存储", "App 使用本地存储保存项目、偏好设置、历史记录和同步状态。"],
            ["iCloud", "当 iCloud 同步可用时，保存的项目可能会通过 Apple 的 CloudKit 基础设施同步到你的设备。"],
            ["购买状态", "App 可能会检查 App Store 购买状态，以解锁 Pro 功能。"]
          ]
        },
        {
          title: "保留、删除与变更",
          items: [
            ["删除项目", "你在 App 中删除项目后，它会从列表中移除，并按照系统同步行为处理。"],
            ["移除 App", "移除 App 会删除该设备上的本地 App 数据。iCloud 数据由 Apple 的 iCloud 设置和同步机制管理。"],
            ["政策更新", "如果本政策发生变化，更新版本会发布在本页面，并修订生效日期。"]
          ]
        }
      ],
      footer: `如有隐私问题，请联系 ${supportEmail}。`
    }
  },
  "zh-Hant": {
    nav: { home: "首頁", help: "幫助", support: "支援", privacy: "隱私", appStore: "App Store" },
    home: {
      title: "CarryOver - 現在捕捉，稍後行動",
      description: "CarryOver 幫助你在 iPhone、iPad 和 Mac 上儲存連結、文字和靈感片段，並透過 iCloud 在 Apple 裝置間同步，方便稍後回顧和處理。",
      keywords: "CarryOver,稍後讀,儲存連結,分享延伸功能,iCloud同步,靈感收集,iPhone效率,Mac效率",
      eyebrow: "現在捕捉，稍後行動",
      h1: "把行動端的靈感順暢帶到專注工作中。",
      lead: "CarryOver 是一個可靠的收集網，用來保存瀏覽時遇到的連結、文字和想法。你可以從任何 App 快速儲存，並在準備好思考、驗證或行動時回到它們。",
      primary: "在 App Store 查看",
      macDownload: "下載 Mac DMG",
      secondary: "閱讀幫助",
      sections: [
        {
          title: "為快速捕捉而設計",
          items: [
            ["系統分享選單", "從 Safari、備忘錄、社群 App 以及其他支援分享的 App 儲存文字和連結。"],
            ["智慧連結識別", "CarryOver 會識別分享文字中的 URL，並保留原始上下文。"],
            ["iCloud 同步", "儲存的內容透過 CloudKit 同步，讓 iPhone、iPad 和 Mac 保持一致。"]
          ]
        },
        {
          title: "從被動瀏覽過渡到真正跟進",
          items: [
            ["最近列表", "把新捕捉的內容集中在一個佇列中回顧，而不是散落在多個 App 裡。"],
            ["歷史紀錄", "封存已處理項目，並保留已經回顧過的紀錄。"],
            ["Pro 升級", "當 CarryOver 成為日常工作流程的一部分時，可解鎖無限每日儲存。"]
          ]
        }
      ],
      footer: `如有問題或回饋，請聯絡 ${supportEmail}。`
    },
    help: {
      title: "CarryOver 幫助 - 在 Apple 裝置間儲存連結、文字和想法",
      description: "了解如何在 iPhone、iPad 和 Mac 上使用 CarryOver，包括分享選單儲存、連結識別、iCloud 同步、歷史紀錄、刪除和同步問題排查。",
      keywords: "CarryOver幫助,儲存連結,稍後讀指南,分享選單,iCloud同步,連結識別,Apple裝置",
      eyebrow: "幫助與支援",
      h1: "如何使用 CarryOver",
      lead: "CarryOver 幫助你現在捕捉連結、文字和靈感片段，稍後再從最適合處理工作的裝置上回顧和行動。",
      groups: [
        {
          title: "儲存內容",
          steps: [
            ["開啟任意 App", "可以從 Safari、備忘錄、社群 App 或任何支援分享文字和 URL 的 App 開始。"],
            ["選擇文字或 URL", "選中你想保留以便稍後回顧的內容。"],
            ["使用分享", "點擊系統分享按鈕並選擇 CarryOver。如果沒有看到 CarryOver，開啟「更多」並啟用它。"],
            ["確認儲存", "項目會加入最近列表，並準備透過 iCloud 同步。"]
          ]
        },
        {
          title: "管理列表",
          steps: [
            ["查看最近捕捉", "開啟 CarryOver 查看最新儲存的項目。"],
            ["開啟識別到的連結", "當項目包含 URL 時，使用「開啟連結」繼續在瀏覽器中查看。"],
            ["刪除項目", "刪除不再需要的項目。"],
            ["使用歷史紀錄", "需要查看已處理內容時，可以從歷史紀錄中回看。"]
          ]
        },
        {
          title: "同步與排查",
          steps: [
            ["使用同一個 iCloud 帳號", "裝置需要登入同一個 Apple ID，並且 iCloud 可用。"],
            ["重試同步失敗項目", "如果項目顯示同步問題，點擊狀態圖示重試。"],
            ["檢查 iCloud 儲存空間", "如果 App 顯示同步成功但另一台裝置沒有更新，可能是 iCloud 空間不足或背景上傳尚未完成。"]
          ]
        }
      ],
      faqTitle: "常見問題",
      faq: [
        ["為什麼分享選單裡看不到 CarryOver？", "開啟分享選單中的「更多」區域並啟用 CarryOver，也可以調整順序以便更快使用。"],
        ["為什麼另一台裝置沒有馬上同步？", "iCloud 同步可能受到網路狀態、低耗電模式或 iCloud 儲存空間不足影響。請保持兩台裝置都安裝 App，並給系統一點時間完成背景同步。"],
        ["CarryOver 需要註冊帳號嗎？", "不需要單獨的 CarryOver 帳號。可用時，同步使用 Apple 的 iCloud 服務。"]
      ],
      footer: `需要幫助？請聯絡 ${supportEmail}。`
    },
    privacy: {
      title: "CarryOver 隱私政策 - 本地儲存與 iCloud 同步",
      description: "CarryOver 隱私政策：無需 CarryOver 帳號，儲存內容存放於本地，可透過 Apple 服務進行 iCloud 同步，不含廣告 SDK，僅在你主動聯絡時使用支援郵件。",
      keywords: "CarryOver隱私政策,iCloud同步隱私,本地儲存,無需帳號,無廣告SDK",
      eyebrow: "CarryOver",
      h1: "隱私政策",
      effective: "生效日期：2026 年 5 月 15 日",
      lead: "CarryOver 為私密捕捉和稍後回顧而設計。App 不需要 CarryOver 帳號，也不會出售個人資訊。",
      groups: [
        {
          title: "隱私概覽",
          items: [
            ["無需 CarryOver 帳號", "你不需要註冊、登入或建立個人資料即可使用 App。"],
            ["儲存內容由你掌控", "你儲存的文字和連結會存放在裝置上；啟用 iCloud 時，可能會透過 iCloud 同步。"],
            ["無廣告 SDK", "App 不包含第三方廣告 SDK，也不會出售個人資訊。"],
            ["支援透過郵件處理", "如果你聯絡支援，你的郵件只會用於回覆你的請求。"]
          ]
        },
        {
          title: "App 使用的資訊",
          items: [
            ["分享內容", "CarryOver 會儲存你透過 App 或系統分享選單主動儲存的文字和 URL。"],
            ["本地儲存", "App 使用本地儲存保存項目、偏好設定、歷史紀錄和同步狀態。"],
            ["iCloud", "當 iCloud 同步可用時，儲存的項目可能會透過 Apple 的 CloudKit 基礎設施同步到你的裝置。"],
            ["購買狀態", "App 可能會檢查 App Store 購買狀態，以解鎖 Pro 功能。"]
          ]
        },
        {
          title: "保留、刪除與變更",
          items: [
            ["刪除項目", "你在 App 中刪除項目後，它會從列表中移除，並按照系統同步行為處理。"],
            ["移除 App", "移除 App 會刪除該裝置上的本地 App 資料。iCloud 資料由 Apple 的 iCloud 設定和同步機制管理。"],
            ["政策更新", "如果本政策發生變化，更新版本會發布在本頁面，並修訂生效日期。"]
          ]
        }
      ],
      footer: `如有隱私問題，請聯絡 ${supportEmail}。`
    }
  }
};

function makeLocalizedCopy(t) {
  return {
    nav: t.nav,
    home: {
      title: t.homeTitle,
      description: t.homeDescription,
      keywords: t.homeKeywords,
      eyebrow: t.eyebrow,
      h1: t.homeH1,
      lead: t.homeLead,
      primary: t.primary,
      macDownload: t.macDownload || "Download Mac DMG",
      secondary: t.secondary,
      sections: [
        {
          title: t.captureTitle,
          items: [
            [t.shareSheetTitle, t.shareSheetText],
            [t.urlTitle, t.urlText],
            [t.syncTitle, t.syncText]
          ]
        },
        {
          title: t.followTitle,
          items: [
            [t.recentTitle, t.recentText],
            [t.historyTitle, t.historyText],
            [t.favoriteTitle, t.favoriteText]
          ]
        }
      ],
      footer: t.feedback
    },
    help: {
      title: t.helpTitle,
      description: t.helpDescription,
      keywords: t.helpKeywords,
      eyebrow: t.helpEyebrow,
      h1: t.helpH1,
      lead: t.helpLead,
      groups: [
        {
          title: t.saveGroup,
          steps: [
            [t.openAppTitle, t.openAppText],
            [t.selectTitle, t.selectText],
            [t.shareTitle, t.shareText],
            [t.confirmTitle, t.confirmText]
          ]
        },
        {
          title: t.manageGroup,
          steps: [
            [t.reviewTitle, t.reviewText],
            [t.openLinkTitle, t.openLinkText],
            [t.deleteTitle, t.deleteText],
            [t.historyHelpTitle, t.historyHelpText]
          ]
        },
        {
          title: t.syncGroup,
          steps: [
            [t.icloudTitle, t.icloudText],
            [t.retryTitle, t.retryText],
            [t.storageTitle, t.storageText]
          ]
        }
      ],
      faqTitle: t.faqTitle,
      faq: t.faq,
      footer: t.helpFooter
    },
    privacy: {
      title: t.privacyTitle,
      description: t.privacyDescription,
      keywords: t.privacyKeywords,
      eyebrow: "CarryOver",
      h1: t.privacyH1,
      effective: t.effective,
      lead: t.privacyLead,
      groups: [
        {
          title: t.privacyGlance,
          items: [
            [t.noAccountTitle, t.noAccountText],
            [t.controlTitle, t.controlText],
            [t.noAdsTitle, t.noAdsText],
            [t.emailTitle, t.emailText]
          ]
        },
        {
          title: t.infoTitle,
          items: [
            [t.sharedContentTitle, t.sharedContentText],
            [t.localTitle, t.localText],
            [t.icloudPrivacyTitle, t.icloudPrivacyText],
            [t.purchaseTitle, t.purchaseText]
          ]
        },
        {
          title: t.retentionTitle,
          items: [
            [t.deletePrivacyTitle, t.deletePrivacyText],
            [t.removeTitle, t.removeText],
            [t.changeTitle, t.changeText]
          ]
        }
      ],
      footer: t.privacyFooter
    }
  };
}

const supportCopy = {
  "en-US": {
    title: "CarryOver Support - Contact Help for iPhone, iPad, and Mac",
    description: "Contact CarryOver support for help with saving links, Share Sheet setup, iCloud sync, Pro purchase status, and cross-device workflows.",
    keywords: "CarryOver support, contact CarryOver, iCloud sync help, Share Sheet support, App Store support",
    eyebrow: "Support",
    h1: "Get help with CarryOver",
    lead: "For sync issues, Share Sheet setup, purchases, or feedback, email support with the device, system version, and a short description of what happened.",
    emailLabel: "Email support",
    sections: [
      ["What to include", "Device model, iOS/iPadOS/macOS version, whether iCloud is enabled, and the item you were trying to save."],
      ["Common topics", "Share Sheet visibility, iCloud sync delays, detected links, history, deletion, and Pro upgrade status."],
      ["Download CarryOver", "Install CarryOver from the App Store on iPhone, iPad, and Mac."]
    ]
  },
  "zh-Hans": {
    title: "CarryOver 支持 - iPhone、iPad 和 Mac 使用帮助",
    description: "联系 CarryOver 支持，获取保存链接、分享菜单设置、iCloud 同步、Pro 购买状态和跨设备工作流相关帮助。",
    keywords: "CarryOver支持,联系CarryOver,iCloud同步帮助,分享菜单支持,App Store支持",
    eyebrow: "支持",
    h1: "获取 CarryOver 帮助",
    lead: "如果遇到同步、分享菜单、购买状态或使用反馈问题，请邮件说明设备、系统版本和遇到的现象。",
    emailLabel: "邮件联系支持",
    sections: [
      ["建议提供的信息", "设备型号、iOS/iPadOS/macOS 版本、是否开启 iCloud，以及你尝试保存的内容类型。"],
      ["常见支持主题", "分享菜单显示、iCloud 同步延迟、链接识别、历史记录、删除项目和 Pro 升级状态。"],
      ["下载 CarryOver", "从 App Store 在 iPhone、iPad 和 Mac 上安装 CarryOver。"]
    ]
  },
  "zh-Hant": {
    title: "CarryOver 支援 - iPhone、iPad 和 Mac 使用幫助",
    description: "聯絡 CarryOver 支援，取得儲存連結、分享選單設定、iCloud 同步、Pro 購買狀態和跨裝置工作流程相關幫助。",
    keywords: "CarryOver支援,聯絡CarryOver,iCloud同步幫助,分享選單支援,App Store支援",
    eyebrow: "支援",
    h1: "取得 CarryOver 幫助",
    lead: "如果遇到同步、分享選單、購買狀態或使用回饋問題，請透過電子郵件說明裝置、系統版本和遇到的現象。",
    emailLabel: "郵件聯絡支援",
    sections: [
      ["建議提供的資訊", "裝置型號、iOS/iPadOS/macOS 版本、是否開啟 iCloud，以及你嘗試儲存的內容類型。"],
      ["常見支援主題", "分享選單顯示、iCloud 同步延遲、連結識別、歷史紀錄、刪除項目和 Pro 升級狀態。"],
      ["下載 CarryOver", "從 App Store 在 iPhone、iPad 和 Mac 上安裝 CarryOver。"]
    ]
  },
  "ja": {
    title: "CarryOver サポート - iPhone、iPad、Mac のヘルプ",
    description: "リンク保存、共有シート設定、iCloud 同期、Pro 購入状態、デバイス間ワークフローについて CarryOver サポートに連絡できます。",
    keywords: "CarryOver サポート,CarryOver 問い合わせ,iCloud 同期ヘルプ,共有シート,App Store サポート",
    eyebrow: "サポート",
    h1: "CarryOver のサポート",
    lead: "同期、共有シート、購入状態、フィードバックについて、デバイス、OS バージョン、起きた内容を添えてメールしてください。",
    emailLabel: "メールで問い合わせ",
    sections: [
      ["含めるとよい情報", "デバイスモデル、iOS/iPadOS/macOS バージョン、iCloud の状態、保存しようとした内容。"],
      ["よくある相談", "共有シートの表示、iCloud 同期の遅延、リンク検出、履歴、削除、Pro アップグレード状態。"],
      ["CarryOver を入手", "App Store から iPhone、iPad、Mac に CarryOver をインストールできます。"]
    ]
  },
  "ko": {
    title: "CarryOver 지원 - iPhone, iPad, Mac 도움말",
    description: "링크 저장, 공유 시트 설정, iCloud 동기화, Pro 구매 상태, 기기 간 워크플로에 대해 CarryOver 지원을 받을 수 있습니다.",
    keywords: "CarryOver 지원,CarryOver 문의,iCloud 동기화 도움말,공유 시트 지원,App Store 지원",
    eyebrow: "지원",
    h1: "CarryOver 지원 받기",
    lead: "동기화, 공유 시트, 구매 상태 또는 피드백이 있으면 기기, 시스템 버전, 발생한 현상을 이메일로 알려 주세요.",
    emailLabel: "지원팀에 이메일",
    sections: [
      ["포함하면 좋은 정보", "기기 모델, iOS/iPadOS/macOS 버전, iCloud 활성화 여부, 저장하려던 콘텐츠 유형."],
      ["일반적인 주제", "공유 시트 표시, iCloud 동기화 지연, 링크 감지, 기록, 삭제, Pro 업그레이드 상태."],
      ["CarryOver 다운로드", "App Store에서 iPhone, iPad, Mac용 CarryOver를 설치하세요."]
    ]
  },
  "de-DE": {
    title: "CarryOver Support - Hilfe für iPhone, iPad und Mac",
    description: "Kontaktiere den CarryOver Support zu Link-Speicherung, Share Sheet, iCloud-Sync, Pro-Kaufstatus und geräteübergreifenden Workflows.",
    keywords: "CarryOver Support,CarryOver Kontakt,iCloud Sync Hilfe,Share Sheet Support,App Store Support",
    eyebrow: "Support",
    h1: "Hilfe zu CarryOver",
    lead: "Bei Sync-Problemen, Share-Sheet-Fragen, Käufen oder Feedback sende bitte Gerät, Systemversion und eine kurze Beschreibung per E-Mail.",
    emailLabel: "Support per E-Mail",
    sections: [
      ["Hilfreiche Angaben", "Gerätemodell, iOS/iPadOS/macOS-Version, iCloud-Status und die Art des Inhalts, den du speichern wolltest."],
      ["Häufige Themen", "Share Sheet, iCloud-Sync-Verzögerungen, Link-Erkennung, Verlauf, Löschung und Pro-Upgrade-Status."],
      ["CarryOver laden", "Installiere CarryOver aus dem App Store auf iPhone, iPad und Mac."]
    ]
  },
  "fr-FR": {
    title: "Support CarryOver - Aide iPhone, iPad et Mac",
    description: "Contactez le support CarryOver pour l'enregistrement de liens, la feuille de partage, la synchronisation iCloud, l'achat Pro et les workflows multi-appareils.",
    keywords: "support CarryOver,contact CarryOver,aide synchronisation iCloud,feuille de partage,App Store",
    eyebrow: "Support",
    h1: "Obtenir de l'aide pour CarryOver",
    lead: "Pour la synchronisation, la feuille de partage, les achats ou vos retours, envoyez un e-mail avec l'appareil, la version système et une courte description.",
    emailLabel: "Contacter le support",
    sections: [
      ["Informations utiles", "Modèle d'appareil, version iOS/iPadOS/macOS, état d'iCloud et type de contenu que vous tentiez d'enregistrer."],
      ["Sujets fréquents", "Feuille de partage, délais de synchronisation iCloud, détection de liens, historique, suppression et statut Pro."],
      ["Télécharger CarryOver", "Installez CarryOver depuis l'App Store sur iPhone, iPad et Mac."]
    ]
  },
  "es-MX": {
    title: "Soporte de CarryOver - Ayuda para iPhone, iPad y Mac",
    description: "Contacta soporte de CarryOver para guardar enlaces, configurar la hoja de compartir, sincronización iCloud, compra Pro y flujos entre dispositivos.",
    keywords: "soporte CarryOver,contactar CarryOver,ayuda iCloud,hoja de compartir,App Store",
    eyebrow: "Soporte",
    h1: "Obtén ayuda con CarryOver",
    lead: "Para sincronización, hoja de compartir, compras o comentarios, envía un correo con el dispositivo, versión del sistema y una breve descripción.",
    emailLabel: "Enviar correo a soporte",
    sections: [
      ["Qué incluir", "Modelo del dispositivo, versión de iOS/iPadOS/macOS, estado de iCloud y tipo de contenido que intentabas guardar."],
      ["Temas comunes", "Hoja de compartir, retrasos de iCloud, detección de enlaces, historial, eliminación y estado de Pro."],
      ["Descargar CarryOver", "Instala CarryOver desde App Store en iPhone, iPad y Mac."]
    ]
  }
};

Object.assign(copy, {
  "ja": makeLocalizedCopy({
    nav: { home: "ホーム", help: "ヘルプ", support: "サポート", privacy: "プライバシー", appStore: "App Store" },
    homeTitle: "CarryOver - 今すぐ保存、あとで行動",
    homeDescription: "CarryOver は iPhone、iPad、Mac で見つけたリンク、テキスト、画像を保存し、iCloud 同期であとから見直せるようにします。",
    homeKeywords: "CarryOver,あとで読む,リンク保存,共有シート,iCloud同期,アイデア保存,iPhone効率化,Mac効率化",
    eyebrow: "今すぐ保存、あとで行動",
    homeH1: "モバイルで見つけたものを、集中できる作業へつなげる。",
    homeLead: "CarryOver は、ブラウズ中に見つけたリンク、テキスト、アイデアを一時的に受け止める場所です。必要なときに保存し、準備ができたらもう一度戻れます。",
    primary: "App Store で見る",
    macDownload: "Mac DMG をダウンロード",
    secondary: "ヘルプを読む",
    captureTitle: "すばやい保存のために",
    shareSheetTitle: "システム共有シート", shareSheetText: "Safari、メモ、SNS など共有に対応した App からリンクやテキストを保存できます。",
    urlTitle: "スマート URL 検出", urlText: "共有テキスト内の URL を見つけ、元の文脈と一緒に保持します。",
    syncTitle: "iCloud 同期", syncText: "保存した項目を CloudKit で同期し、iPhone、iPad、Mac をそろえます。",
    followTitle: "見つけたものを実際のフォローアップへ",
    recentTitle: "最近のリスト", recentText: "新しく保存したものを 1 つの落ち着いたキューで確認できます。",
    historyTitle: "履歴", historyText: "処理済みの項目を記録し、必要なときに振り返れます。",
    favoriteTitle: "お気に入り", favoriteText: "重要なものを目立つ場所に残し、あとで戻りやすくします。",
    feedback: `質問やフィードバックは ${supportEmail} までお送りください。`,
    helpTitle: "CarryOver ヘルプ - Apple デバイス間でリンク、テキスト、アイデアを保存",
    helpDescription: "iPhone、iPad、Mac で CarryOver を使う方法。共有シート、URL 検出、iCloud 同期、履歴、削除、同期のトラブルシューティングを説明します。",
    helpKeywords: "CarryOver ヘルプ,リンク保存,あとで読む,共有シート,iCloud同期,URL検出,Appleデバイス",
    helpEyebrow: "ヘルプとサポート", helpH1: "CarryOver の使い方",
    helpLead: "CarryOver は、リンク、テキスト、気になる瞬間を今保存し、あとで適したデバイスから見直して行動するための App です。",
    saveGroup: "保存する", openAppTitle: "任意の App を開く", openAppText: "Safari、メモ、SNS など、テキストや URL を共有できる App から始めます。",
    selectTitle: "テキストまたは URL を選択", selectText: "あとで見直したい内容を選びます。",
    shareTitle: "共有を使う", shareText: "システムの共有ボタンをタップして CarryOver を選びます。表示されない場合は「その他」から有効にします。",
    confirmTitle: "保存を確認", confirmText: "項目は最近のリストに追加され、iCloud 同期の準備ができます。",
    manageGroup: "リストを管理", reviewTitle: "最近の保存を確認", reviewText: "CarryOver を開いて、最近保存した項目を確認します。",
    openLinkTitle: "検出されたリンクを開く", openLinkText: "URL が含まれる項目は、ブラウザで続きから確認できます。",
    deleteTitle: "項目を削除", deleteText: "不要になった項目はリストから削除できます。",
    historyHelpTitle: "履歴を使う", historyHelpText: "処理済みの内容を確認したいときは履歴から戻れます。",
    syncGroup: "同期とトラブルシューティング", icloudTitle: "同じ iCloud アカウントを使う", icloudText: "同じ Apple ID でサインインし、iCloud が利用できる必要があります。",
    retryTitle: "同期を再試行", retryText: "同期の問題が表示された項目は、ステータスアイコンから再試行できます。",
    storageTitle: "iCloud ストレージを確認", storageText: "同期済みでも別のデバイスに出ない場合、iCloud 容量やバックグラウンドアップロードを確認してください。",
    faqTitle: "よくある質問",
    faq: [["共有シートに CarryOver が表示されないのはなぜですか？", "共有シートの「その他」から CarryOver を有効にし、必要に応じて順序を調整してください。"], ["別のデバイスにすぐ同期されないのはなぜですか？", "ネットワーク、低電力モード、iCloud 容量不足により同期が遅れることがあります。"], ["CarryOver のアカウントは必要ですか？", "いいえ。利用可能な場合は Apple の iCloud サービスで同期します。"]],
    helpFooter: `サポートが必要な場合は ${supportEmail} までご連絡ください。`,
    privacyTitle: "CarryOver プライバシーポリシー - ローカル保存と iCloud 同期",
    privacyDescription: "CarryOver のプライバシーポリシー。アカウント不要、ローカル保存、Apple サービスによる任意の iCloud 同期、広告 SDK なし。",
    privacyKeywords: "CarryOver プライバシーポリシー,iCloud同期,ローカル保存,アカウント不要,広告SDKなし",
    privacyH1: "プライバシーポリシー", effective: "有効日：2026年5月15日",
    privacyLead: "CarryOver はプライベートな保存と後からの確認のために設計されています。CarryOver アカウントは不要で、個人情報を販売しません。",
    privacyGlance: "概要", noAccountTitle: "アカウント不要", noAccountText: "登録、ログイン、プロフィール作成なしで利用できます。",
    controlTitle: "保存内容はあなたの管理下に", controlText: "保存したテキストやリンクはデバイスに保存され、iCloud 有効時に同期される場合があります。",
    noAdsTitle: "広告 SDK なし", noAdsText: "第三者広告 SDK は含まれず、個人情報を販売しません。",
    emailTitle: "メールサポート", emailText: "サポートに連絡した場合、メールは返信のためだけに使われます。",
    infoTitle: "App が使う情報", sharedContentTitle: "共有内容", sharedContentText: "App または共有シートで保存したテキストや URL を保存します。",
    localTitle: "ローカルストレージ", localText: "保存項目、設定、履歴、同期状態をローカルに保存します。",
    icloudPrivacyTitle: "iCloud", icloudPrivacyText: "iCloud 同期が利用可能な場合、Apple の CloudKit を通じて項目が同期されます。",
    purchaseTitle: "購入状態", purchaseText: "Pro 機能を解除するため App Store の購入状態を確認する場合があります。",
    retentionTitle: "保持、削除、変更", deletePrivacyTitle: "項目の削除", deletePrivacyText: "App で削除した項目はリストから削除され、システムの同期動作に従います。",
    removeTitle: "App の削除", removeText: "App を削除すると、そのデバイス上のローカルデータが削除されます。",
    changeTitle: "ポリシーの更新", changeText: "変更がある場合、このページに更新版と改定日を掲載します。",
    privacyFooter: `プライバシーに関する質問は ${supportEmail} まで。`
  }),
  "ko": makeLocalizedCopy({
    nav: { home: "홈", help: "도움말", support: "지원", privacy: "개인정보", appStore: "App Store" },
    homeTitle: "CarryOver - 지금 저장하고 나중에 실행", homeDescription: "CarryOver는 iPhone, iPad, Mac에서 찾은 링크, 텍스트, 이미지를 저장하고 iCloud로 동기화해 나중에 다시 볼 수 있게 합니다.", homeKeywords: "CarryOver,나중에 읽기,링크 저장,공유 시트,iCloud 동기화,아이디어 저장,iPhone 생산성,Mac 생산성",
    eyebrow: "지금 저장하고 나중에 실행", homeH1: "모바일에서 발견한 것을 집중할 작업으로 이어가세요.", homeLead: "CarryOver는 탐색 중 발견한 링크, 텍스트, 아이디어를 안전하게 붙잡아 두는 공간입니다. 지금 저장하고 준비되면 다시 돌아오세요.", primary: "App Store에서 보기", macDownload: "Mac DMG 다운로드", secondary: "도움말 보기",
    captureTitle: "빠른 저장을 위해 설계", shareSheetTitle: "시스템 공유 시트", shareSheetText: "Safari, 메모, 소셜 앱 등 공유를 지원하는 앱에서 텍스트와 링크를 저장하세요.", urlTitle: "스마트 URL 감지", urlText: "공유 텍스트 안의 URL을 감지하고 원래 맥락과 함께 보관합니다.", syncTitle: "iCloud 동기화", syncText: "CloudKit으로 저장 항목을 동기화해 iPhone, iPad, Mac을 맞춰 줍니다.",
    followTitle: "발견에서 실제 후속 작업으로", recentTitle: "최근 목록", recentText: "새로 저장한 항목을 흩어지지 않은 하나의 목록에서 검토하세요.", historyTitle: "기록", historyText: "처리한 항목을 보관하고 다시 확인할 수 있습니다.", favoriteTitle: "즐겨찾기", favoriteText: "중요한 항목은 눈에 잘 띄게 남겨 후속 작업을 이어갑니다.", feedback: `질문이나 피드백은 ${supportEmail}로 보내 주세요.`,
    helpTitle: "CarryOver 도움말 - Apple 기기 간 링크, 텍스트, 아이디어 저장", helpDescription: "iPhone, iPad, Mac에서 CarryOver를 사용하는 방법. 공유 시트, URL 감지, iCloud 동기화, 기록, 삭제, 동기화 문제 해결을 안내합니다.", helpKeywords: "CarryOver 도움말,링크 저장,나중에 읽기,공유 시트,iCloud 동기화,URL 감지,Apple 기기", helpEyebrow: "도움말 및 지원", helpH1: "CarryOver 사용 방법", helpLead: "CarryOver는 링크, 텍스트, 관심 있는 순간을 지금 저장하고 나중에 알맞은 기기에서 검토하고 실행하도록 도와줍니다.",
    saveGroup: "콘텐츠 저장", openAppTitle: "아무 앱이나 열기", openAppText: "Safari, 메모, 소셜 앱처럼 텍스트나 URL을 공유할 수 있는 앱에서 시작하세요.", selectTitle: "텍스트 또는 URL 선택", selectText: "나중에 검토할 내용을 선택합니다.", shareTitle: "공유 사용", shareText: "시스템 공유 버튼을 누르고 CarryOver를 선택하세요. 보이지 않으면 더보기에서 활성화합니다.", confirmTitle: "저장 확인", confirmText: "항목이 최근 목록에 추가되고 iCloud 동기화를 준비합니다.",
    manageGroup: "목록 관리", reviewTitle: "최근 저장 항목 보기", reviewText: "CarryOver를 열어 최근 저장한 항목을 확인하세요.", openLinkTitle: "감지된 링크 열기", openLinkText: "URL이 포함된 항목은 브라우저에서 이어 볼 수 있습니다.", deleteTitle: "항목 삭제", deleteText: "더 이상 필요 없는 항목을 목록에서 삭제하세요.", historyHelpTitle: "기록 사용", historyHelpText: "처리한 내용을 다시 확인할 때 기록에서 찾을 수 있습니다.",
    syncGroup: "동기화와 문제 해결", icloudTitle: "같은 iCloud 계정 사용", icloudText: "같은 Apple ID로 로그인하고 iCloud를 사용할 수 있어야 합니다.", retryTitle: "동기화 다시 시도", retryText: "동기화 문제가 표시되면 상태 아이콘으로 다시 시도하세요.", storageTitle: "iCloud 저장 공간 확인", storageText: "다른 기기에 바로 나타나지 않으면 iCloud 공간이나 백그라운드 업로드 상태를 확인하세요.", faqTitle: "자주 묻는 질문",
    faq: [["공유 시트에 CarryOver가 보이지 않아요.", "공유 시트의 더보기에서 CarryOver를 활성화하고 필요하면 순서를 조정하세요."], ["다른 기기에 바로 동기화되지 않아요.", "네트워크, 저전력 모드, iCloud 저장 공간 부족으로 지연될 수 있습니다."], ["CarryOver 계정이 필요한가요?", "아니요. 가능한 경우 Apple의 iCloud 서비스로 동기화합니다."]],
    helpFooter: `도움이 필요하면 ${supportEmail}로 연락해 주세요.`,
    privacyTitle: "CarryOver 개인정보 처리방침 - 로컬 저장과 iCloud 동기화", privacyDescription: "CarryOver 개인정보 처리방침: 계정 필요 없음, 로컬 저장, Apple 서비스를 통한 선택적 iCloud 동기화, 광고 SDK 없음.", privacyKeywords: "CarryOver 개인정보 처리방침,iCloud 동기화,로컬 저장,계정 없음,광고 SDK 없음", privacyH1: "개인정보 처리방침", effective: "시행일: 2026년 5월 15일", privacyLead: "CarryOver는 개인적인 저장과 나중 검토를 위해 설계되었습니다. CarryOver 계정이 필요 없으며 개인정보를 판매하지 않습니다.",
    privacyGlance: "개인정보 요약", noAccountTitle: "계정 필요 없음", noAccountText: "가입, 로그인, 프로필 없이 사용할 수 있습니다.", controlTitle: "저장 항목은 사용자가 관리", controlText: "저장한 텍스트와 링크는 기기에 저장되며 iCloud가 켜져 있으면 동기화될 수 있습니다.", noAdsTitle: "광고 SDK 없음", noAdsText: "타사 광고 SDK를 포함하지 않으며 개인정보를 판매하지 않습니다.", emailTitle: "이메일 지원", emailText: "지원 요청 이메일은 답변을 위해서만 사용됩니다.",
    infoTitle: "앱이 사용하는 정보", sharedContentTitle: "공유 콘텐츠", sharedContentText: "앱이나 공유 시트로 직접 저장한 텍스트와 URL을 저장합니다.", localTitle: "로컬 저장소", localText: "저장 항목, 설정, 기록, 동기화 상태를 로컬에 저장합니다.", icloudPrivacyTitle: "iCloud", icloudPrivacyText: "iCloud 동기화가 가능하면 Apple CloudKit을 통해 항목이 동기화될 수 있습니다.", purchaseTitle: "구매 상태", purchaseText: "Pro 기능 잠금 해제를 위해 App Store 구매 상태를 확인할 수 있습니다.",
    retentionTitle: "보관, 삭제, 변경", deletePrivacyTitle: "항목 삭제", deletePrivacyText: "앱에서 삭제한 항목은 목록에서 제거되고 시스템 동기화 동작을 따릅니다.", removeTitle: "앱 삭제", removeText: "앱을 삭제하면 해당 기기의 로컬 앱 데이터가 삭제됩니다.", changeTitle: "정책 변경", changeText: "변경 시 이 페이지에 업데이트된 버전과 날짜를 게시합니다.", privacyFooter: `개인정보 관련 문의는 ${supportEmail}로 보내 주세요.`
  }),
  "de-DE": makeLocalizedCopy({
    nav: { home: "Start", help: "Hilfe", support: "Support", privacy: "Datenschutz", appStore: "App Store" },
    homeTitle: "CarryOver - Jetzt sichern, später zurückkehren", homeDescription: "CarryOver speichert Links, Texte und Bilder von iPhone, iPad und Mac, damit du sie später mit iCloud-Sync auf deinen Apple-Geräten prüfen kannst.", homeKeywords: "CarryOver,später lesen,Links sichern,Share Sheet,iCloud Sync,Ideen erfassen,iPhone Produktivität,Mac Produktivität",
    eyebrow: "Jetzt sichern, später handeln", homeH1: "Bring mobile Fundstücke in fokussierte Arbeit.", homeLead: "CarryOver ist ein verlässlicher Ort für Links, Texte und Ideen, die du unterwegs findest. Speichere sie jetzt und kehre zurück, wenn du bereit bist.", primary: "Im App Store ansehen", macDownload: "Mac-DMG laden", secondary: "Hilfe lesen",
    captureTitle: "Für schnelles Erfassen gebaut", shareSheetTitle: "System-Share-Sheet", shareSheetText: "Speichere Text und Links aus Safari, Notizen, sozialen Apps und anderen Apps mit Teilen-Funktion.", urlTitle: "Intelligente URL-Erkennung", urlText: "CarryOver erkennt URLs in geteiltem Text und behält den ursprünglichen Kontext bei.", syncTitle: "iCloud-Sync", syncText: "Gespeicherte Elemente werden über CloudKit zwischen iPhone, iPad und Mac synchronisiert.",
    followTitle: "Vom passiven Lesen zur Nacharbeit", recentTitle: "Aktuelle Liste", recentText: "Neue Funde landen in einer ruhigen Warteschlange statt verstreut in vielen Apps.", historyTitle: "Verlauf", historyText: "Erledigte Elemente bleiben als Verlauf verfügbar.", favoriteTitle: "Favoriten", favoriteText: "Wichtige Hinweise bleiben sichtbar, wenn sie einen zweiten Blick verdienen.", feedback: `Fragen oder Feedback? Schreibe an ${supportEmail}.`,
    helpTitle: "CarryOver Hilfe - Links, Texte und Ideen auf Apple-Geräten sichern", helpDescription: "So nutzt du CarryOver auf iPhone, iPad und Mac: Share Sheet, URL-Erkennung, iCloud-Sync, Verlauf, Löschen und Sync-Fehlerbehebung.", helpKeywords: "CarryOver Hilfe,Links sichern,später lesen,Share Sheet,iCloud Sync,URL Erkennung,Apple Geräte", helpEyebrow: "Hilfe und Support", helpH1: "So nutzt du CarryOver", helpLead: "CarryOver hilft dir, Links, Texte und interessante Momente jetzt zu erfassen und später auf dem passenden Gerät zu bearbeiten.",
    saveGroup: "Inhalte sichern", openAppTitle: "Eine beliebige App öffnen", openAppText: "Starte in Safari, Notizen, einer Social-App oder jeder App, die Text oder URLs teilen kann.", selectTitle: "Text oder URL wählen", selectText: "Wähle den Inhalt aus, den du später prüfen möchtest.", shareTitle: "Teilen verwenden", shareText: "Tippe auf Teilen und wähle CarryOver. Falls es fehlt, aktiviere es unter Mehr.", confirmTitle: "Speichern bestätigen", confirmText: "Das Element erscheint in der aktuellen Liste und wird für iCloud-Sync vorbereitet.",
    manageGroup: "Liste verwalten", reviewTitle: "Aktuelle Funde prüfen", reviewText: "Öffne CarryOver, um die neuesten gesicherten Elemente zu sehen.", openLinkTitle: "Erkannte Links öffnen", openLinkText: "Enthält ein Element eine URL, kannst du im Browser fortfahren.", deleteTitle: "Elemente löschen", deleteText: "Entferne, was du nicht mehr brauchst.", historyHelpTitle: "Verlauf verwenden", historyHelpText: "Bereits bearbeitete Inhalte findest du bei Bedarf im Verlauf.",
    syncGroup: "Sync und Fehlerbehebung", icloudTitle: "Dasselbe iCloud-Konto nutzen", icloudText: "Alle Geräte müssen mit derselben Apple-ID angemeldet sein und iCloud nutzen können.", retryTitle: "Sync erneut versuchen", retryText: "Bei Sync-Problemen kannst du über das Statussymbol erneut versuchen.", storageTitle: "iCloud-Speicher prüfen", storageText: "Wenn ein anderes Gerät nicht aktualisiert wird, prüfe Speicher, Netzwerk und Hintergrund-Upload.", faqTitle: "Häufige Fragen",
    faq: [["Warum sehe ich CarryOver nicht im Share Sheet?", "Aktiviere CarryOver im Bereich Mehr und ordne es bei Bedarf weiter oben ein."], ["Warum erscheint der Sync nicht sofort auf einem anderen Gerät?", "Netzwerk, Stromsparmodus oder voller iCloud-Speicher können Sync verzögern."], ["Braucht CarryOver ein Konto?", "Nein. Sync läuft, wenn verfügbar, über Apples iCloud-Dienste."]],
    helpFooter: `Brauchst du Hilfe? Schreibe an ${supportEmail}.`,
    privacyTitle: "CarryOver Datenschutz - Lokales Erfassen und iCloud-Sync", privacyDescription: "CarryOver Datenschutz: kein Konto erforderlich, lokale Speicherung, optionaler iCloud-Sync über Apple-Dienste, keine Werbe-SDKs.", privacyKeywords: "CarryOver Datenschutz,iCloud Sync Datenschutz,lokale Speicherung,kein Konto,keine Werbung", privacyH1: "Datenschutzerklärung", effective: "Gültig ab: 15. Mai 2026", privacyLead: "CarryOver ist für privates Erfassen und spätere Prüfung gebaut. Es ist kein CarryOver-Konto nötig und personenbezogene Daten werden nicht verkauft.",
    privacyGlance: "Datenschutz auf einen Blick", noAccountTitle: "Kein CarryOver-Konto", noAccountText: "Du musst dich nicht registrieren, anmelden oder ein Profil erstellen.", controlTitle: "Gespeichertes bleibt unter deiner Kontrolle", controlText: "Texte und Links werden auf deinem Gerät gespeichert und können bei aktiviertem iCloud synchronisiert werden.", noAdsTitle: "Keine Werbe-SDKs", noAdsText: "Die App enthält keine Drittanbieter-Werbe-SDKs und verkauft keine personenbezogenen Daten.", emailTitle: "Support per E-Mail", emailText: "Wenn du den Support kontaktierst, nutzen wir deine E-Mail nur zur Antwort.",
    infoTitle: "Informationen, die die App nutzt", sharedContentTitle: "Geteilte Inhalte", sharedContentText: "CarryOver speichert Texte und URLs, die du über die App oder das Share Sheet sicherst.", localTitle: "Lokale Speicherung", localText: "Die App speichert Elemente, Einstellungen, Verlauf und Sync-Status lokal.", icloudPrivacyTitle: "iCloud", icloudPrivacyText: "Bei verfügbarem iCloud-Sync können Elemente über Apples CloudKit synchronisiert werden.", purchaseTitle: "Kaufstatus", purchaseText: "Die App kann den App-Store-Kaufstatus prüfen, um Pro-Funktionen freizuschalten.",
    retentionTitle: "Aufbewahrung, Löschung und Änderungen", deletePrivacyTitle: "Elemente löschen", deletePrivacyText: "Gelöschte Elemente werden aus deiner Liste entfernt und folgen dem System-Sync-Verhalten.", removeTitle: "App entfernen", removeText: "Beim Entfernen der App werden lokale App-Daten auf dem Gerät gelöscht.", changeTitle: "Änderungen", changeText: "Änderungen werden auf dieser Seite mit neuem Datum veröffentlicht.", privacyFooter: `Datenschutzfragen an ${supportEmail}.`
  }),
  "fr-FR": makeLocalizedCopy({
    nav: { home: "Accueil", help: "Aide", support: "Support", privacy: "Confidentialité", appStore: "App Store" },
    homeTitle: "CarryOver - Enregistrez maintenant, revenez plus tard", homeDescription: "CarryOver enregistre les liens, textes et images trouvés sur iPhone, iPad et Mac, puis les synchronise avec iCloud pour les retrouver sur vos appareils Apple.", homeKeywords: "CarryOver,lire plus tard,enregistrer liens,feuille de partage,synchronisation iCloud,capturer idées,productivité iPhone,productivité Mac",
    eyebrow: "Enregistrez maintenant, revenez plus tard", homeH1: "Transformez les découvertes mobiles en travail concentré.", homeLead: "CarryOver est un filet fiable pour les liens, textes et idées trouvés en navigation. Enregistrez-les depuis n'importe quelle app et revenez quand vous êtes prêt à réfléchir, vérifier ou agir.", primary: "Voir sur l'App Store", macDownload: "Télécharger le DMG Mac", secondary: "Lire l'aide",
    captureTitle: "Conçu pour capturer vite", shareSheetTitle: "Feuille de partage système", shareSheetText: "Enregistrez du texte et des liens depuis Safari, Notes, les apps sociales et toute app compatible avec le partage.", urlTitle: "Détection intelligente des URL", urlText: "CarryOver repère les URL dans le texte partagé et conserve le contexte d'origine.", syncTitle: "Synchronisation iCloud", syncText: "Les éléments enregistrés se synchronisent via CloudKit pour garder iPhone, iPad et Mac alignés.",
    followTitle: "Passer de la lecture au suivi réel", recentTitle: "Liste récente", recentText: "Retrouvez les nouvelles captures dans une file claire plutôt que dispersées entre plusieurs apps.", historyTitle: "Historique", historyText: "Archivez les éléments traités et gardez une trace de ce que vous avez déjà vérifié.", favoriteTitle: "Favoris", favoriteText: "Gardez les pistes importantes visibles pour y revenir facilement.", feedback: `Questions ou retours ? Contactez ${supportEmail}.`,
    helpTitle: "Aide CarryOver - Enregistrer liens, textes et idées sur appareils Apple", helpDescription: "Apprenez à utiliser CarryOver sur iPhone, iPad et Mac : feuille de partage, détection d'URL, synchronisation iCloud, historique, suppression et dépannage.", helpKeywords: "Aide CarryOver,enregistrer liens,lire plus tard,feuille de partage,synchronisation iCloud,détection URL,appareils Apple", helpEyebrow: "Aide et support", helpH1: "Comment utiliser CarryOver", helpLead: "CarryOver vous aide à capturer maintenant les liens, textes et moments intéressants, puis à les revoir plus tard depuis l'appareil adapté au travail.",
    saveGroup: "Enregistrer du contenu", openAppTitle: "Ouvrir une app", openAppText: "Commencez dans Safari, Notes, une app sociale ou toute app capable de partager du texte ou des URL.", selectTitle: "Sélectionner texte ou URL", selectText: "Choisissez le contenu à garder pour plus tard.", shareTitle: "Utiliser Partager", shareText: "Touchez le bouton de partage système et choisissez CarryOver. S'il n'apparaît pas, activez-le dans Plus.", confirmTitle: "Confirmer l'enregistrement", confirmText: "L'élément est ajouté à la liste récente et préparé pour la synchronisation iCloud.",
    manageGroup: "Gérer la liste", reviewTitle: "Revoir les captures récentes", reviewText: "Ouvrez CarryOver pour voir les derniers éléments enregistrés.", openLinkTitle: "Ouvrir les liens détectés", openLinkText: "Quand un élément contient une URL, ouvrez-la dans le navigateur.", deleteTitle: "Supprimer des éléments", deleteText: "Retirez de la liste ce dont vous n'avez plus besoin.", historyHelpTitle: "Utiliser l'historique", historyHelpText: "Retrouvez les contenus déjà traités dans l'historique.",
    syncGroup: "Synchronisation et dépannage", icloudTitle: "Utiliser le même compte iCloud", icloudText: "Les appareils doivent utiliser le même identifiant Apple avec iCloud disponible.", retryTitle: "Réessayer la synchronisation", retryText: "Si un élément signale un problème, touchez l'icône d'état pour réessayer.", storageTitle: "Vérifier le stockage iCloud", storageText: "Si un autre appareil ne se met pas à jour, vérifiez le réseau, le stockage iCloud et l'envoi en arrière-plan.", faqTitle: "Questions fréquentes",
    faq: [["Pourquoi CarryOver n'apparaît-il pas dans la feuille de partage ?", "Activez CarryOver dans la section Plus de la feuille de partage et placez-le plus haut si besoin."], ["Pourquoi la synchronisation n'arrive-t-elle pas immédiatement ?", "Le réseau, le mode économie d'énergie ou un stockage iCloud insuffisant peuvent retarder la synchronisation."], ["CarryOver nécessite-t-il un compte ?", "Non. La synchronisation utilise les services iCloud d'Apple lorsqu'ils sont disponibles."]],
    helpFooter: `Besoin d'aide ? Contactez ${supportEmail}.`,
    privacyTitle: "Politique de confidentialité CarryOver - Capture locale et synchronisation iCloud", privacyDescription: "Politique de confidentialité CarryOver : aucun compte requis, stockage local, synchronisation iCloud optionnelle via Apple, aucun SDK publicitaire.", privacyKeywords: "confidentialité CarryOver,synchronisation iCloud,stockage local,aucun compte,aucune publicité", privacyH1: "Politique de confidentialité", effective: "Date d'effet : 15 mai 2026", privacyLead: "CarryOver est conçu pour une capture privée et une consultation ultérieure. Aucun compte CarryOver n'est requis et les informations personnelles ne sont pas vendues.",
    privacyGlance: "Confidentialité en bref", noAccountTitle: "Aucun compte CarryOver", noAccountText: "Vous n'avez pas besoin de vous inscrire, de vous connecter ou de créer un profil.", controlTitle: "Vos éléments restent sous votre contrôle", controlText: "Les textes et liens enregistrés sont stockés sur l'appareil et peuvent se synchroniser via iCloud si activé.", noAdsTitle: "Aucun SDK publicitaire", noAdsText: "L'app n'inclut pas de SDK publicitaire tiers et ne vend pas d'informations personnelles.", emailTitle: "Support par e-mail", emailText: "Si vous contactez le support, votre e-mail sert uniquement à répondre.",
    infoTitle: "Informations utilisées par l'app", sharedContentTitle: "Contenu partagé", sharedContentText: "CarryOver stocke les textes et URL que vous choisissez d'enregistrer depuis l'app ou la feuille de partage.", localTitle: "Stockage local", localText: "L'app stocke localement les éléments, préférences, historique et état de synchronisation.", icloudPrivacyTitle: "iCloud", icloudPrivacyText: "Si iCloud est disponible, les éléments peuvent être synchronisés via CloudKit d'Apple.", purchaseTitle: "Statut d'achat", purchaseText: "L'app peut vérifier le statut d'achat App Store pour débloquer les fonctions Pro.",
    retentionTitle: "Conservation, suppression et changements", deletePrivacyTitle: "Suppression d'éléments", deletePrivacyText: "Les éléments supprimés dans l'app sont retirés de la liste et suivent le comportement de synchronisation du système.", removeTitle: "Suppression de l'app", removeText: "Supprimer l'app efface les données locales de cet appareil.", changeTitle: "Mises à jour", changeText: "Toute modification sera publiée sur cette page avec une date mise à jour.", privacyFooter: `Questions de confidentialité : ${supportEmail}.`
  }),
  "es-MX": makeLocalizedCopy({
    nav: { home: "Inicio", help: "Ayuda", support: "Soporte", privacy: "Privacidad", appStore: "App Store" },
    homeTitle: "CarryOver - Guarda ahora, vuelve después", homeDescription: "CarryOver guarda enlaces, texto e imágenes desde iPhone, iPad y Mac, y los sincroniza con iCloud para revisarlos después en tus dispositivos Apple.", homeKeywords: "CarryOver,leer después,guardar enlaces,hoja compartir,sincronización iCloud,capturar ideas,productividad iPhone,productividad Mac",
    eyebrow: "Guarda ahora, vuelve después", homeH1: "Lleva lo que descubres en móvil a trabajo con foco.", homeLead: "CarryOver es una red confiable para enlaces, texto e ideas que encuentras al navegar. Guarda desde cualquier app y vuelve cuando estés listo para pensar, verificar o actuar.", primary: "Ver en App Store", macDownload: "Descargar DMG para Mac", secondary: "Leer ayuda",
    captureTitle: "Hecho para capturar rápido", shareSheetTitle: "Hoja de compartir del sistema", shareSheetText: "Guarda texto y enlaces desde Safari, Notas, apps sociales y otras apps compatibles con compartir.", urlTitle: "Detección inteligente de URL", urlText: "CarryOver encuentra URL dentro del texto compartido y conserva el contexto original.", syncTitle: "Sincronización iCloud", syncText: "Los elementos guardados se sincronizan con CloudKit para mantener iPhone, iPad y Mac al día.",
    followTitle: "De lectura pasiva a seguimiento real", recentTitle: "Lista reciente", recentText: "Revisa nuevas capturas en una cola clara en lugar de dejarlas dispersas entre apps.", historyTitle: "Historial", historyText: "Archiva elementos tratados y conserva lo que ya revisaste.", favoriteTitle: "Favoritos", favoriteText: "Mantén visibles las pistas importantes para retomarlas después.", feedback: `¿Preguntas o comentarios? Contacta a ${supportEmail}.`,
    helpTitle: "Ayuda de CarryOver - Guarda enlaces, texto e ideas en dispositivos Apple", helpDescription: "Aprende a usar CarryOver en iPhone, iPad y Mac: hoja de compartir, detección de URL, sincronización iCloud, historial, borrado y solución de problemas.", helpKeywords: "Ayuda CarryOver,guardar enlaces,leer después,hoja compartir,sincronización iCloud,detección URL,dispositivos Apple", helpEyebrow: "Ayuda y soporte", helpH1: "Cómo usar CarryOver", helpLead: "CarryOver te ayuda a capturar ahora enlaces, texto y momentos de interés, para revisarlos y actuar después desde el dispositivo adecuado.",
    saveGroup: "Guardar contenido", openAppTitle: "Abre cualquier app", openAppText: "Empieza en Safari, Notas, una app social o cualquier app que pueda compartir texto o URL.", selectTitle: "Selecciona texto o URL", selectText: "Elige el contenido que quieres conservar para revisarlo después.", shareTitle: "Usa Compartir", shareText: "Toca el botón de compartir del sistema y elige CarryOver. Si no aparece, actívalo en Más.", confirmTitle: "Confirma el guardado", confirmText: "El elemento se agrega a la lista reciente y queda listo para sincronizarse con iCloud.",
    manageGroup: "Gestionar la lista", reviewTitle: "Revisa capturas recientes", reviewText: "Abre CarryOver para ver los últimos elementos guardados.", openLinkTitle: "Abre enlaces detectados", openLinkText: "Cuando un elemento contiene una URL, ábrela en el navegador.", deleteTitle: "Borra elementos", deleteText: "Elimina de la lista lo que ya no necesitas.", historyHelpTitle: "Usa el historial", historyHelpText: "Vuelve al historial cuando necesites consultar contenido ya revisado.",
    syncGroup: "Sincronización y solución de problemas", icloudTitle: "Usa la misma cuenta de iCloud", icloudText: "Los dispositivos deben usar el mismo Apple ID y tener iCloud disponible.", retryTitle: "Reintenta la sincronización", retryText: "Si un elemento muestra un problema, toca el icono de estado para reintentar.", storageTitle: "Revisa el almacenamiento de iCloud", storageText: "Si otro dispositivo no se actualiza, revisa red, espacio de iCloud y carga en segundo plano.", faqTitle: "Preguntas frecuentes",
    faq: [["¿Por qué no veo CarryOver en la hoja de compartir?", "Activa CarryOver en la sección Más de la hoja de compartir y ordénalo arriba si lo necesitas."], ["¿Por qué no aparece de inmediato en otro dispositivo?", "La red, el modo de bajo consumo o poco espacio en iCloud pueden retrasar la sincronización."], ["¿CarryOver requiere una cuenta?", "No. La sincronización usa los servicios iCloud de Apple cuando están disponibles."]],
    helpFooter: `¿Necesitas ayuda? Contacta a ${supportEmail}.`,
    privacyTitle: "Política de privacidad de CarryOver - Captura local y sincronización iCloud", privacyDescription: "Política de privacidad de CarryOver: no requiere cuenta, almacenamiento local, sincronización iCloud opcional mediante Apple y sin SDK publicitarios.", privacyKeywords: "privacidad CarryOver,sincronización iCloud,almacenamiento local,sin cuenta,sin publicidad", privacyH1: "Política de privacidad", effective: "Fecha de entrada en vigor: 15 de mayo de 2026", privacyLead: "CarryOver está diseñado para capturar en privado y revisar después. No requiere una cuenta CarryOver y no vende información personal.",
    privacyGlance: "Privacidad de un vistazo", noAccountTitle: "Sin cuenta CarryOver", noAccountText: "No necesitas registrarte, iniciar sesión ni crear un perfil.", controlTitle: "Tus elementos siguen bajo tu control", controlText: "El texto y los enlaces guardados se almacenan en tu dispositivo y pueden sincronizarse con iCloud si está activado.", noAdsTitle: "Sin SDK publicitarios", noAdsText: "La app no incluye SDK publicitarios de terceros ni vende información personal.", emailTitle: "Soporte por correo", emailText: "Si contactas soporte, tu correo solo se usa para responder.",
    infoTitle: "Información que usa la app", sharedContentTitle: "Contenido compartido", sharedContentText: "CarryOver guarda el texto y las URL que eliges guardar desde la app o la hoja de compartir.", localTitle: "Almacenamiento local", localText: "La app guarda localmente elementos, preferencias, historial y estado de sincronización.", icloudPrivacyTitle: "iCloud", icloudPrivacyText: "Cuando iCloud está disponible, los elementos pueden sincronizarse mediante CloudKit de Apple.", purchaseTitle: "Estado de compra", purchaseText: "La app puede verificar compras en App Store para desbloquear funciones Pro.",
    retentionTitle: "Retención, borrado y cambios", deletePrivacyTitle: "Borrar elementos", deletePrivacyText: "Los elementos borrados en la app se eliminan de la lista y siguen el comportamiento de sincronización del sistema.", removeTitle: "Eliminar la app", removeText: "Eliminar la app borra los datos locales de ese dispositivo.", changeTitle: "Actualizaciones", changeText: "Si esta política cambia, la versión actualizada se publicará aquí con una nueva fecha.", privacyFooter: `Preguntas de privacidad: ${supportEmail}.`
  })
});

for (const lang of languages) {
  const fallback = supportCopy["en-US"];
  copy[lang.code].support = supportCopy[lang.code] || {
    ...fallback,
    title: `${appName} Support`,
    description: fallback.description,
    keywords: fallback.keywords,
    eyebrow: copy[lang.code].nav.support || fallback.eyebrow,
    h1: fallback.h1,
    lead: fallback.lead,
    emailLabel: fallback.emailLabel,
    sections: fallback.sections
  };
}

const pages = [
  { key: "home", slug: "", file: "index.html", type: "website", priority: "1.0" },
  { key: "help", slug: "help", file: "help.html", type: "article", priority: "0.8" },
  { key: "support", slug: "support", file: "support.html", type: "article", priority: "0.8" },
  { key: "privacy", slug: "privacy-policy", file: "privacy-policy.html", type: "article", priority: "0.7" }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pagePath(lang, slug) {
  return slug ? `/${lang.code}/${slug}` : `/${lang.code}/`;
}

function pageUrl(lang, slug) {
  return `${siteUrl}${pagePath(lang, slug)}`;
}

function alternateLinks(slug) {
  const links = languages.map((lang) =>
    `  <link rel="alternate" hreflang="${lang.hreflang}" href="${pageUrl(lang, slug)}">`
  );
  links.push(`  <link rel="alternate" hreflang="x-default" href="${pageUrl(languages[0], slug)}">`);
  return links.join("\n");
}

function languageSelect(activeLang, slug) {
  const options = languages.map((lang) => {
    const selected = lang.code === activeLang.code ? " selected" : "";
    return `<option value="../${lang.code}/${slug ? slug : ""}"${selected}>${lang.label}</option>`;
  }).join("");
  const links = languages.map((lang) =>
    `<a href="../${lang.code}/${slug ? slug : ""}">${lang.label}</a>`
  ).join("");
  const aria = languageSelectLabels[activeLang.code] || "Language";
  return `<select class="language-select" aria-label="${aria}" onchange="if (this.value) window.location.href = this.value;">${options}</select><noscript><span class="language-noscript">${links}</span></noscript>`;
}

function header(activeLang, slug, nav) {
  const homeHref = "./";
  const helpHref = slug === "help" ? "./help" : "help";
  const supportHref = slug === "support" ? "./support" : "support";
  const privacyHref = slug === "privacy-policy" ? "./privacy-policy" : "privacy-policy";
  return `<header class="site-header">
      <a class="brand" href="${homeHref}" aria-label="${escapeHtml(appName)} ${escapeHtml(nav.home)}">
        <img class="brand-icon" src="${appIconPath}" alt="">
        <span>${appName}</span>
      </a>
      <div class="header-actions">
        <nav class="nav-links" aria-label="Primary">
          ${slug ? `<a href="./">${escapeHtml(nav.home)}</a>` : ""}
          ${slug === "help" ? "" : `<a href="${helpHref}">${escapeHtml(nav.help)}</a>`}
          ${slug === "support" ? "" : `<a href="${supportHref}">${escapeHtml(nav.support || "Support")}</a>`}
          ${slug === "privacy-policy" ? "" : `<a href="${privacyHref}">${escapeHtml(nav.privacy)}</a>`}
          <a class="nav-store" href="${appStoreUrl}"><img class="store-icon" src="${appStoreIconPath}" alt="">${escapeHtml(nav.appStore)}</a>
        </nav>
        ${languageSelect(activeLang, slug)}
      </div>
    </header>`;
}

function jsonLd(lang, slug, page, pageCopy) {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": appName,
      "url": `${siteUrl}/`,
      "sameAs": [appStoreUrl]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "name": appName,
      "url": `${siteUrl}/`,
      "inLanguage": lang.hreflang,
      "publisher": { "@id": `${siteUrl}/#organization` }
    }
  ];

  if (page.key === "home") {
    graph.push({
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      "name": appName,
      "description": pageCopy.description,
      "url": pageUrl(lang, slug),
      "downloadUrl": appStoreUrl,
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "iOS, iPadOS, macOS",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "publisher": { "@id": `${siteUrl}/#organization` }
    });
  } else if (page.key === "help" || page.key === "support") {
    graph.push({
      "@type": "WebPage",
      "@id": `${pageUrl(lang, slug)}#webpage`,
      "name": pageCopy.title,
      "url": pageUrl(lang, slug),
      "description": pageCopy.description,
      "inLanguage": lang.hreflang,
      "isPartOf": { "@id": `${siteUrl}/#website` },
      "publisher": { "@id": `${siteUrl}/#organization` }
    });
    if (page.key === "help") {
      graph.push({
        "@type": "FAQPage",
        "@id": `${pageUrl(lang, slug)}#faq`,
        "inLanguage": lang.hreflang,
        "mainEntity": pageCopy.faq.map(([question, answer]) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": { "@type": "Answer", "text": answer }
        }))
      });
    }
  } else if (page.key === "privacy") {
    graph.push({
      "@type": "PrivacyPolicy",
      "@id": `${pageUrl(lang, slug)}#privacy-policy`,
      "name": pageCopy.title,
      "description": pageCopy.description,
      "url": pageUrl(lang, slug),
      "inLanguage": lang.hreflang,
      "dateModified": lastmod,
      "isPartOf": { "@id": `${siteUrl}/#website` },
      "publisher": { "@id": `${siteUrl}/#organization` }
    });
  }

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(lang, slug)}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": appName, "item": pageUrl(lang, "") },
      ...(slug ? [{ "@type": "ListItem", "position": 2, "name": pageCopy.h1, "item": pageUrl(lang, slug) }] : [])
    ]
  });

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

function appStoreButton(label, extraClass = "") {
  const className = extraClass ? `button ${extraClass}` : "button";
  return `<a class="${className}" href="${appStoreUrl}"><img class="store-icon" src="${appStoreIconPath}" alt="">${escapeHtml(label)}</a>`;
}

function macDownloadButton(label, extraClass = "secondary") {
  const className = extraClass ? `button ${extraClass}` : "button";
  return `<a class="${className}" href="${macDownloadUrl}" download="CarryOver.dmg">${escapeHtml(label)}</a>`;
}

function head(lang, page, pageCopy) {
  const slug = page.slug;
  const alternateOgLocales = languages
    .filter((item) => item.code !== lang.code)
    .map((item) => `  <meta property="og:locale:alternate" content="${item.ogLocale}">`)
    .join("\n");

  return `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageCopy.title)}</title>
  <meta name="description" content="${escapeHtml(pageCopy.description)}">
  <meta name="keywords" content="${escapeHtml(pageCopy.keywords)}">
  <meta name="author" content="Peike Luo">
  <meta name="application-name" content="${appName}">
  <meta name="apple-mobile-web-app-title" content="${appName}">
  <meta name="apple-itunes-app" content="app-id=${appStoreId}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#f7faff" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#08125d" media="(prefers-color-scheme: dark)">
  <link rel="apple-touch-icon" href="../images/app-icon.png">
  <link rel="icon" type="image/png" href="../images/app-icon.png">
  <link rel="stylesheet" href="../style/base.css">
  <link rel="canonical" href="${pageUrl(lang, slug)}">
${alternateLinks(slug)}
  <meta property="og:title" content="${escapeHtml(pageCopy.title)}">
  <meta property="og:description" content="${escapeHtml(pageCopy.description)}">
  <meta property="og:type" content="${page.type}">
  <meta property="og:url" content="${pageUrl(lang, slug)}">
  <meta property="og:image" content="${socialImageUrl}">
  <meta property="og:site_name" content="${appName}">
  <meta property="og:locale" content="${lang.ogLocale}">
${alternateOgLocales}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageCopy.title)}">
  <meta name="twitter:description" content="${escapeHtml(pageCopy.description)}">
  <meta name="twitter:image" content="${socialImageUrl}">
  <script type="application/ld+json">
${jsonLd(lang, slug, page, pageCopy)}
  </script>
</head>`;
}

function layout(lang, page, body) {
  const pageCopy = copy[lang.code][page.key];
  return `<!DOCTYPE html>
<html lang="${lang.htmlLang}">

${head(lang, page, pageCopy)}

<body>
  <main class="site-shell${page.key === "home" ? " home-shell" : ""}">
    ${header(lang, page.slug, copy[lang.code].nav)}

${body}
  </main>
</body>

</html>
`;
}

function renderHome(lang) {
  const c = copy[lang.code].home;
  const sections = c.sections.map((section) => `<section class="section">
      <h2>${escapeHtml(section.title)}</h2>
      <div class="grid">
        ${section.items.map(([title, text]) => `<article class="feature-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("\n        ")}
      </div>
    </section>`).join("\n\n    ");

  return `<section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(c.eyebrow)}</p>
        <h1>${escapeHtml(c.h1)}</h1>
        <p class="lead">${escapeHtml(c.lead)}</p>
        <div class="cta-row">
          ${appStoreButton(c.primary)}
          ${macDownloadButton(c.macDownload)}
          <a class="button secondary" href="help">${escapeHtml(c.secondary)}</a>
        </div>
      </div>

      <aside class="preview-panel" aria-label="${escapeHtml(appName)}">
        <article class="capture-card">
          <img class="preview-app-icon" src="${appIconPath}" alt="">
          <h2>${appName}</h2>
          <p>${escapeHtml(c.eyebrow)}</p>
          <div class="capture-list">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </article>
      </aside>
    </section>

    ${sections}

    <p class="footer">${escapeHtml(c.footer)}</p>`;
}

function renderHelp(lang) {
  const c = copy[lang.code].help;
  const nav = copy[lang.code].nav;
  const groups = c.groups.map((group) => `<section class="section">
        <h2>${escapeHtml(group.title)}</h2>
        <div class="step-list">
          ${group.steps.map(([title, text]) => `<article class="step"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("\n          ")}
        </div>
      </section>`).join("\n\n      ");

  const faq = c.faq.map(([question, answer]) => `<article class="policy-item"><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></article>`).join("\n          ");

  return `<article class="content-card">
      <p class="eyebrow">${escapeHtml(c.eyebrow)}</p>
      <h1>${escapeHtml(c.h1)}</h1>
      <p class="lead">${escapeHtml(c.lead)}</p>

      ${groups}

      <section class="section" id="faq">
        <h2>${escapeHtml(c.faqTitle)}</h2>
        <div class="policy-list">
          ${faq}
        </div>
      </section>

      <div class="download-strip">
        ${appStoreButton(nav.appStore)}
        ${macDownloadButton(copy[lang.code].home.macDownload)}
      </div>

      <p class="footer">${escapeHtml(c.footer)}</p>
    </article>`;
}

function renderSupport(lang) {
  const c = copy[lang.code].support;
  const nav = copy[lang.code].nav;
  const sections = c.sections.map(([title, text]) =>
    `<article class="policy-item"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`
  ).join("\n          ");

  return `<article class="content-card">
      <p class="eyebrow">${escapeHtml(c.eyebrow)}</p>
      <h1>${escapeHtml(c.h1)}</h1>
      <p class="lead">${escapeHtml(c.lead)}</p>
      <div class="cta-row">
        <a class="button" href="mailto:${supportEmail}">${escapeHtml(c.emailLabel)}</a>
        ${appStoreButton(nav.appStore, "secondary")}
      </div>

      <section class="section">
        <h2>${escapeHtml(nav.support || "Support")}</h2>
        <div class="policy-list">
          ${sections}
        </div>
      </section>
    </article>`;
}

function renderPrivacy(lang) {
  const c = copy[lang.code].privacy;
  const nav = copy[lang.code].nav;
  const groups = c.groups.map((group) => `<section class="section">
        <h2>${escapeHtml(group.title)}</h2>
        <div class="policy-list">
          ${group.items.map(([title, text]) => `<article class="policy-item"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("\n          ")}
        </div>
      </section>`).join("\n\n      ");

  return `<article class="content-card">
      <p class="eyebrow">${escapeHtml(c.eyebrow)}</p>
      <h1>${escapeHtml(c.h1)}</h1>
      <p class="policy-meta">${escapeHtml(c.effective)}</p>
      <p class="lead">${escapeHtml(c.lead)}</p>

      ${groups}

      <div class="download-strip">
        ${appStoreButton(nav.appStore)}
        ${macDownloadButton(copy[lang.code].home.macDownload)}
      </div>

      <p class="footer">${escapeHtml(c.footer)}</p>
    </article>`;
}

function redirectPage(target, title) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0; url=${target}">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="${target}">
  <title>${escapeHtml(title)}</title>
</head>
<body><p><a href="${target}">${escapeHtml(title)}</a></p></body>
</html>
`;
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
}

function writeLocalizedPages() {
  const renderers = { home: renderHome, help: renderHelp, support: renderSupport, privacy: renderPrivacy };
  for (const lang of languages) {
    for (const page of pages) {
      const html = layout(lang, page, renderers[page.key](lang));
      write(path.join(root, lang.code, page.file), html);
    }
  }
}

function writeRedirects() {
  write(path.join(root, "index.html"), redirectPage(`${siteUrl}/en-US/`, appName));
  write(path.join(root, "help.html"), redirectPage(`${siteUrl}/en-US/help`, `${appName} Help`));
  write(path.join(root, "support.html"), redirectPage(`${siteUrl}/en-US/support`, `${appName} Support`));
  write(path.join(root, "privacy-policy.html"), redirectPage(`${siteUrl}/en-US/privacy-policy`, `${appName} Privacy Policy`));

  const lines = [
    "# Cloudflare Pages redirects",
    "/ /en-US/ 301",
    "/index.html /en-US/ 301",
    "/help.html /en-US/help 301",
    "/support.html /en-US/support 301",
    "/privacy-policy.html /en-US/privacy-policy 301"
  ];

  for (const lang of languages) {
    lines.push(`/${lang.code}/index.html /${lang.code}/ 301`);
    lines.push(`/${lang.code}/help.html /${lang.code}/help 301`);
    lines.push(`/${lang.code}/support.html /${lang.code}/support 301`);
    lines.push(`/${lang.code}/privacy-policy.html /${lang.code}/privacy-policy 301`);
  }

  write(path.join(root, "_redirects"), `${lines.join("\n")}\n`);
}

function writeSitemap() {
  const alternates = (slug) => [
    ...languages.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang.hreflang}" href="${pageUrl(lang, slug)}" />`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(languages[0], slug)}" />`
  ].join("\n");

  const urls = [];
  for (const page of pages) {
    for (const lang of languages) {
      urls.push(`  <url>
    <loc>${pageUrl(lang, page.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates(page.slug)}
    <priority>${page.priority}</priority>
  </url>`);
    }
  }

  write(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);
}

function writeRobots() {
  write(path.join(root, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);
}

function writeStyles() {
  write(path.join(root, "style", "base.css"), `:root {
  color-scheme: light dark;
  --bg: #f7faff;
  --surface: #ffffff;
  --surface-muted: #eaf4f8;
  --text: #08125d;
  --muted: #526174;
  --border: rgba(8, 18, 93, 0.14);
  --accent: #0ea5a4;
  --accent-strong: #08125d;
  --mint: #30e3d5;
  --violet: #2c158e;
  --shadow: 0 18px 45px rgba(8, 18, 93, 0.12);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #030833;
    --surface: #0b1554;
    --surface-muted: #121d63;
    --text: #f7fbff;
    --muted: #b4c2d6;
    --border: rgba(255, 255, 255, 0.12);
    --accent: #30e3d5;
    --accent-strong: #b2f3f0;
    --mint: #30e3d5;
    --violet: #6f5cff;
    --shadow: 0 18px 45px rgba(0, 0, 0, 0.34);
  }
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(48, 227, 213, 0.18), transparent 34rem),
    radial-gradient(circle at bottom right, rgba(44, 21, 142, 0.12), transparent 32rem),
    var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
}

.site-shell {
  width: min(1080px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 56px;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 42px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-weight: 750;
  text-decoration: none;
}

.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  box-shadow: 0 8px 22px rgba(8, 18, 93, 0.14);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 0.95rem;
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--text);
}

.language-select {
  min-height: 36px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  padding: 0 10px;
  font: inherit;
}

.language-noscript {
  display: inline-flex;
  gap: 10px;
  flex-wrap: wrap;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.75fr);
  gap: 34px;
  align-items: center;
  min-height: 520px;
}

.hero-copy h1 {
  margin: 0;
  max-width: 780px;
  font-size: clamp(2.5rem, 7vw, 5.8rem);
  line-height: 0.96;
  letter-spacing: 0;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.lead {
  max-width: 760px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 1.12rem;
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent-strong), var(--violet));
  color: white;
  padding: 0 18px;
  font-weight: 700;
  text-decoration: none;
}

.store-icon {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  border-radius: 5px;
}

.button:not(.secondary) {
  box-shadow: 0 12px 28px rgba(8, 18, 93, 0.18);
}

.button.secondary {
  background: var(--surface-muted);
  color: var(--text);
}

.preview-panel {
  min-height: 360px;
  display: grid;
  place-items: center;
}

.capture-card {
  width: min(100%, 360px);
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
  padding: 22px;
}

.preview-app-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  margin-bottom: 22px;
  box-shadow: 0 16px 34px rgba(8, 18, 93, 0.16);
}

.capture-card h2 {
  margin: 0 0 6px;
  font-size: 1.45rem;
}

.capture-card p {
  margin: 0;
  color: var(--muted);
}

.capture-list {
  display: grid;
  gap: 10px;
  margin-top: 24px;
}

.capture-list span {
  display: block;
  height: 38px;
  border-radius: 8px;
  background: var(--surface-muted);
}

.content-card {
  max-width: 860px;
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
  padding: clamp(24px, 5vw, 52px);
}

.content-card h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: 0;
}

.section {
  margin-top: 42px;
}

.section h2 {
  margin: 0 0 16px;
  font-size: clamp(1.35rem, 3vw, 2rem);
  line-height: 1.2;
}

.grid,
.step-list,
.policy-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.step-list,
.policy-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.feature-card,
.step,
.policy-item {
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  padding: 18px;
}

.content-card .feature-card,
.content-card .step,
.content-card .policy-item {
  background: var(--surface-muted);
}

.feature-card h3,
.step h3,
.policy-item h3 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.feature-card p,
.step p,
.policy-item p {
  margin: 0;
  color: var(--muted);
}

.policy-meta {
  color: var(--muted);
  margin: 14px 0 0;
}

.footer {
  margin: 42px 0 0;
  color: var(--muted);
  text-align: center;
}

.download-strip {
  display: flex;
  justify-content: center;
  margin-top: 34px;
}

@media (max-width: 800px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .header-actions {
    justify-content: flex-start;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .preview-panel {
    min-height: auto;
    place-items: stretch;
  }

  .grid,
  .step-list,
  .policy-list {
    grid-template-columns: 1fr;
  }
}
`);
}

writeLocalizedPages();
writeRedirects();
writeSitemap();
writeRobots();
writeStyles();
