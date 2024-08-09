import { useQuery } from "react-query";

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

const fetchWeather = async () => {
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather`);
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);

};

export default function QuerySuspense() {
    const data = useQuery('weather', fetchWeather);

    return ( "a" );
}