import "./members.css";

export const Members=()=>{
  return(
  <div class="main">

    {/* <!-- 投稿スクリプトを作成 --> */}
    <div class="member_aria">
        <div class="my_photo" id="my_brock">

        </div>

        <div class="profile" id="my_brock">
            <div class="profile_area">
                <h1 class="name_profile" id="names">氏名</h1>
                <p>name</p>
                {/* <img className="name_profile" src="image/aist_icon2.png" /> */}
            </div>
            <div class="profile_affiliation">
                <ul class="affiliation">
                    <li>国立研究開発法人産業技術総合研究所</li>
                    <li>所属</li>
                    <li>所属</li>
                </ul>
            </div>
            <div class="profile_address">
                <ul class="address">
                    <li>〒305-8568</li>
                    <li>茨城県つくば市東1-1-1 中央第5</li>
                    <li>TEL : </li>
                    <li>E-mail : </li>
                </ul>
            </div>
            <div class="update_area">
                <p class="updata_days">last updated 2021.6.30</p>
            </div>
        </div>  
    </div>


  </div>

  );
};