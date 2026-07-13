function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('영어 단어 식물 키우기')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getWordList() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  return data.slice(1).filter(row => row[0]).map(row => ({
    word: row[0].toString().trim().toLowerCase(),
    meaning: row[1].toString().trim()
  }));
}
