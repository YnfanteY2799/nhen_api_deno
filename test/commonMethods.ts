import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";


async function getData( link:string ){
    try{
        const response = await (await fetch(link)).text();
        return cheerio.load( response );
    }catch{
        console.error("Check proxy or any net Setting that you may have // Check Link");
    }
}

async function _getDoujinBookObject( _code:number|string ){

    // Response Object variables-parts
    // const $ = await getData(`https://nhentai.net/${code}/`);

}

async function getActualSeasonAnime(){
    
    //Response Building Variables 
    let response:string[] = [];
    
    const $ = (await getData("https://myanimelist.net/") || cheerio );
    
    $('.widget-slide-outer ul[class$="widget-slide js-widget-slide"] li[class$="btn-anime"]')
    .each((_index:number , tag) => {
       response = [...response, $(tag).text()];
    })

    return response;
}

(async () => console.log( await getActualSeasonAnime() ) )();


async function _GetGenericScrappingPage (link:string) {

    link = link === "" ? "https://es.wikipedia.org/wiki/Web_scraping" : link; 
    return cheerio.load(await (await fetch(link)).text() );
}

// Temporal Test-Case
// try {
//     (async () => {
//         let $ = await GetGenericScrappingPage();
//         let returnee_text:string = "";
//         let reading_file = await Deno.readTextFile("./scripts.json");

//         $(".mw-parser-output p").each((i,x) => {
//             returnee_text += `${i} : ${$(x).text()} \n`;
//         });

//         returnee_text += `\n\n\n\n\n\n\n\n\n\n`;
//         returnee_text += `${reading_file}`;

//         await Deno.writeTextFile("./hello.txt", returnee_text);
//     })();

// }catch(e) {
//     throw Error(
//         e
//     );
// }

async function _getTheDenoTests(){




}


