import { getDoujinBookObject } from "./common/commonMethods.ts";


getDoujinBookObject("")
.then(x => console.log(x.html()));
