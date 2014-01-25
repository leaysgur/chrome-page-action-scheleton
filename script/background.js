// このファイルは、content_script.jsからリクエストを受け取って、アドレスバーにアイコンを表示する。
;(function(global) {
  'use strict';

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
  
    sendResponse({});
  });

}(this.self || global));