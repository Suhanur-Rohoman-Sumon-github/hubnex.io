import { Link } from "react-router-dom";
import "../../App.css";

const Brand = () => {
  return (
    <div className="homeBrandFirstDiv">
      <div className=" homeBrandSecondDiv">
        <div className=" homeBrandThirdDiv">
          {/* Note: added mt-2 for the heading brand heading section, text and button capitalize */}
          <h1 className="homeBrandH1">helping you build products</h1>
          <span className=" homeBrandSpan">that shine</span>
        </div>
      </div>
      <div className=" text-white">
        {/* bug fix: add mb-52 */}
        <div className=" homeBrandForthDiv">
          <div className=" homeBrandFifthDiv">
            <span>your have an idea?</span>
            <span>we have a team</span>
          </div>
          {/* Whatdo:make buttons reusable */}
          <Link to="/contact">
            <button className=" btn-primary">get started </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
