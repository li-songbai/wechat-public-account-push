/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // // 使用微信测试号：公众号APP_ID
  // APP_ID: 'wx8d3c1eb55de2e909',

  // // 使用微信测试号：公众号APP_SECRET
  // APP_SECRET: '6343865015a8cdeca62c481ffa76b56e',

  // PROVINCE: '浙江省',
  // CITY: '杭州市',

  // USERS: [
  //   {
  //     // 想要发送的人的名字
  //     name: '钱钱小朋友',
  //     // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
  //     id: 'o9YFI6okFCaKt0GKZffaEEo7vZXU',
  //     // 使用微信测试号：你想对他发送的模板消息的模板ID
  //     useTemplateId: 'RmxBapdQRCwXEAgemrmAWeLIWzggYoNZLwhJw2rixHQ',
  //     // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
  //     horoscopeDate: '08-04',
  //     festivals: [
  //       // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
  //       {
  //         type: '*生日', name: '钱钱', year: '2005', date: '08-04',
  //       },
  //       // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
  //       {
  //         type: '生日', name: '李四', year: '2005', date: '08-04',
  //       },
  //       {
  //         type: '节日', name: '相识纪念日', year: '2023', date: '10-28',
  //       },
  //     ],
  //     // 我们在一起已经有xxxx天了的配置
  //     customizedDateList: [
  //       // 在一起的日子
  //       { keyword: 'love_day', date: '2023-10-28' },
  //       // 结婚纪念日
  //       { keyword: 'marry_day', date: '2022-09-09' },
  //     ],
  //   },
  // ],


  // // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // CALLBACK_TEMPLATE_ID: 'CXyGGxFquX-1IsObzKKlCzCz7yrEBJDpVh8YB9q4Iqs',

  // CALLBACK_USERS: [
  //   {
  //     name: '小李同学',
  //     // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
  //     id: 'o9YFI6hyuAAbW_lI-8NMe2gL4ngc',
  //   }
  // ],
    "APP_ID": "wx8d3c1eb55de2e909",
    "APP_SECRET": "6343865015a8cdeca62c481ffa76b56e",
    "IS_SHOW_COLOR": true,
    "CALLBACK_TEMPLATE_ID": "RmxBapdQRCwXEAgemrmAWeLIWzggYoNZLwhJw2rixHQ",
    "CALLBACK_USERS": [
        {
            "name": "自己",
            "id": "o9YFI6hyuAAbW_lI-8NMe2gL4ngc"
        }
    ],
    "USERS": [
        {
            "name": "钱钱小朋友专属",
            "id": "o9YFI6okFCaKt0GKZffaEEo7vZXU",
            "useTemplateId": "RmxBapdQRCwXEAgemrmAWeLIWzggYoNZLwhJw2rixHQ",
            "province": "浙江省",
            "city": "杭州",
            "horoscopeDate": "08-04",
            "horoscopeDateType": "今日",
            "openUrl": "https://shuangxunian.github.io/",
            "festivals": [
                {
                    "type": "生日",
                    "name": "钱钱生日快乐",
                    "date": "08-04",
                    "year": "2024"
                },
                {
                    "type": "节日",
                    "name": "钱钱同学 圣诞节快乐哦 ",
                    "date": "12-25",
                    "year": "2023"
                }
            ],
            "customizedDateList": []
        }
    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": true,
        "CIBA": true,
        "oneTalk": false,
        "earthyLoveWords": false,
        "momentCopyrighting": true,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": true,
        "birthdayMessage": true
    }
}

module.exports = USER_CONFIG

