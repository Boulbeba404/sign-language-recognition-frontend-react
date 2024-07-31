import { useParams } from "react-router-dom";
import { ManageModel } from "../../components";

const UpdateModel = () => {
  const { id } = useParams();
  return <ManageModel id={id} />;
};
export default UpdateModel;
