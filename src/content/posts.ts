export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  tags: Array<string>
  author: string
  /** Markdown, rendered with `marked`. */
  content: string
}

export const posts: Array<Post> = [
  {
    slug: 'getting-started-with-tanstack',
    title: 'Blog Post 3',
    date: '2026-01-15',
    summary: 'Summary of blog post 3.',
    tags: ['Tag 2', 'Tag 4'],
    author: 'Aiesha Savage',
    content: 'Content for blog post 3.',
  },
  {
    slug: 'react-19-features',
    title: 'Blog Post 1',
    date: '2026-02-10',
    summary: 'Summary of blog post 1.',
    tags: ['Tag 1', 'Tag 2'],
    author: 'Aiesha Savage',
    content: 'Content for blog post 1.',
  },
  {
    slug: 'tailwind-css-v4-guide',
    title: 'Blog Post 2',
    date: '2026-02-01',
    summary: 'Summary of blog post 2.',
    tags: ['Tag 1', 'Tag 3'],
    author: 'Aiesha Savage',
    content: 'Content for blog post 2.',
  },
]
