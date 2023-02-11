import React from "react";
import Chart from "../../components/chart/Chart";
import Featureinfo from "../../components/featuredinfo/Featureinfo";
import "./home.css";
import { monthlyTrafficData } from "../../sampleData";
import WidgetNewRegister from "../../components/widgetNewRegister/WidgetNewRegister";
import WidgetLatestTransaction from "../../components/widgetLatestTransaction/WidgetLatestTransaction";
import WidgetNewSale from "../../components/widgetNewSale/WidgetNewSale";

const Home = () => {
  return (
    <div className="home">
      <Featureinfo />
      <Chart
        data={monthlyTrafficData}
        title="User Traffic"
        grid
        dataKey="ActiveUser"
      />

      <div className="homeWidgets">
        <WidgetNewRegister />
        <WidgetLatestTransaction />
        <WidgetNewSale />
      </div>
    </div>
  );
};

export default Home;
