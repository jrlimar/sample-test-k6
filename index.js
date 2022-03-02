import GetGrupoConfig from "./scenarios/get-config.js";
import GetStatus from "./scenarios/get-status.js";
import {group , sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

//Html Report
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

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
