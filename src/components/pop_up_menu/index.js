import React from 'react'
import "./style.scss"
// import styled from 'styled-components';
import LandingPage from '../LandingPage';
import { Badge } from 'primereact/badge';
import tableJsonData from "../../utils/dummyData/commandAuditTrail.json"
import { useMemo } from 'react';




 const PopMenu = (props) => {

  console.log(props.assets,"assets-1")



    // const {value =[]} = props.rowData.timer;

    // const renderOptions = useMemo(()=>{

    //   return value.map(str=><div>{str}</div>)

    // },[value]);
    // return renderOptions;

    

    // const handleFilterChange = useCallback(
    //     (_, key, value) => setCurrentSearch({ key, value }),
    //     [setCurrentSearch]
    //   );
    
    //   const handleFilterApply = useCallback(
    //     (_, columnKey, value) => setFilterDefs(columnKey, value),
    //     [setFilterDefs]
    //   );
    
    //   const customCellFn = useCallback((columnKey, cellValue) => {
    //     const menuPopupCellFn = (values, emptyText) => {
    //       let cellElement = `${emptyText || ""}`;
    
    //       if (cellValue?.length > 0) {
    //         let badgeText = "";
    //         let text = cellValue.join(", ");
    //         const ellipsisTextLength = values?.title === "TEMPLATES" ? 42 : 24;
    
    //         if (
    //           cellValue.length > 1 &&
    //           text &&
    //           text.length > ellipsisTextLength + 1
    //         ) {
    //           const remainingCount =
    //             cellValue.length -
    //             text.slice(0, ellipsisTextLength).split(", ").length;
    
    //           if (remainingCount > 0) {
    //             badgeText = `+${
    //               cellValue.length -
    //               text.slice(0, ellipsisTextLength).split(", ").length
    //             }`;
    //           }
    //         }
    
    //         cellElement =
    //           !badgeText || cellValue.length === 1 ? (
    //             <TooltipCell tooltip={text}>{text}</TooltipCell>
    //           ) : (
    //             <div>
    //               <EllipsisDivWrapper>{text}</EllipsisDivWrapper>
    //               <PopupMenu {...values} data={cellValue}>
    //                 {cellValue.length > 1 ? (
    //                   <CellWrapBadge
    //                     color={globalColors.stone1}
    //                     label={badgeText}
    //                     small
    //                   />
    //                 ) : (
    //                   ""
    //                 )}
    //               </PopupMenu>
    //             </div>
    //           );
    //       }
    
    //       return cellElement;
    //     };
    


  return (
    <>
    {/* <div className='pop-wrapper'>
        <h3 style={{padding:'5px 5px 5px 10px',color:'#white',fontSize:'12px',backgroundColor:"#5A6978",borderTopRightRadius:'5px'}}>Excluded Assets</h3>
    <tr>23 assets</tr>
    <tr>49 asstes</tr>
    <tr>63 assets</tr>
    <tr>95 assets</tr>
    </div> */}

<div className='pop-wrapper'style={{zIndex:2}}>
<h3 style={{padding:'5px 5px 5px 10px',color:'#white',fontSize:'12px',backgroundColor:"#5A6978" ,borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>Excluded Assets <Badge value="7" severity="success">
      </Badge></h3>

    
        <table className='table-wrapper'>
            <tr>
                <td>23 assets</td>
            </tr>
            <tr>
                <td>24 assets</td>
            </tr>
            <tr>
                <td>63 assets</td>
            </tr>
            <tr>
                <td>25 assets</td>
            </tr>
            <tr>
                <td>25 assets</td>
            </tr>
            <tr>
                <td>25 assets</td>
            </tr>
            <tr>
                <td>24 assets</td>
            </tr>
            <tr>
                <td>95 assets</td>
            </tr>
        </table>
    </div>
    </>
  )
};

export default PopMenu ;