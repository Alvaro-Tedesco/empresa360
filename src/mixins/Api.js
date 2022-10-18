export default {
  data() {
    return {
      data: {}
    };
  },

  methods: {
    async getData(url) {
      await fetch(url).then((response) => response.json()).then((response) => {
        this.data = response;
      });

      return this.data;
    },
  },
}
