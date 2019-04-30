import { Injectable } from '@angular/core';
import { Category } from './category.model';


@Injectable({ providedIn: 'root' })
export class CategoryService {
  category: Category[];

  CategoryList = [
  {
    id: '1hlkjhlkjhlkjhlkjhlkj',
    name: 'Sportswear',
    links: [
    {
      id: 'hgkjhg',
      name: 'Nike'
    },
    {
      id: 'hgkjhg',
      name: 'Under Armour'
    },
    {
      id: 'hgkjhg',
      name: 'Adidas'
    },
    {
      id: 'hgkjhg',
      name: 'Puma'
    },
    {
      id: 'hgkjhg',
      name: 'ASICS'
    }
  ]
  },
  {
  id: 'sdfghgfdfghj',
  name: 'Womens',
  links: [
  {
    id: 'hgkjhg',
    name: 'Fendi'
  },
  {
    id: 'hgkjhg',
    name: 'Guess'
  },
  {
    id: 'hgkjhg',
    name: 'Valentino'
  },
  {
    id: 'hgkjhg',
    name: 'Dior'
  },
  {
    id: 'hgkjhg',
    name: 'Versace'
  }
]
},
{
  id: 'dfghjk',
  name: 'Kids',
  links: []
},
{
  id: 'fghj',
  name: 'Bags',
  links: []
},
{
  id: 'dfghjk',
  name: 'Shoes',
  links: []
}
];

//   id: string;
//   price: string;
//   links: Array<{string}>;

  constructor() {}

  getCatList(){
    // return this.featuresItemsList;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.CategoryList);
      }, 1000);
    });
  }



}
