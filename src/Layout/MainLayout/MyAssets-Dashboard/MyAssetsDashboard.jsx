import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const MyAssetsDashboard = () => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [assetType, setAssetType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch assets from the server
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        setLoading(true);
        const params = { name: search, status, assetType };
        const { data } = await axios.get("http://localhost:3000/assets", {
          params,
        });
        setAssets(data);
      } catch (err) {
        setError("Failed to fetch assets. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAssets();
  }, [search, status, assetType]);

  // Cancel request
  const cancelRequest = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/assets/${id}/cancel`);
      setAssets(assets.filter((asset) => asset._id !== id));
    } catch (err) {
      alert("Failed to cancel the request.");
    }
  };

  // Return asset
  const returnAsset = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/assets/${id}/return`);
      setAssets(
        assets.map((asset) =>
          asset._id === id ? { ...asset, status: "returned" } : asset
        )
      );
    } catch (err) {
      alert("Failed to return the asset.");
    }
  };

  // Print asset details using react-pdf
  const printAsset = (asset) => {
    const AssetDocument = () => (
      <Document>
        <Page>
          <View style={styles.header}>
            <Text>Company Name</Text>
          </View>
          <View style={styles.section}>
            <Text>Asset Name: {asset.assetName}</Text>
            <Text>Asset Type: {asset.assetType}</Text>
            <Text>
              Request Date: {new Date(asset.requestDate).toLocaleDateString()}
            </Text>
            <Text>
              Approval Date: {new Date(asset.approvalDate).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.footer}>
            <Text>Printed on: {new Date().toLocaleDateString()}</Text>
          </View>
        </Page>
      </Document>
    );

    return (
      <PDFDownloadLink
        document={<AssetDocument />}
        fileName={`${asset.assetName}-details.pdf`}
      >
        {({ loading }) => (loading ? "Loading document..." : "Print")}
      </PDFDownloadLink>
    );
  };

  const styles = StyleSheet.create({
    header: { marginBottom: 20, fontSize: 18, textAlign: "center" },
    section: { margin: 10, fontSize: 14 },
    footer: { marginTop: 20, fontSize: 12, textAlign: "center" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
        <select
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setAssetType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-returnable</option>
        </select>
      </div>

      {/* Asset List Section */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Asset Name</th>
              <th className="border border-gray-300 px-4 py-2">Asset Type</th>
              <th className="border border-gray-300 px-4 py-2">Request Date</th>
              <th className="border border-gray-300 px-4 py-2">
                Approval Date
              </th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {asset.assetName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.assetType}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(asset.requestDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.approvalDate
                    ? new Date(asset.approvalDate).toLocaleDateString()
                    : "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.status === "pending" && (
                    <button
                      onClick={() => cancelRequest(asset._id)}
                      className="text-white bg-red-500 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  )}
                  {asset.status === "approved" &&
                    asset.assetType === "returnable" && (
                      <button
                        onClick={() => returnAsset(asset._id)}
                        className="text-white bg-blue-500 px-3 py-1 rounded ml-2"
                      >
                        Return
                      </button>
                    )}
                  {asset.status === "approved" && printAsset(asset)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssetsDashboard;
