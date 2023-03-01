export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  links: string;
  images: string;
  rating: number;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 256Gb',
    price: 1573.18,
    description: 'A large phone with one of the best screens',
    links: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    category: "Phones",
    likes: 10
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ',
    price: 233,
    description: 'A great phone with one of the best cameras',
    links: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    rating: 4.8,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    category: "Phones",
    likes: 12
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb',
    price: 838,
    description: 'A great phone with best optimization',
    links: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    category: "Phones",
    likes: 9
  },
  {
    id: 4,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    price: 311,
    description: 'Good phone with affordable price',
    links: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    category: "Phones",
    likes: 7
  },
  {
    id: 5,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ',
    price: 287,
    description: 'Phone with one of the best cameras',
    links: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    rating: 4.6,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    category: "Phones",
    likes: 11
  },
  {
    id: 6,
    name: 'Телевизор LG 50UQ76003LD',
    price: 621,
    description: 'Great TV',
    links: 'https://kaspi.kz/shop/p/lg-50uq76003ld-127-sm-chernyi-105054596/?c=750000000#!/item',
    rating: 4.8,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h35/51110128386078/lg-50uq76003ld-chernyi-105054596-1.jpg',
    category: 'TV',
    likes: 14
  },
  {
    id: 7,
    name: 'Телевизор SSMART 43F20',
    price: 380,
    description: 'Good TV',
    links: 'https://kaspi.kz/shop/p/ssmart-43f20-109-sm-chernyi-105159159/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h62/51432017985566/ssmart-43f20-chernyi-105159159-1.jpg',
    category: 'TV',
    likes: 9
  },
  {
    id: 8,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004',
    price: 871,
    description: 'One of the best laptops for its price',
    links: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    category: 'Laptops',
    likes: 5
  },
  {
    id: 9,
    name: 'Ноутбук Apple MacBook Air 13 MGN63',
    price: 1070,
    description: 'Ideal for students, developers',
    links: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    category: 'Laptops',
    likes: 10
  },
  {
    id: 10,
    name: 'Ноутбук Acer Extensa 15 EX215-52 NX.EG8ER.00B',
    price: 670,
    description: 'Great laptop',
    links: 'https://kaspi.kz/shop/p/acer-extensa-15-ex215-52-nx-eg8er-00b-chernyi-105725654/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h56/52615655948318/acer-extensa-15-ex215-52-nx-eg8er-00b-serebristyj-105725654-1.jpg',
    category: 'Laptops',
    likes: 7
  },
  {
    id: 11,
    name: 'Ноутбук HP Europe Pavilion 15S-EQ3068CI 725Z0EA',
    price: 670,
    description: 'Good office laptop',
    links: 'https://kaspi.kz/shop/p/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3d/64208771874846/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147-1.jpg',
    category: 'Laptops',
    likes: 0
  },
  {
    id: 12,
    name: 'Lenovo IdeaPad 3 15ITL6 82H8005GRK',
    price: 300,
    description: 'Good office laptop',
    links: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000',
    rating: 4.2,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h92/he5/66993674059806/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    category: 'Laptops',
    likes: 1
  },
  {
    id: 13,
    name: 'Yasin 40G7 102 см',
    price: 250,
    description: 'Good TV',
    links: 'https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000',
    rating: 4.8,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9c/h5a/49244137521182/yasin-40g7-cernyj-104045834-1.jpg',
    category: 'TV',
    likes: 10
  },
  {
    id: 14,
    name: 'DEXP H32H8000Q',
    price: 145,
    description: 'Best for its price',
    links: 'https://kaspi.kz/shop/p/dexp-h32h8000q-chernyi-108526272/?c=750000000',
    rating: 4.6,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h2e/h0a/68081499242526/dexp-h32h8000q-chernyi-108526272-1.jpg',
    category: 'TV',
    likes: 7
  },
  {
    id: 15,
    name: 'Xiaomi MI TV P1 L43M6-6ARG',
    price: 420,
    description: 'Cool TV',
    links: 'https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-l43m6-6arg-109-sm-chernyi-102743844/?c=750000000',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfd/h83/49320428306462/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg',
    category: 'TV',
    likes: 20
  },
  {
    id: 16,
    name: 'LG F2M5HS6S',
    price: 450,
    description: 'Great washing machine',
    links: 'https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha3/hd3/31588626563102/lg-f2m5hs6s-serebristyj-3601448-1-Container.jpg',
    category: 'Appliances',
    likes:23
  },
  {
    id: 17,
    name: 'Artel Comarella',
    price: 170,
    description: 'Good kitchen stove',
    links: 'https://kaspi.kz/shop/p/artel-comarella-50-00-e-belyi-100335150/?c=750000000#!/item',
    rating: 4.3,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/he4/32667127480350/artel-comarella-50-00-e-belyi-100335150-1.jpg',
    category: 'Appliances',
    likes: 9
  },
  {
    id: 18,
    name: 'CENTEK СТ-1432',
    price: 23,
    description: 'Good toaster',
    links: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000',
    rating: 4.7,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h35/h62/32725892431902/centek-st-1432-cernyj-100295343-1-Container.jpg',
    category: 'Appliances',
    likes: 12
  },
  {
    id: 19,
    name: 'Vitek VT-1584',
    price: 42,
    description: 'Great toaster',
    links: 'https://kaspi.kz/shop/p/vitek-vt-1584-serebristyi-chernyi-11000000/?c=750000000',
    rating: 4.4,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he8/h2c/31584552910878/vitek-vt-1584-cernyj-11000000-1-Container.jpg',
    category: 'Appliances',
    likes: 4
  },
  {
    id: 20,
    name: 'Masima MS-1072',
    price: 15,
    description: 'Good electric kettle',
    links: 'https://kaspi.kz/shop/p/masima-ms-1072-chernyi-102225107/?c=750000000',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h6d/h43/45262793441310/masima-ms-1072-cernyj-102225107-1-Container.jpg',
    category: 'Appliances',
    likes: 13
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/