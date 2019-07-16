
const TeamList = {
    template:  `
    <div>

    <h1>Liste des equipes</h1>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <button class="add">
    <router-link class="add"  to=/team/team-add>Ajouter equipe</router-link>
    </button>


    <!-- on vérifie que l equipe n'est pas vide, et puis on boucle avec v-for sur un tableau d'objet "item" -->

    <ul v-if="teams" id="example-1">
        <li v-for="item in teams">
            <router-link :to="{ name: 'team-detail', params: { id: item.id_team }}">{{ item.name }} </router-link>

        </li>
    </ul>

  </div>
`,


    data() {
        return {
            loading: true,
            teams:[],
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
            axios.get('http://api.sirius-school.be/product-v2/team/list').then(response => {
                console.log(response.data);
                this.loading = false;
                this.teams = response.data.teams;
                //console.log("test");
                //alert('axiosGetOk');

            });
        }
    }
};
