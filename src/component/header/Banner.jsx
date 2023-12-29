import styles from './button.module.css' 
const Banner = () => {
            return (
              <div className={styles.banner}>
                <div className="max-w-6xl mx-auto h-screen">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center justify-between gap-5">
                    <div>
                      <h1 className={styles.bannertitle}>
                        Virtual Reality Business Solutions
                      </h1>
                      <p className="text-[#E5E7EB] my-5">
                        We have over 15 year exprience in business consultting
                        arena. We have over 15 year exprience in business
                        consultting arena and artficial intelligence.
                      </p>
                      <div className="flex gap-5 my-10">
                        <button className={styles.button}>Join Us</button>
                        <button className="btn btn-outline text-[#E5E7EB] ">
                          Watch video
                        </button>
                      </div>
                    </div>
                    <div>
                      <img src="https://i.ibb.co/whrk2Dz/banner.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-white text-4xl text-center py-5 font-serif text-bold">
                    <span className={styles.serviceTitle}>
                      Course Registation
                    </span>
                  </h1>
                  <p className="text-center text-[#ccc]">
                    We turn information into actionable insights We work to
                    understand your issues and <br />
                    are driven to ask better questions in the pursuit of making
                    work.
                  </p>
                  <div className="py-10"></div>
                </div>
              </div>
            );
};

export default Banner;