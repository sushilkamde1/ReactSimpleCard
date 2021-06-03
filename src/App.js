import React from "react";
import tachyons from "tachyons";
import Card from "./Card";

const App = () => {
  let data = [
    {
      name: "JANA",
      work: "student",
      img: "https://joeschmoe.io/api/v1/jana"
    },
    {
      name: "JIA",
      work: "worker",
      img: "https://joeschmoe.io/api/v1/jia"
    },
    {
      name: "JUDE",
      work: "enginner",
      img: "https://joeschmoe.io/api/v1/jude"
    },
    {
      name: "JORD",
      work: "student",
      img: "https://joeschmoe.io/api/v1/jord"
    },
    {
      name: "JOCE",
      work: "student",
      img: "https://joeschmoe.io/api/v1/joce"
    },
    {
      name: "JON",
      work: "Villan",
      img: "https://joeschmoe.io/api/v1/jon"
    },
    {
      name: "JAMES",
      work: "Villan",
      img: "https://joeschmoe.io/api/v1/james"
    },
    {
      name: "JEAN",
      work: "worker",
      img: "https://joeschmoe.io/api/v1/jean"
    },
    {
      name: "JACK",
      work: "Villan",
      img: "https://joeschmoe.io/api/v1/jack"
    },
    {
      name: "JOE",
      work: "avatar",
      img: "https://joeschmoe.io/api/v1/joe"
    }
  ];
  let getdata = data.map((val, key) => {
    return <Card key={key} img={val.img} name={val.name} work={val.work} />;
  });
  return (
    <div className="tc">
      <h1 className="tc ">simple card</h1>
      <hr />
      {getdata}
    </div>
  );
};
export default App;
