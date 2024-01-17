import { cli } from "./index";

cli.run().then(
  () => {
    console.log("ABOUT TO EXIT THE MAIN PROCESS")
    console.log(process)
    process.exit(0);
  },
  (error: unknown) => {
    if (error) console.error(error);
    process.exit(1);
  }
);
