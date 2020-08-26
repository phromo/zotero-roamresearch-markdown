{
"translatorID":"a0e7c0cd-5776-4f7f-a77a-357744452553",
"translatorType":2,
"label":"RoamMarkdown",
"creator":"Martin Lindvall",
"target":"md",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"lastUpdated":"2020-07-17 22:27:00"
}

function doExport() {
  var item;
  while (item = Zotero.nextItem()) {
    var creatorsS = item.creators[0].lastName;
    if (item.creators.length>2) {
      creatorsS += " et al.";
    } else if (item.creators.length==2) {
      creatorsS += " & " + item.creators[1].lastName;    
    }

    var titleS = (item.title) ? item.title : "(no title)";
    
    var date = Zotero.Utilities.strToDate(item.date);
    var dateS = (date.year) ? date.year : item.date;    

    Zotero.write('[' + creatorsS + ', ' + titleS + ' (' + dateS + ')' + ']');

    var library_id = item.libraryID ? item.libraryID : 0;    
    var itemLink = 'zotero://select/items/' + library_id + '_' + item.key;
    Zotero.write('(' + itemLink + ')');
  }
}
