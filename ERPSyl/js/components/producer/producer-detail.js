const ProducerDetail = {
    template: `
<div>

<h1>Produit  {{$route.params.id}}</h1>



<div v-if="loading" class="loading">
  Loading...
</div>

<div v-if="error" class="error">
  {{ error }}
</div>

<p v-if="item">
    Id Producteur: {{ item.id_producer }} <br />
    firstname: {{ item.firstname}} <br />
    name: {{ item.name}} <br />
    adress: {{ item.adress}} <br />
    city: {{ item.city}} <br />
    zip_code: {{ item.zip_code}} <br />
    country: {{ item.country}} <br />
</p>


        <router-link :to="{ name: 'producer-detail', params: { id: item.id_producer }}"></router-link>


        <button class="edit">
        <router-link class="edit":to="{ name: 'producer-add', params: { id: item.id_producer }}"> Modifier</router-link>
         
        </button>

        <button class="delete" v-on:click="deleteProducer">supprimer</button>

        <button class="return">
        <router-link class="return" to="/">Retour</router-link>
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
        axios.post('http://api.sirius-school.be/product-v2/producer/detail',params).then(response => {
            console.log(this.$route.params.id);
            //console.log(response);
            this.item = response.data.producer;
        });
    },

    deleteProducer(){
        const params = new URLSearchParams();
        
        params.append('id', this.$route.params.id);
        params.append('firstname', this.item.firstname);
        params.append('name', this.item.name);
        params.append('adress', this.item.adress);
        params.append('city', this.item.city);
        params.append('zip_code', this.item.zip_code);
        params.append('country', this.item.country);

                axios.post('http://api.sirius-school.be/product-v2/producer/delete', params).then(response => {
                    console.log(response);
                    this.loading = false;

                    //this.item = response.data.producer;
                    //console.log(response);

                    if(response.data.status == 'success') {
                        this.message = 'Producteur supprimé';
                    }
                    else
                    {
                        this.message = 'Veuillez, Reessayez plus tard svp';
                    }
                });
    },
},
};
