import React from "react";

function index() {
  return (
    <div>
      <section className="food_menu gray_bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <div className="section_tittle">
                {/*<p>Ementa</p> */}
                <h2>Ementa</h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div
                className="nav nav-tabs food_menu_nav"
                id="myTab"
                role="tablist"
              >
                <a
                  className="active"
                  id="Starters-tab"
                  data-toggle="tab"
                  href="#Starters"
                  role="tab"
                  aria-controls="Starters"
                  aria-selected="false"
                >
                  Entradas
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Dishesday-tab"
                  data-toggle="tab"
                  href="#Dishesday"
                  role="tab"
                  aria-controls="Dishesday"
                  aria-selected="false"
                >
                  Pratos do dia
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Grilled-tab"
                  data-toggle="tab"
                  href="#Grilled"
                  role="tab"
                  aria-controls="Grilled"
                  aria-selected="false"
                >
                  Grelhados
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Specialties-tab"
                  data-toggle="tab"
                  href="#Specialties"
                  role="tab"
                  aria-controls="Specialties"
                  aria-selected="false"
                >
                  Especialidades
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Drinks-tab"
                  data-toggle="tab"
                  href="#Drinks"
                  role="tab"
                  aria-controls="Drinks"
                  aria-selected="false"
                >
                  Bebidas
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Desserts-tab"
                  data-toggle="tab"
                  href="#Desserts"
                  role="tab"
                  aria-controls="Desserts"
                  aria-selected="false"
                >
                  Sobremesas
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Redwine-tab"
                  data-toggle="tab"
                  href="#Redwine"
                  role="tab"
                  aria-controls="Redwine"
                  aria-selected="false"
                >
                  Vinhos Tintos
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Whitewine-tab"
                  data-toggle="tab"
                  href="#Whitewine"
                  role="tab"
                  aria-controls="Whitewine"
                  aria-selected="false"
                >
                  Vinhos Brancos
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Rosewine-tab"
                  data-toggle="tab"
                  href="#Rosewine"
                  role="tab"
                  aria-controls="Rosewine"
                  aria-selected="false"
                >
                  Vinhos Rosés
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Greenwine-tab"
                  data-toggle="tab"
                  href="#Greenwine"
                  role="tab"
                  aria-controls="Greenwine"
                  aria-selected="false"
                >
                  Vinhos Verdes
                  <img src="img/icon/play.svg" alt="play" />
                </a>
                <a
                  id="Digestive-tab"
                  data-toggle="tab"
                  href="#Digestive"
                  role="tab"
                  aria-controls="Digestive"
                  aria-selected="false"
                >
                  Digestivos
                  <img src="img/icon/play.svg" alt="play" />
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active single-member"
                  id="Starters"
                  role="tabpanel"
                  aria-labelledby="Starters-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Entradas</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/pao.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pão</h3>
                          <p>Pão regional Alentejano</p>
                          <h5>1€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/azeitonas.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Azeitonas</h3>
                          <p>Azeitona Alentejana</p>
                          <h5>0,60€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/manteiga.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Manteiga / Patês (cada)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>0,60€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/queijo_seco.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Queijinho seco (ovelha/cabra +/- 100gr)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/torresmo.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Torresmos do rissol</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1.50€ (pequeno) / 3€ (grande)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/linguica_assada.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Linguiça (caseira) assada</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4€ (pequeno) / 7€ (grande)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/tapas_presunto.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tapas de Presunto / Paio / Queijo</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>7€ (pequeno) / 10€ (grande)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Dishesday"
                  role="tabpanel"
                  aria-labelledby="Dishesday-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Pratos do dia</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/entradas/sopa_dia.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sopa do dia</h3>
                          <p>Feijão com couve</p>
                          <h5>1,75€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Carne 01</h3>
                          <p>Língua de porco estufada</p>
                          <h5>9€ dose</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Carne 02</h3>
                          <p>Alheira de caça c/ batata frita e ovo estrelado</p>
                          <h5>8€ dose</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Peixe 01</h3>
                          <p>Sopas de tomate c/ bacalhau e ovo</p>
                          <h5>11€ dose</h5>
                        </div>
                        {/*<div className="single_food_item media"> <img src="img/food_menu/logo.png" className="mr-3" alt="..."/> <div className="media-body align-self-center"> <h3>Peixe 02</h3> <p>Carapaus assados c/ salada de pimentos</p> <h5>8,50€ dose</h5> </div> </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Grilled"
                  role="tabpanel"
                  aria-labelledby="Grilled-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Porco Preto</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/secretos_porco.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Secreto de porco preto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1/2 dose 8,50€ / 1 dose 10€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/espetadas_secretos.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Espetada de Secreto de porco preto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>13€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/lagartos_porco_preto.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Lagartos de porco preto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/lombinhos_porco_preto.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Lombinho de porco preto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Costeletas do cachaço de porco preto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Selecção de porco preto na grelha (2 pax)</h3>
                          <p>secreto / lombinho / costeletas</p>
                          <h5>19€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Selecção de porco preto na grelha (3 pax)</h3>
                          <p>secreto / lombinho / costeletas</p>
                          <h5>28€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Porco</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Lombo de porco</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1/2 dose 7€ / 1 dose 8,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Febras de Porco</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1/2 dose 6€ / 1 dose 7,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Salsicha Fresca</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Bitoque de porco c/ batata e ovo</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>7€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/mista_porco.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mista de Porco na grelha</h3>
                          <p>febra / costeleta / salsicha</p>
                          <h5>9€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mista de Porco na grelha (2 pax)</h3>
                          <p>febra / costeleta / salsicha</p>
                          <h5>17€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Borrego</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/costeletas_borrego.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Costeletas de Borrego</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Lombo de novilho</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Posta de novilho à 25 de Abril</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>19€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/posta_novilho.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Posta de novilho</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>18€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Espetada de novilho</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>18€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/bife_novilho.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Bife de novilho</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>17€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Aves</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/grelhados/febras_peru.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Febras de Peru</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>8€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Espetadas de Peru</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Specialties"
                  role="tabpanel"
                  aria-labelledby="Specialties-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Especialidades da casa</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/especialidades/migas_alentejana.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Migas à Alentejana</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/especialidades/sopas_tomate.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sopas de Tomate (bacalhau e ovo)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/especialidades/acorda_bacalhau.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Açorda de Bacalhau</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/especialidades/arros_bacalhau.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Arroz de Bacalhau</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/especialidades/sopas_cacao.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sopas de Cação</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Drinks"
                  role="tabpanel"
                  aria-labelledby="Drinks-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Bebidas</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sangria 1L</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>8€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sangria 1/2 Litro</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Água 1,5 Litro</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Água 0,5 Litro</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Águas com gás (Pedras, Castelo, Tónica)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,20€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pepsi 1.25l</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pepsi / Seven-up / Sumol</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Ice-Tea 0,33l</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Cerveja 0,33l</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,30€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Cerveja mini 0,20l</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Cerveja sem álcool</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Somerby</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,20€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Cafetaria</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>
                            Café / descafeinado / garoto / carioca de limão
                          </h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>0,70€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chá / meia de leite / abatanado</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>0,90€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Carioca de café</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>0,65€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Galão / Capuccino</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,20€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Café duplo</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>1,40€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Desserts"
                  role="tabpanel"
                  aria-labelledby="Desserts-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Frutas</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/frutas/laranja_casa.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Laranja à casa (c/mel e canela)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/frutas/laranja.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Laranja</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/frutas/salada_frutas.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Salada de Frutas</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/frutas/abacaxi.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Abacaxi</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/frutas/peras_bebedas.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Peras Bêbedas</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/frutas/melao.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Melão</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Doces</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/doces/pudim_limao.JPG"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pudim de limão</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mousse de Chocolate</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,25€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sericaia</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/doces/encharcada.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Encharcada</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/doces/bolo_bolacha.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Bolo de Bolacha</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,25€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/doces/pudim_flan.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pudim de leite condensado</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/sobremesas/doces/pudim_requeijao.jpg"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pudim de requeijão c/amêndoas</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>
                            Tarte Gelada (natas, leite condensado, ovos moles,
                            bolacha Maria)
                          </h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,25€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Os nossos doces são todos de fabrico próprio.</p>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Redwine"
                  role="tabpanel"
                  aria-labelledby="Redwine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Tintos / Alentejo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>
                            Vinho Tinto da Casa (vinho de mesa Vila de Frades)
                          </h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2€ (1/4l) / 3€ (1/2l) / 5€ (1l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte da Peceguina</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,38l) / 16€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Herdade dos Grous</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Cantando (herd. da Figueirinha)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Nã te rales (herd. da Figueirinha)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>7,50€ (0,38l) / 12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Black (Mingorra)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>29€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mingorra</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Terras D’Uva</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte Velho</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chaminé</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€ (0,38l) / 10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Marquês de Borba</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>7€ (0,38l) / 11€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Convento da Tomina</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>15€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sobro</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Paço do Conde</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Herd. Grande Gerações</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>22€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Herd. Grande</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vidigueira Grande escolha (A Decisão ato V)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>14€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vidigueira (Saudade ato III )</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Trinca Bolotas</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte das Servas</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Caiado (adega Mayor)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vinha das lebres (Paulo Laureano)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="section_tittle">
                        <h2>Reservas</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="img/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Conde D’ervideira reserva</h3>
                            {/*<p>They're wherein heaven seed hath nothing</p> */}
                            <h5>22€ (0,75l)</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="img/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Fonte Mouro reserva (herd. da Figueirinha)</h3>
                            {/*<p>They're wherein heaven seed hath nothing</p> */}
                            <h5>18€ (0,75l)</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="img/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Herdade do Sobroso reserva</h3>
                            {/*<p>They're wherein heaven seed hath nothing</p> */}
                            <h5>16€ (0,75l)</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="img/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Adega Mayor reserva</h3>
                            {/*<p>They're wherein heaven seed hath nothing</p> */}
                            <h5>16€ (0,75l)</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Whitewine"
                  role="tabpanel"
                  aria-labelledby="Whitewine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Brancos / Alentejo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>
                            Vinho Branco da Casa (vinho de mesa Vila de Frades)
                          </h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2€ (1/4l) / 3€ (1/2l) / 5€ (1l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte da Peceguina</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Flor do Guadiana</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Nã te rales</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sobro</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Black (Mingorra)</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>29€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte Velho</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mingorra</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vidigueira Antão Vaz (inspiração ato IV )</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Terras d’uva</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€ (0,38l) / 10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Paço do conde</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Rosewine"
                  role="tabpanel"
                  aria-labelledby="Rosewine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Rosés / Alentejo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte da Peceguina</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>14€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Terras d’uva</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pouca Roupa</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Greenwine"
                  role="tabpanel"
                  aria-labelledby="Greenwine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Verdes</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Quinta da Aveleda</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4,50€ (0,38l) / 8€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Muralhas de Monção</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Quinta da Lixa</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>8€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Foral de Felgueiras - Tinto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Digestive"
                  role="tabpanel"
                  aria-labelledby="Digestive-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Digestivos</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Moscatel de Setúbal</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vinho do Porto</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Amarguinha</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Licor Beirão</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>1/2 whiskey novo</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>1 whiskey velho</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Aguardentes</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Aguardentes velhas</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Brandys</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Gin</h3>
                          {/*<p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                    </div>
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
