//Copy the following script into the URL tab
javascript:(function translate(){function se(d) {return d.selection ? d.selection.createRange().text : d.getSelection() }s = se(document);for (i=0; i<frames.length && !s; i++)s = se(frames[i].document);if (!s || s=='') s = prompt('Enter text to translate with DeepL.','');open('https://www.deepl.com/translator#../en/'%20+%20(s%20?%20encodeURIComponent(s)%20:%20'')).focus();})();
