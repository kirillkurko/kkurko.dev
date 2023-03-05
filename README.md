## 🐧 kkurko.dev

This is my personal website built with the following technologies:
- **Framework**: [Next.js](https://nextjs.org)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://www.prisma.io)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Content**: [MDX](https://mdxjs.com) and [Contentlayer](https://www.contentlayer.dev)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 👀 Overview

- `content/*` - MDX data that is used for blogs.
- `prisma/*` - Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including images for blog posts.
- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `src/lib/*` - Some "API" utilities and `models` layer for getting data from the database.
- `pages/*` - API routes and pages present on the website.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) powering [`/emoji`](https://www.kkurko.dev/emoji), guestbook, blog and auth.
- `pages/blog/*` - Static pre-rendered blog pages using Contenlayer and MDX.
- `styles/*` - A small amount of global styles and styles for hamburger menu on mobile.

## 🚀 Running Locally

```bash
$ git clone https://github.com/kirillkurko/kkurko.dev.git
$ cd kkurko.dev
$ yarn
$ yarn dev
```

In order to make [Guestbook](https://www.kkurko.dev/guestbook), [Emoji](https://www.kkurko.dev/emoji) pages and [Blog](https://www.kkurko.dev/blog) views work you need to set up your own PlantScale database and GitHub auth and create a `.env` file similar to [`.env.example`](https://github.com/kirillkurko/kkurko.dev/blob/dev/.env.example). A detailed guide on doing this is coming soon.

## 🙌 Contributions

I wanted this project to be open-source to share ideas, inspire (as [Lee Robinson](https://github.com/leerob/leerob.io) inspired me) and help others to learn, so all kinds of contributions are welcome and will be highly appreciated. If you want to:

- 🤔 Suggest a feature
- 🐛 Report an issue
- 👨‍💻 Implement the feature or fix some bugs
- 🧑‍🎓 Learn something

You are more than welcome. Before contributing please check the [guidelines](https://github.com/kirillkurko/kkurko.dev/blob/dev/CONTRIBUTING.md).    

## 📤 Cloning / Forking

If you want to fix something feel free to fork it and create a PR. Check Contributions section above to learn more.

If you want to build your personal website based on this repository please review the [license](https://github.com/kirillkurko/kkurko.dev/blob/dev/LICENSE) and remove all of my personal information like blog posts, images, about page content etc.  

