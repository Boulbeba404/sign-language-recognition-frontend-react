import { Image } from "react-bootstrap";
import logo from "../../assets/logo.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <div className="d-flex justify-content-center">
          <Image src={logo} alt="App Logo" width={200} />
        </div>
        <h1 className="text-center">Oooops! Page not found</h1>
      </div>
    </div>
  );
};
export default NotFound;
