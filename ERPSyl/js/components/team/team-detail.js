const TeamDetail = {
    template: `
<div>

<h1>Equipes  {{$route.params.id}}</h1>



<div v-if="loading" class="loading">
  Loading...
</div>

<div v-if="error" class="error">
  {{ error }}
</div>

<p v-if="item">
    Id team: {{ item.id_team }} <br />
    firstname: {{ item.firstname}} <br />
    name: {{ item.name}} <br />
    adress: {{ item.adress}} <br />
    city: {{ item.city}} <br />
    zip_code: {{ item.zip_code}} <br />
    country: {{ item.country}} <br />
</p>


        <router-link :to="{ name: 'team-detail', params: { id: item.id_team }}"></router-link>


        <button class="edit">
        <router-link class="edit":to="{ name: 'team-edit', params: { id: item.id_team }}"> Modifier</router-link>

        </button>

        <button class="delete" v-on:click="deleteTeam">supprimer</button>

        <button class="return">
        <router-link class="return" to="/team/team-list">Retour</router-link>
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
        axios.post('http://api.sirius-school.be/product-v2/team/detail',params).then(response => {
            //console.log(this.$route.params.id);
            //console.log(response);
            this.item = response.data.team;
        });
    },

    deleteTeam(){
        const params = new URLSearchParams();

        params.append('id', this.$route.params.id);
        params.append('firstname', this.item.firstname);
        params.append('name', this.item.name);
        params.append('adress', this.item.adress);
        params.append('city', this.item.city);
        params.append('zip_code', this.item.zip_code);
        params.append('country', this.item.country);

                axios.post('http://api.sirius-school.be/product-v2/team/delete', params).then(response => {
                    //console.log(response);
                    this.loading = false;

                    //this.item = response.data.producer;
                    //console.log(response);

                    
                    if(response.data.status == 'success') {
                        (confirm("Voulez vous vraiment supprimer cette equippe ?"))
                        this.message = 'Equippe supprimé';
                    }
                    else
                    {
                        this.message = 'Veuillez, Reessayez plus tard svp';
                    }
                });
    },
},
};
