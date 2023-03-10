
/* eslint-disable */
import React, { useState, useEffect, useId } from "react";
import { Dropdown } from "primereact/dropdown";
import Inputswitch from "../ui/RadioButton";
import dropdownJsonData from "../../utils/dummyData/commandAuditTrail.json";
import "./style.scss";
import OverLayHeader from "./OverLayHeader";
import { InputText } from "primereact/inputtext";
import ButtonComponent from "../ui/ButtonComponent";
import dropdownoption from "../../utils/dummyData/DropDownData.json";
import CustomDropdown from "../ui/CustomDropdown";
import MultiSelectDropdown from "../ui/MultiSelectDropdown";
import ToggleSwitch from "../customToggle";
import InputData from "../ui/InputComponent";

const overLayContent = (props) => {
  const { Cities, countries, states, District } = dropdownoption;
  const { Assests } = dropdownJsonData;

  const [country, setCountry] = useState();
  const [state, setState] = useState("");
  const [selectedCity1, setSelectedCity1] = useState(null);

  const [tableData, setTableData] = useState([]);
  const [toggle, settoggle] = useState(true);
  const [checked, setchecked] = useState(true);

  const [Exclude, setExculded] = useState();
  const [Cmd, setCmd] = useState("EDGE");

  const [ProtocolAssests, setProtocolAssests] = useState("http");
  const [Web, setWeb] = useState("WindSCADA");
  const [CrendenData, setCrendenData] = useState("1");

  const [formvalues, setFormValues] = useState();
  const [formError, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [selectedCities1, setSelectedCities1] = useState(null);
  const [city, setCity] = useState("");
  const [districtt, setDistrict] = useState("");

  const [value1, setValue1] = useState("");

  const handleCountry = (e) => {
    setCountry(e.value);
    handleState(e.value.id);
  };

  const handleState = (id) => {
    states.map((e) => {
      if (id == e.id) {
        setState(e.name);
      }
    });

    handleCity(id);
  };

  const handleCity = (id) => {
    Cities.map((e) => {
      if (id == e.id) {
        setCity(e.name);
      }
    });
    handleDistrict(id);
  };

  const handleDistrict = (id) => {
    District.map((e) => {
      if (id == e.id) {
        setDistrict(e.name);
      }
    });
  };

  const hello = (e) => {
    setExculded(e.target.value);
  };
  const Adapter = (e) => {
    setCmd(e.target.value);
  };
  const Protocol = (e) => {
    setProtocolAssests(e.target.value);
  };
  const WebServicee = (e) => {
    setWeb(e.target.value);
  };
  const CredenData = (e) => {
    setCrendenData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const save = () => {
    const data = {
      Id: state,
      sitename: country.name,
      site_Id: state,
      src_Id: city,
      source_Id: districtt,
      sentBy: value1,
      receivedAt: toggle == true ? "yes" : "No",
      timer: Exclude,
      action: Cmd,
      protocol: ProtocolAssests,
      webService: Web,
      credential: CrendenData,
      Enable: checked == true ? "yes" : "No",
    };

    const element = document.querySelector(
      "#post-request-error-handling .article-id"
    );
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3001/posts", requestOptions)
      .then((response) => response.json())
      .then((json) => json.data)
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <OverLayHeader />
          <div className="Main_Heading">
            <div>
              <div className="OverView">Overview</div>
              <div className="Site_MainHeading">Site Details</div>
              <div className="Site_Heading">
                <div>
                  <CustomDropdown
                    label={'Site Name'}
                    options={countries}
                    value={country}
                    optionLabel={"name"}
                    className="SiteId"
                    placeholder="select"
                    appendTo="self"
                    onChange={handleCountry}
                    showOnFocus={""}
                  />
                </div>
                <div className="SiteIDD">
                  <InputData
                    label={"Site Id"}
                    onChange={handleState}
                    className="label-field"
                    text="SrcId"
                    name="SrcId"
                    options={states}
                    value={state ? state : "-"} // that is called terinary opertor
                    disabled
                  />
                </div>
                <div className="heading">
                  <InputData
                    label={"Src Id"}
                    className="label-field"
                    text="SrcId"
                    name="SrcId"
                    disabled
                    id="ddlCountry"
                    options={Cities}
                    onChange={handleCity}
                    value={city ? city : "-"}
                  />
                </div>
              </div>
            </div>
            <div className="Sourceid">
              <div>
                <InputData
                  label={"Source ID"}
                  className="label-field"
                  text="SorceId"
                  name="SourceId"
                  disabled
                  options={District}
                  value={districtt ? districtt : "-"}
                  onChange={handleDistrict}
                />
              </div>
              <div className="WebHMI">
                <InputData
                  label={"Web HMI URL"}
                  className="Site_Heading_text"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                />
              </div>
              <div>
                <CustomDropdown
                  label={'Cmd Adapter Id'}
                  options={dropdownJsonData.CmdAdapter.map((t) => ({
                    label: t.Cmd,
                    value: t.Cmd,
                  }))}
                  value={Cmd}
                  className="CmdAdapter"
                  appendTo="self"
                  placeholder="select"
                  onChange={Adapter}
                  showOnFocus={""}
                />
              </div>
            </div>
            <hr className="hr_heading"></hr>
            <div className="Application" style={{ color: "white" }}>
              Application Configuration
            </div>
            <div className="Application_title">
              <div className="toggle">
                <p className="ExcludeAssests" style={{ color: "white" }}>
                  {" "}
                  Automation
                </p>
                <ToggleSwitch
                  id="newsletter"
                  checked={toggle}
                  onChange={() => settoggle(!toggle)}
                />
              </div>
              <div className="Exclude_heading">
                <MultiSelectDropdown
                  className="Exlude"
                  label="Exclude Assets"
                  options={dropdownJsonData.Assests.map((result) => ({
                    label: result.Aname,
                    value: result.Aname,
                  }))}
                  value={Exclude}
                  appendTo="self"
                  onChange={hello}
                  filter
                  maxSelectedLabels={3}
                />
              </div>
            </div>

            <div>
              <hr className="hr"></hr>
              <h4 className="Source_Protocol">
                Source Protocol Configuration
              </h4>
              <div className="DropSource">
                <div>
                  <CustomDropdown
                    label={'Protocol'}
                    options={dropdownJsonData.Proto.map((result) => ({
                      label: result.PName,
                      value: result.PName,
                    }))}
                    value={ProtocolAssests}
                    className="Protocol"
                    placeholder="select"
                    appendTo="self"
                    showOnFocus={""}
                  />
                </div>
                <div className="WebService_Heading">
                  <CustomDropdown
                    label={'WebService Type'}
                    options={dropdownJsonData.WebService.map((result) => ({
                      label: result.WebName,
                      value: result.WebName,
                    }))}
                    value={Web}
                    className="DropDownItems"
                    placeholder="select"
                    appendTo="self"
                    onChange={WebServicee}
                    showOnFocus={""}
                  />
                </div>
              </div>
              <div className="CrdentialData">
                <div>
                  <CustomDropdown
                    label={'Credentials'}
                    options={dropdownJsonData.Credential.map((result) => ({
                      label: result.Credent,
                      value: result.Credent,
                    }))}
                    value={CrendenData}
                    className="Creden"
                    placeholder="select"
                    appendTo="self"
                    onChange={CredenData}
                    showOnFocus={""}
                  />
                </div>
                <div className="Enable_btn">
                  <p className="Proto" style={{ color: "white" }}>
                    Enable/Disable
                  </p>
                  <div>
                    <ToggleSwitch
                      id="overlay-toogle2"
                      checked={checked}
                      onChange={() => setchecked(!checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" Btnn">
            <ButtonComponent className="cancel-btnn" buttonText={"Cancel"} />
            <ButtonComponent
              className="save-btnn"
              onClick={() => save()}
              buttonText={"Save"}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default React.memo(overLayContent);