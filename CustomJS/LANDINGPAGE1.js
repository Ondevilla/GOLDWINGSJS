var defaultBreadCrums=5;
function SideBar(brand) {

    var toBeSearch = '//*[Brand="' + brand + '"]';

    jsonVar = JSON.search(jsonVarData, toBeSearch);
    var txt = "";

    //Brands
    txt += '<div id="accordion" style="background-color:#f1f1f1;margin:10px;border-radius:3px; border-top:#ddd 1px solid;border-left:#ddd 1px solid;border-right:#ddd 1px solid;">';
    for (let i = 0; i < jsonVar.length; i++) {

        var brandName = jsonVar[i]["Brand"];
        var brand = brandName.replace(/\s/g, "") + [i];
        var jsonHasCategories = jsonVar[i]["Categories"].length;
        txt += '<div class="card">';
        txt += ' <div class="card-header" id="heading' + brand + '">';

        txt += ' <button class="btn  collapsed btn-block word-break" data-toggle="collapse" data-target="#collapse' + brand + '" aria-expanded="false" style="text-align: left;background-color:#dddddd; cursor:pointer; padding:6px;"';
        txt += ' aria-controls="collapse' + brand + '">';
        txt += ' <i class="fa" aria-hidden="true"></i> <a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + '" > ' + brandName + '</a>';


        txt += '</button>';

        txt += '</div>';
        txt += ' <div id="collapse' + brand + '" class="collapse in" aria-labelledby="heading' + brand + '" data-parent="#accordion">';
        txt += ' <div class="card-body">';
        //Categories
        txt += ' <div class=" collapsed btn-block" id="accordionSub' + brand + '" >';


        var jsonCategories = 0;
        if (jsonHasCategories == null || jsonHasCategories == undefined) {
            jsonCategories = 0;
        } else {
            jsonCategories = jsonHasCategories;
        }

        for (let j = 0; j < jsonCategories; j++) {

            var categoryName = jsonVar[i]["Categories"][j]["Name"];
            var hrefCategories = jsonVar[i]["Categories"][j]["Href"];
            var jsonHasSubCategories = jsonVar[i]["Categories"][j]["SubCategories"].length;
            var categories = categoryName.replace(/\s/g, "") + [j];

            txt += ' <div class="card">';
            txt += ' <div class="card-header" id="headingOneSub' + categories + '">';

            if (jsonHasSubCategories == null || jsonHasSubCategories == undefined || jsonHasSubCategories == 0) {
                txt += ' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSub' + categories + '" aria-expanded="false"';
                txt += ' aria-controls="collapseOneSub' + categories + '" style="background-color:transparent;font-size:14px;text-align:left;padding-left:24px;padding-right:6px;padding-bottom:0px;padding-top:0px;background-color:tranparent;border-radius:0px; border-bottom:#ddd 1px solid;"  ><a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + '" > ' + categoryName + ' </a>';
                txt += ' </button>';
            } else {
                txt += ' <button class="btn   btn-block collapsed word-break collapseArrow" data-toggle="collapse" data-target="#collapseOneSub' + categories + '"  aria-expanded="false"';
                txt += ' aria-controls="collapseOneSub' + categories + '" style="background-color:transparent;font-size:14px;text-align:left;padding-left:24px;padding-right:6px;background-color:tranparent; padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"> <a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + '" > ' + categoryName + ' </a>';
                txt += ' </button>';
            }


            txt += ' </div>';
             if (jsonHasSubCategories == null || jsonHasSubCategories == undefined || jsonHasSubCategories == 0) {}
            else
            {

            txt += ' <div id="collapseOneSub' + categories + '" class="collapse" aria-labelledby="headingOneSub' + categories + '" data-parent="#accordionSub' + brand + '">';
            txt += ' <div class="card-body">';
            //Sub SubCategories

            txt += ' <div class="btn  collapsed btn-block" id="accordionSubCat' + [j] + '" style="padding:0px;">';
            var jsonSubCategories = 0;
            if (jsonHasSubCategories == null || jsonHasSubCategories == undefined) {
                jsonSubCategories = 0;
            } else {
                jsonSubCategories = jsonVar[i]["Categories"][j]["SubCategories"].length;
            }

            for (let k = 0; k < jsonSubCategories; k++) {
                var subCategoryName = jsonVar[i]["Categories"][j]["SubCategories"][k]["Name"];
                var hrefSubCategories = jsonVar[i]["Categories"][j]["SubCategories"][k]["Href"];
                var jsonHasSubCategories2 = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"].length;
                var subCategories = subCategoryName.replace(/\s/g, "") + [k];

                txt += ' <div class="card">';
                txt += ' <div class="card-header" id="headingOneSubCat' + subCategories + '">';
                if (jsonHasSubCategories2 == null || jsonHasSubCategories2 == undefined || jsonHasSubCategories2 == 0) {
                    txt += ' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSubCat' + subCategories + '" aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories + '" style="background-color:transparent; font-size:12px;text-align:left;padding-left:36px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"> <a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + '" > ';
                    txt +=  '⮡ &nbsp;&nbsp;' +subCategoryName;
                    txt += '</a> </button>';
                } else {
                    txt += ' <button class="btn   btn-block collapsed word-break collapseArrow" data-toggle="collapse" data-target="#collapseOneSubCat' + subCategories + '"  aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories + '" style=" background-color:transparent;font-size:12px;text-align:left;padding-left:36px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"> <a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + '" >';
                    txt +='⮡ &nbsp;&nbsp;'+  subCategoryName;
                    txt += '</a> </button>';

                }


                txt += ' </div>';

                if (jsonHasSubCategories2 == null || jsonHasSubCategories2 == undefined || jsonHasSubCategories2 == 0  ){}
                else
                {
                     txt += ' <div id="collapseOneSubCat' + subCategories + '" class="collapse" aria-labelledby="headingOneSubCat' + subCategories + '";data-parent="#accordionSubCat' + subCategories + '">';
                     txt += ' <div class="card-body">';
                     // txt +=   ' Lorem3' ;
                     //SubCategories2
                   

                     txt += '    <div class="btn  collapsed btn-block"  id="accordionSubCat' + [k] + '" style="padding:0px;">';
                     var jsonSubCategories2 = 0;
                     if (jsonHasSubCategories2 == null || jsonHasSubCategories2 == undefined) {
                         jsonSubCategories2 = 0;
                     } else {
                         jsonSubCategories2 = jsonHasSubCategories2;
                     }

                     for (let l = 0; l < jsonSubCategories2; l++) {
                         var subCategory2Name = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"][l]["Name"];
                         var hrefSubCategories2 = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"][l]["Href"];
                         var subCategories2 = subCategory2Name.replace(/\s/g, "") + [k];
                         var jsonHasSubCategories3 = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"][l]["SubCategories3"].length;
                         txt += ' <div class="card">';
                         txt += ' <div class="card-header" id="headingOneSubCat' + subCategories2 + '">';

                   

                    if (jsonHasSubCategories3 == null || jsonHasSubCategories3 == undefined || jsonHasSubCategories3 == 0) {
                        txt += ' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSubCat2' + subCategories2 + '" aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories2 + '" style="background-color:transparent;font-size:12px;text-align:left;padding-left:52px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"><a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + ' / ' + subCategory2Name + '" >';
                        txt += '⮡ &nbsp;&nbsp;' + subCategory2Name;
                        txt += ' </a></button>';
                    } else {
                        txt += ' <button class="btn   btn-block collapsed word-break collapseArrow" data-toggle="collapse" data-target="#collapseOneSubCat2' + subCategories2 + '" aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories2 + '" style="background-color:transparent;font-size:12px;text-align:left;padding-left:52px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"><a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + ' / ' + subCategory2Name + '" >';
                        txt += '⮡ &nbsp;&nbsp;' + subCategory2Name;
                        txt += ' </a></button>';

                    }






                         txt += ' </div>';



                         if (jsonHasSubCategories3 == null || jsonHasSubCategories3 == undefined || jsonHasSubCategories3 == 0) {} 
                         else {
                             txt += ' <div id="collapseOneSubCat2' + subCategories2 + '" class="collapse" aria-labelledby="headingOneSubCat' + subCategories2 + '";data-parent="#accordionSubCat' + subCategories2 + '">';
                             txt += ' <div class="card-body">';

                             //SubCatergories3



                                    txt += '    <div class="btn  collapsed btn-block"  id="accordionSubCat' + [l] + '" style="padding:0px;">';
                                    var jsonSubCategories3 = 0;
                                    if (jsonHasSubCategories3 == null || jsonHasSubCategories3 == undefined) {
                                        jsonSubCategories3 = 0;
                                    } else {
                                        jsonSubCategories3 = jsonHasSubCategories3;
                                    }

                                    for (let m = 0; m < jsonSubCategories3; m++) {
                                        var subCategory3Name = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"][l]["SubCategories3"][m]["Name"];
                                        var hrefSubCategories3 = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"][l]["SubCategories3"][m]["Href"];
                                        var subCategories3 = subCategory3Name.replace(/\s/g, "") + [k];
                                        txt += ' <div class="card">';


                                        txt += ' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSubCat' + subCategories3 + '" aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories3 + '" style="background-color:transparent;font-size:12px;text-align:left;padding-left:70px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"><a style="color:black;text-decoration:none;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + ' / ' + subCategory2Name + ' / ' + subCategory3Name+'" >';
                                        txt += '⮡ &nbsp;&nbsp;' + subCategory3Name;
                                        txt += ' </a></button>';


                                        txt += ' </div>';
                                    }
                                    txt += ' </div>';











                              txt += ' </div>';

                              //End SubCategories3


                              txt += ' </div>';
                              txt += ' </div>';
                        }
                          txt += ' </div>';





                     }
                     txt += ' </div>';

                     //End SubCategories2


                     txt += ' </div>';
                     txt += ' </div>';
                }
                   txt += ' </div>';

            }


            txt += ' </div>';
            //End SubCategories
            // txt += ' Lorem2';
            txt += ' </div>';
            txt += ' </div>';
            }
            txt += ' </div>';
        }
        txt += ' </div>';
        //End Categories
        // txt += ' Lorem1';
        txt += ' </div>';
        txt += ' </div>';
        txt += '</div>';

    }
    txt += "</div>";
    //End Brands

    return txt;
}




