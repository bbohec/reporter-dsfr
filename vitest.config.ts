import { VitestReporter } from "./dist/index";

export default {
  test: {
    reporters: [
    //   'default', 
      new VitestReporter() 
    ],
  },
};