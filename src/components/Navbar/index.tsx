import Link from "next/link";
import React from "react";

const Navbar = () => {
  const routeLink = [
    {
      label: "link",
      linkUrl: "#",
      detail: null,
    },
    {
      label: "link2",
      linkUrl: "#",
      detail: [
        {
          labellink: "test",
          linkUrltst: "#",
        },
        {
          labellink: "test",
          linkUrltst: "#",
        },
      ],
    },
  ];

  return (
    <div className="navbar bg-base-100 w-full shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routeLink.map((item, index) => (
              <React.Fragment key={index}>
                {item.detail ? (
                  <li key={`${index}-submenu`}>
                    <details>
                      <summary>{item.label}</summary>
                      <ul className="p-2">
                        {item.detail.map((submenuItem, subIndex) => (
                          <li key={`${index}-${subIndex}`}>
                            <Link href={submenuItem.linkUrltst}>
                              {submenuItem.labellink}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={`${index}-no-submenu`}>
                    <Link href={item.linkUrl}>{item.label}</Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routeLink.map((item, index) => (
            <React.Fragment key={index}>
              {item.detail ? (
                <li key={`${index}-submenu`}>
                  <details>
                    <summary>{item.label}</summary>
                    <ul className="p-2">
                      {item.detail.map((submenuItem, subIndex) => (
                        <li key={`${index}-${subIndex}`}>
                          <Link href={submenuItem.linkUrltst}>
                            {submenuItem.labellink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={`${index}-no-submenu`}>
                  <Link href={item.linkUrl}>{item.label}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
