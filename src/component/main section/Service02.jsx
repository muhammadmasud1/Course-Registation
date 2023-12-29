import { useEffect, useState } from "react";
import styles from "../header/button.module.css"
import ServiceCard from "./ServiceCard";

 


const Service02 = () => {
           const [serviceItem, setServiceItem] = useState([])
          
            useEffect(() => {
              fetch("service.json")
                .then((res) => res.json())
                .then((data) => setServiceItem(data));
            }, []);

            return (
              <div className={styles.banner}>
                <div className="text-center py-16">
                  <h1 className="text-white text-3xl font-semibold">
                    Our Services
                  </h1>
                  <p className="text-white py-5">
                    We turn information into actionable insights We work to
                    understand your issues <br /> and are driven to ask better
                    questions in the pursuit of making work.
                  </p>
                </div>
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-5">
                    {serviceItem.map((serviceItem) => (
                      <ServiceCard key={serviceItem.id} serviceItem={serviceItem}></ServiceCard>
                    ))}
                  </div>
                </div>
              </div>
            );
};

export default Service02;