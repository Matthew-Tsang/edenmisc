import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchCSVData() {

    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, [])

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSiI86IJs9beVfEdUOhj791jdtnIKiHoWEY91JRqqKTlVwaviudHQTbIIk_wz6-hafMEzvlUwql0vhB/pub?output=csv';
        axios.get(csvUrl)
            .then((response) => {
                //console.log(response.data);
                setCsvData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    return csvData;
}