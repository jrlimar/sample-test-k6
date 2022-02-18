import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export default function () {

    const res = http.get('http://localhost:5050/api/hibernate/Status/GetStatus')

    console.log('Response (Api Status) time was ' + String(res.timings.duration) + 'ms' + ' status response: ' + String(res.status))

    let maxDuration = 1000; 

    if(!check(res, {
        '(Api Status) status is success': (r) => r.status === 200,
        '(Api Status) max duration': (r) => r.timings.duration < maxDuration, 
    })){
        fail(`because max duration should be ${maxDuration} - duration actual is ${res.timings.duration} `);
    }
    
    sleep(1);
}