$("#brandAccordionAdventurer").html(SideBar($("#brandAccordionAdventurer").attr('value')));
$("#brandAccordionLivinbox").html(SideBar($("#brandAccordionLivinbox").attr('value')));
$("#brandAccordionTombow").html(SideBar($("#brandAccordionTombow").attr('value')));

var bread;
if(JSON.parse(localStorage.getItem('bread'))==null)
{

     bread = [{
         "link": "Home"
     }];
    for (i = 0; i < defaultBreadCrums; i++) {

    
            bread.push({
                "link": ""
            });
    }
localStorage.setItem('bread', JSON.stringify(bread));

}
else
{
   bread= JSON.parse(localStorage.getItem('bread'));
}




searchField();
BreadCrumbs();
GetData();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var jsons;

function GetData() {
        bread=JSON.parse(localStorage.getItem('bread'));
    
       
             var toBeSearch = 'Home';
      
        if ( bread[1]["link"]!="") {
            var toBeSearch = '//*[Brand="' + bread[1]["link"] + '"]';
        }
        if ( bread[2]["link"] != "") {
            var toBeSearch = '//Categories[Name="' + bread[2]["link"] + '"]';
        }
        if ( bread[3]["link"] != "") {
            var toBeSearch = '//SubCategories[Name="' + bread[3]["link"] + '"]';
        }
        if (bread[4]["link"] != "") {
            var toBeSearch = '//SubCategories2[Name="' + bread[4]["link"] + '"]';
        }

        if ( bread[5]["link"] != "") {
            var toBeSearch = '//SubCategories3[Name="' + bread[5]["link"] + '"]';
        }

        jsons = JSON.search(jsonVarData, toBeSearch);
    
 
        BannerImage(jsons);
        Product(jsons);
       
 
       
 }


