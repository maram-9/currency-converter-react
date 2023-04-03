import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate.host/latest";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

useEffect(() => {
    const fetchRates = async () => {
        try {
            const {
                data: { rates, date }, 
             } = await axios.get(API_URL);

            setRatesData({
                status: "success",
                rates, 
                date, 
            });

            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};