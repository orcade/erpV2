
const TeamAdd = {
        template: `

        <div>
    <h1>Equipe n° {{ $route.params.id }}</h1>

    <div v-if="loading" class="loading">
    Loading...
  </div>

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
            <router-link class= "valider" to="/team/team-list">Retour</router-link>
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
            message: ''
        }
    },

    methods: {
        sendModif() {
            const params = new URLSearchParams();
            //params.append('ip_code', this.item.ip_code);

            params.append('firstname', this.item.firstname);
            params.append('name', this.item.name);
            params.append('adress', this.item.adress);
            params.append('city', this.item.city);
            params.append('zip_code', this.item.zip_code);
            params.append('country', this.item.country);
            axios.post('http://api.sirius-school.be/product-v2/team/insert', params).then(response => {
              alert('test');
                console.log(response);
                this.loading = false;

                //this.item = response.data.product;
                //console.log(response);

                if(response.data.status == 'success') {
                    this.message = 'Equipe ajouté';
                }
                else
                {
                    this.message = 'Veuillez, Reessayez plus tard svp';
                }
            });
        }
    }
}
