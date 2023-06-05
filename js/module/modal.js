const modal = (() => {
  let getHtml = {
    backdrop: { html: "div", class: "modal-backdrop" },
  };

  //HTMLの.modalをすべてbody直下へ移動
  document.querySelectorAll('.modal[id]').forEach((element) => {
    document.body.appendChild(element)
  })

  //モーダル表示イベント
  document.querySelectorAll('[data-toggle="modal"]').forEach((value) => {
    value.addEventListener("click", function () {
      let backdrop = false;
      let modal = {
        target: value.getAttribute("data-target"),
      };
      let promise = new Promise((resolve, reject) => {
        //すでに開かれているモーダルがある場合は閉じてから実行する
        document.querySelectorAll('div[aria-hidden="false"]').forEach((element) => {
          if (element != null && element.getAttribute("id") != null && document.querySelector("." + getHtml.backdrop.class) != null) {
            backdrop = true;
            modalClose("#" + element.getAttribute("id"), backdrop);
          }
        });

        bodyEvent(1);
        resolve();
      });

      promise.then(function () {
        if (document.querySelector(value.getAttribute("data-target")) != null) {
          let setHtml = {};
          Object.keys(getHtml).forEach((element) => {
            setHtml[element] = "";
          });

          if (backdrop == false || document.querySelector("." + getHtml.backdrop.class) == null) {
            setHtml["backdrop"] = document.createElement(getHtml["backdrop"]["html"]);
            setHtml["backdrop"].setAttribute("class", getHtml["backdrop"]["class"] + " _fade");
            document.body.appendChild(setHtml["backdrop"]);
          }

          document.body.classList.add("modal-open");
          document.querySelector(modal.target).classList.add("_fade");
          document.querySelector(modal.target).setAttribute("aria-hidden", "false");
          document.querySelector(modal.target).style.display = "flex";

          setTimeout(function () {
            document.querySelectorAll("." + getHtml["backdrop"]["class"]).forEach((element) => {
              element.classList.add("_in");
            });
          }, 250);

          setTimeout(function () {
            document.querySelector(modal.target).classList.add("_in");
          }, 500);

          return false;
        }
      });
    });
  });

  //モーダル閉じるボタン処理
  document.querySelectorAll("[data-dismiss]").forEach((element) => {
    element.addEventListener("click", function () {
      if (this.closest("[aria-hidden]").getAttribute("aria-hidden") == "false") {
        modalClose(this.getAttribute("data-dismiss"));
        bodyEvent(0);
      }
    });
  });

  //モーダル閉じる関数
  function modalClose(target, bg = false) {
    document.querySelector(target).setAttribute("aria-hidden", "true");
    document.querySelector(target).classList.remove("_in");

    setTimeout(function () {
      document.body.classList.remove("modal-open");
      if (bg == false) {
        document.querySelectorAll(".modal-backdrop").forEach((element) => {
          if (element != null) {
            element.classList.remove("_in");
          }
        });
      }
      document.querySelector(target).style.display = "none";
    }, 250);

    setTimeout(function () {
      document.querySelector(target).classList.remove("_fade");
      document.querySelector(target).style.display = "none";
      if (bg == false) {
        document.querySelectorAll(".modal-backdrop").forEach((element) => {
          if (element != null) {
            element.classList.remove("_fade");
            element.remove();
          }
        });
      }
    }, 500);
  }

  //モーダル表示中のスクロール設定の変更
  function bodyEvent(target = 0) {
    switch (target) {
      case 1:
        document.body.style.overflowY = "hidden";
        break;
      case 0: {
        document.body.style.overflowY = "auto";
        break;
      }
      default:
        console.log("modal body erroe");
        break;
    }
  }
})()

export { modal }