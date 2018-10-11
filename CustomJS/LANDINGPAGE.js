function SideBar(brand) {

    var toBeSearch = '//*[Brand="' + brand + '"]';

    jsonVar = JSON.search(jsonVarData, toBeSearch);
    var txt = "";

    txt += '<div id="accordion" style="background-color:#f1f1f1;margin:10px;border-radius:5px; border-top:#ddd 1px solid;border-left:#ddd 1px solid;border-right:#ddd 1px solid;">';

    for (let i = 0; i < jsonVar.length; i++) {

        var brandName = jsonVar[i]["Brand"];
        var brand = brandName.replace(/\s/g, "") + [i];
        var jsonHasCategories = jsonVar[i]["Categories"].length;


        //Brands
        txt += '<div class="accordion  active"  style="width:100%;text-align: left;background-color:#58585a; cursor:pointer; padding:6px; border-radius:5px;">';
        txt += '<center> <a style="color:white;text-decoration:none;padding:0px;" class="Navigate" value="' + brandName + '" > ' + brandName + '</a></center>';
        txt += '</div>';
        txt += '<div class="panel show">';


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

            if (jsonHasSubCategories == null || jsonHasSubCategories == undefined || jsonHasSubCategories == 0) {
                var HasCollapseArrow = '';
            } else {
                var HasCollapseArrow = 'collapsable';
            }
            //Category
            txt += ' <div class="accordion ' + HasCollapseArrow + ' "   style="width:100%;background-color:transparent;font-size:14px;text-align:left;padding-left:30px;padding-right:6px;padding-bottom:0px;padding-top:0px;background-color:tranparent;border-radius:0px; border-bottom:#ddd 1px solid;"  ><a style="color:black;text-decoration:none;padding:5px 0px;cursor:pointer;" class="Navigate" value="' + brandName + ' / ' + categoryName + '" > ' + categoryName + '</a>';
            txt += ' </div>';

            txt += '<div class="panel">';


            if (jsonHasSubCategories == null || jsonHasSubCategories == undefined || jsonHasSubCategories == 0) {} else {
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

                    if (jsonHasSubCategories2 == null || jsonHasSubCategories2 == undefined || jsonHasSubCategories2 == 0) {
                        var HasCollapseArrow = '';
                    } else {
                        var HasCollapseArrow = 'collapsablesubcat';
                    }

                    //SubCategory
                    txt += ' <div class="accordion  ' + HasCollapseArrow + '"  style=" width:100%;background-color:transparent;font-size:12px;text-align:left;padding-left:45px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"> <a style="color:black;text-decoration:none;padding:5px 0px;cursor:pointer;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + '" >';
                    txt +=  subCategoryName;
                    txt += '</a> </div>';
                    txt += '<div class="panel">';

                    if (jsonHasSubCategories2 == null || jsonHasSubCategories2 == undefined || jsonHasSubCategories2 == 0) {} else {
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

                            if (jsonHasSubCategories3 == null || jsonHasSubCategories3 == undefined || jsonHasSubCategories3 == 0) {
                                var HasCollapseArrow = '';
                            } else {
                                var HasCollapseArrow = 'collapsablesubcat2';
                            }

                            //SubCategory2
                            txt += ' <div  class="accordion  ' + HasCollapseArrow + '"   style="width:100%;background-color:transparent;font-size:12px;text-align:left;padding-left:60px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"><a style="color:black;text-decoration:none;cursor:pointer;padding:5px 0px;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + ' / ' + subCategory2Name + '" >';
                            txt +=  subCategory2Name;
                            txt += ' </a></div>';
                            txt += '<div class="panel">';
                            if (jsonHasSubCategories3 == null || jsonHasSubCategories3 == undefined || jsonHasSubCategories3 == 0) {} else {


                                //SubCatergories3    
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

                                    txt += ' <div  style="width:100%;background-color:transparent;font-size:12px;text-align:left;padding-left:75px;padding-right:6px;border-radius:0px;padding-bottom:0px;padding-top:0px;border-radius:0px; border-bottom:#ddd 1px solid"><a style="color:black;text-decoration:none;padding:5px 0px;cursor:pointer;" class="Navigate" value="' + brandName + ' / ' + categoryName + ' / ' + subCategoryName + ' / ' + subCategory2Name + ' / ' + subCategory3Name + '" >';
                                    txt += subCategory3Name;
                                    txt += ' </a></div>';
                                }
                            }
                            txt += '</div>';

                        }
                    }
                    txt += '</div>';


                }
            }


            txt += '</div>';

        }


        txt += '</div>';

        return txt;

    }
}


$("#brandAccordionAdventurer").html(SideBar($("#brandAccordionAdventurer").attr('value')));
$("#brandAccordionLivinbox").html(SideBar($("#brandAccordionLivinbox").attr('value')));
$("#brandAccordionTombow").html(SideBar($("#brandAccordionTombow").attr('value')));

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {

    acc[i].onclick = function () {
        this.classList.toggle("active");
         this.classList.toggle("rotate");
        this.nextElementSibling.classList.toggle("show");
    }
}


var bread;
if (JSON.parse(localStorage.getItem('bread')) == null) {
    bread = [{
        "link": "Home"
    }];
} else {
    bread = JSON.parse(localStorage.getItem('bread'));
}


searchField();
BreadCrumbs();
GetData();


var jsons;

