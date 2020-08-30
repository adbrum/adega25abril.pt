import React from "react";

function index() {
  return (
    <div>
      <section className="exclusive_item_part blog_item_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Pratos mais populares</p>
                <h2>Especialidades da casa</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/cozido_grao.jpg" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>Cozido de Grão Alentejano</h3>
                  <p>
                    Prato preparado com grão-de-bico, diversos legumes e vários
                    tipos de carne do porco (orelha, focinho, enchidos,
                    toucinho, entrecosto, carne). Quando servido, acompanha
                    sempre com sopas de pão e hortelã.
                  </p>
                  {/*<a href="#" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/acorda.jpg" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>Açorda Alentejana</h3>
                  <p>
                    Prato típico alentejano cuja sua composição básica é o alho,
                    sal, azeite, coentros, poejos, pimento verde, água a ferver
                    na qual se cozeu o bacalhau e um ovo escalfado.
                  </p>
                  {/*<a href="#" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/migas.jpg" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>Migas à Alentejana</h3>
                  <p>
                    Confecionam-se refogando pedaços de pão duro, previamente
                    humedecidos em água, em azeite e alho. Acompanham com carne
                    de porco do alguidar frita (lombo e entrecosto).
                  </p>
                  {/*<a href="#" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a> */}
                </div>
              </div>
            </div>
            {/*<div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none"> <div className="single_blog_item"> <div className="single_blog_img"> <img src="img/food_item/food_item_1.png" alt="" /> </div> <div className="single_blog_text"> <h3>Cremy Noodles</h3> <p> Was brean shed moveth day yielding tree yielding day were female and </p> <a href="#" className="btn_3" >Read More <img src="img/icon/left_2.svg" alt="" /></a> </div> </div> </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
