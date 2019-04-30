import { Injectable } from '@angular/core';
import { Blog } from './blog-model';


@Injectable({ providedIn: 'root' })
export class BlgoService {
 blog: Blog[];

 bloglist = [
   {
     id: '99798798lhkkjh',
     title: 'Girls Pink T Shirt arrived in store',
     imagePath: 'assets/images/blog/blog-one.jpg',
     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
   },
   {
    id: '2229798798lhkkjh',
    title: 'Girls Pink T Shirt arrived in store',
    imagePath: 'assets/images/blog/blog-two.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: '33798798lhkkjh',
    title: 'Girls Pink T Shirt arrived in store',
    imagePath: 'assets/images/blog/blog-three.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: '44798798lhkkjh',
    title: 'Girls Pink T Shirt arrived in store',
    imagePath: 'assets/images/blog/blog-three.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: '55798798lhkkjh',
    title: 'Girls Pink T Shirt arrived in store',
    imagePath: 'assets/images/blog/blog-two.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: '66798798lhkkjh',
    title: 'Girls Pink T Shirt arrived in store',
    imagePath: 'assets/images/blog/blog-one.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: '77798798lhkkjh',
    title: 'Girls Pink T Shirt arrived in store',
    imagePath: 'assets/images/blog/blog-one.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
 ];

 constructor() {}


 GetBloglist(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(this.bloglist);
    }, 1000);
  });
}





GetBloglistId(BlogId){
 // return this.productList.find(x => x.id === this.productId);
 return new Promise(resolve => {
  setTimeout(() => {
    resolve(this.bloglist.find(x => x.id === BlogId));
  }, 1000);
});
}



}
