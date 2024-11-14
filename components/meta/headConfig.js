// export function setupHead(title) {
//   useHead({
//     title: title,
//     htmlAttrs: {
//       lang: 'en',
//     },
//     meta: [
//       { name: "description", content: "Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs." },
//       { charset: "UTF-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1.0" },
//       // open graph / facebook
//       { property: "og:type", content: "website" },
//       { property: "og:site_name", content: "TabZen" },
//       { property: "og:url", content: "https://tabzen.app/" },
//       { property: "og:title", content: "TabZen" },
//       { property: "og:description", content: "Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs." },
//       { property: "og:image", content: "https://tabzen.app/logo/logo.svg" },
//       // twitter
//       { property: "twitter:card", content: "summary_large_image" },
//       { property: "twitter:url", content: "https://tabzen.app/" },
//       { property: "twitter:title", content: "TabZen" },
//       { property: "twitter:description", content: "Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs." },
//       { property: "twitter:image", content: "https://tabzen.app/logo/logo.svg" }
//     ],
//     link: [
//       // favicons
//       { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
//       { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
//       { rel: "shortcut icon", href: "/favicon/favicon.ico" },
//       { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
//       { rel: "manifest", href: "/favicon/site.webmanifest" },
//       { rel: "canonical", href: "https://tabzen.app/" },
//       // preloads
//       { rel: "preload", href: "/images/hero1.png", as: "image" },
//       { rel: "preload", href: "/images/hero2.png", as: "image" },
//       { rel: "preload", href: "/logo/logo.svg", as: "image" },
//       { rel: "stylesheet", href: "/font-files/InterVariable-Italic.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
//       // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap" }
//     ],
//   });
// }

export function setupHead(title) {
  useHead({
    title: title,
    htmlAttrs: {
      lang: 'en'
    },
    // script: [
    //   {
    //     src: "js/SplitText.js",
    //     tagPosition: 'bodyClose',
    //     defer: true
    //   },
    // ],
    meta: [
      { name: "description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop." },
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // open graph / facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jack Mayhew" },
      { property: "og:url", content: "https://jackmayhew.com" },
      { property: "og:title", content: "Jack Mayhew" },
      { property: "og:description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop." },
      { property: "og:image", content: "https://jackmayhew.com/img/og.png" },
      // twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://jackmayhew.com" },
      { property: "twitter:title", content: "Jack Mayhew" },
      { property: "twitter:description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop." },
      { property: "twitter:image", content: "https://jackmayhew.com/img/twitter.png" }
    ],
    link: [
      // favicons
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      { rel: "canonical", href: "https://jackmayhew.com" },
      // preloads
      { rel: "preload", href: "/img/hero.webp", as: "image" },
      { rel: "preload", href: "/fonts/StabilGrotesk-Regular.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      { rel: "preload", href: "/fonts/StabilGrotesk-Medium.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&display=swap" }
    ],
  });
}