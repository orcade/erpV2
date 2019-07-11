const ProducerAdd = {
        template: `

        <div>
    <h1>Producteur n° {{ $route.params.id }}</h1>


    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div>
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

        <div>
            <button class="valider" v-on:click="sendModif">Valider</button>

            <button class= "valider">
            <router-link class= "valider" to="/producer/producer-list">Retour</router-link>
            </button>
        </div>
    </div>


    {{ message }}
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

    methods: {
        sendModif() {
            const params = new URLSearchParams();
            params.append('ip_code', this.item.ip_code);
            params.append('firstname', this.item.firstname);
            params.append('name', this.item.name);
            params.append('adress', this.item.adress);
            params.append('city', this.item.city);
            params.append('zip_code', this.item.zip_code);
            params.append('country', this.item.country);
            axios.post('api.sirius-school.be/product-v2/producer/insert', params).then(response => {
                console.log(response);
                this.loading = false;

                //this.item = response.data.product;
                //console.log(response);

                if(response.data.status == 'success') {
                    this.message = 'Producteur ajouté';
                }
                else
                {
                    this.message = 'Veuillez, Reessayez plus tard svp';
                }
            });
        }
    }
}
