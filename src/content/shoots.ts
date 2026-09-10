export type Shoot = {
  id: string
  title: string
  cover: string
  images: Array<string>
  tags: string
}

export const shoots: Array<Shoot> = [
  {
    id: 'editorial-01',
    title: 'Desert Light',
    cover: '/hero.jpg',
    images: ['/hero.jpg', '/hero.jpg', '/hero.jpg'],
    tags: 'Editorial · 2024',
  },
  {
    id: 'campaign-02',
    title: 'Monochrome',
    cover: '/hero.jpg',
    images: ['/hero.jpg', '/hero.jpg'],
    tags: 'Campaign · 2024',
  },
  {
    id: 'movement-03',
    title: 'In Motion',
    cover: '/hero.jpg',
    images: ['/hero.jpg', '/hero.jpg', '/hero.jpg', '/hero.jpg'],
    tags: 'Movement · 2023',
  },
  {
    id: 'portrait-04',
    title: 'Still',
    cover: '/hero.jpg',
    images: ['/hero.jpg', '/hero.jpg'],
    tags: 'Portrait · 2023',
  },
]
