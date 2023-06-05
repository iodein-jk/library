<template>
  <div class="toc">
    <p class="tocHeading">On this page</p>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
    };
  },
  /* == props == テンプレートタグの属性を登録 */
  methods: {
  },
  mounted() {
    const page = window.location.href.split('/').pop()
    window.addEventListener("load", function(){
      let toc = document.querySelectorAll('.l-document-article > h1, .l-document-article > h2, .l-document-article > h3')
      let heading = ["H1","H2","H3","H4","H5","H6"]
      let length = {"H1":0 ,"H2":0 ,"H3":0 ,"H4":0 ,"H5":0 ,"H6":0}
      let search = ''
      let index = []
      let tag = ''
      let id = ''

      const options = {
        root: null, // 今回はビューポートをルート要素とする
        rootMargin: "0% 0px", // ビューポートの中心を判定基準にする
        threshold: 1 // 閾値は0
      };
      const observer = new IntersectionObserver(outLine, options)

      toc.forEach((element) => {
        if(element.tagName == heading[0]) {
          search = true
          length[heading[0]]++
          length[heading[1]] = 0
          length[heading[2]] = 0
          length[heading[3]] = 0
          length[heading[4]] = 0
          length[heading[5]] = 0
          id = length[heading[0]]
        }
        else if(element.tagName == heading[1]) {
          search = true
          length[heading[1]]++
          length[heading[2]] = 0
          length[heading[3]] = 0
          length[heading[4]] = 0
          length[heading[5]] = 0
          id = length[heading[0]]+'-'+length[heading[1]]
        }
        else if(element.tagName == heading[2]) {
          search = true
          length[heading[2]]++
          length[heading[3]] = 0
          length[heading[4]] = 0
          length[heading[5]] = 0
          id = length[heading[0]]+'-'+length[heading[1]]+'-'+length[heading[2]]
        }
        else if(element.tagName == heading[3]) {
          search = true
          length[heading[3]]++
          length[heading[4]] = 0
          length[heading[5]] = 0
          id = length[heading[0]]+'-'+length[heading[1]]+'-'+length[heading[2]]+'-'+length[heading[3]]
        }
        else if(element.tagName == heading[4]) {
          search = true
          length[heading[4]]++
          length[heading[5]] = 0
          id = length[heading[0]]+'-'+length[heading[1]]+'-'+length[heading[2]]+'-'+length[heading[3]]+'-'+length[heading[4]]
        }
        else if(element.tagName == heading[5]) {
          search = true
          length[heading[5]]++
          id = length[heading[0]]+'-'+length[heading[1]]+'-'+length[heading[2]]+'-'+length[heading[3]]+'-'+length[heading[4]]+'-'+length[heading[5]]
        }
        else {
          search = false
        }

        if(search === true) {
          element.setAttribute('id', "heading-"+id)
          tag = document.createElement('a')
          tag.setAttribute('href', "#heading-"+id)
          tag.setAttribute('class', "heading_"+element.tagName)
          tag.textContent = element.textContent
          document.querySelector('.toc').appendChild(tag)

          observer.observe(element)
        }
      });

      function outLine(entries) {
        let href
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // console.log(entry.isIntersecting)
            href = entry.target.getAttribute('id')
            document.querySelectorAll('.toc a').forEach((link) => {
              if(link.getAttribute('href') == '#'+href) {
                link.classList.add('_current')
              }
              else {
                link.classList.remove('_current')
              }
            })
          }
        });
      }

      document.querySelectorAll('.sideNavChild-anchor').forEach(element => {
        if(element.getAttribute('href') == page) {
          element.classList.add('_current')
        }
        else if(page == '') {
          document.querySelectorAll('.sideNavUlist-parent')[0].classList.add('_current')
        }
      })
    })
  }
};
</script>

<!-- <style scoped>
</style> -->
