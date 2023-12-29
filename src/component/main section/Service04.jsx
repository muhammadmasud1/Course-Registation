import styles from '../header/button.module.css'
const Service04 = () => {
            return (
              <div className={styles.banner}>
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-between items-center">
                    <div>
                      <h1 className={styles.serviceTitle}>
                        We complete every project extra care as customer need
                      </h1>
                      <p className="text-white py-5">
                        Immerse yourself in the limitless possibilities of AI.
                        Our product marries intelligence with simplicity,
                        delivering a transformative experience. From smart
                        automation to intuitive learning, its a technological
                        marvel. Embrace the future of innovation and discover
                        the next frontier in AI with our state-of-the-art
                        solution.
                      </p>
                      <div className='py-7'>
                        <button className={styles.button}>Read More</button>
                      </div>
                    </div>
                    <div>
                      <img src="https://i.ibb.co/wSTR7nS/AI.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
};

export default Service04;