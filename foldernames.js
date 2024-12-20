const folderNames = [
    ['6643M31', '3131弘塑', '6531愛普*', '6805富世達', '6533晶心科', '3035智原', '3228金麗科', '1795美時', '8210勤誠', '3587閎康', '6138茂達', '9958世紀鋼', '2474可成', '6462神盾', '6187萬潤', '3036文曄', '9939宏全', '5314世紀', '5474聰泰', '6684安格', '6535順藥', '6243迅杰', '3207耀勝', '8027鈦昇', '3025星通'],
    ['6643M31', '3131弘塑', '6805富世達', '8210勤誠', '9958世紀鋼', '6462神盾', '6187萬潤', '6196帆宣', '3036文曄', '8054安國', '6869', '4746台耀', '6684安格', '6535順藥', '4747強生', '3702大聯大', '3029零壹'],
    ['3008大立光', '1590亞德客-KY', '3293鈊象', '8299群聯', '3034聯詠', '2379瑞昱', '3324雙鴻', '6491晶碩', '6691洋基工程', '2404漢唐', '6414樺漢', '6146耕興', '6712長聖', '9914美利達', '4768晶呈科技', '6715嘉基', '2428興勤', '6613朋億*', '6412群電', '6664群翊', '6605帝寶', '1773勝一', '1513中興電', '4755三福化', '9939宏全', '6806森崴能源', '5258虹堡', '8147正淩', '2465麗臺', '8114振樺電', '1342八貫', '8442威宏-KY', '3005神基', '3363上詮', '3147大綜', '6416瑞祺電通', '6438迅得', '6435大中', '2439美律', '4147中裕', '3588通嘉', '3691碩禾', '3444利機', '4129聯合', '5508永信建', '1319東陽', '5225東科-KY', '7402邑錡', '3207耀勝', '6290良維', '3213茂訊', '6284佳邦', '3022威強電', '4977眾達-KY', '6426統新', '3689湧德', '2006東和鋼鐵', '5511德昌', '9927泰銘', '8271宇瞻', '4542科嶠', '3030德律', '1339昭輝', '9906欣巴巴', '8085福華', '6122擎邦', '5457宣德', '4503金雨', '6776展碁國際', '8432東生華', '6208日揚', '3090日電貿'],
    ['6805富世達', '1519華城', '1477聚陽', '6933AMAX-KY', '4766南寶', '3413京鼎', '8081致新', '3617碩天', '2474可成', '6230尼得科超眾', '6239力成', '5222全訊', '5292華懋', '2731雄獅', '2317鴻海', '4138曜亞', '5225東科-KY', '1723中碳', '1319東陽', '3207耀勝', '2228劍麟', '1231聯華食', '4104佳醫', '3211順達', '5347世界', '2347聯強', '6206飛捷', '9927泰銘', '4420光明', '6261久元', '2471資通', '6419京晨科'],
    ['1519華城', '3228金麗科', '3406玉晶光', '5314世紀', '1503士電', '3413京鼎', '3617碩天', '6139亞翔', '1513中興電', '1773勝一', '3708上緯投控', '2412中華電', '2548華固', '3691碩禾', '1215卜蜂', '3045台灣大', '5386青雲', '4576大銀微系統', '5534長虹', '2850新產', '8099大世科', '5371中光電', '2359所羅門', '4523永彰', '2704國賓'],
    ['6640均華', '4770上品', '4766南寶', '6683雍智科技', '4768晶呈科技', '8467波力-KY', '6873泓德能源-創', '1514亞力', '2348海悅', '2597潤弘', '3691碩禾', '2211長榮鋼', '6438迅得', '3178公準', '3402漢科', '4588玖鼎電力', '3260威剛', '5371中光電', '5534長虹', '3030德律', '4909新復興', '6269台郡', '2745五福', '2850新產', '3455由田', '8033雷虎', '2704國賓', '6198瑞築', '2363矽統', '2371大同', '9938百和'],
    ['3675德微','6873泓德能源-創','2348海悅','4588玖鼎電力','2745五福','4760勤凱','8097常珵','2363矽統'],
    ['8210勤誠', '6230尼得科超眾', '3491昇達科', '5508永信建', '6869雲豹能源-創', '2548華固', '3444利機', '5534長虹', '2546根基', '5609中菲行', '6125廣運', '6186新潤', '2539櫻花建', '8349恒耀', '2371大同', '3015全漢', '9930中聯資源', '1618合機', '5522遠雄', '4935茂林-KY'],
    ['6491晶碩', '8454富邦媒', '6230尼得科超眾', '6670復盛應用', '9914美利達', '3491昇達科', '8422可寧衛', '6176瑞儀', '2743山富', '2731雄獅', '2211長榮鋼', '1436華友聯', '2066世德', '2745五福', '6449鈺邦', '5493三聯', '2359所羅門', '2546根基', '6425易發', '4760勤凱', '6486互動', '6125廣運', '6768志強-KY', '6596寬宏藝術', '2206三陽工業', '1736喬山', '5706鳳凰', '1339昭輝', '2363矽統', '3557嘉威', '1784訊聯', '5522遠雄', '6207雷科', '9938百和', '2722夏都'],
    ['4966譜瑞-KY', '2345智邦', '5904寶雅', '8454富邦媒', '6533晶心科', '6691洋基工程', '3675德微', '6789采鈺', '3665貿聯-KY', '2348海悅', '9921巨大', '3376新日興', '6176瑞儀', '6569醫揚', '6579研揚', '6442光聖', '2540愛山林', '6279胡連', '6546正基', '2351順德', '6143振曜', '6895宏碩系統', '3374精材', '3564其陽', '2228劍麟', '3088艾訊', '1786科妍', '1582信錦', '4915致伸', '8084巨虹', '5522遠雄', '4951精拓科', '6841長佳智能', '3022威強電', '2397友通', '3557嘉威', '3305昇貿', '3356奇偶', '3025星通', '6161捷波', '6112邁達特', '3015全漢', '2101南港', '3430奇鈦科', '4113聯上', '8234新漢'],
    ['3406玉晶光', '6446藥華藥', '6533晶心科', '6683雍智科技', '8478東哥遊艇', '6442光聖', '6890來億-KY', '6863永道-KY', '6895宏碩系統', '6873泓德能源', '6869雲豹能源', '6788華景電', '2455全新', '9910豐泰', '1436華友聯', '6806森崴能源', '3357臺慶科', '9917中保科', '2439美律', '2449京元電子', '4909新復興', '2850新產', '8099大世科', '3026禾伸堂', '3029零壹', '2472立隆電', '3580友威科', '1216統一', '3025星通', '2015豐興', '6111大宇資', '8942森鉅', '1720生達', '3219倚強科', '1785光洋科', '1722台肥', '4503金雨', '4726永昕', '6743安普新', '6457紘康', '2882國泰金'],
    ['3293鈊象', '6643M31', '6446藥華藥', '1477聚陽', '3023信邦', '6937天虹', '6462神盾', '6605帝寶', '6873泓德能源', '5483中美晶', '1513中興電', '8114振樺電', '3037欣興', '6806森崴能源', '5222全訊', '5871中租-KY', '1799易威', '8147正淩', '6278台表科', '2204中華', '6592和潤企業', '3189景碩', '6689伊雲谷', '6411晶焱', '6186新潤', '1597直得', '3702大聯大', '3022威強電', '3019亞光', '8390金益鼎', '1216統一', '4995晶達', '2438翔耀', '4576大銀微系統', '2915潤泰全', '8103瀚荃', '3535晶彩科', '1536和大', '3073天方能源', '6456GIS-KY', '6570維田', '3712永崴投控', '2481強茂', '2882國泰金', '2524京城', '8064東捷', '2542興富發', '2471資通'],
    ['6643M31', '6472保瑞', '6446藥華藥', '6442光聖', '3491昇達科', '6462神盾', '6869雲豹能源', '6873鴻德能源', '5508永信建', '6569醫揚', '6146耕興', '2540愛山林', '8467波力-KY', '3037欣興', '2597潤弘', '8046南電', '1799易威', '8054安國', '6546正基', '5263智崴', '3105穩懋', '3163波若威', '4743合一', '5222全訊', '2548華固', '4958臻鼎-KY', '3454晶睿', '9906欣巴巴', '4760勤凱', '3147大綜', '5225東科-KY', '4909新復興', '3013晟銘電', '4160訊聯基因', '3189景碩', '5534長虹', '6829千附精密', '2492華新科', '1808潤隆', '4746台耀', '6186新潤', '4566時碩工業', '6684安格', '3689湧德', '4977眾達-KY', '8936國統', '3073天方能源', '6150撼訊', '2915潤泰全', '2539櫻花建', '3535晶彩科', '8927北基', '2375凱美', '1438三地開發', '6570維田', '6177達麗', '6112邁達特', '1442名軒', '2365昆盈', '2542興富發', '6505台塑化', '2441超豐', '2520冠德', '2497怡利電', '2543皇昌', '5607遠雄港', '2362藍天'],
    ['6442光聖', '2395研華', '6890來億-KY', '2348海悅', '3491昇達科', '6873鴻德能源', '6869雲豹能源', '5508永信建', '6605帝寶', '8467波力-KY', '1799易威', '5263智崴', '5222全訊', '2548華固', '2731雄獅', '3207耀勝', '1784訊聯', '3450聯鈞', '4760勤凱', '4160訊聯基因', '5534長虹', '1736喬山', '6186新潤', '1597直得', '2546根基', '3022威強電', '3073天方能源', '3689湧德', '1216統一', '8936國統', '6615慧智', '2015豐興', '2524京城', '1720生達', '9938百和', '6177達麗', '1442名軒', '2365昆盈', '2520冠德', '6505台塑化', '2542興富發', '2441超豐', '6492生華科', '5607遠雄港'],
    ['6446藥華藥','1477聚陽','2348海悅','3023信邦','6869雲豹能源','6873鴻德能源','6605帝寶','5508永信建','2467志聖','9939宏全','3207耀勝','1736喬山','4566時碩工業','3073天方能源','2006東和鋼鐵'],
    ['2395研華','3023信邦','6869雲豹能源','6873鴻德能源','5508永信建','9921巨大','4743合一','1736喬山','3073天方能源','3580友威科','1216統一','2006東和鋼鐵','3663鑫科'],
    ['6640均華','3293鈊象','9914美利達','9921巨大','9906欣巴巴','1808潤隆','6768志強-KY','2524京城','2393億光','1720生達','1438三地開發','4933友輝','3663鑫科','6228全譜'],
    ['4583台灣精銳', '2412中華電', '2524京城', '2236百達-KY', '4513福裕', '2070精湛', '6877鏵友益'],
    ['6877鏵友益'],
    ['4583台灣精銳','9914美利達','1597直得','3663鑫科','2006東和鋼鐵','6877鏵友益','4174浩鼎','8431匯鑽科'],
    ['6739竹陞科技', '8374羅昇', '4974亞泰', '4563百德', '2497怡利電', '4971IET-KY'],
    ['2308台達電','2377微星','3217優群','6214精誠','6285啟碁','3687歐買尬','2762世界健身-KY','3211順達','4919新唐','3552同致','8937合騏','2393億光','6150撼訊','2354鴻準','3581博磊','6821聯寶'],
    ['6669緯穎','6472保瑞','8114振樺電','3558神準','3596智易','3211順達','8089康全電訊','8032光菱','4987科誠','6877鏵友益','6180橘子','2637慧洋-KY','3706神達','3219倚強科'],
    ['3661世芯-KY','6669緯穎','2383台光電','3406玉晶光','6691洋基工程','3617碩天','5536聖暉*','8114振樺電','8467波力-KY','2049上銀','4571鈞興-KY','3362先進光','2233宇隆','5474聰泰','2359所羅門','3019亞光','4977眾達-KY','6271同欣電','6285啟碁','4958臻鼎-KY','5388中磊','4991環宇-KY','2211長榮鋼','4563百德','6188廣明','2250IKKA-KY','1597直得','8482商億-KY','6596寬宏藝術','2464盟立','6166凌華','6215和椿','2313華通','5484慧友','2374佳能'],
    ['2345智邦','5536聖暉*','4571鈞興-KY','2233宇隆','3044健鼎','8227巨有科技','3147大綜','6285啟碁','5439高技','5388中磊','4991環宇-KY','2211長榮鋼','2250IKKA-KY','6278台表科','5347世界','8482商億-KY','6215和椿','6227茂綸','2464盟立','4561健椿','6982大井泵浦','2374佳能']
]

const output = document.getElementById('output');
                    output.innerHTML  += '<br>'
                    for(var t = 0; t < folderNames[d].length; t++) {
                        output.innerHTML += '<option value=#pic_'+t+'_>'+ folderNames[d][t] +'</option>'
                        }