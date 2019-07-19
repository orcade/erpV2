
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
    {path: '/', name: 'producteurs', component: ProducerList},
    {path: '/producer/producer-list', name: 'producer-list', component: ProducerList},
    {path: '/producer/producer-detail/:id', name: 'producer-detail', component:ProducerDetail},
    {path: '/producer/producer-add', name: 'producer-add', component:ProducerAdd},
    {path: '/producer/producer-edit/:id', name: 'producer-edit', component:ProducerEdit},
  //path folder producer
    {path: '/', name: 'clients', component: ProducerList},
    {path: '/customer/customer-list', name: 'customer-list', component: CustomerList},
    {path: '/customer/customer-detail/:id', name: 'customer-detail', component:CustomerDetail},
    {path: '/customer/customer-add', name: 'customer-add', component:CustomerAdd},
    {path: '/customer/customer-edit/:id', name: 'customer-edit', component:CustomerEdit},
    //path folder customer
    {path: '/', name: 'equipes', component: TeamList},
    {path: '/team/team-list', name: 'team-list', component: TeamList},
    {path: '/team/team-detail/:id', name: 'team-detail', component:TeamDetail},
    {path: '/team/team-add', name: 'team-add', component:TeamAdd},
    {path: '/team/team-edit/:id', name: 'team-edit', component:TeamEdit}
];


// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
const app = new Vue({
    router
}).$mount('#app');
