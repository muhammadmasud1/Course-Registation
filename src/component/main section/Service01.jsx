import { useEffect, useState } from 'react';
import style from '../header/button.module.css'
import Card from './Card';
const Service01 = () => {
         const [course,setcoursedata] = useState([])
         const [selectdata, setselectdata] = useState([])
         const [price,setprice] = useState(0)
         const [totalCredit, setTotalCredit] = useState(0)
         const [totalRemaining,setTotalRemaining] = useState(20)
           
         // Function item Value Display Show
         const handledata = (item) => {
           const newItemData = [...selectdata, item];
           setselectdata(newItemData);         
           // total price
          const tottalCoursePrice = parseFloat(item.coursePrice);
          setprice(price + tottalCoursePrice);
         // total Credit
         const totalCreditData = parseFloat(item.credit);
         setTotalCredit(totalCredit + totalCreditData)
          // total Remaining
          const totalCreditHour = totalCredit + totalCreditData;
          
         if (totalCreditHour > 20) {
           alert("Finished Your Creadit");
           return;
         }
          setTotalCredit(totalCreditHour);

          const totalRemainingCredit = 20 - totalCreditHour;
          setTotalRemaining(totalRemainingCredit);
         
          
         };


            useEffect(() => {
                        fetch('courseRegistation.json')
                        .then(res => res.json())
                        .then(data => setcoursedata(data))
            },[])

            
           

            return (
              <div className={style.banner}>
                <div className="max-w-7xl mx-auto h-full flex gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {course.map((item, index) => (
                      <Card
                        handledata={handledata}
                        key={index.id}
                        item={item}
                      ></Card>
                    ))}
                  </div>
                  <div className="w-[60%] p-4 shadow-sm ">
                    <div className="border-2 border-y-cyan-300 px-2 py-2 shadow-sm">
                      <h1 className="text-[20px] font-bold mb-4 text-white">
                        Credit Our remaining {totalRemaining} hr
                      </h1>
                      <hr />
                      <div className="my-5">
                        <h2 className="text-[20px] font-semibold text-white">
                          Course Name
                        </h2>
                        <ol className="list-decimal px-5 mt-4 py-3 text-white">
                          {selectdata.map((data) => (
                            <li key={data.id}>{data.courseName}</li>
                          ))}
                        </ol>
                        <hr />
                        <h3 className="py-4 text-white">
                          Total Credit Hour : {totalCredit} hr
                        </h3>
                        <hr />
                        <h3 className="py-4 text-white">
                          Total Price : {price} USDT
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
                  
};

export default Service01;