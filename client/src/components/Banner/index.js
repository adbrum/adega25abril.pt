/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

function index() {
  return (
    <div>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>Comida Regional Alentejana</h5>
                  <h1>Feito com amor</h1>
                  <p>
                    <spam>
                      Situada em pleno centro histórico, abriu portas em 1980. A
                      sua decoração exibe objetos agrícolas pendurados no teto e
                      nas paredes de tijolo, bem como as talhas de barro.
                    </spam>
                    <spam>
                      Valoriza a cozinha regional alentejana tendo como opção o
                      porco preto grelhado, as sopas de cação, as sopas de
                      tomate, a açorda alentejana ou o arroz de bacalhau. Pode
                      terminar a sua refeição com um pudim de requeijão e
                      amêndoas, uma sericaia, uma encharcada ou um pudim de
                      batata-doce e amêndoas.
                    </spam>
                  </p>
                  <div className="banner_btn">
                    {/*<div className="banner_btn_iner"> <a href="#" className="btn_2" >Reservation <img src="img/icon/left_1.svg" alt="" /></a> </div> */}
                    {/*<a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="popup-youtube video_popup"> <span><img src="img/icon/play.svg" alt="" /></span> Watch our story</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
