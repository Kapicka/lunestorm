import { theme } from "@/store";

const helpers = {
  data() {
    return {
      theme: "ecumene"
    };
  },
  methods: {
    isTheme(inputTheme) {
      return inputTheme === theme.value;
    },
    setTheme(inputTheme) {
      theme.value = inputTheme;
    },
    getPage(){
      return this.$route.path.includes("ecumene") ? "ecumene" : "electro";
    }
  }
};
export default helpers;
