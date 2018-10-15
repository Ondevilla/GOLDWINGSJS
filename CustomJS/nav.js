var hasClass; 
txt='<nav class="navbar navbar-default navbar-fixed-top">';
txt+='        <div class="">';
txt+='            <div class="navbar-header">';
txt+='                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">';
txt+='                    <span class="sr-only">Toggle navigation</span>';
txt+='                    <span class="icon-bar"></span>';
txt+='                    <span class="icon-bar"></span>';
txt+='                    <span class="icon-bar"></span>';
txt+='                </button>';
txt+='                <a class="navbar-brand" href="#">';
txt+='                    <img src="IMAGES/Logos/goldwings1logo.png" alt="Goldwings" class="img img-responsive" style="">';
txt+='                </a>';
txt+='            </div>';
txt+='            <div id="navbar" class="navbar-collapse collapse">';
txt+='                <ul class="nav navbar-nav navbar-right" style="padding-right: 5px;">';


                            var hasClass='';
                            if ((window.location.pathname).includes("index.html") == true) {
                                hasClass = 'active';
                            }
txt += '                    <li style="margin-left:2px;margin-right:2px;" class="' + hasClass + '" >';
txt += '                        <a class="button-nav button-nav-trans navLink" value="index.html">';
txt+='                           HOME';
txt+='                            <div class="line"></div>';
txt+='                        </a>';
txt+='                    </li>';

                         
                            var hasClass='';
                            if ((window.location.pathname).includes("Aboutus.html") == true) {
                                  hasClass = 'active';
                            }

txt += '                    <li style="margin-left:2px;margin-right:2px;" class="' + hasClass + '" >';
txt += '                        <a class="button-nav button-nav-trans navLink" value="Aboutus.html">';
txt+='                            ABOUT US';
txt+='                            <div class="line"></div>';
txt+='                        </a>';
txt+='                    </li>';

                            var hasClass='';
                            if ((window.location.pathname).includes("LandingPage.html") == true) {
                                hasClass = 'active';
                            }

txt += '                    <li style="margin-left:2px;margin-right:2px;" class="' + hasClass + '" >';
txt+='                        <a class="button-nav button-nav-trans product">';
txt+='                            BRANDS ▼';
txt+='                            <div class="line"></div>';
txt+='                        </a>';
txt+='                        <ul class="dropdown" style="border:2px solid #e3192a;">';
txt+='                            <div style="background-color: #e3192a;"></div>';
txt+='                            <li style="margin-left:2px;margin-right:2px;">';
txt += '                                <a style="padding-left:10px;cursor:pointer"  class="navBrandLink" value="Home / Adventurer">';
txt+='                                    <center>';
txt+='                                        <img src="IMAGES/Logos/plain_adventurer.png" style="max-height:40px; ">';
txt+='                                    </center>';
txt+='                                </a>';
txt+='                            </li>';
txt+='                            <li style="margin-left:2px;margin-right:2px;">';
txt += '                                <a style="padding-left:10px;cursor:pointer" class="navBrandLink" value="Home / Livinbox">';
txt+='                                    <center>';
txt+='                                        <img src="IMAGES/Logos/plain_livinbox.png" style="max-height:40px; ">';
txt+='                                    </center>';
txt+='                                </a>';
txt+='                            </li>';
txt+='                            <li style="margin-left:2px;margin-right:2px;">';
txt += '                                <a style="padding-left:10px;cursor:pointer" class="navBrandLink" value="Home / Tombow">';
txt+='                                    <center>';
txt+='                                        <img src="IMAGES/Logos/plain_tombow.png" style="max-height:40px; ">';
txt+='                                    </center>';
txt+='                                </a>';
txt+='                            </li>';
txt+='                        </ul>';
txt+='                    </li>';



                            var hasClass='';
                            if ((window.location.pathname).includes("Services.html") == true) {
                                hasClass = 'active';
                            }

txt += '                    <li style="margin-left:2px;margin-right:2px;" class="' + hasClass + '" >';
txt += '                        <a class="button-nav button-nav-trans  navLink" value="Services.html">';
txt+='                            SERVICES';
txt+='                            <div class="line"></div>';
txt+='                        </a>';
txt+='                    </li>';

                            var hasClass='';
                            if ((window.location.pathname).includes("News.html") == true) {
                                hasClass = 'active';
                            }

txt += '                    <li style="margin-left:2px;margin-right:2px;" class="' + hasClass + '" >';
txt += '                        <a class="button-nav button-nav-trans  navLink" value="News.html">';
txt+='                            NEWS';
txt+='                            <div class="line"></div>';
txt+='                        </a>';
txt+='                    </li>';

                            var hasClass='';
                            if ((window.location.pathname).includes("Contactus.html") == true) {
                                hasClass = 'active';
                            }

txt += '                    <li style="margin-left:2px;margin-right:2px;" class="' + hasClass + '" >';
txt += '                        <a class="button-nav button-nav-trans  navLink" value="Contactus.html">';
txt+='                            CONTACT US';
txt+='                            <div class="line"></div>';
txt+='                        </a>';
txt+='                    </li>';
txt+='                </ul>';
txt+='            </div>';
txt+='            <!--/.nav-collapse -->';
txt+='        </div>';
txt+='    </nav>';


$('#nav').html(txt);

  $('.navLink').click(function () {
      localStorage.clear();
      bread = [];
      window.location.href = $(this).attr('value');
  });


   $('.navBrandLink').click(function () {
       if ((window.location.pathname).includes("LandingPage.html") == false) {
           window.location.href = "LandingPage.html";
       }

       localStorage.clear();
       bread = [];
       var crum = $(this).attr('value').split(" / ");

       for (i = 0; i < crum.length; i++) {
           bread.push({
               "link": crum[i]
           });

       }

       localStorage.setItem('bread', JSON.stringify(bread));

       $("html,body").animate({
           scrollTop: 440
       }, 3000);




       $('#Products').empty();

       $(document).ajaxStart(function () {
           $("#wait").css("display", "block");
       });
       $(document).ajaxComplete(function () {
           $("#wait").css("display", "none");
       });


       $('#loading').css("display", "block");
       setTimeout(function () {
           $('#loading').css("display", "none");
       }, 2000);

       $('#brandAccordionAdventurer').load('LandingPage.html#brandAccordionAdventurer');
       $('#Products').load('LandingPage.html#Products');

       if (bread.length <= 2) {
           $("#CategoryHeading").empty();
       }
   });