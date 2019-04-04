// import { greeting } from "../crate/pkg";

// console.log(greeting());
import("../crate/pkg").then(mod => {
  console.log(mod.greeting());
});
