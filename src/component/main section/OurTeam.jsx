import styles from "../header/button.module.css"

const OurTeam = () => {
            return (
              <div className={styles.banner}>
                <div className="text-center text-white">
                  <h1 className="text-4xl font-semibold">Our Team</h1>
                  <p className="text-white py-5">
                    Meet our skilled Front-End Developer! With a passion for
                    creating <br /> captivating user interfaces and seamless
                    experiences, they bring a unique blend of <br />creativity and
                    technical expertise to our team, ensuring your projects
                    success.
                  </p>
                </div>
              </div>
            );
};

export default OurTeam;