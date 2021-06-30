export default {
  data() {
    return {
      page: 1,
    };
  },
  created() {
    this.setPage();
  },
  methods: {
    setPage() {
      if (this.$route.query.page) {
        this.page = this.$route.query.page;
      }
    },
  },
};
