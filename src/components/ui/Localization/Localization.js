import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import subscriptionUtility from "../../../utils/utility";

let utility = (subscriptionUtility) ? subscriptionUtility.utility : null;

const Localization = ({ children }) => {
    
    let selectorData = useSelector((state) => {
        let languages = state.staticReducer.languages || {};
        return languages.languageId;
    });

    const [lang, setLang] = useState(selectorData);

    useEffect(() => {
        setLang(lang);
    }, [lang]);

    return (
        <>
            {(utility) ? utility.getHMILanguageLabel(children) : ""}
        </>
    );
};
export default React.memo(Localization);
