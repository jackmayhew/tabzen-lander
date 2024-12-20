export function setupHead(title) {
  useHead({
    title: "TabZen - Focused Tab Viewing",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: "description", content: "Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs." },
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // open graph / facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TabZen" },
      { property: "og:url", content: "https://tabzen.app/" },
      { property: "og:title", content: "TabZen" },
      { property: "og:description", content: "Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs." },
      { property: "og:image", content: "https://tabzen.app/images/og.png" },
      // twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://tabzen.app/" },
      { property: "twitter:title", content: "TabZen" },
      { property: "twitter:description", content: "Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs." },
      { property: "og:image", content: "https://tabzen.app/images/twitter.png" },
    ],
    link: [
      // favicons
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      { rel: "canonical", href: "https://tabzen.app" },
      // preloads
      { rel: "preload", href: "/images/hero1.png", as: "image" },
      { rel: "preload", href: "/images/hero2.png", as: "image" },
      { rel: "preload", href: "/logo/logo.svg", as: "image" },
      { rel: "stylesheet", href: "/font-files/InterVariable-Italic.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
    ],
  });
}