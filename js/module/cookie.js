const cookie = (day = 60, path = "/") => {
  let cookie,
      cookieStart,
      cookieEnd,
      cookieCount,
      cookieCurent,
      date_1,
      date_2
  
  date_1 = new Date();
  date_1.setTime(date_1.getTime() + day * 24 * 60 * 60 * 1000)
  date_2 = date_1.toGMTString()

  if(navigator.cookieEnabled) {
    cookie = document.cookie + ";"
    cookieStart = cookie.indexOf("counts=", 0)

    if(cookieStart == -1) {
      document.cookie = "counts=1; path="+path+"; expires="+date_2;
      cookieCurent = 1
      // console.log("初回訪問")
      return cookieCurent
    }
    else {
      cookieEnd = cookie.indexOf(";", cookieStart)
      cookieCount = cookie.substring(cookieStart + 7, cookieEnd)

      try {
        cookieCount = parseInt(cookieCount)+1
        // console.log(cookieCount+"回目")
        document.cookie = "counts="+cookieCount+";  path="+path+";  ;expires="+date_2
        cookieCurent = cookieCount

        return cookieCurent
      }
      catch {
        console.log('クッキーの取得に失敗')
      }
    }
  }
  else {
    console.log('クッキーが使用できない環境です')
  }
}

export { cookie }