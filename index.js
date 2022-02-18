import GetGrupoConfig from "./scenarios/get-grupo-config.js";
import GetStatus from "./scenarios/get-status.js";
import {group , sleep} from 'k6';

export default () => {
    group('API - ConfigController', () => {
        GetGrupoConfig();
    });

    sleep(1);

    group('API - StatusController', () => {
        GetStatus();
    });

    sleep(1);
}
