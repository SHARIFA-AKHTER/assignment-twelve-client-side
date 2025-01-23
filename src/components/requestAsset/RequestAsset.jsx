import axios from "axios";
import { useState } from "react";

const RequestAsset = () => {
  const [assets, setAssets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ availability: '', type: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Fetch assets based on search and filters
  const fetchAssets = async () => {
    try {
      const response = await axios.get('https://assignment-twelve-server-iota.vercel.app/assets', {
        params: { ...filters, search: searchTerm },
      });
      setAssets(response.data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  // Handle opening the modal for requesting an asset
  const handleRequest = (asset) => {
    setSelectedAsset(asset);
    setModalOpen(true);
  };

  // Handle submitting the request
  const handleSubmitRequest = async () => {
    if (!selectedAsset) {
      return alert("Please select an asset to request.");
    }

    const requestData = {
      assetId: selectedAsset._id,
      notes: additionalNotes,
      requestDate: new Date().toISOString(),
      user: { /* Add logged-in user data here */ },
    };

    try {
      await axios.post('https://assignment-twelve-server-iota.vercel.app/requests', requestData);
      setModalOpen(false);
      setAdditionalNotes('');
      fetchAssets(); 
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <div>
      {/* Filter and Search Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by asset name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setFilters({ ...filters, availability: e.target.value })}>
          <option value="">Availability</option>
          <option value="available">Available</option>
          <option value="out-of-stock">Out of stock</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">Asset Type</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-returnable</option>
        </select>
        <button onClick={fetchAssets}>Apply Filters</button>
      </div>

      {/* Table Section for Assets */}
      <div className="asset-table">
        <table border="1" cellPadding="10" className="table">
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Type</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id}>
                <td>{asset.name}</td>
                <td>{asset.type}</td>
                <td>{asset.availability}</td>
                <td>
                  <button
                    onClick={() => handleRequest(asset)}
                    disabled={asset.availability === 'out-of-stock'}
                  >
                    Request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Additional Notes and Request Submission */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <label>Additional Notes</label>
            <input
              type="text"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            />
            <button onClick={handleSubmitRequest}>Submit Request</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestAsset;