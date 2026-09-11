export type Shoot = {
  id: string
  title: string
  cover: string
  images: Array<string>
  tags: string
}

export const shoots: Array<Shoot> = [
  {
    id: 'gq-middle-east-2024',
    title: 'GQ Middle East',
    cover: '/shoots/gq-middle-east-04.jpg',
    images: [
      '/shoots/gq-middle-east-01.jpg',
      '/shoots/gq-middle-east-02.jpg',
      '/shoots/gq-middle-east-03.jpg',
      '/shoots/gq-middle-east-04.jpg',
      '/shoots/gq-middle-east-05.jpg',
    ],
    tags: 'Editorial · Sept 2024',
  },
  {
    id: 'harpers-bazaar-2025',
    title: "Harper's Bazaar",
    cover: '/shoots/harpers-bazaar-01.jpg',
    images: [
      '/shoots/harpers-bazaar-01.jpg',
      '/shoots/harpers-bazaar-02.jpg',
      '/shoots/harpers-bazaar-03.jpg',
      '/shoots/harpers-bazaar-04.jpg',
      '/shoots/harpers-bazaar-05.jpg',
      '/shoots/harpers-bazaar-06.jpg',
      '/shoots/harpers-bazaar-07.jpg',
      '/shoots/harpers-bazaar-08.jpg',
    ],
    tags: 'Editorial · April 2025',
  },
  {
    id: 'vogue-arabia',
    title: 'Vogue Arabia',
    cover: '/vogue-3.jpeg',
    images: [
      '/vogue-3.jpeg',
      '/vogue-1.jpeg',
      '/vogue-2.jpeg',
      '/vogue-4.jpeg',
      '/vogue-5.jpeg',
      '/vogue-6.jpeg',
      '/vogue-7.jpeg',
      '/vogue-8.jpeg',
    ],
    tags: 'Editorial · Sept 2024',
  },
  {
    id: 'digitals-2026',
    title: 'Digitals',
    cover: '/shoots/digital-01.jpg',
    images: [
      '/shoots/digital-01.jpg',
      '/shoots/digital-02.jpg',
      '/shoots/digital-03.jpg',
      '/shoots/digital-04.jpg',
      '/shoots/digital-05.jpg',
      '/shoots/digital-06.jpg',
      '/shoots/digital-07.jpg',
      '/shoots/digital-08.jpg',
      '/shoots/digital-09.jpg',
      '/shoots/digital-10.jpg',
      '/shoots/digital-11.jpg',
      '/shoots/digital-12.jpg',
      '/shoots/digital-13.jpg',
      '/shoots/digital-14.jpg',
      '/shoots/digital-15.jpg',
    ],
    tags: 'Digitals · February 2026',
  },
]
