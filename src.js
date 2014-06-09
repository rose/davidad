// idea and some code stolen from Steve Frank's classic cloud-to-butt plugin
// https://github.com/panicsteve/cloud-to-butt

var subs = [
  [/\bChuck Norris\b/gi, "Davidad"]
];

var allSubs = {
  "chuck" : "David",
  "norris" : "Dalrymple"
};

var davidadPage = false;

var process_all = function(node) {
  var child, next;
  var type = node.nodeType;
  if (type == 3) {
    var txt = node.nodeValue;
    txt = txt.replace(/\bChuck Norris\b/gi, function(match) {
      davidadPage = true;
      return "Davidad";
    });
    if (davidadPage) {
      txt = txt.replace(/\b(Chuck|Norris)\b/gi, function(match) {
        var lowMatch = match.toLowerCase()
        if (allSubs[lowMatch]) {
          return allSubs[lowMatch];
        }
        return match;
      });
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


