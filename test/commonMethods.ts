import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

async function GetGenericScrappingPage (link:string = "https://es.wikipedia.org/wiki/Web_scraping") {
    return cheerio.load(await (await fetch(link)).text() );
}

try {

    (async () => {
        let $ = await GetGenericScrappingPage();
        let returnee_text:string = "";
        let reading_file = await Deno.readTextFile("./scripts.json");

        $(".mw-parser-output p").each((i,x) => {
            returnee_text += `${i} : ${$(x).text()} \n`;
        });

        returnee_text += `\n\n\n\n\n\n\n\n\n\n`;
        returnee_text += `${reading_file}`;

        await Deno.writeTextFile("./hello.txt", returnee_text);
    })();

}catch(e) {
    throw Error(
        e
    );
}