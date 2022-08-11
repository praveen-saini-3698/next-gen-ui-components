import { RecordValueType } from "./types";

export const convertValue = (type: RecordValueType, value: any) => {
    if ([null, undefined, "", 0, [], {}].includes(value)) return value;
    let formattedValue = null;
    switch (type) {
        case "boolean":
            formattedValue = ["yes", "true", true, 1, "1"].includes(value) ? "Yes" : "No";
            break;
        case "number":
            formattedValue = parseFloat(value).toFixed(2);
            break;
        case "date":
            formattedValue = new Date(value).toLocaleString('default', {
                month: 'long',
                year: 'numeric',
                day: 'numeric'
            });
            break;
        case "datetime":
            formattedValue = new Date(value).toLocaleString('default', {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });
            break;
        case "amount":
            formattedValue = parseFloat(Number(value).toFixed(2)).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
            break;
        case "avatar":
            formattedValue = value;
            break;
        case "string":
            formattedValue = JSON.stringify(value).replace(/"/g, '');
    };
    return formattedValue;
};