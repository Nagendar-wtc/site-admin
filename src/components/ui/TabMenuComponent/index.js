import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";

const TabMenuComponent = (props) => {
    let {tabOptions=[{ label: "test" }], activeIndex=0, onChange, className} = props;
  const [activeTabIndex, setActiveTabIndex] = useState(activeIndex);

  return (
    <div>
      <TabMenu
        model={tabOptions}
        activeIndex={activeTabIndex}
        onTabChange={(e) => {
            setActiveTabIndex(e.index);
            onChange(e);
        }}
        className={className}
      />
    </div>
  );
};
export default TabMenuComponent;
