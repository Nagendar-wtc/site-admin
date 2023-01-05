

/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import Inputswitch from "../ui/RadioButton";
import dropdownJsonData from "../../utils/dummyData/commandAuditTrail.json";
import "./style.scss";
import { InputText } from "primereact/inputtext";
import ButtonComponent from "../ui/ButtonComponent";
import MultiSelectDropdown from "../ui/MultiSelectDropdown";
import OverLayHeader from "./OverLayHeader";
import dropdownoption from "../../utils/dummyData/DropDownData.json";
import OverLayEditHeader from "./OverLayAddSiteHeader";
import InputData from "../ui/InputComponent/index"

const OverLayEdit = (props) => {
  const { edittableItem } = props;
  // console.log(edittableItems,"dddd")
  // const {selectedData}= props

  // const { Cities, countries, states, District } = dropdownoption;
  const { Assests } = dropdownJsonData;

  const [country, setCountry] = useState();
  const [state, setState] = useState("");
  const [selectedCity1, setSelectedCity1] = useState(null);

  const [tableData, setTableData] = useState([]);
  const [toggle, settoggle] = useState(
    props.edittableItem.receivedAt == "yes" ? true : false
  );
  const [checked, setchecked] = useState(
    props.edittableItem.Enable ==  "yes" ? true : false
  );

  const [Exclude, setExculded] = useState(props.edittableItem.Assets);
  const [Cmd, setCmd] = useState(props.edittableItem.action);
  console.log(props.edittableItem.protocol, "31 protocol");
  const [ProtocolAssests, setProtocolAssests] = useState(
    props.edittableItem.protocol
  );
  console.log(props.edittableItem.protocol, "31 protocol");
  const [Web, setWeb] = useState(props.edittableItem.webService);
  console.log(props.edittableItem.webService, "31 protocol");
  const [CrendenData, setCrendenData] = useState(
    props.edittableItem.credential
  );

  const initialValues = { SiteId: "" };
  const [formvalues, setFormValues] = useState();
  const [formError, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [webHmi,setWebHmi]=useState(props.edittableItem.sentBy)

  // const [selectedCities1, setSelectedCities1] = useState(null);
  // const [city, setCity] = useState("");
  // const [districtt, setDistrict] = useState("");

  // const handleCountry = (e) => {
  //   setCountry(e.value);
  //   handleState(e.value.id);
  // };

  // const handleState = (id) => {
  //   states.map((e) => {
  //     if (id == e.id) {
  //       setState(e.name);
  //     }
  //   });

  //   handleCity(id);
  // };

  // const handleCity = (id) => {
  //   Cities.map((e) => {
  //     if (id == e.id) {
  //       setCity(e.name);
  //     }
  //   });
  //   handleDistrict(id);
  // };

  // const handleDistrict = (id) => {
  //   District.map((e) => {
  //     if (id == e.id) {
  //       setDistrict(e.name);
  //     }
  //   });
  // };

  const setData = {
    // // site_Id: state,
    sitename: edittableItem.sitename,
    id: edittableItem.id,
    src_Id: edittableItem.src_Id,
    source_Id: edittableItem.source_Id,
    sentBy:webHmi,
    receivedAt: toggle === true ? "Yes" : "No",
    timer: Exclude,
    action: Cmd,
    protocol: ProtocolAssests,
    webService: Web,
    credential: CrendenData,
    Enable: checked === true ? "Yes" : "No",
  };

  const save = (e) => {
    debugger;
    // e.preventDefault();
    // const changeData={};

    // useEffect(()=>{
    // const  edittable  = id
    fetch("http://localhost:3001/posts/" + edittableItem.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(setData),
    })
      .then((response) => response.json())
      .then((json) => json.setData);
    alert("edit successfully").catch((error) => {
      console.error("There was an error!", error);
    });
  };

  console.log(edittableItem, "101 edit");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
    console.log(formvalues);
    setWebHmi(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formvalues));
    // setIsSubmit(true);
  };
  // useEffect(() => {
  //   if (Object.keys(formError).length === 0 && isSubmit) {
  //     console.log(formvalues);
  //   }
  // }, [formError]);
  // const validate = (values) => {
  //   const regex =
  //     /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  //   const errors = {};
  //   if (!values.SiteId) {
  //     errors.SiteId = "Site Id is required";
  //   }
  //   if (!values.SrcId) {
  //     errors.SrcId = "Src Id is required";
  //   }
  //   if (!values.SourceId) {
  //     errors.SourceId = "Source Id is required";
  //   }
  //   if (!values.WebHMIURL) {
  //     errors.WebHMIURL = "WebHMIURL Id is required";
  //   } else if (!regex.test(values.WebHMIURL)) {
  //     errors.WebHMIURL = "This is not valid Url !";
  //   }
  //   return errors;
  // };






  const onDelete = async (id) => {
    await fetch(`https://3000/posts/${edittableItem.id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(country, "countriess");
  console.log(formvalues);

  return (
    <React.Fragment>
      <OverLayEditHeader/>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="Main_Heading">
            <div className="Site_detail">Site Details</div>
            <div></div>
            <div className="Site_Heading_wrapper">
              <div>
                <p className="Title_Heading_wrapper">Site Name</p>
                <p style={{ color: "darkgrey" }}>{edittableItem.sitename}</p>
              </div>
              <div className="">
                <p className="Title_Heading_wrapper">Site Id </p>
                <p style={{ color: "darkgrey" }}>{edittableItem.Id}</p>
              </div>
              <div className="heading">
                <p className="Title_Heading_wrapper">Src Id</p>
                <p style={{ color: "darkgrey" }}>{edittableItem.src_Id}</p>
              </div>
              <div>
                <p className="Title_Heading_wrapper">Source ID</p>
                <p style={{ color: "darkgrey" }}>{edittableItem.source_Id}</p>
              </div>

              <div className="">
                {/* <p className="Title_Heading_wrapper"></p> */}


                <InputData
              label={"WebHMIURL"}
              autoComplete="off"
                  className="Site_Heading_text"
                  text="WebHMIURL"
                  name="WebHMIURL"
                  value={webHmi}
                  onChange={handleChange}
                />
                 <p style={{ color: "red" }}>{formError.WebHMIURL}</p>
              </div>

              <div>
                <p className="Title_Heading_wrapper" style={{ color: "white" }}>
                  cmdAdapterId
                </p>

                <Dropdown
                  className="CmdAdapter"
                  options={dropdownJsonData.CmdAdapter.map((t) => ({
                    label: t.Cmd,
                    value: t.Cmd,
                  }))}
                  onChange={Adapter}
                  appendTo="self"
                  placeholder=""
                  value={Cmd}
                  showOnFocus={""}
                />
              </div>
            </div>

            <hr />
            <div className="Application" style={{ color: "white" }}>
              Application Configuration
            </div>
            <div className="Application_title">
              <div className="toggle">
                <Inputswitch
                 label="Automation"
                  checked={toggle}
                  onChange={() => settoggle(!toggle)}
                />
              </div>
              <div className="Exclude_Heading_Title">
                <MultiSelectDropdown
                    label="Exclude Assets"
                    className="Exlude"
                    options={dropdownJsonData.Assests.map((result) => ({
                    label: result.Aname,
                    value: result.Aname,
                  }))}
                  value={Exclude}
                  appendTo="self"
                  onChange={hello}
                /> 
              </div>
            </div>

            <div>
              <hr className="hr"></hr>
              <h4 className=" Source_Protocol">
                Source Protocol Configuration
              </h4>
              <div className="DropSource">
                <div>
                  <p className="Proto" style={{ color: "white" }}>
                    Protocol
                  </p>
                  <Dropdown
                    className="Protocol"
                    options={dropdownJsonData.Proto.map((result) => ({
                      label: result.PName,

                      value: result.PName,
                    }))}
                    appendTo="self"
                    onChange={Protocol}
                    placeholder=""
                    value={ProtocolAssests}
                    showOnFocus={""}
                  />
                </div>

                <div className="WebService_Edit">
                  <p className="Proto" style={{ color: "white" }}>
                    WebService Type
                  </p>
                  <Dropdown
                    className="DropDownItems"
                    options={dropdownJsonData.WebService.map((result) => ({
                      label: result.WebName,
                      value: result.WebName,
                    }))}
                    onChange={(event) => WebServicee(event)}
                    placeholder=""
                    appendTo="self"
                    value={Web}
                    showOnFocus={""}
                  />
                </div>
              </div>
              <div className="CrdentialData_Heading">
                <div>
                  <p className="Creden" style={{ color: "white" }}>
                    Credentials
                  </p>
                  <Dropdown
                    className="Creden"
                    options={dropdownJsonData.Credential.map((result) => ({
                      label: result.Credent,
                      value: result.Credent,
                    }))}
                    onChange={CredenData}
                    placeholder=""
                    appendTo="self"
                    value={CrendenData}
                    showOnFocus={""}
                  />
                </div>
                <div className="Enable_btnEdit">
                  <div>
                    <Inputswitch
                     label="Enable/Disable"
                      checked={checked}
                      onChange={(e) => setchecked(e.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <hr className="hr_heading"></hr>
                <div className="Audit">Audit</div>
                {/* <div className="Audit_Heading"> */}
                <div className="LastUPdate">
                  <div>
                    <p className="Update_By" style={{ color: "white" }}>
                      Last Updated By
                    </p>

                    <p style={{ color: "darkgrey" }}>
                      {"saqib"}
                    </p>
                  </div>

                  <div>
                    <p className="Update_By" style={{ color: "white" }}>
                      Last Updated Date
                    </p>

                    <p style={{ color: "darkgrey" }}>
                      {'19/12/22'}
                    </p>
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

export default React.memo(OverLayEdit);
