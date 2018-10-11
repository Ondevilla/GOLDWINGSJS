txt='   <div id="preFooter" class="unscrolled">';
txt+='        <div class="pre-footer-inner">';
txt+='            <div class="sqs-layout sqs-grid-12 columns-12 empty" data-layout-label="Pre-Footer Content" data-type="block-field" data-updated-on="1516844534124" id="preFooterBlocks">';
txt+='                <div class="row sqs-row">';
txt+='                    <div class="col sqs-col-12 span-12"></div>';
txt+='                </div>';
txt+='            </div>';
txt+='        </div>';
txt+='    </div>';
txt+='    <footer id="footer" role="contentinfo">';
txt+='        <div class="footer-inner">';
txt+= '            <div class="sqs-layout sqs-grid-12 columns-12" data-layout-label="Footer Content" data-type="block-field" data-updated-on="1456895791287" id="footerBlocks">';   
txt+='                  <div class="row">';
txt+='                    <div class="col-md-3">';
txt+='                        <center style="width: 90%;border-bottom: 2px solid rgba(255,255,255,.4);padding: 15px;">';
txt += '                            <div class="footercolor footerColumnOneLink" value="Goldwings 090318.html" style="max-height:50px; text-decoration: none;cursor:pointer">HOME';
txt+='                                <i class="fa fa-caret-right pull-right" style="font-size:24px;"></i>';
txt+='                            </div>';
txt+='                        </center>';
txt+='                        <center style="width: 90%;border-bottom: 2px solid rgba(255,255,255,.4);padding: 15px;">';
txt+='                            <a class="footercolor footerColumnOneLink" value="Aboutus.html"  style="max-height:50px;text-decoration: none;cursor:pointer">ABOUT US';
txt+='                                <i class="fa fa-caret-right pull-right" style="font-size:24px;"></i>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                        <center style="width: 90%;border-bottom: 2px solid rgba(255,255,255,.4);padding: 15px;">';
txt+='                            <a class="footercolor footerColumnOneLink" value="Services.html"  style="max-height:50px;text-decoration: none;cursor:pointer">SERVICES';
txt+='                                <i class="fa fa-caret-right pull-right" style="font-size:24px;"></i>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                        <center style="width: 90%;border-bottom: 2px solid rgba(255,255,255,.4);padding: 15px;">';
txt+='                            <a class="footercolor  footerColumnOneLink" value="News.html" style="max-height:50px;text-decoration: none;cursor:pointer">NEWS';
txt+='                                <i class="fa fa-caret-right pull-right" style="font-size:24px;"></i>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                        <center style="width: 90%;padding: 15px;">';
txt+='                            <a class="footercolor  footerColumnOneLink" value="Contactus.html" style="max-height:50px;text-decoration: none;cursor:pointer">CONTACT US';
txt+='                                <i class="fa fa-caret-right pull-right" style="font-size:24px;"></i>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                    </div>';

FooterBrand('Adventurer');
FooterBrand('Livinbox');
FooterBrand('Tombow');

txt+='                </div>';
txt+='                <br>';
txt+='                <div style="width: 100%;border-bottom: 2px solid rgba(255,255,255,.4);"></div>';
txt+='                <br>';
txt+='                <div class="row">';
txt+='                    <div class="col-md-3">';
txt+='                        <center>';
txt+='                            <a class="footercolor" href="https://www.facebook.com/AdventurerPH">Adventurer PH';
txt+='                                <span class="fa fa-facebook-square"></span>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                    </div>';
txt+='                    <div class="col-md-3">';
txt+='                        <center> ';
txt+='                            <a class="footercolor" href="https: //www.instagram.com/Adventurer_PH">Adventurer PH';
txt+='                                <span class="fa fa-instagram"></span>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                    </div>';
txt+='                    <div class="col-md-3">';
txt+='                        <center>';
txt+='                            <a class="footercolor" href="https://www.facebook.com/TombowPh">Tombow PH';
txt+='                                <span class="fa fa-facebook-square"></span>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                    </div>';
txt+='                    <div class="col-md-3">';
txt+='                        <center>';
txt+='                            <a class="footercolor" href="https://www.instagram.com/TombowPH/">Tombow PH';
txt+='                                <span class="fa fa-instagram"></span>';
txt+='                            </a>';
txt+='                        </center>';
txt+='                    </div>';
txt+='                </div>';
txt+='                <br>';
txt+='                <br>';
txt+='                <p class="text-align-center">Powered by';
txt+='                    <a href="http://globagilityinc.com/" style="text-decoration: none;">Globagility</a>';
txt+='                </p>';
txt+='            </div>';
txt+='        </div>';
txt+='    </footer> ';

function FooterBrand(brand) {

    var toBeSearch = '//*[Brand="' + brand + '"]';
    var jsonfooter = JSON.search(jsonVarData, toBeSearch);


txt+='                    <div class="col-md-3">';
txt+='                        <center style="width: 90%;padding: 15px;border-bottom: 2px solid rgba(255,255,255,.4);">';
txt+='<div class="footercolor footerLink" value="Home / ' + jsonfooter[0]['Brand'] + '"  style="max-height:50px;text-decoration: none;cursor:pointer; text-transform: uppercase;">';
txt+='                               '+ jsonfooter[0]['Brand'] +'';
txt+='                            </div>';
txt+='                        </center>';
txt+='                        <br>';
txt+='                        <ul style="list-style-type:none">';
                                for (let i = 0; i < jsonfooter[0]['Categories'].length; i++) 
                                {
txt+='                            <li>';
txt+='<div class="footercolor footerLink" value="Home / ' + jsonfooter[0]['Brand'] + ' / ' + jsonfooter[0]["Categories"][i]["Name"] + '" style="text-decoration: none;cursor:pointer" >';
txt+=''                                + jsonfooter[0]["Categories"][i]["Name"] + '';
txt+='                                </div>';

txt+='                            </li>';
                                }

txt+='                        </ul>';
txt+='                    </div>';


}



    $('#footer').html(txt);

    // $('.footerLink').click(function () {
    //     if (window.location.pathname!='/Goldwings%20mockup%20final%202/LandingPage.html')
    //     {
    //         window.location.href="LandingPage.html";
    //     }
        
    //     localStorage.clear();
    //     bread = [];
    //     var crum = $(this).attr('value').split(" / ");

    //     for (i = 0; i < crum.length; i++) {
    //         bread.push({
    //             "link": crum[i]
    //         });

    //     }

    //     localStorage.setItem('bread', JSON.stringify(bread));

    //     $("html,body").animate({
    //         scrollTop: 425
    //     }, 3000);


     

    //     $('#Products').empty();

    //     $(document).ajaxStart(function () {
    //         $("#wait").css("display", "block");
    //     });
    //     $(document).ajaxComplete(function () {
    //         $("#wait").css("display", "none");
    //     });


    //     $('#loading').css("display", "block");
    //     setTimeout(function () {
    //         $('#loading').css("display", "none");
    //     }, 2000);
        
    //     $('#brandAccordionAdventurer').load('LandingPage.html#brandAccordionAdventurer');
    //     $('#Products').load('LandingPage.html#Products');

    //     if(bread.length<=2){
    //         $("#CategoryHeading").empty();
    //     }
    // });

    //  $('.footerColumnOneLink').click(function () {
    //     localStorage.clear();
    //     bread = [];
    //     window.location.href = $(this).attr('value');
    //  });

   