import React, { useState } from 'react';
import useSWR from 'swr';

// Define the API endpoint
const apiEndpoint = 'http://195.35.11.199:5588/devices/listdevices'; // replace with your actual API endpoint

// Define the fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => {
    if (!res.ok) {
        console.log(`HTTP error! status: ${res.status}`)
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
});

const DeviceOptionsGrid = () => {
    // Use SWR to fetch data
    const { data, error } = useSWR(apiEndpoint, fetcher);

    const [searchTerm, setSearchTerm] = useState('');

    let filteredDevices;

    if (data) {
        // Filtered items based on search term, checking all string fields
        filteredDevices = data.devices.filter(device =>
            Object.keys(device).some(key =>
                typeof device[key] === "string" &&
                device[key].toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }



    // Handle loading and error states
    if (error) return <div>Failed to load options.</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Search or choose Below</label>
                <input type="text" className="form-control" id="searchfield" placeholder="Search..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="mb-3">
                <select className="form-select" id="deviceslistgrid" name="deviceslistgrid">
                    {filteredDevices.length > 0 ? (
                        filteredDevices.map((option, index) => (
                            <option key={option.deviceid} value={option.deviceid} data-partnum={option.part_num} data-desc={option.description}>
                                {option.part_num} - {option.description}
                            </option>
                        ))
                    ) : (
                        data.devices.map((option, index) => (
                            <option key={option.deviceid} value={option.deviceid} data-item="{option.part_num} - {option.description}">
                                {option.part_num} - {option.description}
                            </option>
                        ))
                    )}
                </select>
            </div>
        </>

    );
};

export default DeviceOptionsGrid;
