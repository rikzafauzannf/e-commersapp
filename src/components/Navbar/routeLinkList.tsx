import Link from "next/link";
import React from "react";
import { routeLink } from "./route";
const RouteLinkList = () => {
  return (
    <>
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
    </>
  );
};

export default RouteLinkList;
