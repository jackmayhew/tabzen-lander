export function setupHead(title) {
  useHead({
    title: title,
    meta: [
      { name: "description", content: "Enhances your viewing experience for guitar, bass, and drum tabs & chords by removing intrusive promotional overlays." },
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // open graph / facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tabzen.app/" },
      { property: "og:title", content: "TabZen" },
      { property: "og:description", content: "Enhances your viewing experience for guitar, bass, and drum tabs & chords by removing intrusive promotional overlays." },
      { property: "og:image", content: "../../public/logo/large.svg" },
      // twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://tabzen.app/" },
      { property: "twitter:title", content: "TabZen" },
      { property: "twitter:description", content: "Enhances your viewing experience for guitar, bass, and drum tabs & chords by removing intrusive promotional overlays." },
      { property: "twitter:image", content: "../../public/logo/large.svg" }
    ],
    link: [
      // favicons
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      { rel: "canonical", href: "https://tabzen.app/" },
      // preloads
      { rel: "preload", href: "/images/hero1.png", as: "image" },
      { rel: "preload", href: "/images/hero2.png", as: "image" },
      { rel: "stylesheet", href: "/font-files/InterVariable-Italic.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap" }
    ],
  });
}