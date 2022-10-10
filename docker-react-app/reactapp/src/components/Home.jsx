export const Home=()=>{
  return (
  <div>
    <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="産総研, AIST, 国立研究開発法人, 研究所" />
        <title>産総研 - 研究者</title>
        <link href="../../public/CSS/main.css" type="text/css" rel="stylesheet" media="all" />
    </head>
        <body>
            <div class="main">
                <div class="my_photo" id="my_brock">

                </div>
                <div class="profile" id="my_brock">
                    <div class="profile_area">
                        <h1 class="name_profile" id="names">川波 肇</h1>
                        <p>（Hajime Kawanami）</p>
                        <img class="name_profile" src="image/aist_icon2.png"/>
                    </div>
                    <div class="profile_affiliation">
                        <ul class="affiliation">
                            <li>国立研究開発法人産業技術総合研究所</li>
                            <li>触媒化学融合研究センター</li>
                            <li>官能基変換チーム 上級主任研究員</li>
                        </ul>
                    </div>
                    <div class="profile_address">
                        <ul class="address">
                            <li>〒305-8568</li>
                            <li>茨城県つくば市東1-1-1 中央第5</li>
                            <li>TEL：</li>
                            <li>E-mail：h-kawanami(@)aist.go.jp</li>
                        </ul>
                    </div>
                    <div class="update_area">
                        <p class="updata_days">last updated 2021.6.30</p>
                    </div>
                </div>

                <div class="whats_pick" id="my_brock">

                    <div class="whats_news">
                        <a href="#"><input type="submit" value="What's News"/></a>
                        <div class="News_area">
                            <div id="News_box">

                            </div>
                            {/* <!-- Firebaseからデータを取得するフィールド --> */}
                        </div>
                        {/* <!-- Firebaseからデータを取得するフィールド --> */}

                    </div>
                    <div class="topics">
                        <a href="#"><input type="submit" value="Topics"/></a>
                        <div class="Topic_area">
                            {/* <!-- Firebaseからデータを取得するフィールド --> */}
                            <div class="topics_box">
                                <p>2001.1.30</p>
                                <a>
                                    <p>news story</p>
                                </a>
                            </div>
                            <div class="topics_box">
                                <p>2001.1.30</p>
                                <a>
                                    <p>news story</p>
                                </a>
                            </div>
                            {/* Firebaseからデータを取得するフィールド  */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>Hajime Kawanami's Homepage e-mail:h-kawanami(@)aist.go.jp</p>
            </div>

            <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
            <script src="./js/config.js"></script>
            

            {/* <script>
                var db = firebase.firestore();

                //ニュース
                //要素の配下に更新していけるようにしたい。

                //トピック
                let topics = document.querySelector('.Topic_area');
                topics.innerHTML = '<div class="topics_box"><p>2001.1.30</p><a><p>news story</p></a></div>'
            </script> */}
        </body>
  </div>
  );
};