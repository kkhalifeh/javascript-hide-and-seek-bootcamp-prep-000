function getFirstSelector(selector) {
  var element = document.querySelector(selector);
return element;
}

function nestedTarget() {
  var target = document.querySelector(`#nested .target`);
  return target;
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll(`ul.ranked-list li`);
  for (var i=0; i<rankList.length; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n;
  }
}

