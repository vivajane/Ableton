import React from "react";

const footers = [
  {
    id: 1,
    link: "#",
    linkname: "Contact Us",
  },
  {
    id: 2,
    link: "#",
    linkname: "Press resources",
  },
  {
    id: 3,
    link: "#",
    linkname: "Legal Info",
  },
  {
    id: 4,
    link: "#",
    linkname: "Corporate Information",
  },
  {
    id: 5,
    link: "#",
    linkname: "Privacy policy",
  },
  {
    id: 6,
    link: "#",
    linkname: "Cookies settings",
  },
  {
    id: 7,
    link: "#",
    linkname: "Imprints",
  },
];

const MainFooter = () => {
  return (
    <div className="lg:flex block text-left items-center justify-between sm:px-28 px-8">
      <div className="lg:flex block gap-6 items-center py-6  lg:py-16">
        {footers.map((footer) => (
          <div className="text-xs py-1" key={footer.id}>
            
              <a href={footer.link}>{footer.linkname}</a>
            
          </div>
        ))}
      </div>
      <div className="flex pb-20 gap-2 items-center">
        <div><h1>Made in Berlin</h1></div>
        <div><img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg" alt="a" /></div>
      </div>
    </div>
  );
};

export default MainFooter;
