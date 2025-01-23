const AssetList = ({ assets, onCancel, onReturn, onPrint }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Asset Name</th>
            <th className="border border-gray-300 px-4 py-2">Asset Type</th>
            <th className="border border-gray-300 px-4 py-2">Request Date</th>
            <th className="border border-gray-300 px-4 py-2">Approval Date</th>
            <th className="border border-gray-300 px-4 py-2">Request Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.length > 0 ? (
            assets.map((asset) => (
              <tr key={asset.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {asset.assetName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.assetType}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.requestDate}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.approvalDate || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {asset.requestStatus}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                  {asset.requestStatus === "Pending" && (
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => onCancel(asset.id)}
                    >
                      Cancel
                    </button>
                  )}
                  {asset.requestStatus === "Approved" && (
                    <>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => onPrint(asset)}
                      >
                        Print
                      </button>
                      {asset.assetType === "Returnable" && (
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          onClick={() => onReturn(asset.id)}
                          disabled={asset.requestStatus === "Returned"}
                        >
                          Return
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="border border-gray-300 px-4 py-2 text-center text-gray-500"
              >
                No assets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssetList;
