import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { debug } from "util";
import { number } from "prop-types";

export class Tags implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    /**
    * Variables for HTML element
    */
    private tagsElement: HTMLElement;
    private spaceElement: HTMLElement;
    private refreshButton: HTMLElement;
    private closeButton: HTMLElement;
    private DivElement: HTMLElement;
    private hiddenSpan: HTMLElement;
    private plusIcon: HTMLElement;
    private textInput: HTMLElement;

    /**
    * Variables for Properties
    */
    private tagsString: string;

    /**
     * Variables for Event Listener
     */
    private refreshClicked: EventListenerOrEventListenerObject;
    private onChangeDivElement: EventListenerOrEventListenerObject;
    private closeClicked: EventListenerOrEventListenerObject;
    private plusClickEvent: EventListenerOrEventListenerObject;
    private textBoxBlurEvent: EventListenerOrEventListenerObject;

    /**
    * Local Variables
    */
    private localContext: ComponentFramework.Context<IInputs>;
    private localNotifyOutputChanged: () => void;
    private localContainer: HTMLDivElement;

	/**
	 * Empty constructor.
	 */
    constructor() {

    }

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
        // Init local variables
        this.localContext = context;
        this.localNotifyOutputChanged = notifyOutputChanged;
        this.localContainer = container;
        this.onChangeDivElement = this.divChanged.bind(this);
        this.closeClicked = this.closeButtonClicked.bind(this);
        this.plusClickEvent = this.plusButtonClicked.bind(this);
        this.textBoxBlurEvent = this.textBoxBlurEventFired.bind(this);

        /* Register EventHandler
        //this.refreshClicked = this.refreshClick.bind(this);
        

        //// Refresh button
        //this.refreshButton = document.createElement("button");
        //this.refreshButton.setAttribute("type", "button");
        //this.refreshButton.setAttribute("value", "Refresh");
        //this.refreshButton.setAttribute("class", "btn btn-default btn-sm glyphicon glyphicon-refresh");
        //this.refreshButton.addEventListener("click", this.refreshClick);

        // Add elements to container
        //this.localContainer.appendChild(this.refreshButton); */

        // CRM attributes bound to the control properties. 
        // @ts-ignore 
        var crmTagStringsAttribute = context.parameters.Tags.attributes.LogicalName;
        var _readonlySelection = context.parameters.ReadOnly.raw || "False";
        var readonlySelection = (_readonlySelection == "True") ? true : false;
        // @ts-ignore 
        var crmTagStringsAttributeValue = Xrm.Page.getAttribute(crmTagStringsAttribute).getValue();
        this.DivElement = document.createElement("div");
        if (readonlySelection)
        {
            if (crmTagStringsAttributeValue != null) {
                var data = crmTagStringsAttributeValue.split(",");
                for (var i in data) {
                    // Create controls
                    // Tag element
                    this.tagsElement = document.createElement("span");
                    this.tagsElement.setAttribute("class", "badge badge-pill badge-primary");
                    this.tagsElement.innerHTML = data[i];
                    this.hiddenSpan = document.createElement("span");
                    this.hiddenSpan.setAttribute("aria-hidden", "true");
                    this.hiddenSpan.setAttribute("class", "close");
                    this.hiddenSpan.setAttribute("contenteditable", "false");
                    this.tagsElement.appendChild(this.hiddenSpan);
                    this.DivElement.appendChild(this.tagsElement);
    
                    // Space element
                    this.spaceElement = document.createElement("span");
                    this.spaceElement.innerHTML = "  ";
                    this.DivElement.appendChild(this.spaceElement);
                }
            }
        }
        else
        {
            //this.DivElement.setAttribute("contentEditable", "true");
            this.DivElement.addEventListener("blur", this.onChangeDivElement);
            if (crmTagStringsAttributeValue != null) {
                var data = crmTagStringsAttributeValue.split(",");
                for (var i in data) {
                    // Create controls
                    // Tag element
                    this.tagsElement = document.createElement("span");
                    this.tagsElement.setAttribute("class", "badge badge-pill badge-primary");
                    this.tagsElement.innerHTML = data[i];
                    this.hiddenSpan = document.createElement("span");
                    this.hiddenSpan.setAttribute("aria-hidden", "true");
                    this.hiddenSpan.setAttribute("class", "close");
                    this.hiddenSpan.setAttribute("contenteditable", "false");
                    this.hiddenSpan.innerHTML = "&nbsp;&times;";
                    this.hiddenSpan.addEventListener("click", this.closeClicked);
                    this.tagsElement.appendChild(this.hiddenSpan);
                    this.DivElement.appendChild(this.tagsElement);

                    // Space element
                    this.spaceElement = document.createElement("span");
                    this.spaceElement.innerHTML = "  ";
                    this.DivElement.appendChild(this.spaceElement);
                }
            }

            this.plusIcon = document.createElement("i");
            this.plusIcon.setAttribute("class", "plusButton");
            this.plusIcon.setAttribute("contenteditable", "false");
            this.plusIcon.addEventListener("click", this.plusClickEvent);
            this.DivElement.appendChild(this.plusIcon);
            this.localContainer.appendChild(this.DivElement);
        }
    }
    public divChanged(evt: Event): void {
        var divString = "";
        var spanElements = this.DivElement.getElementsByClassName("badge-primary");
        for (let i = 0; i < spanElements.length; i++) {
            var rootSpan = <HTMLElement>spanElements[i];
            var firstChild = <HTMLElement>rootSpan.firstChild;
            if (i == 0) {
                divString = <string>firstChild.textContent;
            }
            else {
                divString = divString + "," + firstChild.textContent;
            }
        }

        
        var re = /  /gi;
        // @ts-ignore 
        var crmTagStringsAttribute = this.localContext != null && this.localContext.parameters != null ? this.localContext.parameters.Tags.attributes.LogicalName : null;
        // @ts-ignore
        Xrm.Page.getAttribute(crmTagStringsAttribute).setValue(divString.replace(re, ","));

    }

    public closeButtonClicked(evt: Event): void {
        var currentSpan = evt.target as HTMLElement;
        var parentHTMLNode = <HTMLElement>currentSpan.parentElement;
        if (currentSpan != null) {
            this.DivElement.removeChild(parentHTMLNode);
            this.divChanged(evt);
        }
    }

    public plusButtonClicked(evt: Event): void {
        this.textInput = document.createElement("input");
        this.textInput.setAttribute("type", "text");
        this.textInput.addEventListener("blur", this.textBoxBlurEvent);
        this.DivElement.appendChild(this.textInput);
    }

    public textBoxBlurEventFired(evt: Event): void {
        var newTagText = (<HTMLInputElement>evt.target).value;
        this.tagsElement = document.createElement("span");
        this.tagsElement.setAttribute("class", "badge badge-pill badge-primary");
        this.tagsElement.innerHTML = newTagText;
        this.hiddenSpan = document.createElement("span");
        this.hiddenSpan.setAttribute("aria-hidden", "true");
        this.hiddenSpan.setAttribute("class", "close");
        this.hiddenSpan.setAttribute("contenteditable", "false");
        this.hiddenSpan.innerHTML = "&nbsp;&times;";
        this.hiddenSpan.addEventListener("click", this.closeClicked);
        this.tagsElement.appendChild(this.hiddenSpan);
        this.DivElement.appendChild(this.tagsElement);

        // Space element
        this.spaceElement = document.createElement("span");
        this.spaceElement.innerHTML = "  ";
        this.DivElement.appendChild(this.spaceElement);
        this.divChanged(evt);
    }

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Add code to update control view

        // @ts-ignore 
        // Add code to update control view

        // CRM attributes bound to the control properties. 
        // @ts-ignore 
        var crmTagStringsAttribute = this.localContext != null && this.localContext.parameters != null ? this.localContext.parameters.Tags.attributes.LogicalName : null;
        var _readonlySelection = context.parameters.ReadOnly.raw || "False";
        var readonlySelection = (_readonlySelection == "True") ? true : false;
        // @ts-ignore 
        var crmTagStringsAttributeValue = crmTagStringsAttribute != null ? Xrm.Page.getAttribute(crmTagStringsAttribute).getValue() : "red,green,blue";

        // Delete all elements first
        var tagCollection = this.localContainer.getElementsByTagName("span");
        var loopLength = tagCollection.length;
        this.DivElement.innerHTML = "&nbsp;";

        if (readonlySelection)
        {
            if (crmTagStringsAttributeValue != null) {
                var data = crmTagStringsAttributeValue.split(",");
                // Add new tags
                for (var i in data) {
                    if (data[i] != "" && data[i] != "  " && data[i] != null) {
                        this.tagsElement = document.createElement("span");
                        this.tagsElement.setAttribute("class", "badge badge-pill badge-primary");
                        this.tagsElement.innerHTML = data[i];
                        this.hiddenSpan = document.createElement("span");
                        this.hiddenSpan.setAttribute("aria-hidden", "true");
                        this.hiddenSpan.setAttribute("class", "close");
                        this.hiddenSpan.setAttribute("contenteditable", "false");
                        this.tagsElement.appendChild(this.hiddenSpan);
                        this.DivElement.appendChild(this.tagsElement);
                        // Space element
                        this.spaceElement = document.createElement("span");
                        this.spaceElement.innerHTML = "  ";
                        this.DivElement.appendChild(this.spaceElement);
                    }
                }
            }
        }
        else
        {
            if (crmTagStringsAttributeValue != null) {
                var data = crmTagStringsAttributeValue.split(",");
                // Add new tags
                for (var i in data) {
                    if (data[i] != "" && data[i] != "  " && data[i] != null) {
                        // Create controls
                        // Tag element
                        this.tagsElement = document.createElement("span");
                        this.tagsElement.setAttribute("class", "badge badge-pill badge-primary");
                        this.tagsElement.innerHTML = data[i];
                        this.hiddenSpan = document.createElement("span");
                        this.hiddenSpan.setAttribute("aria-hidden", "true");
                        this.hiddenSpan.setAttribute("class", "close");
                        this.hiddenSpan.setAttribute("contenteditable", "false");
                        this.hiddenSpan.innerHTML = "&nbsp;&times;";
                        this.hiddenSpan.addEventListener("click", this.closeClicked);
                        this.tagsElement.appendChild(this.hiddenSpan);
                        this.DivElement.appendChild(this.tagsElement);
    
    
                        // Space element
                        this.spaceElement = document.createElement("span");
                        this.spaceElement.innerHTML = "  ";
                        this.DivElement.appendChild(this.spaceElement);
                    }
                }
                
                //this.localContainer.appendChild(this.DivElement);
            }
    
            this.plusIcon = document.createElement("i");
            this.plusIcon.setAttribute("class", "plusButton");
            this.plusIcon.setAttribute("contenteditable", "false");
            this.plusIcon.addEventListener("click", this.plusClickEvent);
            this.DivElement.appendChild(this.plusIcon);
        }
    }

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
    public getOutputs(): IOutputs {
        return {
            Tags: this.tagsString
        };
    }

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
    public destroy(): void {
        this.refreshButton.removeEventListener("click", this.refreshClick);
    }

    /**
     * Custom Event Handlers
     */
    public refreshClick(evnt: Event): void {
        this.localNotifyOutputChanged();
    }
}
