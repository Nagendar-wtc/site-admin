import request from "../utils/request";
import { UPDATE_STATIC_KEY_VALUE } from "../utils/constants";



export const updateStaticDataKeyValues = (key, value) => {
    return {
        type: UPDATE_STATIC_KEY_VALUE,
        key: key,
        value: value,
    };
};

export const updateTheme = (newTheme, oldTheme) => async (dispatch) => {
    document.documentElement.classList.add(`theme-${newTheme}`);
    document.documentElement.classList.remove(`theme-${oldTheme}`);
    dispatch(updateStaticDataKeyValues("theme", newTheme));

};


// dispatch this action to fetch language labels and update the language information in store
export const getLanguage = (lang_code) => async (dispatch) => {
    // const localizationInfo = await request(`${API_BASE_URL}${GET_LOCALIZATION_INFO}`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         language: lang_code,
    //         types: JSON.parse(process.env.REACT_APP_LANGUAGE_REQUEST_PARAMS),
    //     }),
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    let formattedLang = {languageId:1};
    // if (localizationInfo.response) {
    //     let res = localizationInfo.response;
    //     let allObjectsKeys = Object.keys(res);
    //     let langArray = [];
    //     let langArrayForName = {};
    //     allObjectsKeys.forEach((x) => {
    //         if (Array.isArray(res[x])) {
    //             res[x].forEach((label) => {
    //                 var upperLabel = label.elId && label.elId.toUpperCase();
    //                 langArray.push(label);
    //                 langArrayForName[upperLabel] = label;
    //             });
    //         }
    //     });
    //     formattedLang = {
    //         languageLabels: langArray,
    //         langaugeLabelsForNames: langArrayForName,
    //         languageId: res.languageId,
    //     };
    // }
    dispatch(updateStaticDataKeyValues("languages", formattedLang));
    dispatch(updateStaticDataKeyValues("language_code", lang_code));
};

export const getAppInitialData = () => async (dispatch) => {
    // initial data to fetch app static information
    // dispatch(getLanguage(lang || "ENG"));
    dispatch(getLanguage("ENG"));
};