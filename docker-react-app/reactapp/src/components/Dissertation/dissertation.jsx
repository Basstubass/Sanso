import './dissertation.css';



export const Dissertation=()=>{
    return (
      <main>
      <div className='main'>
        <div className='news_animation_aria'>
          <h1>Dissertation</h1>
          <h2>論文紹介</h2>
        </div>

        <div className='news'>
            <hr width="80%"></hr>
            <div className='news_aria news_text'>
              <h1>Dissertation</h1>
              <p>論文紹介</p>
            </div>
            
            {/* ニュースとトピックはボタンにて制御 */}
            {/* データベースより取得、news_textcontentsを生成 */}
            <div className="news_topics_aria">


               {/* 更新するエリア */}
              <div className='dissertation_textcontents'>
                <h1>Catalysis Science & Technology </h1>
                <p>Vol.11, No.14 pp.4661-5016, 2021</p>
                <p className='diss_main'>Maya Chatterjee, Abhijit Chatterjee, Mitsunori Kitta, Hajime Kawanami
                   Selectivity controlled transformation of carbon dioxide into a versatile bi-functional 
                   multi-carbon oxygenate using a physically mixed ruthenium-iridium catalyst</p>
                <hr width="70%"></hr>
              </div>
               {/* 更新するエリア */}
            </div>
          </div>
      </div>
    </main>
    );
  };