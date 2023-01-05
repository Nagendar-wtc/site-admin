import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import React, { useState } from "react";
import "./style.scss";

export const CustomFilter = ({ options, optionsList }) => {
  debugger
  const [searchValue, setSearchValue] = useState("");
  const [checkList, setCheckList] = useState(options.filterModel.value || []);
  const [selectAll, setSelectAll] = useState(false);
  const [searchResult, setSearchResult] = useState(optionsList);
  const oncheckboxChange = (e) => {
    let selectedItems = [...checkList];

    if (e.checked) selectedItems.push(e.value);
    else selectedItems.splice(selectedItems.indexOf(e.value), 1);

    setCheckList(selectedItems);
    options.filterCallback(selectedItems);
  };

  const onSelectAllChange = (e) => {
    if (e.checked) {
      debugger
      setSelectAll(true);
      options.filterCallback(optionsList);
    } else {
      setSelectAll(false);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    let result =
      optionsList.length &&
      optionsList.filter((item) => {
        return (
          e.target.value !== "" &&
          item.value.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
    if (e.target.value === "") {
      result = optionsList || [];
    }
    setSearchResult(result || []);
  };
  return (
    <React.Fragment>
      <span data-testid="filter-heading">{options.field}</span>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search"
          data-testid="filter-input"
        />
      </span>
      <div className="custom-wrapper">
        <Checkbox
          name="select All"
          value={options.value}
          onChange={onSelectAllChange}
          checked={selectAll}
          data-testid="filter-select-all"
        />

        <label>select all</label>

        {searchResult.length &&
          searchResult.map((option, index) => {
            return (
              <div className="field-checkbox">
                <Checkbox
                  name={option.name}
                  value={option.value}
                  onChange={oncheckboxChange}
                  checked={selectAll || checkList.indexOf(option.value) !== -1}
                  data-testid={`filter-checkbox-${index}`}
                />
                <label>{option.name}</label>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};
