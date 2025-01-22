import React from "react";
import MoveProp from "./moveProp";

const ideas = [
  {
    id: 1,
    image:
      "https://ableton-production.imgix.net/uploads/content-clusters/cluster-connect.jpg?fit=crop&auto=format&fm=jpg",
    link: "https://help.ableton.com/hc/en-us/articles/14661553738524-Using-Move-to-control-Ableton-Live",
    subtitle: "Connecting Move to your computer",
    alt: "yy",
  },
  {
    id: 2,
    image:
      "https://ableton-production.imgix.net/uploads/content-clusters/cluster-12-ui.jpg?fit=crop&auto=format&fm=jpg",
    link: "https://www.ableton.com/en/live/learn-live/?autoplay=lives-user-interface",
    subtitle: "Learn Live 12: Live's user interface",
    alt: "uu",
  },
  {
    id: 3,
    image:
      "https://ableton-production.imgix.net/uploads/content-clusters/3_Suite_LL12-Midi_Tools_540x250.jpg?fit=crop&auto=format&fm=jpg",
    link: "https://www.ableton.com/en/live/learn-live/",
    subtitle: "Watch the learn live 12 videos >",
    title: "iii",
  },
];
const Ideas = () => {
  return <div>
      <MoveProp title= "Take your ideas futher in Live" items={ideas} />
  </div>;
};

export default Ideas;
