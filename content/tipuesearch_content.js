var tipuesearch = {"pages": [{'title': '網際', 'text': '', 'tags': '', 'url': '網際.html'}, {'title': 'w17', 'text': 'https://james652770169.github.io/41023309.github.io/content/w17.html \n 利用\xa0 git submodule update --init --recursive \xa0 取下 cmsimde 子模組的內容. \n pip install flask flask_cors bs4 lxml pelican markdown gevent \n \n', 'tags': '', 'url': 'w17.html'}, {'title': 'w16', 'text': 'https://james652770169.github.io/w16-1/content/index.html \n \n \n', 'tags': '', 'url': 'w16.html'}, {'title': 'w15', 'text': 'https://james652770169.github.io/w15-3/content/index.html \n w15.41023309.repl.co \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w14', 'text': '\n 更改:<iframe width="400" height="400" src="./../cmsimde/static/viewstl.html?src=https://mdewcm2023.github.io/site-james652770169/downloads/untitled.stl"></iframe></p> <p>其中https://mdewcm2023.github.io/site-james652770169從靜態網址取 \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w13', 'text': 'https://stud2.cycu.org:8022\xa0 \n w13 \n 在 stud2 主機建立倉儲的動態系統: \n ssh \xa0 demo2@stud2.cycu.org \xa0登入後, 以 ssh-keygen 在 .ssh 目錄下建立 id_rsa, \xa0 id_rsa.pub \n .ssh/config: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n Host github.com \n User git \n Hostname github.com \n ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n \n \n \n \n \n sftp \xa0 demo2@stud2.cycu.org \xa0登入後, cd .ssh 然後以 put \xa0 config \xa0 將代理主機的設定檔案送到 stud2 帳號下的 .ssh 目錄, 使用 get id_rsa.pub 將公鑰取下, 然後以 SciTE 編輯器打開後, 將公鑰內容送到 Github 帳號下的 settings 中的 SSH and GPG 設定區. \n 完成上述設定後, 以 SSH 協定取下倉儲: \n ssh 登入帳號後, 在所在目錄 /home/帳號/, 以 git clone \xa0 git@github.com:wcm2023 /倉儲名稱.git repo \n cd repo \n 利用以下指令, 將 acp 設為 user 可以執行 (Execute): \n chmod u+x acp \n 以 sftp get 取下 repo 目錄下的 waitress_server.py \n 在 Windows 編輯 waitress_server.py, 之後存為 server.py, 再送回 repo 目錄下. \n 編輯過程在填入個人帳號所配發的 9 字頭的埠號. \n ssh 遠端登入到 repo 目錄下, 執行 hupper3 -m server.py 測試是否已經以 \xa0 https://stud2.cycu.org: 8字頭的埠號. \xa0 \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'W12', 'text': 'W12 \n 網站: https://stud2.cycu.org/~wcm41023309/site/content/index.html \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'About-1', 'text': '我的網站 \n https://mdewcm2023.github.io/site-james652770169 \n 我的倉儲 \n https://github.com/mdewcm2023/site-james65277016 \n 第二組倉儲 \n https://github.com/mdewcm2023/1a-1ag2 \n', 'tags': '', 'url': 'About-1.html'}, {'title': 'Nginx', 'text': 'Nginx 建立 WWW 伺服器: \n #user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    server {\n        listen       80;\n        server_name  192.168.1.10;\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n\n        #error_page  404              /404.html;\n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n\n        # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n        #\n        #location ~ \\.php$ {\n        #    proxy_pass   http://127.0.0.1;\n        #}\n\n        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n        #\n        #location ~ \\.php$ {\n        #    root           html;\n        #    fastcgi_pass   127.0.0.1:9000;\n        #    fastcgi_index  index.php;\n        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n        #    include        fastcgi_params;\n        #}\n\n        # deny access to .htaccess files, if Apache\'s document root\n        # concurs with nginx\'s one\n        #\n        #location ~ /\\.ht {\n        #    deny  all;\n        #}\n    }\n\n\n    # another virtual host using mix of IP-, name-, and port-based configuration\n    #\n    #server {\n    #    listen       8000;\n    #    listen       somename:8080;\n    #    server_name  somename  alias  another.alias;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n\n    # HTTPS server\n    #\n    #server {\n    #    listen       443 ssl;\n    #    server_name  localhost;\n\n    #    ssl_certificate      cert.pem;\n    #    ssl_certificate_key  cert.key;\n\n    #    ssl_session_cache    shared:SSL:1m;\n    #    ssl_session_timeout  5m;\n\n    #    ssl_ciphers  HIGH:!aNULL:!MD5;\n    #    ssl_prefer_server_ciphers  on;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n}\n \n \n \n 改名; \n <!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to WCM2023!</title>\n<style>\nhtml { color-scheme: light dark; }\nbody { width: 35em; margin: 0 auto;\nfont-family: Tahoma, Verdana, Arial, sans-serif; }\n</style>\n</head>\n<body>\n<h1>Welcome to WCM2023!</h1>\n<p>If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required.</p>\n\n<p>For online documentation and support please refer to\n<a href="http://nginx.org/">nginx.org</a>.<br/>\nCommercial support is available at\n<a href="http://nginx.com/">nginx.com</a>.</p>\n\n<p><em>Thank you for using nginx.</em></p>\n</body>\n</html> \n', 'tags': '', 'url': 'Nginx.html'}, {'title': 'Nginx 2', 'text': '\n', 'tags': '', 'url': 'Nginx 2.html'}, {'title': 'W9', 'text': '利用 Brython 讀取 url 中的資料: \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\nfor i in data:\n    #print(i)\n    stud = i.split(":")[0]\n    score =  i.split(":")[1]\n    print(stud, score) \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'Bing', 'text': 'from browser import html, document\nbrython_div = document["brython_div"]\n# Example data for five tests\nurl1 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\nurl2 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6.txt"\nurl3 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6-2.txt"\nurl4 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/075c06b2baf1bb07665f1a98e9f88f7e81ebe1a4/1aw8.txt"\nurl5 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw9.txt"\n \n\'\'\'\ntest1 = ["12345:80", "67890:70"]\ntest2 = ["12345:85", "67890:75"]\ntest3 = ["12345:90", "67890:80"]\ntest4 = ["12345:95", "67890:85"]\ntest5 = ["12345:100", "67890:90"]\n\'\'\'\ntest1 = open(url1).read().split("\\n")[1:]\ntest2 = open(url2).read().split("\\n")[1:]\ntest3 = open(url3).read().split("\\n")[1:]\ntest4 = open(url4).read().split("\\n")[1:]\ntest5 = open(url5).read().split("\\n")[1:]\n \n \n# Create a dictionary to store the student numbers and their test scores\nstudent_scores = {}\n  \n# Iterate over the data for each test\nfor test_data in [test1, test2, test3, test4, test5]:\n    # Iterate over the data for this test\n    for item in test_data:\n        # Split the item into its components\n        student_number, score = item.split(":")\n          \n        # Convert the score to an integer\n        try:\n            score = int(score)\n        except:\n            score = 0\n          \n        # Add the score to the list of scores for this student\n        if student_number not in student_scores:\n            student_scores[student_number] = []\n        student_scores[student_number].append(score)\n  \n# Calculate the average score for each student\nfor student_number, scores in student_scores.items():\n    average_score = int(sum(scores) / len(scores))\n    #print(f"Student {student_number} has an average score of {average_score}")\n    brython_div <= student_number\n    brython_div <= ":"\n    brython_div <= average_score\n    brython_div <= html.BR()\n \nbrython_div <= data \n 將上述程式, 在本頁面導入 Brython 環境後, 可以直接執行, 並且將結果以 Brython browser 的 html 模組列在頁面中: \n \n \n 40723224:57 40823116:81 40823128:0 40823139:17 40823152:74 40823153:92 40823218:45 40823246:42 40828213:44 40828236:0 40828237:0 40828242:0 40828244:0 40840167:0 40871106:0 41023301:67 41023302:38 41023305:43 41023306:66 41023307:85 41023308:50 41023309:69 41023310:32 41023311:80 41023312:72 41023314:52 41023315:83 41023316:76 41023317:76 41023318:0 41123101:82 41123102:75 41123103:0 41123107:62 41123112:0 41123116:58 41123118:48 41123120:0 41123121:55 41123122:89 41123124:67 41123125:0 41123129:78 41123131:72 41123132:66 41123133:54 41123134:38 41123135:88 41123136:32 41123137:76 41123139:88 41123140:68 41123141:50 41123142:68 41123143:59 41123144:75 41123145:42 41123146:0 41123148:66 41123149:88 41123150:69 41123152:0 \n \n', 'tags': '', 'url': 'Bing.html'}, {'title': '網站結構', 'text': '\n 從 \xa0 https://mdewcm2023.github.io/site-s40723224/content/w9.html \xa0 可以知道, 若已知資料所在網路連結: \n \n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt , \n \n \n \n 分別讀取各次考試的成績, 其中利用了 list (數列), 但每次讀取後, 若無法將各學員的成績累加後求取平均, 則無法列出各學員的期中成績. \n 假如利用 dict (字典), 將學號與成績總分作對應, 就有機會列出{"學號": "成績總分", "學號": "成績總分",......} \n \n', 'tags': '', 'url': '網站結構.html'}, {'title': 'w5', 'text': 'git clone\xa0https://github.com/mdewcm2023/site-james652770169.git 9 \n .git/config \n [core]\n\trepositoryformatversion = 0\n\tfilemode = false\n\tbare = false\n\tlogallrefupdates = true\n\tsymlinks = false\n\tignorecase = true\n[remote "origin"]\n\turl = https://ghp_fWSvJzhWWTg3wydnDQrrrrrewazfzj@github.com/mdewcm2023/site-james652770169.git\n\tfetch = +refs/heads/*:refs/remotes/origin/*\n[branch "main"]\n\tremote = origin\n\tmerge = refs/heads/main\n \n home_ipv6/.gitconfig \n [user] \n    name=james652770169\n    email=jammes920803@gmail.com \n', 'tags': '', 'url': 'w5.html'}, {'title': 'Brython-1', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers \xa0 (整數 int(), 浮點數 float()) \n Strings \xa0 (字串) \n print (Python 內建函式, \xa0 print() \xa0 函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt \xa0 動態頁面超文件). \n practice_html.txt \xa0 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator \xa0 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n", 'tags': '', 'url': 'Brython-1.html'}, {'title': 'About-2', 'text': 'https://github.com/mdecycu/cmsite \n \n', 'tags': '', 'url': 'About-2.html'}, {'title': 'Brython-2', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython-2.html'}]};