function GetData() {
    bread = JSON.parse(localStorage.getItem('bread'));
    if(bread[0]["link"]=="Search")
    {
        ProductSearch(jsonVar);
    }
    else
    {
        var data;

        if (bread.length == 1) {
            var toBeSearch = 'Home';
            data = jsonVarData;
        }
        if (bread.length == 2) {
            var toBeSearch = '//*[Brand="' + bread[1]["link"] + '"]';
            data = jsonVarData;
        }
        if (bread.length == 3 && String(bread[2]["link"]).includes("item:") == false) {
            var toBeSearch = '//Categories[Name="' + bread[2]["link"] + '"]';
            data = jsonVarData;
        }
        if (bread.length == 3 && String(bread[2]["link"]).includes("item:") == true) {
            var toBeSearch = '//*[ItemNo="' + bread[2]["link"].replace("item:", '') + '"]';
            data = jsonVarItems;
        }
        if (bread.length == 4 && String(bread[3]["link"]).includes("item:") == false) {
            var toBeSearch = '//SubCategories[Name="' + bread[3]["link"] + '"]';
            data = jsonVarData;
        }
        if (bread.length == 4 && String(bread[3]["link"]).includes("item:") == true) {
            var toBeSearch = '//*[ItemNo="' + bread[3]["link"].replace("item:", '') + '"]';
            data = jsonVarItems;
        }
        if (bread.length == 5 && String(bread[4]["link"]).includes("item:") == false) {
            var toBeSearch = '//SubCategories2[Name="' + bread[4]["link"] + '"]';
            data = jsonVarData;
        }
        if (bread.length == 5 && String(bread[4]["link"]).includes("item:") == true) {
            var toBeSearch = '//*[ItemNo="' + bread[4]["link"].replace("item:", '') + '"]';
            data = jsonVarItems;
        }
        if (bread.length == 6 && String(bread[5]["link"]).includes("item:") == false) {
            var toBeSearch = '//SubCategories3[Name="' + bread[5]["link"] + '"]';
            data = jsonVarData;
        }
        if (bread.length == 6 && String(bread[5]["link"]).includes("item:") == true) {
            var toBeSearch = '//*[ItemNo="' + bread[5]["link"].replace("item:", '') + '"]';
            data = jsonVarItems;
        }
        if (bread.length == 7) {
            var toBeSearch = '//*[ItemNo="' + bread[6]["link"].replace("item:", '') + '"]';
            data = jsonVarItems;
        }


        jsons = JSON.search(data, toBeSearch);

        console.log(toBeSearch);

        if (bread.length >= 3) {
            var toBeSearchCategory = '//Categories[Name="' + bread[2]["link"] + '"]';
            var dataCategory = jsonVarData;
            jsonsCategory = JSON.search(dataCategory, toBeSearchCategory);
            console.log(jsonsCategory);
        }

        console.log(jsons);

        BannerImage(jsons);
        Product(jsons);
    }
    


}


function BreadCrumbs() {
   

   
    if (bread[0]['link'] == "Search" && bread.length==2) {
       
         txt = '';
         txt += '<nav aria-label="breadcrumb">';
         txt += ' <ol class="breadcrumb">';
          txt += '<li class="breadcrumb-item" ><a value="Home" style="cursor:pointer;text-decoration:none;color:#e3192a;" class="HomeClear">Home</a></li>';
         txt += '<li class="breadcrumb-item" >' + bread[0]["link"] + '</li>';
         txt += '<li class="breadcrumb-item" >' + bread[1]["link"] + '</li>';
         txt += ' </ol>';
         txt += ' </nav>';

         $("#bread").html(txt);
     
    }
    else
    {
             txt = '';
             txt += '<nav aria-label="breadcrumb">';
             txt += ' <ol class="breadcrumb">';

             for (let i = 0; i < bread.length; i++) {

                 if (i == 0) {
                     txt += '<li class="breadcrumb-item" ><a value="Home" style="cursor:pointer;text-decoration:none;color:#e3192a;" class="HomeClear">Home</a></li>';
                 } else if (i == bread.length - 1) {

                     txt += '<li class="breadcrumb-item" >' + bread[i]["link"].includes('item:') ? '&nbsp; / &nbsp;' + bread[i]["link"].replace("item:", "") : '&nbsp; /  &nbsp;' + bread[i]["link"] + '</li>';
                 } else {
                     var path = '';

                     for (j = 1; j < i; j++) {
                         if (j == 1) {
                             path += bread[j]["link"];
                         } else {
                             path += ' / ' + bread[j]["link"];
                         }
                     }

                     if (path == '') {
                         txt += '<li class="breadcrumb-item"><a class="BreadItems"  style="cursor:pointer;text-decoration:none;color:#e3192a;" value="' + bread[i]["link"] + '">' + bread[i]["link"] + '</a></li>';
                     } else {
                         txt += '<li class="breadcrumb-item"><a class="BreadItems"  style="cursor:pointer;text-decoration:none;color:#e3192a;" value="' + path + ' / ' + bread[i]["link"] + '">' + bread[i]["link"] + '</a></li>';
                     }

                 }


                 localStorage.setItem('bread', JSON.stringify(bread));
             }


             txt += ' </ol>';
             txt += ' </nav>';

           $("#bread").html(txt);
    }
    
}

function BannerImage(jsons) {
    txt = '';


    if (jsons.length > 0) {

        if (jsons[0]["Brand"] == undefined) {
            if (jsonsCategory[0]["BannerImage"] == "") {
                txt += ' <img src="IMAGES/NoBanner.jpg" style="width:100%;max-height:440px;" >';
            } else {
                txt += ' <img src= "' + jsonsCategory[0]["BannerImage"] + '" style = "width:100%;max-height:440px;" >';
            }
        } else {
            if (jsons[0]["BannerImage"] == "") {
                txt += ' <img src="IMAGES/NoBanner.jpg" style="width:100%;max-height:440px;" >';
            } else {
                txt += ' <img src= "' + jsons[0]["BannerImage"] + '" style = "width:100%;max-height:440px;" >';
            }
        }


    } else {

        txt += ' <img src="IMAGES/NoBanner.jpg" style="width:100%;max-height:440px;" >';
    }

    $("#BannerImage").html(txt);

}


