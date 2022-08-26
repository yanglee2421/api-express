module.exports = (date, needSecond = false) => {
    const fun = (num) => {
        return num > 10 ? num : `0${num}`
    }
    const yyyy = date.getFullYear()
    let MM = fun(date.getMonth() + 1)
    let dd = fun(date.getDate())
    let hh = fun(date.getHours())
    let mm = fun(date.getMinutes())
    let ss = fun(date.getSeconds())
    return needSecond ? `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}` : `${yyyy}-${MM}-${dd}`
}
