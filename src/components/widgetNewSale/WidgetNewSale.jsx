import React from "react";
import "./widgetNewSale.css";

const WidgetNewSale = () => {
  const StatusButton = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetNewSale">
      <h3 className="widgetLargeTitle">New Sale</h3>
      <div className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Ammount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEjduiViaO1-iO37pKOCQuhLieeyIgpQkWm_w3Ye8epsAays5XjR0-qzucYvJzxUrcX8&usqp=CAU"
              alt=""
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">KhaledaZia</span>
          </td>
          <td className="widgetLargeDate">6 jan 2023</td>
          <td className="widgetLargeAmmount">$36.000</td>
          <td className="widgetLargeStatus">
            <StatusButton type="Approved" />
          </td>
        </tr>
      </div>
    </div>
  );
};

export default WidgetNewSale;
