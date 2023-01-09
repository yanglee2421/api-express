import request from "@/api/request";
interface _res {
  images: { url: string }[];
}
export default ({ idx = "0", n = "1" }: { idx?: string; n?: string } = {}) => {
  return request<_res>({
    method: "get",
    url: "https://cn.bing.com/HPImageArchive.aspx",
    params: {
      format: "js",
      idx,
      n,
    },
  });
};
