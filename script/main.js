// content_script.jsによって埋め込まれ実行されるメインのスクリプト。
;(function(global) {
  'use strict';

  console.log('Do something!');

}(this.self || global));