import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Typography } from '@mui/material';
import FetchCSVData from './FetchCSVData';
import axios from 'axios';

function App() {

  const [decklists, setDecklists] = useState<Set<string>>(new Set());
  const [threeLists, setThreeLists] = useState<string[]>([]);
  
  const sheetlink = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiI86IJs9beVfEdUOhj791jdtnIKiHoWEY91JRqqKTlVwaviudHQTbIIk_wz6-hafMEzvlUwql0vhB/pub?output=csv";

  useEffect(() => {
    axios.get(sheetlink)
      .then((response) => {
        const data = parseData(response.data);
        setDecklists(data);
      })
      .catch((error) => {
        console.error('Error fetching CSV data:', error);
    });
  }, []);
  
  const parseData = ((csvData: string) => {
    const rows = csvData.split('\"');
    const data: Set<string> = new Set();
    for(let i = 1; i<rows.length; i+=2)
      {
        data.add(rows[i]);
      }
    return data;
  })

  const handlePop = ((num: number) => {
    if(num >= decklists.size) return;

    const lists: Set<string> = new Set();
    let items = Array.from(decklists);
    while(lists.size < num)
      {
        lists.add(items[Math.floor(Math.random()*items.length)]);
      }
    setThreeLists(Array.from(lists));
    setDecklists(new Set(items.filter((item) => !lists.has(item))));
    console.log("Remaining decklists: %d", decklists.size);
  })
  
  return (
    <><Button
      onClick={() => handlePop(3)}>
      Pop 3 Decklists
    </Button>
    <Typography
    style={{whiteSpace: 'pre-line'}}
    >
          {threeLists.map((item) =>
          <>
          {item}
          <br />
          <br />
          </>
          )}
    </Typography></>
  );
}

export default App;
