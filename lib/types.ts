interface DigtalGardenMetadata {
  title: string
  permalink: string
  created: string
  updated: string
}

interface Post {
  title: string
  content: string | null
  link: string
  created: string
  updated: string
  tags: string
}