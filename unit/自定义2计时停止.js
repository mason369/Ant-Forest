/*
 * @Author: TonyJiangWJ
 * @Date: 2019-12-10 19:41:12
 * @Last Modified by: TonyJiangWJ
 * @Last Modified time: 2019-12-14 00:01:04
 * @Description: 
 */
var {default_config,storage_name:_storage_name} = require('../config.js')(runtime, this)
let singletoneRequire = require('../lib/SingletonRequirer.js')(runtime, this)
var configStorage = storages.create(_storage_name)
var FileUtils = singletoneRequire('FileUtils')
var commonFunctions = singletoneRequire('CommonFunction')
Object.keys(default_config).forEach((key)=>{
  log(key + ":" + configStorage.get(key))
})

configStorage.put("never_stop", false)
configStorage.put("is_cycle", false)
configStorage.put("collect_self_only", false)
toastLog("配置完毕done")
commonFunctions.killRunningScript()
commonFunctions.setUpAutoStart(0.1)