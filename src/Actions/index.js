import axios from "axios";
import { IP_GEO_LOCATION_API_KEY }  from '../common/constant'

export function getClientIpDetails() {
       return  axios({
            method: 'get',
            url: `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEO_LOCATION_API_KEY}`,
        })
            .then((resp) => resp)
            .catch((error) => error?.response?.data);
}
