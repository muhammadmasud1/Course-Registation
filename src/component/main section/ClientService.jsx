import style from "../header/button.module.css"
import { FaFacebook } from "react-icons/fa6";
import { BsSkype } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ClientService = ({clientData}) => {
          const { clinetName, clientImg, clientTitle } = clientData;
            return (
              <>
                <div className={style.banner}>
                  <div className="">
                    <div className="card shadow-xl border overflow-hidden border-white">
                      <figure className="px-10 pt-10">
                        <img src={clientImg} alt="" className="rounded-xl" />
                      </figure>
                      <div className="card-body p-0 items-center text-center">
                        <h2 className="card-title text-white text-center">
                          {clinetName}
                        </h2>
                        <h4 className="text-white mb-3 ">{clientTitle}</h4>
                        <div className="flex gap-3 text-xl text-[#1877F2] mb-5 ">
                          <a href="#">
                            <BsSkype></BsSkype>
                          </a>
                          <a href="#">
                            <FaLinkedin></FaLinkedin>
                          </a>
                          <a href="#">
                            <FaTwitter></FaTwitter>
                          </a>
                          <a href="#">
                            <FaFacebook></FaFacebook>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
};

export default ClientService;