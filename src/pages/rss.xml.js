import rss from '@astrojs/rss'

const articleList = Object.values(import.meta.glob('./article/**/*.md', { eager: true }))

export const get = () => rss({
  title: 'undefinedtea',
  description: 'a humble developer guide to the world',
  site: import.meta.env.SITE,

  items: articleList.filter((item) => !item.frontmatter.draft).map((article) => ({
    link: article.url,
    title: article.frontmatter.topic,
    pubDate: article.frontmatter.publish
  })),

  customData: '<language>en-us</language>'
})