function CategoryHeading() {
    console.log(jsonsCategory);
    
    txt = '';
    txt += '<center><h3>' + jsonsCategory[0]['Name'] + '</h3><center>';

    $('#CategoryHeading').html(txt);
}
function ProductSearch() {


     var breading = JSON.parse(localStorage.getItem('bread'));

 toBeSearch = '//*[contains(ItemNo, "' + breading[1]['link'] + '")]';

 jsonVar = JSON.search(jsonVarItems, toBeSearch);


    console.log(jsonVar);
    

        txt = '';
          txt += '<table id="searchTable" class="dataTable no-footer"  style="border-bottom:none" >';
           txt += '<thead>';
           txt += '<tr><th style="opacity:0"></th></tr>';
      
           txt += '</thead>';
             txt += '<tbody>';
        for (i = 0; i < jsonVar.length; i++) {
tag = '';
               tag +=  jsonVar[i]["BrandID"]=="" ? "" : 'B';
               tag +=  jsonVar[i]["CategoryID"] == "" ? "" : 'C';
               tag += jsonVar[i]["SubCategoryID"] == "" ? "" : 'S';
               tag +=  jsonVar[i]["SubCategory2ID"] == "" ? "" : 'S2';
               tag += jsonVar[i]["SubCategory3ID"] == "" ? "" : 'S3';
           console.log(tag);



var path='';


    var toBeSearch = '//*[RowID="' + jsonVar[i]["BrandID"] + '"]/Brand';
    var jsonVarSpecificBrand = JSON.search(jsonVarData, toBeSearch);
    path +=jsonVarSpecificBrand;

if (tag == "BC" || tag == "BCS" || tag == "BCSS2" || tag == "BCSS2S3")
{
   
    //based on data
    var toBeSearch = '//*[Brand="' + jsonVarSpecificBrand + '"]';
    var dataToBeUsed = JSON.search(jsonVarData, toBeSearch);
    //
    var toBeSearch = '//Categories[RowID="' + jsonVar[i]["CategoryID"] + '"]/Name';
    var jsonVarSpecificCategory = JSON.search(dataToBeUsed, toBeSearch);
    path += ' / ' + jsonVarSpecificCategory;

    
}

if (tag == "BCS" || tag == "BCSS2" || tag == "BCSS2S3") {
     //based on data
     var toBeSearch = '//Categories[RowID="' + jsonVar[i]["CategoryID"] + '"]';
     var dataToBeUsed = JSON.search(dataToBeUsed, toBeSearch);
     //
    var toBeSearch = '//SubCategories[RowID="' + jsonVar[i]["SubCategoryID"] + '"]/Name';
    var jsonVarSpecificSubCategory = JSON.search(dataToBeUsed, toBeSearch);
    path += ' / ' + jsonVarSpecificSubCategory;
}
if (tag == "BCSS2" || tag == "BCSS2S3") {
      //based on data
      var toBeSearch = '//SubCategories[RowID="' + jsonVar[i]["SubCategoryID"] + '"]';
      var dataToBeUsed = JSON.search(dataToBeUsed, toBeSearch);
      //
    var toBeSearch = '//SubCategories2[RowID="' + jsonVar[i]["SubCategory2ID"] + '"]/Name';
    var jsonVarSpecificSubCategory2 = JSON.search(dataToBeUsed, toBeSearch);
    path += ' / ' + jsonVarSpecificSubCategory2;
}
if (tag == "BCSS2S3") {
    //based on data
    var toBeSearch = '//SubCategories2[RowID="' + jsonVar[i]["SubCategory2ID"] + '"]';
    var dataToBeUsed = JSON.search(dataToBeUsed, toBeSearch);
    //
    var toBeSearch = '//SubCategories3[RowID="' + jsonVar[i]["SubCategory3ID"] + '"]/Name';
    var jsonVarSpecificSubCategory3 = JSON.search(dataToBeUsed, toBeSearch);
    path += ' / ' + jsonVarSpecificSubCategory3;
}

 path += ' / item:' + jsonVar[i]["ItemNo"];
           
console.log(path);

        txt += '<tr class="col-md-3"><td  style="border-top: none;">';
          txt += '<div class="NavigateProduct"  value = "' + path + '">';
          txt += ' <div class="col-md-12 redbox">';
          txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';


          txt += '<center> <img class="card-img-top" src="' + ImageValidation(jsonVar[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:200px;min-width:200px;max-height:200px;max-width:200px;" alt="Card image cap"></center>';
          txt += ' <hr style="border-color:#c3c3c3;">';
          txt += ' <div class="card-body">';
          txt += ' <p class="card-text" style="text-align:center; min-height:60px;">';
          txt += 'Item No. : ' + jsonVar[i]["ItemNo"];
          txt += '<br>';
          txt += jsonVar[i]["Description"];
          txt += ' </p>';
          txt += ' </div>';

          txt += ' </div>';
          txt += ' </div>';
          txt += ' </div>';
   txt += '</td></tr>';
   
        }
   txt += '</tbody>';
    


    $("#Products").html(txt);
}
function Product(jsons) {

    txt = '';


    var tempo = "";
    if (jsons.length == 0) {
        tempo += 'Brand';
    } else {
        tempo += jsons[0]["Categories"] == null || jsons[0]["Categories"] == undefined ? "" : 'Categories';
        tempo += jsons[0]["SubCategories"] == null || jsons[0]["SubCategories"] == undefined ? "" : 'SubCategories';
        tempo += jsons[0]["SubCategories2"] == null || jsons[0]["SubCategories2"] == undefined ? "" : 'SubCategories2';
        tempo += jsons[0]["SubCategories3"] == null || jsons[0]["SubCategories3"] == undefined ? "" : 'SubCategories3';
    }


    var tempocount = "";

    if (jsons.length == 0) {
        tempocount += jsonVarData.length;
    } else {
        tempocount += jsons[0]["Categories"] == null || jsons[0]["Categories"] == undefined ? "" : jsons[0]["Categories"].length;
        tempocount += jsons[0]["SubCategories"] == null || jsons[0]["SubCategories"] == undefined ? "" : jsons[0]["SubCategories"].length;
        tempocount += jsons[0]["SubCategories2"] == null || jsons[0]["SubCategories2"] == undefined ? "" : jsons[0]["SubCategories2"].length;
        tempocount += jsons[0]["SubCategories3"] == null || jsons[0]["SubCategories3"] == undefined ? "" : jsons[0]["SubCategories3"].length;
    }

    console.log(tempocount);
    console.log(tempo);

    if (jsons.length == 0) {


        for (i = 0; i < jsonVarData.length; i++) {
            txt += '<div class = "Navigate" value = "' + jsonVarData[i]["Brand"] + '">';
            txt += ' <div class="col-md-3 redbox">';
            txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';


            txt += ' <center><img class="card-img-top" src="' + ImageValidation(jsonVarData[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap"></center>';

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
    } else if (tempocount != 0 && tempo == "SubCategories") {

        TabSubCategories();
        CategoryHeading();
        txt='';
        $("#Products").html(txt);
    } else if (tempocount == 0 && tempo == "SubCategories") {

        CategoryHeading();
        TabSubCategories();
        ProductItem(tempo, tempocount);
    } else if ((tempocount == 0 && tempo == "SubCategories2") || (tempocount != 0 && tempo == "SubCategories2") || (tempocount == 0 && tempo == "SubCategories3") || (tempocount != 0 && tempo == "SubCategories3")) {
        CategoryHeading();
        TabSubCategories();
        ProductItem(tempo, tempocount);
    } else if (tempo == '' && tempocount == '' && bread.length == 6) {

        CategoryHeading();
        TabSubCategories();
        ProductItem(tempo, tempocount);
    } else if (tempo == '') {
          $('#CategoryHeading').empty();
        $('#TabsCategory').empty();
        ProductItemSpecific();
    } else {

        $('#TabsCategory').empty();

        for (i = 0; i < tempocount; i++) {


            var path = GetBread(' / ' + jsons[0][tempo][i]["Name"]);

            txt += '<div class="Navigate "  value = "' + path + '">';


            txt += ' <div class="col-md-3 redbox">';
            txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';


            if (tempo == "Brand") {


                txt += ' <center><img class="card-img-top" src="' + ImageValidation(jsons[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap"></center>';
            } else {

                txt += '<center><img class="card-img-top" src="' + ImageValidation(jsons[0][tempo][i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap"></center>';
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


function searchField() {
    var breading = JSON.parse(localStorage.getItem('bread'));
    txt = '';
    txt += '  <div class="card" style="background-color:#58585a;margin:10px;border-radius:5px; border-top:#ddd 1px solid;border-left:#ddd 1px solid;border-right:#ddd 1px solid;padding:10px;">';
    txt += '  <div class="row">';
    txt += '     <div class="col-xs-3">  <span style=" color:white; font-size: 18px;line-height: 1.6;padding-left:5px;"  > Search </span>  </div>';
    if (breading.length == 2 && breading[0]['link']=='Search')
    {
          txt += '     <div class="col-xs-8">  <input type="text" class="" value="' + breading[1]['link'] + '"  style="width:100%;border-radius:5px;" id="Keyword">    </div>';
    }
    else{
          txt += '     <div class="col-xs-8">  <input type="text" class=""  style="width:100%;border-radius:5px;" id="Keyword">    </div>';
    }
      txt += '   <div class="col-xs-1">    <span class="fa fa-search" style="color:white;padding-left:5px; font-size: 17px;line-height: 1.5;letter-spacing: -1px;cursor:pointer;" id="SearchItem"><span>    </div>';
 
      txt += '      </div>';
    txt += '   </div>';
    $("#searchField").html(txt);
}

$("#SearchItem").click(function () {
    var key = $("#Keyword").val();

 
     localStorage.clear();
     bread = [];
     bread.push({
       "link": "Search"
     });
     bread.push({
       "link": key
     });
     localStorage.setItem('bread', JSON.stringify(bread));
     BreadCrumbs();
 $.getScript('//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js?cache=' + startTime());
 
     ProductSearch();

     $(document).ajaxStart(function () {
         $("#wait").css("display", "block");
     });
     $(document).ajaxComplete(function () {
         $("#wait").css("display", "none");
          $('#searchTable').DataTable({
              "searching": false,
              'ordering': false,
              "lengthChange": false,
              "pageLength": 8,
              "language": {
                  "lengthMenu": "Display _MENU_ records per page",
                  "zeroRecords": "No Product Found",
                  "info": "_START_ to _END_ from _TOTAL_ products found",
                  "infoEmpty": "No Product Available",
                  "infoFiltered": "(filtered from _MAX_ total records)"
              }
          });
     });

 
      

              txt = ' <img src="IMAGES/NoBanner.jpg" style="width:100%;max-height:440px;" >';
          $("#BannerImage").html(txt);
             $('#Products').empty();
             $('#TabsCategory').empty();
             $('#CategoryHeading').empty();
       $('#Products').load('LandingPage.html#Products');
      

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var toBeSearchProduct = '';
var jsonVarProduct;

function jsonGetItems(NAME) {
    return jsons[0][NAME];
}


function ProductItem(tempo, tempocount) {
    txt = '';

    if (bread.length == 3) {
        toBeSearchProduct = '//*[BrandID="' + jsonGetItems("BrandID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
        toBeSearchProduct = '//*[CategoryID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarProduct, toBeSearchProduct);
    }
    if (bread.length == 4) {
        toBeSearchProduct = '//*[CategoryID="' + jsonGetItems("CategoryID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
        toBeSearchProduct = '//*[SubCategoryID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarProduct, toBeSearchProduct);


    }
    if (bread.length == 5) {
        toBeSearchProduct = '//*[SubCategoryID="' + jsonGetItems("SubCategoryID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
        toBeSearchProduct = '//*[SubCategory2ID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarProduct, toBeSearchProduct);

    }
    if (bread.length == 6) {
        toBeSearchProduct = '//*[SubCategory2ID="' + jsonGetItems("SubCategory2ID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
        toBeSearchProduct = '//*[SubCategory3ID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarProduct, toBeSearchProduct);

    }
    if (bread.length == 7) {
        toBeSearchProduct = '//*[SubCategory3ID="' + jsonGetItems("RowID") + '"]';
        jsonVarProduct = JSON.search(jsonVarItems, toBeSearchProduct);
    }


    console.log(toBeSearchProduct);

    console.log(jsonVarProduct);


    if (jsonVarProduct.length == 0) {
        if (jsons[0]["Color"] == undefined) {

            $('#Products').empty();

        } else {
                $('#CategoryHeading').empty();
                $('#TabsCategory').empty();
            ProductItemSpecific();
        }
    }

    if (jsonVarProduct.length == '') {
        if (jsons[0]["Color"] == undefined) {

            $('#Products').empty();

        } else {
                $('#CategoryHeading').empty();
                $('#TabsCategory').empty();
            ProductItemSpecific();
        }
    }
   
    

    if (tempocount != 0 && tempo == "SubCategories2") {

        console.log(jsons);

        for (zy = 0; zy < jsons[0]["SubCategories2"].length; zy++) {

            if (jsons[0]["SubCategories2"][zy]["SubCategories3"].length > 0) {
                for (zx = 0; zx < jsons[0]["SubCategories2"][zy]["SubCategories3"].length; zx++) {
                    txt += '<div class="row col-md-12">';

                    txt += '<h3 style="padding:5px;margin-bottom:5px;margin-top:5px;width:100%;border-bottom:1px solid #ddd">' + jsons[0]["SubCategories2"][zy]["Name"] + ' ' + jsons[0]["SubCategories2"][zy]["SubCategories3"][zx]["Name"] + '</h3>';


                    var toBeSearchProductSub = '//*[SubCategory3ID="' + jsons[0]["SubCategories2"][zy]["SubCategories3"][zx]["RowID"] + '"]';
                    var jsonVarProductSub = JSON.search(jsonVarProduct, toBeSearchProductSub);

                    //  console.log(jsonVarProductSub);


                    for (i = 0; i < jsonVarProductSub.length; i++) {

                        var path = GetBread(' / ' + jsons[0]["SubCategories2"][zy]["Name"] + ' / ' + jsons[0]["SubCategories2"][zy]["SubCategories3"][zx]["Name"] + ' / item:' + jsonVarProductSub[i]["ItemNo"]);

                        txt += '<div class="NavigateProduct"  value = "' + path + '">';
                        txt += ' <div class="col-md-3 redbox">';
                        txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';


                        txt += '<center> <img class="card-img-top" src="' + ImageValidation(jsonVarProductSub[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap"></center>';
                        txt += ' <hr style="border-color:#c3c3c3;">';
                        txt += ' <div class="card-body">';
                        txt += ' <p class="card-text" style="text-align:center; min-height:60px;">';
                        txt += 'Item No. : ' + jsonVarProductSub[i]["ItemNo"];
                        txt += '<br>';
                        txt += jsonVarProductSub[i]["Description"];
                        txt += ' </p>';
                        txt += ' </div>';

                        txt += ' </div>';
                        txt += ' </div>';
                        txt += ' </div>';

                    }
                    txt += ' </div>';
                }


            } else {
                txt += '<div class="row col-md-12">';

                txt += '<h3 style="padding:5px;margin-bottom:5px;margin-top:5px;width:100%;border-bottom:1px solid #ddd">' + jsons[0]["SubCategories2"][zy]["Name"] + '</h3>';


                var toBeSearchProductSub = '//*[SubCategory2ID="' + jsons[0]["SubCategories2"][zy]["RowID"] + '"]';
                var jsonVarProductSub = JSON.search(jsonVarProduct, toBeSearchProductSub);


                for (i = 0; i < jsonVarProductSub.length; i++) {


                    var path = GetBread(' / ' + jsons[0]["SubCategories2"][zy]["Name"] + ' / item:' + jsonVarProductSub[i]["ItemNo"]);

                    txt += '<div class="NavigateProduct"  value = "' + path + '">';
                    txt += ' <div class="col-md-3 redbox">';
                    txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';


                    txt += ' <center><img class="card-img-top" src="' + ImageValidation(jsonVarProductSub[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap">';
                    txt += ' <hr style="border-color:#c3c3c3;"></center>';
                    txt += ' <div class="card-body">';
                    txt += ' <p class="card-text" style="text-align:center; min-height:60px;">';
                    txt += 'Item No. : ' + jsonVarProductSub[i]["ItemNo"];
                    txt += '<br>';
                    txt += jsonVarProductSub[i]["Description"];
                    txt += ' </p>';
                    txt += ' </div>';

                    txt += ' </div>';
                    txt += ' </div>';
                    txt += ' </div>';

                }
                txt += ' </div>';
            }


        }

    } else if (tempocount != 0 && tempo == "SubCategories3") {

        for (zx = 0; zx < jsons[0]["SubCategories3"].length; zx++) {
            txt += '<div class="row col-md-12">';

            txt += '<h3 style="padding:5px;margin-bottom:5px;margin-top:5px;width:100%;border-bottom:1px solid #ddd">' + jsons[0]["Name"] + ' ' + jsons[0]["SubCategories3"][zx]["Name"] + '</h3>';


            var toBeSearchProductSub = '//*[SubCategory3ID="' + jsons[0]["SubCategories3"][zx]["RowID"] + '"]';
            var jsonVarProductSub = JSON.search(jsonVarProduct, toBeSearchProductSub);

            //  console.log(jsonVarProductSub);


            for (i = 0; i < jsonVarProductSub.length; i++) {

                var path = GetBread(' / ' + jsons[0]["SubCategories3"][zx]["Name"] + ' / item:' + jsonVarProductSub[i]["ItemNo"]);

                txt += '<div class="NavigateProduct"  value = "' + path + '">';
                txt += ' <div class="col-md-3 redbox">';
                txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';


                txt += '<center> <img class="card-img-top" src="' + ImageValidation(jsonVarProductSub[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap"></center>';
                txt += ' <hr style="border-color:#c3c3c3;">';
                txt += ' <div class="card-body">';
                txt += ' <p class="card-text" style="text-align:center; min-height:60px;">';
                txt += 'Item No. : ' + jsonVarProductSub[i]["ItemNo"];
                txt += '<br>';
                txt += jsonVarProductSub[i]["Description"];
                txt += ' </p>';
                txt += ' </div>';

                txt += ' </div>';
                txt += ' </div>';
                txt += ' </div>';

            }
            txt += ' </div>';
        }


    } else {
        txt += '<div class="row col-md-12">';
        if ((tempocount == 0 && tempo == "SubCategories")) {
            $('#TabsCategory').empty();
        }
        if (tempo == 'SubCategories3' && tempocount == 0) {
            txt += '<h3 style="padding:5px;margin-bottom:5px;margin-top:5px;width:100%;border-bottom:1px solid #ddd">' + jsons[0]["Name"] + '</h3>';
        }
        for (i = 0; i < jsonVarProduct.length; i++) {
            

            var path = GetBread(' / item:' + jsonVarProduct[i]["ItemNo"]);
        
            
            txt += '<div class="NavigateProduct"  value = "' + path + '">';
            txt += ' <div class="col-md-3 redbox">';
            txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';

            txt += ' <center><img class="card-img-top" src="' + ImageValidation(jsonVarProduct[i]["ContentImage"]) + '" style="width:100%;height:100%;min-height:215px;min-width:215px;max-height:215px;max-width:215px;" alt="Card image cap"></center>';
            txt += ' <hr style="border-color:#c3c3c3;">';
            txt += ' <div class="card-body">';
            txt += ' <p class="card-text" style="text-align:center; min-height:60px;">';
            txt += 'Item No. : ' + jsonVarProduct[i]["ItemNo"];
            txt += '<br>';
            txt += jsonVarProduct[i]["Description"];
            txt += ' </p>';
            txt += ' </div>';
            txt += ' </div>';
            txt += ' </div>';
            txt += ' </div>';

        }
        txt += ' </div>';
    }


    $("#Products").html(txt);
}

function GetBread(lastpath) {

    var breading = JSON.parse(localStorage.getItem('bread'));
    var path = "";
    for (z = 0; z < breading.length; z++) {
        if (z == 0) {} else if (z == 1) {
            path += breading[z]["link"];
        } else if (breading.length - 1 == z && breading[z]["link"].includes('item:') == true) {
            path += ' / ';
        } else {
            path += ' / ' + breading[z]["link"];
        }


    }
    path += lastpath;

    return path;
}






function ProductItemSpecific() {
    txt = '';


    if (jsons[0]["Color"] != '') {


        var productcolor = JSON.parse(localStorage.getItem('productcolor'));
        var pcolor = 0;
        var productimage = JSON.parse(localStorage.getItem('productimage'));
        var pimage = 0;


        if (productcolor == null) {} else {
            pcolor = productcolor[0]["color"];
        }
        if (productimage == null) {} else {
            pimage = productimage[0]["image"];
        }


        txt += ' <div class="row col-md-12" >';


        ZoomImage(pcolor, pimage);


        ImageCarousel(pcolor);


        ColorPallete();


        txt += '</div>';

        TabCapsule();

        $("#Products").html(txt);

    } else {
        $("#Products").empty();

    }


}


Related();

function Related() {

var breading = JSON.parse(localStorage.getItem('bread'));
if (breading[0]['link']=="Search")
{

}
else
{
 var relatedjsons;
 var relatedsearch;
 var defaultLength = 6;
 if (jsons.length == 0) {
     return 0;
 }

 if (jsons[0]["BrandID"] != '') {
     relatedsearch = '//*[BrandID="' + jsonGetItems("BrandID") + '"]';
     relatedjsons = JSON.search(jsonVarItems, relatedsearch);
 }
 if (jsons[0]["CategoryID"] != '') {
     relatedsearch = '//*[CategoryID="' + jsonGetItems("CategoryID") + '"]';
     relatedjsons = JSON.search(relatedjsons, relatedsearch);

 }
 if (jsons[0]["SubCategoryID"] != '') {
     relatedsearch = '//*[SubCategoryID="' + jsonGetItems("SubCategoryID") + '"]';
     relatedjsons = JSON.search(relatedjsons, relatedsearch);

 }
 if (jsons[0]["SubCategory2ID"] != '') {
     relatedsearch = '//*[SubCategory2ID="' + jsonGetItems("SubCategory2ID") + '"]';
     relatedjsons = JSON.search(relatedjsons, relatedsearch);

 }
 if (jsons[0]["SubCategory3ID"] != '') {
     relatedsearch = '//*[SubCategory3ID="' + jsonGetItems("SubCategory3ID") + '"]';
     relatedjsons = JSON.search(relatedjsons, relatedsearch);

 }


 console.log(relatedsearch);


 var indexes = $.map(relatedjsons, function (obj, index) {
     if (obj.RowID == jsons[0]['RowID']) {
         return index;
     }
 });

 var firstIndex = indexes[0];

 relatedjsons.splice(firstIndex, 1);


 var len = relatedjsons.length;
 var chosen = [];
 if (len <= defaultLength) {
     len = len;
 } else {
     len = defaultLength
 }

 for (var i = 0; i <= (len - 1); i++) {
     var randy = Math.floor(Math.random() * len);
     chosen[i] = relatedjsons[randy];


     for (k = 0; k <= i - 1; k++) {
         if (chosen[k] == chosen[i]) {
             i--; // duplicate found so decrement i
         }
     }
 }

 console.log(chosen);


 if (relatedjsons.length != 0) {
     txt = '<div style="padding:10px;margin-left: auto;margin-right: auto;" class="row">';
     txt += '<h4 style="padding:10px; "><b>Related Products</b></h4>';

     for (i = 0; i < chosen.length; i++) {
         if (jsons[0]['RowID'] != chosen[i]['RowID']) {
             var path = GetBread('item:' + chosen[i]["ItemNo"]);
             txt += '<div class="NavigateRelated" value="' + path + '" style="cursor:pointer">';
             txt += ' <div class="col-md-2 redbox">';
             txt += ' <div style="background:#f1f1f1; padding:10px; border-radius: 10px;margin:10px 5px;">';
             txt += ' <center><img class="card-img-top" src="' + ImageValidation(chosen[i]["ContentImage"]) + '" style="width:100%;height:100%;max-width:180px;max-height:180px;min-width:180px;min-height:180px;" alt="Card image cap"></center>';
             txt += ' <hr style="border-color:#c3c3c3;">';
             txt += ' <div class="card-body">';
             txt += ' <p class="card-text" style="text-align:center;">';
             txt += 'Item No. : ' + chosen[i]["ItemNo"];
             txt += '<br>';
             txt += chosen[i]["Description"];
             txt += ' </p>';
             txt += ' </div>';

             txt += ' </div>';
             txt += ' </div>';
             txt += ' </div>';
         }
     }

     txt += '</div>';
     $('#Related').html(txt);
 } else {
     $('#Related').empty();
 }

}
   
}


function ZoomImage(pcolor, pimage) {
    txt += '<div class="col-md-5" style="background:#dddddd;border:2px solid #dddddd; min-height:400px;max-height:400px;overflow:hidden;">';
    txt += '<div class="zoom-image" style = " width:100%; height: 100%; " >';

    var jsonImage = ImageValidation(jsons[0]["Color"][pcolor]["ImageItem"][pimage]["ImageSrc"]);
    txt += '<img class = "product-photo" data-original-image="' + jsonImage + '" src= "' + jsonImage + '" style = "height:100%;width:100%;background-color:white" >';
    txt += '</div>';
    txt += '</div>';
    return txt;
}

function ImageCarousel(pcolor) {
    velo();
    txt += '<div class="more-products-nav col-md-2 ">';
    txt += '<div class="vertical-slider">';
    txt += '<div class="vs-slides">';
    txt += '<div class="vs-slides-inner">';
    txt += '<div class="vs-products-outer" > ';

    var item = jsons[0]["Color"][pcolor]["ImageItem"].length;


    if (item > 3) {
        var total = Math.floor(item / 3);
        var remainder = item % 3;
        if (remainder == 0) {} else {
            total += 1
        }
    } else {
        var total = item;
    }


    for (x = 0; x < total; x++) {
        if (x == 0) {
            txt += '<div class="vs-products clearfix vs-row-' + x + ' active" data-row-num="' + x + '">';
        } else {
            txt += '<div class="vs-products clearfix vs-row-' + x + ' " data-row-num="' + x + '">';
        }


        if (x == total - 1) {

            if (total - 1 == 0) {

                txt += '<div value="' + 0 + '" class="vs-product NavigateImage" style="cursor:pointer;border: #ddd 2px solid;">';
                txt += '<center>';

                var jsonImage = ImageValidation(jsons[0]["Color"][pcolor]["ImageItem"][0]["ImageSrc"]);
                txt += '<img src = "' + jsonImage + '" style = "height:129.3px;width:80%;"  >';
                txt += '</center>';
                txt += '</div>';
            } else {
                if (remainder == 0) {
                    var hasRemainder = 3;
                } else {
                    var hasRemainder = remainder;
                }

                for (y = 0; y < hasRemainder; y++) {
                    var img = 0;
                    if (y == 0) {
                        img = (3 * x) + y;
                    } else {
                        img = (3 * x) + y;

                    }

                    txt += '<div value="' + img + '" class="vs-product NavigateImage" style="cursor:pointer;border: #ddd 2px solid;">';
                    txt += '<center>';

                    var jsonImage = ImageValidation(jsons[0]["Color"][pcolor]["ImageItem"][img]["ImageSrc"]);
                    txt += '<img src = "' + jsonImage + '" style = "height:129.3px;width:80%;"  >';
                    txt += '</center>';
                    txt += '</div>';
                }
            }


        } else {
            if (item >= 3) {
                var itemy = 3;
            } else {
                var itemy = item;
            }
            for (y = 0; y < itemy; y++) {
                txt += '<div value="' + y + '" class="vs-product NavigateImage" style="cursor:pointer;border: #ddd 2px solid;">';
                txt += '<center>';

                var jsonImage = ImageValidation(jsons[0]["Color"][pcolor]["ImageItem"][y]["ImageSrc"]);
                txt += '<img src = "' + jsonImage + '" style = "height:129.3px;width:80%;"  >';
                txt += '</center>';
                txt += '</div>';
            }
        }

        txt += '</div>';


    }


    txt += '</div>';
    txt += '<div class="vs-controls">';
    if (item > 3) {
        txt += '<div class="vs-control up deactivate" style="color:black;top:0px;padding:0px"><i class="fa fa-chevron-up"></i></div>';
        txt += '<div class="vs-control down" style="color:black;top:385px;padding:0px"><i class="fa fa-chevron-down"></i></div>';
    }


    txt += '</div>';
    txt += '</div>';
    txt += '</div>';
    txt += '</div>';
    txt += '</div>';

    return txt;


}

function ColorPallete() {
    txt += ' <div class="col-md-5"  style="padding:0px 10px;">';
    txt += '<div class="col-md-12">';
    txt += '<h3><span style="color:#999;"><b>Item No.:</b> </span><span style="color:#58585a;"><b>' + jsons[0]["ItemNo"] + '</b> </span></h3>';
    txt += '</div>';

    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#999;"><b>Item Description</b></h5>';
    txt += '</div>';

    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#58585a;padding:0px 0px 0px 20px;"><b>' + jsons[0]["Description"] + '</b></h5>';
    txt += '</div>';

    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#999;"><b>Size</b></h5>';
    txt += '</div>';

    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#58585a;padding:0px 0px 0px 20px;"><b>' + jsons[0]["Size"] + '</b></h5>';
    txt += '</div>';

    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#999;"><b>Packing</b></h5>';
    txt += '</div>';

    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#58585a;padding:0px 0px 0px 20px;"><b>' + jsons[0]["Packing"] + '</b></h5>';
    txt += '</div>';


    txt += '<div class="col-md-12">';
    txt += '<h5><span style="color:#999;"><b>Color</b></h5>';
    txt += '</div>';

    txt += '<div class="row">';
    txt += '<div class="col-md-12">';

    for (z = 0; z < jsons[0]["Color"].length; z++) {
        txt += '<div class="col-md-1">';
        txt += '<div style="background-color:' + jsons[0]["Color"][z]["ColorName"] + ';height:20px;width:20px;cursor:pointer; margin:5px;border:1px solid #58585a;" value="' + z + '" class="NavigateColor"> </div>';
        txt += '</div>';
    }


    txt += '</div>';
    txt += '</div>';
    txt += '</div>';

    return txt;

}


function TabSubCategories() {
    var text = '';
    text += '<ul class="tabs">';

console.log(bread);
    var path = '';

    for (j = 1; j < 3   ; j++) {
        if (j == 1) {
            path += bread[j]["link"];
        
        }
        else {
            path += ' / ' + bread[j]["link"];
        }

    }

  
    for (i = 0; i < jsonsCategory[0]["SubCategories"].length; i++) {
      

      
        if (bread.length >= 4) {
             
            if (bread[3]["link"] == jsonsCategory[0]["SubCategories"][i]["Name"]) {
                text += '    <li rel="tab' + i + '" class="Navigate active" value="' + path  + '">' + jsonsCategory[0]["SubCategories"][i]["Name"] + '</li>';
             
                

            } else {
                 
                text += '    <li rel="tab' + i + '" class="Navigate" value="' + path + ' / ' + jsonsCategory[0]["SubCategories"][i]["Name"]
               + '">' + jsonsCategory[0]["SubCategories"][i]["Name"] + '</li>';
              
                
 
            }


        } else {
            text += '    <li rel="tab' + i + '" class="Navigate" value="' + path + ' / ' + jsonsCategory[0]["SubCategories"][i]["Name"] + '">' + jsonsCategory[0]["SubCategories"][i]["Name"] + '</li>';

        }

    }
    text += '</ul>';

    text += '<div class="tab_container">';

    for (i = 0; i < jsonsCategory[0]["SubCategories"].length; i++) {

        text += '    <h3 class="tab_drawer_heading" rel="tab' + i + '">' + jsonsCategory[0]["SubCategories"][i]["Name"] + '</h3>';
        text += '    <div id="tab' + i + '" class="tab_content">';
        text += '    </div>';

    }


    text += ' </div>';

    $('#TabsCategory').html(text);
}


function TabCapsule() {
    txt += '<br>';
    txt += '<br>';
    txt += '<br>';
    txt += '<ul class="tabsStatic">';
    txt += '    <li class="active" rel="tabone">FEATURES</li>';
    txt += '    <li rel="tabtwo">WHERE TO BUY</li>';


    txt += '</ul>';
    txt += '<div class="tab_container_static">';
    txt += '    <h3 class="ds_active tab_drawer_heading_static" rel="tabone">FEATURES</h3>';
    txt += '    <div id="tabone" class="tab_content_static">';


    for (i = 0; i < jsons[0]["Features"].length; i++) {
        txt += ' <li> ' + jsons[0]["Features"][i]["Content"] + '</li>';
    }


    txt += '    </div>';

    txt += '    <h3 class="tab_drawer_heading_static" rel="tabtwo">WHERE TO BUY</h3>';
    txt += '    <div id="tabtwo" class="tab_content_static">';
    for (i = 0; i < jsons[0]["LocationPurchase"].length; i++) {
        txt += ' <li> ' + jsons[0]["LocationPurchase"][i]["Content"] + '</li>';
    }

    txt += '    </div>';


    txt += ' </div>';

    return txt;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.HomeClear').click(function () {

    $("html,body").animate({
        scrollTop: 0
    }, 3000);

    bread = [{
        "link": "Home"
    }];


    if (JSON.parse(localStorage.getItem('productcolor')) != null) {
        localStorage.removeItem('productcolor');
    }
    if (JSON.parse(localStorage.getItem('productimage')) != null) {
        localStorage.removeItem('productimage');
    }

    BreadCrumbs();
    GetData();


    $('#Products').load('LandingPage.html#Products');
    $('#Related').load('LandingPage.html#Related');
    $('#TabsCategory').empty();
});
$('.BreadItems').click(function () {

    $("html,body").animate({
        scrollTop: 425
    }, 3000);

    bread = [{
        "link": "Home"
    }];

    var crum = $(this).attr('value').split(" / ");
    console.log(crum.length);
    for (i = 0; i < crum.length; i++) {

        bread.push({
            "link": crum[i]
        });


    }

    if (JSON.parse(localStorage.getItem('productcolor')) != null) {
        localStorage.removeItem('productcolor');
    }
    if (JSON.parse(localStorage.getItem('productimage')) != null) {
        localStorage.removeItem('productimage');
    }
    BreadCrumbs();
    GetData();


    $('#Products').load('LandingPage.html#Products');
    $('#Related').load('LandingPage.html#Related');
 
    if (bread.length <=2) {
        
        $('#TabsCategory').empty();
         $('#CategoryHeading').empty();
    }


});
$('.Navigate').click(function () {

    $("html,body").animate({
        scrollTop: 425
    }, 3000);

    bread = [{
        "link": "Home"
    }];
    var crum = $(this).attr('value').split(" / ");


    for (i = 0; i < crum.length; i++) {

        bread.push({
            "link": crum[i]
        });


    }

    if (JSON.parse(localStorage.getItem('productcolor')) != null) {
        localStorage.removeItem('productcolor');
    }
    if (JSON.parse(localStorage.getItem('productimage')) != null) {
        localStorage.removeItem('productimage');
    }

    BreadCrumbs();
    GetData();


    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.18/jquery.zoom.min.js');


    $.getScript('Goldwings/velocity.js?cache=' + startTime());

    $('#Products').load('LandingPage.html#Products');
    $('#Related').load('LandingPage.html#Related');
});
$('.NavigateProduct').click(function () {

    $("html,body").animate({
        scrollTop: 425
    }, 3000);

    bread = [{
        "link": "Home"
    }];
    var crum = $(this).attr('value').split(" / ");
    console.log(crum.length);

    for (i = 0; i < crum.length; i++) {

        bread.push({
            "link": crum[i]
        });


    }


    if (JSON.parse(localStorage.getItem('productcolor')) != null) {
        localStorage.removeItem('productcolor');
    }
    if (JSON.parse(localStorage.getItem('productimage')) != null) {
        localStorage.removeItem('productimage');
    }

    BreadCrumbs();
    GetData();


    $("#tab1").css("display", "block");

    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.18/jquery.zoom.min.js');

    $.getScript('Goldwings/velocity.js?cache=' + startTime());

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


    $('#Products').load('LandingPage.html#Products');
    $('#Related').load('LandingPage.html#Related');
    $("ul.tabs li[rel^='tab1']").addClass("active");
});
$('.NavigateRelated').click(function () {

    $("html,body").animate({
        scrollTop: 425
    }, 3000);

    bread = [{
        "link": "Home"
    }];
    var crum = $(this).attr('value').split(" / ");
    console.log(crum.length);

    for (i = 0; i < crum.length; i++) {

        bread.push({
            "link": crum[i]
        });


    }


    if (JSON.parse(localStorage.getItem('productcolor')) != null) {
        localStorage.removeItem('productcolor');
    }
    if (JSON.parse(localStorage.getItem('productimage')) != null) {
        localStorage.removeItem('productimage');
    }

    BreadCrumbs();
    GetData();


    $("#tab1").css("display", "block");

    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.18/jquery.zoom.min.js');

    $.getScript('Goldwings/velocity.js?cache=' + startTime());

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


    $('#Products').load('LandingPage.html#Products');
    $('#Related').load('LandingPage.html#Related');
    $("ul.tabs li[rel^='tab1']").addClass("active");
});
$('.NavigateColor').click(function () {

    $("html,body").animate({
        scrollTop: 425
    }, 3000);

    localStorage.removeItem('productimage');
    productcolor = [];
    var crum = $(this).attr('value');
    productcolor.push({
        "color": crum
    });
    localStorage.setItem('productcolor', JSON.stringify(productcolor));


    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.18/jquery.zoom.min.js');

    $.getScript('Goldwings/velocity.js?cache=' + startTime());

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


    $('#Products').load('LandingPage.html#Products');
    $('#Related').load('LandingPage.html#Related');

    $("ul.tabs li[rel^='tab1']").addClass("active");

});
$('.NavigateImage').click(function () {
    // window.location.reload();

    productimage = [];
    var crum = $(this).attr('value');

    productimage.push({
        "image": crum
    });


    localStorage.setItem('productimage', JSON.stringify(productimage));

    $("html,body").animate({
        scrollTop: 425
    }, 3000);


    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.18/jquery.zoom.min.js');


    $.getScript('Goldwings/velocity.js?cache = ' + startTime());

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
    $('#Related').load('LandingPage.html#Related');
    $("ul.tabs li[rel^='tab1']").addClass("active");
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


velo();

function velo() {
    $.getScript('Goldwings/velocity.js');
    var $productsOuter = $('.vs-products-outer');
    // Get row height
    var rowHeight = $('.vs-slides-inner').height();
    // Set control click state
    var canClick = true;
    // Slide Up
    $('.vs-control.down').click(function () {

        var $activeRow = $('.vs-products.active');

        // Check if there is a next row to slide to
        if ($activeRow.next().length && canClick) {
            canClick = false;
            // Get animation distance
            var distance = -(parseInt($activeRow.data('row-num') + 1) * rowHeight);
            $productsOuter.velocity({
                top: distance
            }, 500, function () {
                canClick = true;
                // Change active row
                $activeRow.removeClass('active').next().addClass('active');
                // Activate other control
                $('.vs-control.up').removeClass('deactivate');
                // If there is no next row
                if (!$('.vs-products.active').next().length) {
                    $('.vs-control.down').addClass('deactivate');
                }
            });
        }

    });

    // Slide Down
    $('.vs-control.up').click(function () {
        var $activeRow = $('.vs-products.active');
        // Check if there is a next row to slide to
        if ($activeRow.prev().length && canClick) {
            canClick = false;
            // Get animation distance
            var distance = -(parseInt($activeRow.data('row-num') - 1) * rowHeight);
            $productsOuter.velocity({
                top: distance
            }, 500, function () {
                canClick = true;
                // Change active row
                $activeRow.removeClass('active').prev().addClass('active');
                // Activate other control
                $('.vs-control.down').removeClass('deactivate');
                // If there is no next row
                if (!$('.vs-products.active').prev().length) {
                    $('.vs-control.up').addClass('deactivate');
                }
            });
        }
    });
}
// Cache elements

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var mm = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);

    return h + ":" + m + ":" + s + ":" + mm;

}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

FW();
SW();

function FW() {
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.Static li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");

        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");
}

function SW() {
    $(".tab_content_static").hide();
    $(".tab_content_static:first").show();

    /* if in tab mode */
    $("ul.tabsStatic li").click(function () {

        $(".tab_content_static").hide();
        var SactiveTab = $(this).attr("rel");
        $("#" + SactiveTab).fadeIn();

        $("ul.tabsStatic li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading_static").removeClass("ds_active");
        $(".tab_drawer_heading_static[rel^='" + SactiveTab + "']").addClass("ds_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading_static").click(function () {

        $(".tab_content_static").hide();
        var ds_activeTab = $(this).attr("rel");

        $("#" + ds_activeTab).fadeIn();

        $(".tab_drawer_heading_static").removeClass("ds_active");
        $(this).addClass("ds_active");

        $("ul.tabsStatic li").removeClass("active");
        $("ul.tabsStatic li[rel^='" + ds_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");
}

function ImageValidation(url) {

    var img = new Image();
    img.src = url;
    if (url == null || url == "") {
        return "IMAGES/No.jpg";
    } else if (img.height != 0) {
        return img.src;
    } else {


        return img.src;


    }


}