function BreadCrumbs()
{
txt = '';
txt += '<nav aria-label="breadcrumb">';
txt += ' <ol >';


 bread = JSON.parse(localStorage.getItem('bread'));



for (let i = 0; i < bread.length; i++) {
   
        if(i==0)
        {
            //   txt += '<li class="breadcrumb-item" ><a value="Home" style="cursor:pointer;text-decoration:none;" class="HomeClear">Home</a></li>';
                  
              txt += '<li style="display: inline-block;"><div class="BreadItems"  style="cursor:pointer;text-decoration:none;" value="' + bread[i]["link"] + '" data-placeholder="' + bread[i]["link"] + ' "></div></a>';
        }
        else
        {
                var path = '';


                for (j = 1; j < i; j++) {
                    if (j == 1) {
                        path += bread[j]["link"];
                    } else {
                        path += ' / ' + bread[j]["link"];
                    }

                }

                // txt += '<li class="breadcrumb-item"><a class="BreadItems"  style="cursor:pointer;text-decoration:none;" value="' + path+' / ' + bread[i]["link"] +'">' + bread[i]["link"] + '</a></li>';

                txt += '<li style="display: inline-block;"><div class="BreadItems"  style="cursor:pointer;text-decoration:none;" value="' + path + ' / ' + bread[i]["link"] +
                    '" data-placeholder=" / ' + bread[i]["link"] + '"></div></a>';
        }
           
        
 
 

}


txt += ' </ol>';
txt += ' </nav>';


$("#bread").html(txt);
}

