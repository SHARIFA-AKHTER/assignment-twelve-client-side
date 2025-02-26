import axios from "axios";
import { useEffect, useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const RequestedAssets = () => {
  const [assets, setAssets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ status: '', type: '' });

  useEffect(() => {
    fetchAssets();
  }, [searchTerm, filters]);

  const fetchAssets = async () => {
    try {
      const response = await axios.get('http://localhost:3000/assets', {
        params: { search: searchTerm, ...filters },
      });
      setAssets(response.data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/assets/${id}`);
      fetchAssets();
    } catch (error) {
      console.error("Error canceling request:", error);
    }
  };

  const handleReturn = async (id) => {
    try {
      await axios.put(`http://localhost:3000/assets/${id}`, { status: "returned" });
      fetchAssets();
    } catch (error) {
      console.error("Error returning asset:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">My Requested Assets</h2>

      {/* Search & Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by asset name"
          className="border p-2 w-full rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Asset Type</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-returnable</option>
        </select>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-sm md:text-base">
              <th className="border p-2">Asset Name</th>
              <th className="border p-2">Asset Type</th>
              <th className="border p-2 hidden md:table-cell">Request Date</th>
              <th className="border p-2 hidden md:table-cell">Approval Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id} className="text-center text-sm md:text-base">
                <td className="border p-2">{asset.name}</td>
                <td className="border p-2">{asset.type}</td>
                <td className="border p-2 hidden md:table-cell">{new Date(asset.requestDate).toLocaleDateString()}</td>
                <td className="border p-2 hidden md:table-cell">{asset.status === "approved" ? new Date(asset.approvalDate).toLocaleDateString() : "-"}</td>
                <td className="border p-2 capitalize">{asset.status}</td>
                <td className="border p-2 flex flex-col md:flex-row justify-center gap-2">
                  {asset.status === "pending" && (
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm md:text-base"
                      onClick={() => handleCancel(asset._id)}
                    >
                      Cancel
                    </button>
                  )}
                  {asset.status === "approved" && (
                    <PDFDownloadLink
                      document={<AssetPDF asset={asset} />}
                      fileName="asset-details.pdf"
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm md:text-base"
                    >
                      Print
                    </PDFDownloadLink>
                  )}
                  {asset.status === "approved" && asset.type === "returnable" && (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm md:text-base"
                      onClick={() => handleReturn(asset._id)}
                    >
                      Return
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// PDF Component
const AssetPDF = ({ asset }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Asset Details</Text>
        <Text>Asset Name: {asset.name}</Text>
        <Text>Asset Type: {asset.type}</Text>
        <Text>Request Date: {new Date(asset.requestDate).toLocaleDateString()}</Text>
        <Text>Approval Date: {new Date(asset.approvalDate).toLocaleDateString()}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Printed on {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: { padding: 20 },
  header: { marginBottom: 20 },
  companyName: { fontSize: 18, fontWeight: "bold" },
  date: { fontSize: 12, textAlign: "right" },
  body: { marginBottom: 20 },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  footer: { position: "absolute", bottom: 10, fontSize: 12, textAlign: "center" },
});

export default RequestedAssets;