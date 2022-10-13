export default {
  data() {
    return {
      data: {}
    };
  },

  methods: {
    getData(url) {
      fetch(url).then((response) => response.json()).then((response) => {
        this.data = response;
      });
    },
  },
}
