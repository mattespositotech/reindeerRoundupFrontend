import { SemanticCOLORS } from "semantic-ui-react";
import { colorValues } from "../enums/ColorEnums";

function colorToStatus(value: number): SemanticCOLORS {
    return colorValues[value] as SemanticCOLORS
}

export {colorToStatus}