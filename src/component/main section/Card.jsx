import { FaCommentDollar } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
const Card = ({ item, handledata }) => {
  const { courseImg, courseName, description, coursePrice, credit } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={courseImg}
          className="w-full h-full border border-blue-950"
          alt="Images"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {courseName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaCommentDollar />
            <h3>Price : {coursePrice} Tk</h3>
          </div>
          <div className="flex items-center gap-3">
            <FaCreditCard />
            <h3>Credit : {credit}</h3>
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
