import React, { useState, useEffect } from "react";
import { SELECT_OPTION } from "../constants";

export const SelectBox = ({ setSelectedTabInfo }) => {
  const initOption = Object.keys(SELECT_OPTION);

  // React Hooks
  const [service, setService] = useState(initOption[0]);
  const [serviceSub, setServiceSub] = useState(SELECT_OPTION[initOption[0]][0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(SELECT_OPTION[service]);
    setServiceSub(SELECT_OPTION[service][0]);
  }, [service]);

  useEffect(() => {
    setSelectedTabInfo({
      service,
      serviceSub,
    });
  }, [service, serviceSub, setSelectedTabInfo]);

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleServiceSubChange = (event) => {
    setServiceSub(event.target.value);
  };

  return (
    <div className="m-2 p-2 flex gap-2">
      <select
        className="w-1/3"
        value={service}
        onChange={handleServiceChange}
        data-testid="service-main"
      >
        {initOption.map((item, index) => (
          <option key={`${index}-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        className="w-2/3"
        value={serviceSub}
        onChange={handleServiceSubChange}
        data-testid="service-sub"
      >
        {items.map((item, index) => (
          <option key={`${index}-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
