const request = require("@/api/request");
module.exports = ({ idx = 0, n = 1 } = {}) => {
  return request({
    method: "get",
    url: "https://cn.bing.com/HPImageArchive.aspx",
    params: {
      format: "js",
      idx,
      n,
    },
  });
};
