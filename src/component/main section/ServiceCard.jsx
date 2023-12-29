import style from './servicecard.module.css'

const ServiceCard = ({serviceItem}) => {
        const {courseImg,serviceName,description,link} = serviceItem
         console.log(serviceItem)
            return (
              <div className={style.border}>
                <div className="card shadow-xl border border-white">
                  <figure className="px-10 pt-10">
                    <img
                      src={courseImg}
                      alt=""
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">{serviceName}</h2>
                    <p className='text-white'>{description}</p>
                    <div className="card-actions text-white py-2">
                     <a href="#" className='underline' target="_blank" rel="noopener noreferrer">{link}</a>
                    </div>
                  </div>
                </div>
              </div>
              
            );
};

export default ServiceCard;