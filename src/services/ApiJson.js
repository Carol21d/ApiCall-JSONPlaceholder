import axios from "axios";
import { ref } from "vue";

export default class apiCallJson {
    user;

    constructor() {
        this.user = ref([]);
    }

    getRequest() {
        return this.user.value;
    }

    async fetchAllRequest() {
        try {
            const resp = await axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((resp) => {
                    this.user.value = resp.data;
                    console.log(resp.data);
                });
        } catch (error) {
            console.log(error);
        }
    }
}