function BannerImage(jsons) {
    txt='';
 
        if(jsons.length==0 || jsons[0]["BannerImage"]=="")
        {
            txt += '';
        }
        
        else
        {
         
                 txt += ' <img src= "' + jsons[0]["BannerImage"] + '" style = "width:100%;max-height:440px;" >';
          
           
        }
    
   $("#BannerImage").html(txt);
  
}

function Product(jsons) {
     txt = '';

       var tempo = "";
    if(jsons.length==0)
    {
        tempo +=  'Brand';
    }
    else
    {
         tempo += jsons[0]["Categories"] == null || jsons[0]["Categories"] == undefined ? "" : 'Categories';
         tempo += jsons[0]["SubCategories"] == null || jsons[0]["SubCategories"] == undefined ? "" : 'SubCategories';
         tempo += jsons[0]["SubCategories2"] == null || jsons[0]["SubCategories2"] == undefined ? "" : 'SubCategories2';
          tempo += jsons[0]["SubCategories3"] == null || jsons[0]["SubCategories3"] == undefined ? "" : 'SubCategories3';
    }
      


         var tempocount = "";
      
    if(jsons.length==0)
    {
          tempocount+=jsonVarData.length;
    }
    else
    {
          tempocount += jsons[0]["Categories"] == null || jsons[0]["Categories"] == undefined ? "" : jsons[0]["Categories"].length;
          tempocount += jsons[0]["SubCategories"] == null || jsons[0]["SubCategories"] == undefined ? "" : jsons[0]["SubCategories"].length;
          tempocount += jsons[0]["SubCategories2"] == null || jsons[0]["SubCategories2"] == undefined ? "" : jsons[0]["SubCategories2"].length;
               tempocount += jsons[0]["SubCategories3"] == null || jsons[0]["SubCategories3"] == undefined ? "" : jsons[0]["SubCategories3"].length;
    }
        
      
if(tempocount==0){
  ProductItem();
}

 else if (jsons.length == 0) {

     for (i = 0; i < jsonVarData.length; i++) {
         txt += '<div class = "Navigate" value = "' + jsonVarData[i]["Brand"] + '">';
         txt += ' <div class="col-md-3 redbox">';
         txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';
         txt += ' <img class="card-img-top" src="'+jsonVarData[i]["ContentImage"]+'" style="width:100%;height:100%" alt="Card image cap">';
         txt += ' <hr style="border-color:#c3c3c3;">';
         txt += ' <div class="card-body">';

         txt += ' <p class="card-text" style="text-align:center;">';
 
        

      

        


         txt += jsonVarData[i]["Brand"];

   

         txt += ' </p>';
         txt += ' </div>';
         txt += ' </div>';
         txt += ' </div>';
               txt += '</div>';

     }
  }

  else
  {
      for (i = 0; i < tempocount; i++) {


  var breading = JSON.parse(localStorage.getItem('bread'));
  var path = "";

  
      if (breading[1]["link"] !="" ) {
          path += breading[1]["link"];
      } 
      else if (breading[2]["link"] != "")
      {
          path += ' / ' + breading[2]["link"];
      }
       else if (breading[3]["link"] != "") {
           path += ' / ' + breading[3]["link"];
       }
        else if (breading[4]["link"] != "") {
            path += ' / ' + breading[4]["link"];
        }
         else if (breading[5]["link"] != "") {
             path += ' / ' + breading[5]["link"];
         }
         else{

         }


  
  path += ' / ' + jsons[0][tempo][i]["Name"];

txt += '<div class="Navigate"  value = "' + path + '">';


          txt += ' <div class="col-md-3 redbox">';
          txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';
           
            
          if (tempo == "Brand") {
                 var BCI = jsons[i]["ContentImage"];
                 if(BCI==null || BCI=="" || BCI==undefined)
                 {
                    BCI="../IMAGES/No.jpg";
                 }

               txt += ' <img class="card-img-top" src="' + BCI + '" style="width:100%;height:100%" alt="Card image cap">';
          } else {
                var CI = jsons[0][tempo][i]["ContentImage"]
                 if (CI == null || CI == "" || CI == undefined) {
                     CI = "../IMAGES/No.jpg";
                 }

            txt += ' <img class="card-img-top" src="' + CI + '" style="width:100%;height:100%" alt="Card image cap">';
          }
       
          txt += ' <hr style="border-color:#c3c3c3;">';
          txt += ' <div class="card-body">';

          txt += ' <p class="card-text" style="text-align:center;">';
   
          
    
            


              txt += jsons[0][tempo][i]["Name"];

        


  
          txt += ' </p>';
          txt += ' </div>';
          txt += ' </div>';
          txt += ' </div>';
                txt += '</div>';

      }
  }
   

           $("#Products").html(txt);
}

