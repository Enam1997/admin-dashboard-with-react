import React from "react";
import "./widgetLatestTransaction.css";

const WidgetLatestTransaction = () => {
  const StatusButton = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transaction</h3>
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
              src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Begum_Zia_Book-opening_Ceremony%2C_1_Mar%2C_2010_cropped.jpg"
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

export default WidgetLatestTransaction;
