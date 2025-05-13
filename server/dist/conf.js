import { env, loadEnvFile } from "node:process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
loadEnvFile(join(`${__dirname}/enviroment.env`));
export const VARIABLES = {
    port: env.PORT || 3000,
};
