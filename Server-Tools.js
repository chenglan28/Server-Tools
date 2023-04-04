var color = (text,col) => {
    var list = {
        'bright'    : '\x1B[1m', // 亮色
        'grey'      : '\x1B[2m', // 灰色
        'italic'    : '\x1B[3m', // 斜体
        'underline' : '\x1B[4m', // 下划线
        'reverse'   : '\x1B[7m', // 反向
        'hidden'    : '\x1B[8m', // 隐藏
        'black'     : '\x1B[30m', // 黑色
        'red'       : '\x1B[31m', // 红色
        'green'     : '\x1B[32m', // 绿色
        'yellow'    : '\x1B[33m', // 黄色
        'blue'      : '\x1B[34m', // 蓝色
        'magenta'   : '\x1B[35m', // 品红
        'cyan'      : '\x1B[36m', // 青色
        'white'     : '\x1B[37m', // 白色
        'blackBG'   : '\x1B[40m', // 背景色为黑色
        'redBG'     : '\x1B[41m', // 背景色为红色
        'greenBG'   : '\x1B[42m', // 背景色为绿色
        'yellowBG'  : '\x1B[43m', // 背景色为黄色
        'blueBG'    : '\x1B[44m', // 背景色为蓝色
        'magentaBG' : '\x1B[45m', // 背景色为品红
        'cyanBG'    : '\x1B[46m', // 背景色为青色
        'whiteBG'   : '\x1B[47m' // 背景色为白色
    }
    if(!list[col])return "\x1B[37m" + text + "\x1B[0m";
    else return list[col] + text + "\x1B[0m";
},
timeS = () => {
    var date = new Date();
    return `[${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds() + date.getMilliseconds() / 1000}]`
},
platform = () => {return `${require("os").platform()} -`},
log = (text) => {
    console.log(color(timeS(),"magenta"),color(platform(),"green"),color(text));
},
fs = require("fs"),
http = require("http"),
config = {
    "verison":[1,0,0]
}

log(`欢迎使用Server Tools [版本:${color(config.verison.join("."),"cyan")}]`);
log(`橙蓝 ©2023~2023`);
if(!process.argv[2])process.argv[2] = "help";
if(process.argv[2] == "help"){
    log(`${color("[帮助]","green")} help`);
    log(`${color("[搭建静态网站]","green")} page <端口> <主页> <错误页> <打印日志 (ON/OFF)> <输出日志路径 (可留空)>`);
}
else if(process.argv[2] == "page"){
    http.createServer((req,res)=>{
        if(process.argv[6] == "ON")log(`接收请求 ${color(req.url,"green")}`);
        if(process.argv[7])fs.writeFileSync(process.argv[7].replace(/%20/g," "),`${timeS() + platform()}接收请求 ${req.url}\n`,{flag:"a+"});
        if(req.url == "/"){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(fs.readFileSync(process.argv[4].replace(/%20/g," ")));
        }
        else {
            req.url = decodeURI("." + req.url);
            if(req.url[req.url.length-1] == "/")req.url = req.url.substr(0,req.url.length-1);
            if(fs.existsSync(req.url) && fs.statSync(req.url).isFile()){
                if(req.url.substr(req.url.length-5,5) == ".html" || req.url.substr(req.url.length-4,4) == ".htm")res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                else {
                    res.writeHead(200, {
                        'Content-Type': 'application/octet-stream',
                        'Content-Disposition':'attachment;filename=' + encodeURIComponent(req.url.split("/").pop()),
                        "Content-Length":fs.statSync(req.url).size
                    });
                }
                res.end(fs.readFileSync(req.url));
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(fs.readFileSync(process.argv[5].replace(/%20/g," ")));
            }
        }
    }).listen(Number(process.argv[3]),()=>{
        if(process.argv[6] == "ON")log(`服务器于端口 ${process.argv[3]} 开放`);
        if(process.argv[7])fs.writeFileSync(process.argv[7].replace(/%20/g," "),`${timeS() + platform()}服务器于端口 ${process.argv[3]} 开放\n`,{flag:"a+"});
    });
}