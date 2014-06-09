// idea and some code stolen from Steve Frank's classic cloud-to-butt plugin
// https://github.com/panicsteve/cloud-to-butt

var subs = [
  [/\bChuck Norris\b/gi, "Davidad"]
];

var process_all = function(node) {
  var child, next;
  var type = node.nodeType;
  if (type == 3) {
    var txt = node.nodeValue;
    for (var i = 0; i < subs.length; i++) {
      txt = txt.replace(subs[i][0], subs[i][1]);
    }
    node.nodeValue = txt;
  } else if (type == 1 || type == 9 || type == 11) {
    child = node.firstChild;
    while (child) {
      next = child.nextSibling;
      process_all(child);
      child = next;
    }
  }
}

process_all(document.body);


