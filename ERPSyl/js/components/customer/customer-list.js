
const CustomerList = {
    template:  `
    <div>

    <h1>Liste des clients</h1>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <button class="add">
    <router-link class="add"  to=/customer/customer-add>Ajouter client</router-link>
    </button>
  

    <!-- on vérifie que customers n'est pas vide, et puis on boucle avec v-for sur un tableau d'objet "item" -->

    <ul v-if="customers" id="example-1">
        <li v-for="item in producers">
            <router-link :to="{ name: 'customer-detail', params: { id: item.id_customer }}">{{ item.name }} </router-link>
            
        </li>
    </ul>

  </div>
`,


    data() {
        return {
            loading: true,
            producers:[],
            error: null

        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();

    },

    methods: {

        fetchData() {
            axios.get('http://api.sirius-school.be/product-v2/customer/list').then(response => {
                console.log(response.data);
                this.loading = false;
                this.producers = response.data.customers;
                //console.log("test");
                //alert('axiosGetOk');

            });
        }
    }
};
