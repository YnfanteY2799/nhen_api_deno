import { cheerio  } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

// 377477
async function loadData(link = ""){
    try{
        return cheerio.load(await (await fetch(link)).text());
    }catch(e){
        throw Error("If you ran this with --allow net, please check for proxy interference or if page is up!");
    }
}

async function getBookObject(book_code = ""){

    let $ = await loadData(`https://nhentai.net/g/${ ( book_code | 0 )}/`);
}


// loadData("https://nhentai.net/")
// .then(x => console.log(x))