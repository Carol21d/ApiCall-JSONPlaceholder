import axios from "axios";
import { ref } from "vue";

export default class apiCallJson {
  request;

  constructor() {
    this.request = ref([]);
  }

  getRequest() {
    return this.request.value;
  }

  async fetchAllRequest() {
    try {
      const resp = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
          this.request.value = resp.data;
          console.log(resp.data);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
