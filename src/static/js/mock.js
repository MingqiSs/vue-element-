 import Mock from 'mockjs'
 //mock模拟数据
  function getuser(num){
      if(localStorage.getItem("users")==null)
      {
            var arr=Array()
                for(let i=0;i<num;i++) {
                arr.push(Mock.mock({"Id":Mock.mock('@natural'),
                "date":"2017-06-30",
                "name": Mock.mock('@name'),
                "address":Mock.mock('@province'),
                "sex":Mock.mock({"number|1-2": 1}).number,
                "userImg":"http://7xlcvw.com2.z0.glb.qiniucdn.com/WeChatChest/201704211026270039121.jpg"
                })
                )}
                localStorage.setItem("users",JSON.stringify(arr))
      }
  
  }
  export  default getuser