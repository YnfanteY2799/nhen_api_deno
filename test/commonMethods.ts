import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";


async function getData( link:string ){
    try{
        const response = await (await fetch(link)).text();
        return cheerio.load( response );
    }catch(e){
        console.error("Check proxy or any net Setting that you may have // Check Link");
    }
}

export default async function getDoujinBookObject( code:number|string ){

    // Response Object variables-parts
    const $ = await getData(`https://nhentai.net/${code}/`);

}

export async function getActualSeasonAnime(){
    
    const $ = (await getData("https://myanimelist.net/") || cheerio. );
    
    //Response Building Variables 
    let response:object;


    $('.widget-slide-outer ul[class$="widget-slide js-widget-slide"] li[class$="btn-anime"]').each((index:number , tag:any) => {


        $(tag).text()


    })

    // $('.widget-slide-outer');

}

getActualSeasonAnime();


async function GetGenericScrappingPage (link:string = "https://es.wikipedia.org/wiki/Web_scraping") {
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