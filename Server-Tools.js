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
content_type = (t) => {
    var l= [[".tif","image/tiff"],
    [".001","application/x-001"],
    [".301","application/x-301"],
    [".323","text/h323"],
    [".906","application/x-906"],
    [".907","drawing/907"],
    [".a11","application/x-a11"],
    [".acp","audio/x-mei-aac"],
    [".ai","application/postscript"],
    [".aif","audio/aiff"],
    [".aifc","audio/aiff"],
    [".aiff","audio/aiff"],
    [".anv","application/x-anv"],
    [".asa","text/asa"],
    [".asf","video/x-ms-asf"],
    [".asp","text/asp"],
    [".asx","video/x-ms-asf"],
    [".au","audio/basic"],
    [".avi","video/avi"],
    [".awf","application/vnd.adobe.workflow"],
    [".biz","text/xml"],
    [".bmp","application/x-bmp"],
    [".bot","application/x-bot"],
    [".c4t","application/x-c4t"],
    [".c90","application/x-c90"],
    [".cal","application/x-cals"],
    [".cat","application/vnd.ms-pki.seccat"],
    [".cdf","application/x-netcdf"],
    [".cdr","application/x-cdr"],
    [".cel","application/x-cel"],
    [".cer","application/x-x509-ca-cert"],
    [".cg4","application/x-g4"],
    [".cgm","application/x-cgm"],
    [".cit","application/x-cit"],
    [".class","java/*"],
    [".cml","text/xml"],
    [".cmp","application/x-cmp"],
    [".cmx","application/x-cmx"],
    [".cot","application/x-cot"],
    [".crl","application/pkix-crl"],
    [".crt","application/x-x509-ca-cert"],
    [".csi","application/x-csi"],
    [".css","text/css"],
    [".cut","application/x-cut"],
    [".dbf","application/x-dbf"],
    [".dbm","application/x-dbm"],
    [".dbx","application/x-dbx"],
    [".dcd","text/xml"],
    [".dcx","application/x-dcx"],
    [".der","application/x-x509-ca-cert"],
    [".dgn","application/x-dgn"],
    [".dib","application/x-dib"],
    [".dll","application/x-msdownload"],
    [".doc","application/msword"],
    [".dot","application/msword"],
    [".drw","application/x-drw"],
    [".dtd","text/xml"],
    [".dwf","Model/vnd.dwf"],
    [".dwf","application/x-dwf"],
    [".dwg","application/x-dwg"],
    [".dxb","application/x-dxb"],
    [".dxf","application/x-dxf"],
    [".edn","application/vnd.adobe.edn"],
    [".emf","application/x-emf"],
    [".eml","message/rfc822"],
    [".ent","text/xml"],
    [".epi","application/x-epi"],
    [".eps","application/x-ps"],
    [".eps","application/postscript"],
    [".etd","application/x-ebx"],
    [".exe","application/x-msdownload"],
    [".fax","image/fax"],
    [".fdf","application/vnd.fdf"],
    [".fif","application/fractals"],
    [".fo","text/xml"],
    [".frm","application/x-frm"],
    [".g4","application/x-g4"],
    [".gbr","application/x-gbr"],
    [".","application/x-"],
    [".gif","image/gif"],
    [".gl2","application/x-gl2"],
    [".gp4","application/x-gp4"],
    [".hgl","application/x-hgl"],
    [".hmr","application/x-hmr"],
    [".hpg","application/x-hpgl"],
    [".hpl","application/x-hpl"],
    [".hqx","application/mac-binhex40"],
    [".hrf","application/x-hrf"],
    [".hta","application/hta"],
    [".htc","text/x-component"],
    [".htm","text/html"],
    [".html","text/html"],
    [".htt","text/webviewhtml"],
    [".htx","text/html"],
    [".icb","application/x-icb"],
    [".ico","image/x-icon"],
    [".ico","application/x-ico"],
    [".iff","application/x-iff"],
    [".ig4","application/x-g4"],
    [".igs","application/x-igs"],
    [".iii","application/x-iphone"],
    [".img","application/x-img"],
    [".ins","application/x-internet-signup"],
    [".isp","application/x-internet-signup"],
    [".IVF","video/x-ivf"],
    [".java","java/*"],
    [".jfif","image/jpeg"],
    [".jpe","image/jpeg"],
    [".jpe","application/x-jpe"],
    [".jpeg","image/jpeg"],
    [".jpg","image/jpeg"],
    [".jpg","application/x-jpg"],
    [".js","application/x-javascript"],
    [".jsp","text/html"],
    [".la1","audio/x-liquid-file"],
    [".lar","application/x-laplayer-reg"],
    [".latex","application/x-latex"],
    [".lavs","audio/x-liquid-secure"],
    [".lbm","application/x-lbm"],
    [".lmsff","audio/x-la-lms"],
    [".ls","application/x-javascript"],
    [".ltr","application/x-ltr"],
    [".m1v","video/x-mpeg"],
    [".m2v","video/x-mpeg"],
    [".m3u","audio/mpegurl"],
    [".m4e","video/mpeg4"],
    [".mac","application/x-mac"],
    [".man","application/x-troff-man"],
    [".math","text/xml"],
    [".mdb","application/msaccess"],
    [".mdb","application/x-mdb"],
    [".mfp","application/x-shockwave-flash"],
    [".mht","message/rfc822"],
    [".mhtml","message/rfc822"],
    [".mi","application/x-mi"],
    [".mid","audio/mid"],
    [".midi","audio/mid"],
    [".mil","application/x-mil"],
    [".mml","text/xml"],
    [".mnd","audio/x-musicnet-download"],
    [".mns","audio/x-musicnet-stream"],
    [".mocha","application/x-javascript"],
    [".movie","video/x-sgi-movie"],
    [".mp1","audio/mp1"],
    [".mp2","audio/mp2"],
    [".mp2v","video/mpeg"],
    [".mp3","audio/mp3"],
    [".mp4","video/mpeg4"],
    [".mpa","video/x-mpg"],
    [".mpd","application/vnd.ms-project"],
    [".mpe","video/x-mpeg"],
    [".mpeg","video/mpg"],
    [".mpg","video/mpg"],
    [".mpga","audio/rn-mpeg"],
    [".mpp","application/vnd.ms-project"],
    [".mps","video/x-mpeg"],
    [".mpt","application/vnd.ms-project"],
    [".mpv","video/mpg"],
    [".mpv2","video/mpeg"],
    [".mpw","application/vnd.ms-project"],
    [".mpx","application/vnd.ms-project"],
    [".mtx","text/xml"],
    [".mxp","application/x-mmxp"],
    [".net","image/pnetvue"],
    [".nrf","application/x-nrf"],
    [".nws","message/rfc822"],
    [".odc","text/x-ms-odc"],
    [".out","application/x-out"],
    [".p10","application/pkcs10"],
    [".p12","application/x-pkcs12"],
    [".p7b","application/x-pkcs7-certificates"],
    [".p7c","application/pkcs7-mime"],
    [".p7m","application/pkcs7-mime"],
    [".p7r","application/x-pkcs7-certreqresp"],
    [".p7s","application/pkcs7-signature"],
    [".pc5","application/x-pc5"],
    [".pci","application/x-pci"],
    [".pcl","application/x-pcl"],
    [".pcx","application/x-pcx"],
    [".pdf","application/pdf"],
    [".pdf","application/pdf"],
    [".pdx","application/vnd.adobe.pdx"],
    [".pfx","application/x-pkcs12"],
    [".pgl","application/x-pgl"],
    [".pic","application/x-pic"],
    [".pko","application/vnd.ms-pki.pko"],
    [".pl","application/x-perl"],
    [".plg","text/html"],
    [".pls","audio/scpls"],
    [".plt","application/x-plt"],
    [".png","image/png"],
    [".png","application/x-png"],
    [".pot","application/vnd.ms-powerpoint"],
    [".ppa","application/vnd.ms-powerpoint"],
    [".ppm","application/x-ppm"],
    [".pps","application/vnd.ms-powerpoint"],
    [".ppt","application/vnd.ms-powerpoint"],
    [".ppt","application/x-ppt"],
    [".pr","application/x-pr"],
    [".prf","application/pics-rules"],
    [".prn","application/x-prn"],
    [".prt","application/x-prt"],
    [".ps","application/x-ps"],
    [".ps","application/postscript"],
    [".ptn","application/x-ptn"],
    [".pwz","application/vnd.ms-powerpoint"],
    [".r3t","text/vnd.rn-realtext3d"],
    [".ra","audio/vnd.rn-realaudio"],
    [".ram","audio/x-pn-realaudio"],
    [".ras","application/x-ras"],
    [".rat","application/rat-file"],
    [".rdf","text/xml"],
    [".rec","application/vnd.rn-recording"],
    [".red","application/x-red"],
    [".rgb","application/x-rgb"],
    [".rjs","application/vnd.rn-realsystem-rjs"],
    [".rjt","application/vnd.rn-realsystem-rjt"],
    [".rlc","application/x-rlc"],
    [".rle","application/x-rle"],
    [".rm","application/vnd.rn-realmedia"],
    [".rmf","application/vnd.adobe.rmf"],
    [".rmi","audio/mid"],
    [".rmj","application/vnd.rn-realsystem-rmj"],
    [".rmm","audio/x-pn-realaudio"],
    [".rmp","application/vnd.rn-rn_music_package"],
    [".rms","application/vnd.rn-realmedia-secure"],
    [".rmvb","application/vnd.rn-realmedia-vbr"],
    [".rmx","application/vnd.rn-realsystem-rmx"],
    [".rnx","application/vnd.rn-realplayer"],
    [".rp","image/vnd.rn-realpix"],
    [".rpm","audio/x-pn-realaudio-plugin"],
    [".rsml","application/vnd.rn-rsml"],
    [".rt","text/vnd.rn-realtext"],
    [".rtf","application/msword"],
    [".rtf","application/x-rtf"],
    [".rv","video/vnd.rn-realvideo"],
    [".sam","application/x-sam"],
    [".sat","application/x-sat"],
    [".sdp","application/sdp"],
    [".sdw","application/x-sdw"],
    [".sit","application/x-stuffit"],
    [".slb","application/x-slb"],
    [".sld","application/x-sld"],
    [".slk","drawing/x-slk"],
    [".smi","application/smil"],
    [".smil","application/smil"],
    [".smk","application/x-smk"],
    [".snd","audio/basic"],
    [".sol","text/plain"],
    [".sor","text/plain"],
    [".spc","application/x-pkcs7-certificates"],
    [".spl","application/futuresplash"],
    [".spp","text/xml"],
    [".ssm","application/streamingmedia"],
    [".sst","application/vnd.ms-pki.certstore"],
    [".stl","application/vnd.ms-pki.stl"],
    [".stm","text/html"],
    [".sty","application/x-sty"],
    [".svg","text/xml"],
    [".swf","application/x-shockwave-flash"],
    [".tdf","application/x-tdf"],
    [".tg4","application/x-tg4"],
    [".tga","application/x-tga"],
    [".tif","image/tiff"],
    [".tif","application/x-tif"],
    [".tiff","image/tiff"],
    [".tld","text/xml"],
    [".top","drawing/x-top"],
    [".torrent","application/x-bittorrent"],
    [".tsd","text/xml"],
    [".txt","text/plain"],
    [".uin","application/x-icq"],
    [".uls","text/iuls"],
    [".vcf","text/x-vcard"],
    [".vda","application/x-vda"],
    [".vdx","application/vnd.visio"],
    [".vml","text/xml"],
    [".vpg","application/x-vpeg005"],
    [".vsd","application/vnd.visio"],
    [".vsd","application/x-vsd"],
    [".vss","application/vnd.visio"],
    [".vst","application/vnd.visio"],
    [".vst","application/x-vst"],
    [".vsw","application/vnd.visio"],
    [".vsx","application/vnd.visio"],
    [".vtx","application/vnd.visio"],
    [".vxml","text/xml"],
    [".wav","audio/wav"],
    [".wax","audio/x-ms-wax"],
    [".wb1","application/x-wb1"],
    [".wb2","application/x-wb2"],
    [".wb3","application/x-wb3"],
    [".wbmp","image/vnd.wap.wbmp"],
    [".wiz","application/msword"],
    [".wk3","application/x-wk3"],
    [".wk4","application/x-wk4"],
    [".wkq","application/x-wkq"],
    [".wks","application/x-wks"],
    [".wm","video/x-ms-wm"],
    [".wma","audio/x-ms-wma"],
    [".wmd","application/x-ms-wmd"],
    [".wmf","application/x-wmf"],
    [".wml","text/vnd.wap.wml"],
    [".wmv","video/x-ms-wmv"],
    [".wmx","video/x-ms-wmx"],
    [".wmz","application/x-ms-wmz"],
    [".wp6","application/x-wp6"],
    [".wpd","application/x-wpd"],
    [".wpg","application/x-wpg"],
    [".wpl","application/vnd.ms-wpl"],
    [".wq1","application/x-wq1"],
    [".wr1","application/x-wr1"],
    [".wri","application/x-wri"],
    [".wrk","application/x-wrk"],
    [".ws","application/x-ws"],
    [".ws2","application/x-ws"],
    [".wsc","text/scriptlet"],
    [".wsdl","text/xml"],
    [".wvx","video/x-ms-wvx"],
    [".xdp","application/vnd.adobe.xdp"],
    [".xdr","text/xml"],
    [".xfd","application/vnd.adobe.xfd"],
    [".xfdf","application/vnd.adobe.xfdf"],
    [".xhtml","text/html"],
    [".xls","application/vnd.ms-excel"],
    [".xls","application/x-xls"],
    [".xlw","application/x-xlw"],
    [".xml","text/xml"],
    [".xpl","audio/scpls"],
    [".xq","text/xml"],
    [".xql","text/xml"],
    [".xquery","text/xml"],
    [".xsd","text/xml"],
    [".xsl","text/xml"],
    [".xslt","text/xml"],
    [".xwd","application/x-xwd"],
    [".x_b","application/x-x_b"],
    [".sis","application/vnd.symbian.install"],
    [".sisx","application/vnd.symbian.install"],
    [".x_t","application/x-x_t"],
    [".ipa","application/vnd.iphone"],
    [".apk","application/vnd.android.package-archive"],
    [".xap","application/x-silverlight-app"]];
    var r = "";
    l.forEach(item=>{
        if(item[0] == t.substr(t.length-item[0].length))r = item[1];
    });
    if(r == "")r = "application/octet-stream"
    return r;
}
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
    "verison":[1,1,1]
}

