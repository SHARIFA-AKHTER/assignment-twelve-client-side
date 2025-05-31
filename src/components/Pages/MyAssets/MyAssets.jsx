import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AssetList from '../AssetList/AssetList';
import SearchFilter from '../SearchFilter/SearchFilter';
import { PDFDownloadLink } from '@react-pdf/renderer';
import AssetPDF from '../AssetPDF/AssetPDF ';



const MyAssets = () => {
    const [assets, setAssets] = useState([]);

    // Fetch assets with search & filters
    const fetchAssets = async (query = {}) => {
        try {
            const queryParams = new URLSearchParams(query).toString();
            const response = await axios.get(`http://localhost:3000/assets?${queryParams}`);;
            setAssets(response.data);
        } catch (error) {
            console.error('Error fetching assets:', error.message);
        }
    };

    // Handle search
    const handleSearch = (search) => {
        fetchAssets({ search });
    };

    // Handle filter
    const handleFilter = (filters) => {
        fetchAssets(filters);
    };

    // Cancel asset request
    const handleCancel = async (id) => {
        try {
            await axios.put(`http://localhost:3000/assets/${id}/cancel`);
            fetchAssets();
        } catch (error) {
            console.error('Error canceling asset request:', error.message);
        }
    };

    // Return asset
    const handleReturn = async (id) => {
        try {
            await axios.put(`http://localhost:3000/assets/${id}/return`);
            fetchAssets();
        } catch (error) {
            console.error('Error returning asset:', error.message);
        }
    };

    // Generate PDF Download Link
    const handlePrint = (asset) => (
        <PDFDownloadLink document={<AssetPDF asset={asset} />} fileName={`${asset.assetName}_details.pdf`}>
            {({ loading }) =>
                loading ? (
                    <span className="text-gray-500">Generating PDF...</span>
                ) : (
                    <button className="btn btn-primary">Download PDF</button>
                )
            }
        </PDFDownloadLink>
    );

    // Fetch assets on mount & re-fetch when filters change
    useEffect(() => {
        fetchAssets();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">My Requested Assets</h1>
            <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
            <AssetList assets={assets} onCancel={handleCancel} onReturn={handleReturn} onPrint={handlePrint} />
        </div>
    );
};

export default MyAssets;

