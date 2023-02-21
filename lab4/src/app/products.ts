export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  links: string;
  images: string;

  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max 256Gb',
    price: 1573.18,
    description: 'A large phone with one of the best screens',
    links: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg'
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ',
    price: 233,
    description: 'A great phone with one of the best cameras',
    links: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    rating: 4.8,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg'
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb',
    price: 838,
    description: 'A great phone with best optimization',
    links: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg'
  },
  {
    id: 4,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    price: 311,
    description: '',
    links: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg'
  },
  {
    id: 5,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ',
    price: 287,
    description: '',
    links: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    rating: 4.6,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'
  },
  {
    id: 6,
    name: 'Телевизор LG 50UQ76003LD',
    price: 621,
    description: '',
    links: 'https://kaspi.kz/shop/p/lg-50uq76003ld-127-sm-chernyi-105054596/?c=750000000#!/item',
    rating: 4.8,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h35/51110128386078/lg-50uq76003ld-chernyi-105054596-1.jpg'
  },
  {
    id: 7,
    name: 'Телевизор SSMART 43F20',
    price: 380,
    description: '',
    links: 'https://kaspi.kz/shop/p/ssmart-43f20-109-sm-chernyi-105159159/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h62/51432017985566/ssmart-43f20-chernyi-105159159-1.jpg'
  },
  {
    id: 8,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004',
    price: 871,
    description: '',
    links: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg'
  },
  {
    id: 9,
    name: 'Ноутбук Apple MacBook Air 13 MGN63',
    price: 1070,
    description: '',
    links: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    rating: 4.9,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    id: 10,
    name: 'Ноутбук Acer Extensa 15 EX215-52 NX.EG8ER.00B',
    price: 670,
    description: '',
    links: 'https://kaspi.kz/shop/p/acer-extensa-15-ex215-52-nx-eg8er-00b-chernyi-105725654/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h56/52615655948318/acer-extensa-15-ex215-52-nx-eg8er-00b-serebristyj-105725654-1.jpg'
  },
  {
    id: 11,
    name: 'Ноутбук HP Europe Pavilion 15S-EQ3068CI 725Z0EA',
    price: 670,
    description: '',
    links: 'https://kaspi.kz/shop/p/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147/?c=750000000#!/item',
    rating: 4.5,
    images: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3d/64208771874846/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147-1.jpg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/