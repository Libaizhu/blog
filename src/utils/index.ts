/**
 * 格式化时间
 * @param {String|Number} dateTime 需要格式化的时间戳
 * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
 * @returns {string} 返回格式化后的字符串
 */
export function timeFormat(dateTime:number | string = '', formatStr:string = 'yyyy-mm-dd'):string {
    let date
    // 若传入时间为假值，则取当前时间
    if (!dateTime) {
        date = new Date()
    }
    // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
    else if (/^\d{10}$/.test(dateTime?.toString().trim())) {
        date = new Date(Number(dateTime) * 1000)
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime))
    }
    // 其他都认为符合 RFC 2822 规范
    else {
        // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
        date = new Date(
            typeof dateTime === 'string'
                ? dateTime.replace(/-/g, '/')
                : dateTime
        )
    }

    interface sourceType{
        'y':string
        'm':string
        'd':string
        'h':string
        'M':string
        's':string
    }

    const timeSource:sourceType = {
        'y': date.getFullYear().toString(), // 年
        'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
        'd': date.getDate().toString().padStart(2, '0'), // 日
        'h': date.getHours().toString().padStart(2, '0'), // 时
        'M': date.getMinutes().toString().padStart(2, '0'), // 分
        's': date.getSeconds().toString().padStart(2, '0') // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }

    for (const key in timeSource) {
        const [ret] = new RegExp(`${key}+`).exec(formatStr) || []
        if (ret) {
            // 年可能只需展示两位
            const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
            formatStr = formatStr.replace(ret, timeSource[key as keyof typeof timeSource].slice(beginIndex))
        }
    }

    return formatStr
}

/**
 * 获取随机颜色
 */
export function getRgb():string{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
/**
 * 复制粘贴
 * @param {string} content:需要复制的内容
 * @returns {void} 
 */
export function copyToClip(content:string):void {
    const textArea = document.createElement("textarea"); 
    textArea.value = content
    document.body.appendChild(textArea); 
    textArea.select();
    document.execCommand("copy"); 
    document.body.removeChild(textArea);
}
/**
 * 正则替换指定内容 
 * @param {string} str:目标字符串
 * @param {string} regexp:替换正则
 * @param {string} subStr:替换后的内容
 * @returns {string} result：结果字符串
 */
export function formatText(str:string,regexp:any,subStr:string):string{
    let result:string
    result = str.replace(regexp,subStr)
    return result
}

export function setStorage(key:string, value:any):void {
    localStorage.setItem(key, JSON.stringify(value))
}
export function getStorage(key:string):any {
    return JSON.parse(localStorage.getItem(key)!)
}
export function removeStorage(key:string):void {
    localStorage.removeItem(key)
}