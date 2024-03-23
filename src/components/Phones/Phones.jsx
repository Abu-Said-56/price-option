import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip,} from 'recharts';
import { Audio} from 'react-loader-spinner';
const Phones = () => {
 
    const [phones , setphones] = useState([]);

    const [loading , setloading] = useState(true);

    useEffect( ()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setphones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const phonedata = data.data.data;
            const phonesfakedata = phonedata.map(phone =>{
                const object = {
                    name : phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return object;
            })
            console.log(phonesfakedata);
            setphones(phonesfakedata);
            setloading(false);
        })
    } ,[])

    return (
        <div>    
            {loading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
                />}
                
                
            <h5 className="text-5xl text-center font-extrabold">Hello Phones:{phones.length}</h5>
            <BarChart width={1420} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;