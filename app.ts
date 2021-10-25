import { getData, getBookObject } from "./common/commonMethods.ts";
// 377477


getData("https://nhentai.net/")
.then(x => console.log(x.html()));
