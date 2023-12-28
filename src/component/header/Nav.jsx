import styles from './button.module.css'

const Nav = () => {
            return (
              <div>
                <div>
                  <nav className={styles.nav}>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          src="https://i.ibb.co/RchJdNF/brand-Logo.png"
                          className="h-8"
                          alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
                          Zone.
                        </span>
                      </a>
                      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button className={styles.button}>Contact Us</button>
                        <button
                          data-collapse-toggle="navbar-cta"
                          type="button"
                          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          aria-controls="navbar-cta"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                      >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 text-white md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-5 md:p-0 font-semibold rounded md:bg-transparen text-white"
                              aria-current="page"
                            >
                              Home
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-5 md:p-0 font-semibold rounded md:bg-transparen text-white"
                              aria-current="page"
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-5 md:p-0 font-semibold rounded md:bg-transparen text-white"
                              aria-current="page"
                            >
                              Services
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-5 md:p-0 font-semibold rounded md:bg-transparen text-white"
                              aria-current="page"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            );
};

export default Nav;