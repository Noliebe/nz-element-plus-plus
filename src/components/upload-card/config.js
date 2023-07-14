const uploadFileFun = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      code: 200,
      data: {
        url: 'https://img1.imgtp.com/2023/07/13/3bmbGlAk.jpg',
      },
    });
  }, 1000);
});

export default {
  // 上传请求API对象
  apiObj: uploadFileFun,
  // form请求时文件的key
  filename: 'file',
  // 请求完成代码
  successCode: 200,
  // 最大文件大小 默认10MB
  maxSize: 10,
  parseData(res) {
    // return {
    //     //分析状态字段结构
    //     code: res.code,
    //     //分析文件名称
    //     fileName: res.data.fileName,
    //     //分析图片远程地址结构
    //     src: res.data.src,
    //     //分析描述字段结构
    //     msg: res.message
    // }
    const data = (res.data || {});
    return {
      // 分析状态字段结构
      code: res.code,
      // 分析文件名称
      fileName: data.name,
      // 分析图片远程地址结构
      src: data.url,
      // 分析描述字段结构
      msg: res.message,
    };
  },
  // 最大文件大小 默认10MB
  maxSizeFile: 50,
};
