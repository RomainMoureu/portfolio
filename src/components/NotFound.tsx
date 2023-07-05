function NotFound() {
  return (
    <section id="page_404">
      <div className="container">
        <div className="row">	
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h2 className="h2">
                  On dirait que tu es perdu..
                </h2>
                <p>La page que tu cherches n'est pas disponible !</p>
                <a href="" className="link_404">Retour à l'accueil</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;