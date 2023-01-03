// import React, { useRef, useState, useEffect } from "react";
// import { ProgressBar } from "primereact/progressbar";
// import "./style.scss";

// export default function ProgressBarComponent(props) {
//   let { ProgressClass, data } = props;
//   console.log(data);
//   let receivedTimestamp = new Date(parseInt(data.receivedTimestamp) * 1000);
//   let secondsDiff = (new Date().getTime() - receivedTimestamp.getTime()) / 1000;
//   if (secondsDiff <= 60) {
//     secondsDiff = 60 - secondsDiff;
//   }
//   const [value1, setValue1] = useState(secondsDiff);
//   const [percentvalue, setPercentValue] = useState();
//   const interval = useRef(null);

//   const displayValueTemplate = (value) => {
//     return <React.Fragment></React.Fragment>;
//   };

//   useEffect(() => {
//     if (secondsDiff <= 60) {
//       let val = value1;
//       let percentVal;
//       interval.current = setInterval(() => {
//         val = val - 1;

//         if (val === 0) {
//           val = 0;
//           percentVal = 0;
//           clearInterval(interval.current);
//         } else {
//           percentVal = (val / 60) * 100;
//         }
//         setValue1(val);
//         setPercentValue(percentVal);
//       }, 1000);
//       return () => {
//         if (interval.current) {
//           clearInterval(interval.current);
//           interval.current = null;
//         }
//       };
//     }
//   }, []);

//   const setColor = (value) => {
//     let color = "";

//     if (percentvalue < 30) {
//       color = "#ef5353";
//       let highlightDiv=document.querySelector('.row-class-'+data.id)
//       if(highlightDiv!=undefined)
//       {
//         highlightDiv.classList.add("highlight-class");
//       }
//     } else if (percentvalue >= 30 && percentvalue < 70) {
//       color = "#d98543";
//     } else {
//       color = "#b2aeaa";
//     }
//     return color;
//   };

//   return (
//     <div data-testid="progressbar-test">
//       <ProgressBar
//         value={percentvalue}
//         color={setColor(percentvalue)}
//         className={ProgressClass}
//         displayValueTemplate={displayValueTemplate}
//       ></ProgressBar>
//     </div>
//   );
// }
