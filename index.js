function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(className){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  let node =  document.querySelector('#grand-node');
  let childNode = node.children[0];

  while(childNode){
    node = childNode;
    childNode = node.children[0];
  }

  return node;
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list');

  for (let i=0; i < rankedList.length; i++){
    let children = rankedList[i].children;

    for (let j=0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
