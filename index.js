const axios = require('axios')
function getBingImg(index=0, perpage=10){
  axios.get(`http://cn.bing.com/HPImageArchive.aspx?format=js&idx=${index}&n=${perpage}&mkt=zh-CN`).then(res=>{
    console.log(res);
  })
}
getBingImg()