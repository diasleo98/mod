import { useData } from "../contexts/dataContext";

export async function GetAllTerminals(){
    const response = await fetch(`http://localhost:3000/api/all`);
    const jsonResult = await response.json();
    console.log(jsonResult);
    var source = jsonResult.map((event) => ({
    id : event.ID, 
    terminalName: event.terminalName, 
    code: event.siteCode, 
    priority: event.terminalFocus, 
    city: event.city, 
    country: event.country, 
    state: event.region, 
    region : event.region, 
    manager: event.siteManager,
    ma1: event.address1,
    ma2: event.address2,
    zip: event.terminalZip,
    sa1: event.shippingAddress1,
    sa2: event.shippingAddress2,
    szip: event.shippingZip,
    scity: event.shippingCity,
    status: event.status,
    coRef: event.coLocatedRef,
    ownership: event.ownership,
    runBy: event.runBy,
    function: event.function,
    tz: event.terminalTimeZone,
    language: event.terminalLanguage,
    phone: event.emergencyPhone,
    comments: event.comments,
    url: event.url,
    attachments: event.Attachments,
    
    }));
    return source;
}

export async function GetTerminal(id){
    const response = await fetch(`http://localhost:3000/api/terminal/${id}`);
    const jsonResult = await response.json();
    console.log(jsonResult);
    var source = jsonResult.map((event) => ({
    id : event.ID, 
    terminalName: event.terminalName, 
    code: event.siteCode, 
    priority: event.terminalFocus, 
    city: event.city, 
    country: event.country, 
    state: event.region, 
    region : event.region, 
    manager: event.siteManager,
    ma1: event.address1,
    ma2: event.address2,
    zip: event.terminalZip,
    sa1: event.shippingAddress1,
    sa2: event.shippingAddress2,
    szip: event.shippingZip,
    scity: event.shippingCity,
    status: event.status,
    coRef: event.coLocatedRef,
    ownership: event.ownership,
    runBy: event.runBy,
    function: event.function,
    tz: event.terminalTimeZone,
    language: event.terminalLanguage,
    phone: event.emergencyPhone,
    comments: event.comments,
    url: event.url,
    attachments: event.Attachments,
    
    }));
    return source[0];
}