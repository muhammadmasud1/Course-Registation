import { FaCommentDollar } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
const Card = ({ item, handledata }) => {
  const { courseImg, courseName, description, coursePrice, credit } = item;
  return (
    <div
      className="card bg-transparent overflow-hidden 
  bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 border-2 border-white to-transparen hadow-xl"
    >
      <figure>
        <img
          src={courseImg}
          className="w-full h-full border border-blue-950"
          alt="Images"
        />
      </figure>
      <div className="card-body overflow-hidden ">
        <h2 className="card-title text-white">
          {courseName}
          <div className="badge bg-[#ccc]">NEW</div>
        </h2>
        <p className="text-white">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-[#ccc]">
              {" "}
              <FaCommentDollar />
            </span>
            <h3 className="text-white">Price : {coursePrice} </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#ccc]">
              <FaCreditCard />
            </span>
            <h3 className="text-white">Credit : {credit}</h3>
          </div>
        </div>
        <div>
          <button
            onClick={() => handledata(item)}
            className="btn btn-sm flex-1 btn-primary btn-block text-xl mt-5"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
