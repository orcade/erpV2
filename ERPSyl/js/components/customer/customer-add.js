
const CustomerAdd = {
        template: `

    <div>
        <h1>client n° {{ $route.params.id }}</h1>



    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div>
        <div>
            <label>Prénom</label>
            <input type="text" v-model="item.firstname" />
        </div>
        <div>
            <label>Nom</label>
            <input type="text" v-model="item.name" />
        </div>
        <div>
            <label>Adresse</label>
            <input type="text" v-model="item.adress" />
        </div>
        <div>
            <label>City</label>
            <input type="text" v-model="item.city" />
        </div>
        <div>
            <label>Code postal</label>
            <input type="text" v-model="item.zip_code" />
        </div>
        <div>
            <label>Pays</label>
            <input type="text" v-model="item.country" />
        </div>
        <div>
            <button class="valider" v-on:click="sendModif">Valider</button>

            <button class= "valider">
            <router-link class= "valider" to="/customer/customer-list">Retour</router-link>
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
            params.append('firstname', this.item.firstname);
            params.append('name', this.item.name);
            params.append('adress', this.item.adress);
            params.append('city', this.item.city);
            params.append('zip_code', this.item.zip_code);
            params.append('country', this.item.country);

            axios.post('http://api.sirius-school.be/product-v2/customer/insert ', params).then(response => {
                console.log(response);
                this.loading = false;

                //this.item = response.data.product;
                //console.log(response);

                if(response.data.status == 'success') {
                    this.message = 'Client ajouté';
                }
                else
                {
                    this.message = 'Veuillez, Reessayez plus tard svp';
                }
            });
        }
    }
}