$('.HomeClear').click(function () {
       window.location.reload();
    bread = [{
        "link": "Home"
    }];

    // BreadCrumbs();
    GetData();

});
$('.BreadItems').click(function () {
    //  window.location.reload();
        
    bread = [{
        "link": "Home"
    }];

     var crum = $(this).attr('value').split(" / ");
    console.log(crum);
     for (i = 0; i <defaultBreadCrums; i++) {

         if (crum[i] == null) {
             bread.push({
                 "link": ""
             });
         }
         else {
             bread.push({
                 "link": crum[i]
             });
         }

    
     }


  

       console.log(bread);
       localStorage.setItem('bread', JSON.stringify(bread));
     BreadCrumbs();
    GetData();

});
$('.Navigate').click(function () {
    //   window.location.reload();
    bread = [{
        "link":"Home"
    }];
    var crum = $(this).attr('value').split(" / ");
    // console.log(crum.length);
    for (i = 0; i < defaultBreadCrums; i++) {

   

        if (crum[i]==null)
        {
            bread.push({
                "link": ""
            });
        }
        else
        {
            bread.push({
                "link": crum[i]
            });
        }
  

    }


  console.log(bread);
  localStorage.setItem('bread', JSON.stringify(bread));
    BreadCrumbs();
    GetData();

});


function searchField() {
    txt = '';
    txt += '  <div class="card" style="background-color:#f1f1f1;margin:10px;border-radius:3px; border-top:#ddd 1px solid;border-left:#ddd 1px solid;border-right:#ddd 1px solid;padding:10px;">';
    txt += '  <div class="form-group">';
    txt += '        <label for="Keyword">Keyword:</label>';
    txt += '       <input type="text" class="form-control input-sm" id="Keyword">';
    txt += '      </div>';

    txt += '      <div class="form-group">';
    txt += '         <label for="Brand">Brand:</label>';
    txt += '         <select class="form-control input-sm" id="BrandKeyword">';
    txt += '            <option></option>';
    for(i=0;i<jsonVarData.length;i++)
    {
         txt += '  <option value="' + jsonVarData[i]["Brand"] + '">' + jsonVarData[i]["Brand"] + '</option>';
    }
    txt += '           </select>';
    txt += '       </div>';

    txt += '  <div class="form-group">';
    txt += '   <button class="btn btn-default btn-block btn-sm" id="SearchItem">Search </button>';
    txt += '   </div>';
    txt += '   </div>';
      $("#searchField").html(txt);
}

$("#SearchItem").click(function () {
    var key = $("#Keyword").val();
     var word = $("#BrandKeyword").val();

     var toBeSearch = '//*[Brand = "' + word + '"]';
     jsonVar = JSON.search(jsonVarData, toBeSearch);
    
      toBeSearch = '//Categories[contains(Name, "' + key + '")]';
    
      jsonVar = JSON.search(jsonVar, toBeSearch);


     console.log(jsonVar);

     
     
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var toBeSearchProduct = '';
var jsonVarProduct;

function jsonGetItems(NAME) {
    return jsons[0][NAME];
}




function ProductItem() {
    txt = '';

    if (bread.length == 3) {
        toBeSearchProduct = '//*[CategoryID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
    }
    if (bread.length == 4) {
        toBeSearchProduct = '//*[SubCategoryID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
    }
    if (bread.length == 5) {
        toBeSearchProduct = '//*[SubCategory2ID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
    }
    if (bread.length == 6) {
        toBeSearchProduct = '//*[SubCategory3ID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
    }

    console.log(jsonVarProduct)

          txt += '<div class="Navigate"  value = "' + jsonVarProduct[0]["ItemNo"] + '"> ';
      txt += ' <div class="col-md-3 redbox">';
        
      txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';
      txt += ' <img class="card-img-top" src="' + jsonVarProduct[0]["ContentImage"] + '" style="width:100%;height:100%" alt="Card image cap">';
      txt += ' <hr style="border-color:#c3c3c3;">';
      txt += ' <div class="card-body">';

      txt += ' <p class="card-text" style="text-align:center;">';



    txt += 'Item No. : '+jsonVarProduct[0]["ItemNo"];
     txt += '<br>';


txt +=   jsonVarProduct[0]["Description"];


      txt += ' </p>';
      txt += ' </div>';
      txt += ' </div>';
        
      txt += ' </div>';
          txt += '</div>';

  

    $("#Products").html(txt);
}
