const ProducerEdit = {
        template: `
    <div>

    <h1>Mettre à jour le producteur n°{{ $route.params.id }} </h1>

        <div v-if="loading" class="loading">
          Loading...
        </div>

        <div v-if="error" class="error">
          {{ error }}
        </div>



    <form>

        <div v-if="item">

        <div>
            <label>firstname</label>
            <input type="text" v-model="item.firstname" />
        </div>
        <div>
            <label>name</label>
            <input type="text" v-model="item.name" />
        </div>
        <div>
            <label>adress</label>
            <input type="text" v-model="item.adress" />
        </div>
        <div>
            <label>city</label>
            <input type="text" v-model="item.city" />
        </div>
        <div>
            <label>zip_code</label>
            <input type="text" v-model="item.zip_code" />
        </div>
        <div>
            <label>country</label>
            <input type="text" v-model="item.country" />
        </div>

    </form>

        <div>
            <button class="edit" @click.prevent='sendModif' v-on:keyup.enter="sendModif" >Modifier le produit
            </button>

        <button class="return">
        <router-link class="return" to="/">Retour</router-link>
        </button>

        </div>

        {{message}}

    </div>

        `,

        data() {
            return {
                loading: true,
                item: {},
                error: null,
                message: '',
                id:null
            }
        },

        created() {
            this.fetchData();
            this.sendModif();
        },


        methods: {

            fetchData() {
                this.loading = false;
                const params = new URLSearchParams();
                params.append('id', this.$route.params.id);
                //this.$route.params.id
                axios.post('api.sirius-school.be/product-v2/producer/detail',params).then(response => {
                    console.log(this.item);
                    this.item = response.data.producer;
                });
            },



            sendModif() {
                const params = new URLSearchParams();
                params.append('ip_code', this.item.ip_code);
                params.append('firstname', this.item.firstname);
                params.append('name', this.item.name);
                params.append('adress', this.item.adress);
                params.append('city', this.item.city);
                params.append('zip_code', this.item.zip_code);
                params.append('country', this.item.country);

                axios.post('api.sirius-school.be/product-v2/producer/update', params).then(response => {
                    console.log(response);
                    this.loading = false;

                    //this.item = response.data.product;
                    //console.log(response);

                    if(response.data.status == 'success') {
                        this.message = 'Producteur mis à jour';
                    }
                    else
                    {
                        this.message = 'Veuillez, Reessayez plus tard svp';
                    }
                });
            }
        }
    }
