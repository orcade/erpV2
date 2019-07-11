
// 1. Define route components.
// These can be imported from other files

// files is loaded from js/components

// 2. Define some routes
const routes = [
  //path folder product
    {path: '/', name: 'produits', component: ProductList},
    {path: '/product/product-list', name: 'product-list', component: ProductList},
    {path: '/product/product-detail/:id', name: 'product-detail', component:ProductDetail},
    {path: '/product/product-add', name: 'product-add', component:ProductAdd},
    {path: '/product/product-edit/:id', name: 'product-edit', component:ProductEdit},
  //path folder producer
    {path: '/', name: 'producteur', component: ProducerList},
    {path: '/producer/producer-list', name: 'producer-list', component: ProducerList},
    {path: '/producer/producer-detail/:id', name: 'producer-detail', component:ProducerDetail},
    {path: '/producer/producer-add', name: 'producer-add', component:ProducerAdd},
    {path: '/producer/producer-edit/:id', name: 'producer-edit', component:ProducerEdit}
];

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
const app = new Vue({
    router
}).$mount('#app');
