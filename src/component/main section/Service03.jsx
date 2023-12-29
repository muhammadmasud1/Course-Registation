import styles from '../header/button.module.css'
const Service03 = () => {
            return (
              <div className={styles.banner}>
                <div className="py-16">
                  <div className="max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-between items-center">
                    <div>
                      <img className={styles.image}
                        src="https://i.ibb.co/3CtsxYC/service03.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className={styles.serviceTitle}>
                        We complete every projects extra care as customer need
                      </h1>
                      <p className="text-[#ffff] py-5">
                        Revolutionize your understanding of artificial
                        intelligence with our cutting-edge product. Engineered
                        for seamless integration, it combines advanced
                        algorithms with user-friendly interfaces. Unleash the
                        power of AI effortlessly, navigating new realms of
                        efficiency. Elevate your tech experience with a solution
                        designed for the future.
                      </p>
                      <button className={styles.button}>Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            );
};

export default Service03;