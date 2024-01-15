import { useEffect, useState } from "react";
import styles from '../header/button.module.css'
import ClientService from "./ClientService";
const Service05 = () => {

            const [clientData, setClientData] = useState([])

             useEffect(() => {
               fetch("client.json")
                 .then((res) => res.json())
                 .then((data) => setClientData(data));
             }, []);
             
            
            return (
              <div className={styles.banner}>
                <div className="max-w-6xl mx-auto py-10">
                  <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {clientData.map((clientData) => (
                      <ClientService
                        key={clientData.id}
                        clientData={clientData}
                      ></ClientService>
                    ))}
                  </div>
                </div>
              </div>
            );
};

export default Service05;