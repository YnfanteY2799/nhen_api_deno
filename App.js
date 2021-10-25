import { cheerio  } from "https://deno.land/x/cheerio@1.0.4/mod.ts";


async function loadData(link = ""){

    return cheerio.load(await (await fetch(link)).text());
}


// loadData("https://nhentai.net/")
// .then(x => console.log(x))