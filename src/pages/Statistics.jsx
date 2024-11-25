// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const Statistics = () => {
    const [data, setData] = useState([]);

    // Fetch data from products.json
    useEffect(() => {
        fetch('/products.json')
            .then((response) => response.json())
            .then((jsonData) => {
                // Map the JSON data to match chart structure
                const formattedData = jsonData.map((product) => ({
                    name: product.product_title,
                    price: product.price,
                    rating: product.rating,
                    total: product.price + product.rating, // Calculate total
                }));
                setData(formattedData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className="bg-primary">
                <div className="flex flex-col justify-center items-center text-center pt-8 pb-[60px]">
                    <h1 className="text-3xl text-white font-semibold">Statistics</h1>
                    <p className="text-gray-200 mt-3">
                        Our statistics page provides a comprehensive overview of the performance of our products,<br className="hidden md:block" /> and find the perfect accessories that cater to your unique needs
                    </p>
                </div>
            </div>
            <h1 className='font-bold ml-20 mt-10 text-xl'>Statistics</h1>
            <div className='border bg-gray-50 p-5 rounded-2xl mb-10 w-11/12 mx-auto mt-10'>
                <div className='' style={{ width: '100%', height: 550 }}>
                    <ResponsiveContainer>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            {/* Price as a bar chart */}
                            <Bar dataKey="price" barSize={20} fill="#9538E2" />

                            {/* Total as an area chart */}
                            <Area type="monotone" dataKey="total" fill="#BF87FF" stroke="#BF87FF" />

                            {/* Rating as a line chart */}
                            <Line type="monotone" dataKey="rating" stroke="#FF0000" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
