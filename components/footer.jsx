import React from "react";
import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";

const footer = () => {
  return (
    <div>
      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link href="#">
                <a className="mb-6 inline-block">
                  <img
                    src="/images/logo.png"
                    className="max-h-7 dark:hidden mb-6"
                    alt="Icy Creatures | Creatures from the Ice Age era"
                  />
                </a>
              </Link>

              <Link href="#">
                <a className=" mb-6 inline-block">
                  <img
                    src="/images/logo_white.png"
                    className="hidden max-h-7 dark:block mb-6"
                    alt="Icy Creatures | Creatures from the Ice Age era"
                  />
                </a>
              </Link>
              <p className="dark:text-jacarta-300 mb-12">
                Hoard your Icy Creatures Collectibles.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex space-x-5">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} Icy Creatures — Made by</span>
              <Link href="https://icycreatures.com">
                <a className="hover:text-accent dark:hover:text-white">
                  {" "}
                  Icy Creatures Labs
                </a>
              </Link>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Terms and conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Privacy policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
