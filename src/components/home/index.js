import {lazy} from "react";
const Desktop1 = lazy(()=>import("./desktop1"));
const Desktop2 = lazy(()=>import("./desktop2"));
const Desktop3 = lazy(()=>import("./desktop3"));
const Desktop4 = lazy(()=>import("./desktop4"));
const Desktop5 = lazy(()=>import("./desktop5"));
const Desktop6 = lazy(()=>import("./desktop6"));
const Desktop7 = lazy(()=>import("./desktop7"));



const Desktop={Desktop1,Desktop2,Desktop3,Desktop4,Desktop5,Desktop6,Desktop7};

export default Desktop;