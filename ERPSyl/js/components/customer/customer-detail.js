const CustomerDetail = {
    template: `
<div>

<h1>Liste des Clients  {{$route.params.ip_code}}</h1>



<div v-if="loading" class="loading">
  Loading...
</div>

<div v-if="error" class="error">
  {{ error }}
</div>

<p v-if="item">
    Id Client: {{ item.id_customer }} <br />
    Firstname: {{ item.firstname}} <br />
    Name: {{ item.name}} <br />
    adress: {{ item.adress}} <br />
    city: {{ item.city}} <br />
    zip_code: {{ item.zip_code}} <br />
    country: {{ item.country}} <br />
</p>


        <router-link :to="{ name: 'customer-detail', params: { id: item.id_customer }}"></router-link>


        <button class="edit">
        <router-link class="edit":to="{ name: 'customer-edit', params: { id: item.id_customer }}"> Modifier</router-link>
        </button>

        <button class="delete" v-on:click="deleteCustomer">supprimer</button>

        <button class="return">
        <router-link class="return" to="/customer/customer-list">Retour</router-link>
        </button>

        {{message}}

</div>
`,

data() {
    return {
        loading: true,
        item:{},
        error: null,
        message:''
    }
},
created() {
    this.fetchData();
},

methods: {

    fetchData() {
        this.loading = false;
        const params = new URLSearchParams();
        params.append('id', this.$route.params.id);
        //this.$route.params.id
        axios.post('http://api.sirius-school.be/product-v2/customer/detail ',params).then(response => {

            this.item = response.data.customer;
            //console.log(response);
        });
    },

    deleteCustomer(){
        const params = new URLSearchParams();
                params.append('id', this.$route.params.id);
                params.append('firstname', this.item.firstname);
                params.append('name', this.item.name);
                params.append('adress', this.item.adress);
                params.append('city', this.item.city);
                params.append('zip_code', this.item.zip_code);
                params.append('country', this.item.country);

                axios.post('http://api.sirius-school.be/product-v2/customer/delete', params).then(response => {
                    //console.log(response);
                    this.loading = false;

                    //this.item = response.data.product;
                    //console.log(response);

                    if(response.data.status == 'success') {
                        (confirm("Voulez vous vraiment supprimer ce client ?"))
                        this.message = 'Client supprimé';
                    }
                    else
                    {
                        this.message = 'Veuillez, Reessayez plus tard svp';
                    }
                });
    },
},
};

