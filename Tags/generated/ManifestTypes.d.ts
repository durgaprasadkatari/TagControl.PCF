/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    Tags: ComponentFramework.PropertyTypes.StringProperty;
    ReadOnly: ComponentFramework.PropertyTypes.EnumProperty<"True" | "False">;
}
export interface IOutputs {
    Tags?: string;
}
