import { envs } from "./config/plugins/envs.plugin";
import { server } from "./presentation/server";

(async () => {
    main();
})();


function main() {
    server.start();
    
}