log(`欢迎使用Server Tools [版本:${color(config.verison.join("."),"cyan")}]`);
log(`橙蓝 ©2023~2023`);
if(!process.argv[2])process.argv[2] = "help";
if(process.argv[2] == "help"){
    log(`${color("[帮助]","green")} help`);
    log(`${color("[搭建静态网站]","green")} page <端口> <重定向表> <打印日志 (ON/OFF)> <输出日志路径 (可留空)>`);
}
else if(process.argv[2] == "page"){
    var rePage = {};
    process.argv[4].split("'").forEach(item=>{
        item = item.split(">");
        rePage[item[0]] = item[1].replace(/%20/g," ");
    })
    console.log(rePage)
    http.createServer((req,res)=>{
        if(process.argv[5] == "ON")log(`接收请求 ${color(req.url,"green")}`);
        if(process.argv[6])fs.writeFileSync(process.argv[6].replace(/%20/g," "),`${timeS() + platform()}接收请求 ${req.url}\n`,{flag:"a+"});
        req.url = decodeURI("." + req.url);
        if(req.url[req.url.length-1] == "/")req.url = req.url.substr(0,req.url.length-1);
        Object.keys(rePage).forEach(item=>{
            if(req.url == item)req.url = rePage[item]
        })
        if(fs.existsSync(req.url) && fs.statSync(req.url).isFile()){
            var _content_type = content_type(req.url)
            if(_content_type == "application/octet-stream"){
                res.writeHead(200, {
                    'Content-Type': "application/octet-stream",
                    'Content-Disposition':'attachment;filename=' + encodeURIComponent(req.url.split("/").pop()),
                    'Content-Length':fs.statSync(req.url).size
                });
            }
            else {
                res.writeHead(200, {
                    'Content-Type': _content_type,
                });
            }
            res.end(fs.readFileSync(req.url));
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            if(rePage["404"])res.end(fs.readFileSync(rePage["404"]));
            else res.end("404")
        }
    }).listen(Number(process.argv[3]),()=>{
        if(process.argv[5] == "ON")log(`服务器于端口 ${process.argv[3]} 开放`);
        if(process.argv[6])fs.writeFileSync(process.argv[6].replace(/%20/g," "),`${timeS() + platform()}服务器于端口 ${process.argv[3]} 开放\n`,{flag:"a+"});
    });
}
else log(color("不是一个有效的指令","red"));