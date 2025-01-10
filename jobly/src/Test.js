import React, {useState} from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState('');
    const getCompany = async () => {
        try {
        const res = await axios.get('http://localhost:3001/companies/anderson-arias-morrow');
        setData(res.data.company);
        } catch(e) {
            console.log("There was an error retrieving the data. Error:", e);
        }
    }
    return (
        <div>
            <h2>Test Component is working.</h2>
            {data !== '' ? (<h3>{data.name}<br />{data.description}</h3>) : 
            (<button onClick={getCompany}>Get Company</button>)
            }
        </div>
    )
}   // END Test()

export default Test;