export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "文件位置",
  description: "放置一些玩具的位置信息，以防自己忘记",
  mainNav: [],
  links: {
    //twitter: "https://x.com/brlsrf1",
    github: "https://github.com/tszlznl/next-web-nav",
  },
}

export interface NavLink {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点信息 */
  desc?: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [

    {
        title: "一五四零零零",
        items: [
          {
            icon: "https://img.tsmv.top/eDp39n6n5WjIEwfj.png",
            title: "迟迟",
            desc: "Alist 一个支持多种存储的文件列表程序",
            link: "https://alist.154000.xyz",
          },
          {
            icon: "https://gts.154000.xyz/assets/logo.webp",
            title: "GoToSocial",
            desc: "ActivityPub",
            link: "https://gts.154000.xyz",
          },
          {
            icon: "https://tool.lu/favicon.ico",
            title: "在线工具",
            desc: "开发人员的工具箱",
            link: "https://tool.lu",
          },
          {
            icon: "https://processon.com/favicon.ico",
            title: "ProcessOn",
            desc: "免费在线流程图思维导图",
            link: "https://processon.com/",
          },
        ],
      },

    {
        title: "一九九一零七",
        items: [
          {
            icon: "https://img.tsmv.top/eDp39n6n5WjIEwfj.png",
            title: "迟迟",
            desc: "Alist 一个支持多种存储的文件列表程序",
            link: "https://alist.154000.xyz",
          },
          {
            icon: "https://gts.154000.xyz/assets/logo.webp",
            title: "GoToSocial",
            desc: "ActivityPub",
            link: "https://gts.154000.xyz",
          },
          {
            icon: "https://tool.lu/favicon.ico",
            title: "在线工具",
            desc: "开发人员的工具箱",
            link: "https://tool.lu",
          },
          {
            icon: "https://processon.com/favicon.ico",
            title: "ProcessOn",
            desc: "免费在线流程图思维导图",
            link: "https://processon.com/",
          },
        ],
      },

    {
        title: "五二一四一七",
        items: [
          {
            icon: "https://img.tsmv.top/eDp39n6n5WjIEwfj.png",
            title: "迟迟",
            desc: "Alist 一个支持多种存储的文件列表程序",
            link: "https://alist.154000.xyz",
          },
          {
            icon: "https://gts.154000.xyz/assets/logo.webp",
            title: "GoToSocial",
            desc: "ActivityPub",
            link: "https://gts.154000.xyz",
          },
          {
            icon: "https://tool.lu/favicon.ico",
            title: "在线工具",
            desc: "开发人员的工具箱",
            link: "https://tool.lu",
          },
          {
            icon: "https://processon.com/favicon.ico",
            title: "ProcessOn",
            desc: "免费在线流程图思维导图",
            link: "https://processon.com/",
          },
        ],
      },

      {
        title: "四一七零零一",
        items: [
          {
            icon: "https://img.tsmv.top/eDp39n6n5WjIEwfj.png",
            title: "Pintree",
            desc: "书签网站，托管在腾讯云国际站 EdgeOne",
            link: "https://bm.417001.xyz",
          },
          {
            icon: "https://cms.417001.xyz/favicon.ico",
            title: "苏在不在乎",
            desc: "CFblog 普拉斯",
            link: "https://cms.417001.xyz/",
          },
          {
            icon: "https://write.417001.xyz/favicon.svg",
            title: "临时工人",
            desc: "托管在 CloudFlare",
            link: "https://write.417001.xyz/",
          },
          {
            icon: "https://write1.417001.xyz/favicon.svg",
            title: "临时工人",
            desc: "托管在 Vercel",
            link: "https://write1.417001.xyz/",
          },
        ],
      },

      {
        title: "她是魔女",
        items: [
          {
            icon: "https://img.tsmv.top/eDp39n6n5WjIEwfj.png",
            title: "魔女",
            desc: "理想、生活（https://cp.freehostia.com/）",
            link: "https://blog.tsmv.top",
          },
          {
            icon: "https://1991.tsmv.top/favicon.svg",
            title: "一九九零的夏天",
            desc: "托管在 CloudFlare",
            link: "https://1991.tsmv.top",
          },
          {
            icon: "https://page.tsmv.top/favicon.ico",
            title: "Pages CMS",
            desc: "用于静态站点生成器的轻松 CMS",
            link: "https://page.tsmv.top",
          },
          {
            icon: "https://list.tsmv.top/logo.png",
            title: "Glist",
            desc: "基于 Github 的一个简洁的在线文件列表，来自 https://github.com/jianjianai/FList ",
            link: "https://list.tsmv.top/",
          },
          {
            icon: "https://mini.tsmv.top/favicon.ico",
            title: "ReactFlux",
            desc: "Simple RSS reader for Miniflux ",
            link: "https://mini.tsmv.top/",
          },
          {
            icon: "https://emojicdn.elk.sh/%F0%9F%97%84%EF%B8%8F",
            title: "R2 Uploader",
            desc: " Web Interface for Cloudflare R2 ",
            link: "https://r2.tsmv.top/",
          },
          {
            icon: "https://rin.tsmv.top/favicon.ico",
            title: "记得喝水",
            desc: "⚡Dynamic blog based on Cloudflare Pages + Workers + D1 + R2 ",
            link: "https://rin.tsmv.top/",
          },
          {
            icon: "https://tsmv.top/assets/images/logo.png",
            title: "她是魔女",
            desc: "一个静态导航站，感觉不太好用了，遂换新的 ",
            link: "https://tsmv.top/",
          },
        ],
      },

  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com",
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
      },
      {
        icon: "https://processon.com/favicon.ico",
        title: "ProcessOn",
        desc: "免费在线流程图思维导图",
        link: "https://processon.com/",
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn",
      },
      {
        icon: "https://www.terminalgif.com/favicon.ico",
        title: "Terminal Gif Maker",
        desc: "在线生成 Terminal GIF",
        link: "https://www.terminalgif.com",
      },
      {
        icon: "https://astexplorer.net/favicon.png",
        title: "AST Explorer",
        desc: "一个 Web 工具，用于探索由各种解析器生成的 AST 语法树",
        link: "https://astexplorer.net/",
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "各类数据格式与对象转换",
        link: "https://transform.tools",
      },
      {
        icon: "/icons/hoppscotch.png",
        title: "Hoppscotch",
        desc: "开源 API 开发生态系统",
        link: "https://hoppscotch.io/",
      },
      {
        icon: "/icons/apifox.png",
        title: "Apifox",
        desc: "API 文档、API 调试、API Mock、API 自动化测试",
        link: "https://www.apifox.cn/",
      },
    ],
  },

  {
    title: "JavaScript",
    items: [
      {
        icon: "https://svelte.dev/svelte-logo-horizontal.svg",
        title: "Svelte",
        desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
        link: "https://svelte.dev",
      },
      {
        icon: "/icons/jquery.svg",
        title: "jQuery API 中文文档",
        desc: "一个兼容多浏览器的 JavaScript 框架",
        link: "https://jquery.cuishifeng.cn",
      },
      {
        title: "ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        icon: "https://echarts.apache.org/zh/images/favicon.png",
        link: "https://echarts.apache.org/",
      },
      {
        title: "AntV",
        desc: "蚂蚁集团全新一代数据可视化解决方案,让数据栩栩如生",
        icon: "/icons/antv.png",
        link: "https://antv.vision/",
      },
    ],
  },
  {
    title: "CSS",
    items: [
      {
        icon: "https://postcss.org/assets/logo-3e39b0aa.svg",
        title: "PostCSS",
        desc: "一个用 JavaScript 转换 CSS 的工具",
        link: "https://postcss.org",
      },
      {
        icon: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com",
      },
      {
        icon: "https://www.tailwindcss.cn/apple-touch-icon.png",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://www.tailwindcss.cn",
      },
      {
        title: "WindiCSS",
        desc: "Windi CSS 是下一代工具优先的 CSS 框架",
        icon: "https://windicss.org/assets/logo.svg",
        link: "https://windicss.org",
      },
      {
        title: "Twind",
        desc: "现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案",
        icon: "/icons/twind.svg",
        link: "https://github.com/tw-in-js/twind",
      },
      {
        title: "UnoCSS",
        desc: "即时按需原子 CSS 引擎",
        icon: "https://uno.antfu.me//favicon.svg",
        link: "https://uno.antfu.me/",
      },
      {
        title: "Bootstrap",
        desc: "Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站",
        icon: "https://img.kuizuo.cn/20210907055816.png",
        link: "https://v5.bootcss.com/",
      },
      {
        title: "w3schools Css 教程",
        desc: "w3schools 从基础到高级的CSS教程",
        icon: "https://www.w3schools.com/favicon.ico",
        link: "https://www.w3schools.com/css",
      },
      {
        title: "CSS-Inspiration",
        desc: "CSS灵感",
        icon: "/icons/css-inspiration.png",
        link: "https://csscoco.com/inspiration",
      },
      {
        title: "CSS常用样式",
        desc: "CSS常用样式",
        icon: "https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        link: "https://github.com/QiShaoXuan/css_tricks",
      },
      {
        title: "CSSFX",
        desc: "一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持",
        icon: "/icons/cssfx.png",
        link: "https://cssfx.netlify.app/",
      },
      {
        title: "NES.css",
        desc: "一个像素风格的CSS框架",
        icon: "https://nostalgic-css.github.io/NES.css/favicon.png",
        link: "https://nostalgic-css.github.io/NES.css/",
      },
      {
        title: "clay.css",
        desc: "claymorphism 泥陶态风格CSS",
        icon: "https://codeadrian.github.io/clay.css/apple-touch-icon.png",
        link: "https://codeadrian.github.io/clay.css/",
      },
      {
        title: "loading.io",
        desc: "Animation Made Easy",
        icon: "/icons/loading.ico",
        link: "https://loading.io/",
      },
      {
        title: "神奇UI样式",
        desc: "我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。",
        icon: "/icons/uiverse.png",
        link: "https://uiverse.io",
      },
      {
        title: "HYPE4",
        desc: "透明玻璃态生成器",
        icon: "https://hype4.academy/_next/static/media/logorwd@2x.b40bc92c.png",
        link: "https://hype4.academy/tools/glassmorphism-generator",
      },
      {
        title: "Omatsuri",
        desc: "收集不同的发电机，让您的生活更轻松。",
        icon: "https://omatsuri.app/assets/favicon.ico",
        link: "https://omatsuri.app",
      },
      {
        title: "smooth shadow",
        desc: "快速轻松地实现基于 CSS 阴影的绝佳工具。您只需要指定一些阴影设置，代码就在您的路上。",
        icon: "https://shadows.brumm.af/favicon.svg",
        link: "https://shadows.brumm.af/",
      },
      {
        title: "FANCY-BORDER-RADIUS",
        desc: "花式边界半径,有助于创建 CSS 花式边框。",
        icon: "https://9elements.github.io/fancy-border-radius/favicon-32x32.png",
        link: "https://9elements.github.io/fancy-border-radius/",
      },
      {
        title: "Coolors",
        desc: "创建调色板",
        icon: "/icons/coolors.png",
        link: "https://coolors.co/",
      },
    ],
  },
  {
    title: "构建工具",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com",
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev",
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com",
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build",
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn",
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io",
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs",
      },
    ],
  },
  {
    title: "前端文档",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "https://static.runoob.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com",
      },
      {
        icon: "/icons/es6.png",
        title: "ES6 入门教程",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "https://es6.ruanyifeng.com/",
      },
      {
        icon: "/icons/typescript.png",
        title: "深入理解 TypeScript",
        desc: "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法",
        link: "https://jkchao.github.io/typescript-book-chinese/",
      },
      {
        icon: "/icons/rust.svg",
        title: "Rust语言圣经",
        desc: "一份高质量 Rust 教程",
        link: "https://course.rs",
      },
    ],
  },
  {
    title: "UI设计",
    items: [
      {
        title: "Mastergo",
        desc: "面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现",
        icon: "https://mastergo.com/favicon.ico",
        link: "https://mastergo.com/",
      },
      {
        title: "即时设计",
        desc: "可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」",
        icon: "https://img.js.design/assets/webImg/favicon.ico",
        link: "https://js.design/",
      },
      {
        title: "Figma",
        desc: "Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。",
        icon: "/icons/figma.png",
        link: "https://www.figma.com/",
      },
      {
        title: "Pixso",
        desc: "一站式完成原型、设计、交互与交付，为数字化团队协作提效",
        icon: "https://cms.pixso.cn/images/logo.svg",
        link: "https://pixso.cn/",
      },
      {
        title: "AIDesign",
        desc: "10秒创建您的LOGO！",
        icon: "https://ailogo.qq.com//favicon.ico?v=1.1",
        link: "https://ailogo.qq.com/",
      },
    ],
  },
  {
    title: "字体图标",
    items: [
      {
        title: "iconify",
        desc: "数千个图标，一个统一的框架",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/",
      },
      {
        title: "icones",
        desc: "Icon Explorer with Instant searching, powered by Iconify",
        icon: "https://icones.js.org/favicon.svg",
        link: "https://icones.js.org/",
      },
      {
        title: "iconfont",
        desc: "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
        link: "https://www.iconfont.cn/",
      },
      {
        title: "feathericons",
        desc: "简单美丽的开源图标",
        icon: "https://feathericons.com/favicon.ico",
        link: "https://feathericons.com/",
      },
      {
        title: "undraw",
        desc: "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        icon: "https://undraw.co/apple-touch-icon.png",
        link: "https://undraw.co/",
      },
      {
        title: "igoutu",
        desc: "图标、插图、照片、音乐和设计工具",
        icon: "/icons/igoutu.png",
        link: "https://igoutu.cn/",
      },
      {
        title: "Emojiall",
        desc: "Emoji表情大全",
        icon: "https://www.emojiall.com/apple-touch-icon.png",
        link: "https://www.emojiall.com/zh-hans",
      },
      {
        title: "渐变色网站",
        desc: "数百万个自动生成的渐变的网站",
        icon: "https://gradihunt.com/favicon.ico",
        link: "https://gradihunt.com/",
      },
      {
        title: "谷歌字体",
        desc: "一个生成渐变色背景的网站",
        icon: "/icons/google_fonts.ico",
        link: "https://googlefonts.cn/",
      },
      {
        title: "Typing SVG",
        desc: "一个动态生成的可自定义 SVG 打字效果",
        icon: "/icons/typing-svg.png",
        link: "https://readme-typing-svg.herokuapp.com/demo/",
      },
    ],
  },
  {
    title: "站点生成",
    items: [
      {
        title: "VitePress",
        desc: "Vue 驱动并使用Vite构建的静态网站生成器",
        icon: "https://vuepress.vuejs.org/hero.png",
        link: "https://vitepress.vuejs.org",
      },
      {
        title: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        icon: "https://vuepress.vuejs.org/hero.png",
        link: "https://vuepress.vuejs.org",
      },
      {
        title: "Docusaurus",
        desc: "快速构建以内容为核心的最佳网站",
        icon: "/icons/docusaurus.svg",
        link: "https://docusaurus.io",
      },
      {
        title: "Hexo",
        desc: "快速、简洁且高效的博客框架",
        icon: "https://hexo.io/favicon.ico",
        link: "https://hexo.io",
      },
      {
        title: "GitBook",
        desc: "GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作",
        icon: "https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png",
        link: "https://www.gitbook.com/",
      },
      {
        title: "Docsify",
        desc: "docsify 可以快速帮你生成文档网站",
        icon: "https://docsify.js.org/_media/icon.svg",
        link: "https://docsify.js.org",
      },
      {
        title: "WordPress",
        desc: "WordPress是一款能让您建立出色网站、博客或应用程序的开源软件",
        icon: "https://s.w.org/images/wmark.png",
        link: "https://cn.wordpress.org/",
      },
    ],
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com",
      },
      {
        title: "Netlify",
        desc: "Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能",
        icon: "/icons/netlify.png",
        link: "https://www.netlify.com",
      },
      {
        title: "Coolify",
        desc: "一个开源和自我托管的 Heroku/Netlify 替代品",
        icon: "/icons/coolify.png",
        link: "https://coolify.io",
      },
      {
        title: "GitHub Codespace",
        desc: "全球最大的软件项目托管平台，发现优质开源项目",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        link: "https://github.com/codespaces",
      },
      {
        title: "Railway",
        desc: "带上你的代码，剩下交给我们 ",
        icon: "/icons/railway.png",
        link: "https://railway.app/",
      },
      {
        title: "Supabase",
        desc: "Supabase 是一个开源的后端即服务（BaaS）平台，它可以帮助开发者快速构建应用程序，无需编写后端代码。",
        icon: "/icons/supabase.png",
        link: "https://supabase.com/",
      },
    ],
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
      {
        title: "博客园",
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://zhihu.com",
      },
    ],
  },
]
