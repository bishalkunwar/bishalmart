"use client"

import React, { useState, useEffect } from 'react';
import {client } from "../../../../lib/client";

const SanityCheckComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from Sanity
                const query = '*[_type == "product"]';
                const fetchedData = await client.fetch(query);
                console.log(fetchData);
                // Update state with fetched data
                setData(fetchedData);
            } catch (err) {
                // Handle errors
                setError(err);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, []); // Empty dependency array to ensure useEffect runs only once

    return (
        <div>
            {error && <div>Error: {error.message}</div>}
            {data && <pre>{JSON.stringify(data, 2)}</pre>}
        </div>
    );
};

export default SanityCheckComponent;
