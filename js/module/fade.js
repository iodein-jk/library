const fadeIn = (node, duration, opacity = 1) => {
  // display: noneでないときは何もしない
  if (getComputedStyle(node).display !== "none") return;

  // style属性にdisplay: noneが設定されていたとき
  if (node.style.display === "none") {
    node.style.display = "block";
  } else {
    node.style.display = "block";
  }
  node.style.opacity = 0;

  var start = performance.now();

  requestAnimationFrame(function tick(timestamp) {
    // イージング計算式（linear）
    var easing = (timestamp - start) / duration;

    // opacityが1を超えないように
    node.style.opacity = Math.min(easing, 1);

    // opacityが1より小さいとき
    if (easing < opacity) {
      requestAnimationFrame(tick);
    } else {
      node.style.opacity = "";
    }
  });
}

const fadeOut = (node, duration, opacity = 1) => {
  node.style.opacity = opacity;

  var start = performance.now();

  requestAnimationFrame(function tick(timestamp) {
    // イージング計算式（linear）
    var easing = (timestamp - start) / duration;

    // opacityが0より小さくならないように
    node.style.opacity = Math.max(opacity - easing, 0);

    // イージング計算式の値が1より小さいとき
    if (easing < opacity) {
      requestAnimationFrame(tick);
    } else {
      node.style.opacity = "";
      node.style.display = "none";
    }
  });
}


export { fadeIn, fadeOut }