import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

// 377477

async function getData(link:string = ""){
    try{
        return cheerio.load( await (await fetch(`${link}`)).text() );
    }catch(e){
        throw Error("Check if you ran the file with --allow-net or proxy/link!!!");
    }
}

async function getBookObject(book_code:any = ""){

    let $ = await getData(`https://nhentai.net/g/${ (book_code | 0) }/`);




}



