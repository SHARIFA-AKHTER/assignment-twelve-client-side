import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider"; 
import AddAsset from "../components/AddAsset";

const AddAssetPage = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "HR Manager") {
    return <p className="text-red-500 text-center mt-10">Access Denied! Only HR Managers can add assets.</p>;
  }

  return <AddAsset />;
};

export default AddAssetPage;