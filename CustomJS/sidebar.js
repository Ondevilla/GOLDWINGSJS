
var txt="";

//Brands
txt += '<div id="accordion" style="background-color:#ddd;margin:10px;border-radius:10px;">';
for (let i = 0; i < jsonVar.length; i++)
    {

var brandName = jsonVar[i]["Brand"];
var brand = brandName.replace(/\s/g, "") + [i];
var jsonHasCategories= jsonVar[i]["Categories"].length;
txt+='<div class="card">';
txt+=' <div class="card-header" id="heading'+brand+'">';

txt+=' <button class="btn  collapsed btn-block word-break" data-toggle="collapse" data-target="#collapse'+ brand +'" aria-expanded="false" style="text-align: left;background-color:tranparent;"';
txt+=' aria-controls="collapse'+ brand+'">';
txt+=' <i class="fa" aria-hidden="true"></i> '+ brandName;


txt+='</button>';

txt+='</div>';
txt+=' <div id="collapse'+brand+'" class="collapse in" aria-labelledby="heading'+brand+'" data-parent="#accordion">';
txt+=' <div class="card-body">';
//Categories
txt+=' <div class=" collapsed btn-block" id="accordionSub'+brand+'" >';


    var jsonCategories=0;
    if (jsonHasCategories == null || jsonHasCategories == undefined) { jsonCategories = 0; }
    else { jsonCategories = jsonHasCategories; }

    for (let j = 0; j < jsonCategories; j++)
    {
        
    var categoryName = jsonVar[i]["Categories"][j]["Name"];
    var hasHref = jsonVar[i]["Categories"][j]["Href"];
    var jsonHasSubCategories= jsonVar[i]["Categories"][j]["SubCategories"].length;
    var categories = categoryName.replace(/\s/g, "") + [j];

    txt+=' <div class="card">';
    txt+=' <div class="card-header" id="headingOneSub'+categories+'">';

    if (jsonHasSubCategories == null || jsonHasSubCategories== undefined || jsonHasSubCategories==0)
    {
        txt+=' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSub'+categories+'" aria-expanded="false"';
        txt+=' aria-controls="collapseOneSub'+categories+'" style="font-size:14px;text-align:left;padding-left:36px;padding-right:6px;background-color:tranparent;">'+
        categoryName;
        txt+=' </button>';
    }
    else
    {
        txt+=' <button class="btn   btn-block collapsed word-break collapseArrow" data-toggle="collapse" data-target="#collapseOneSub'+categories+'"  aria-expanded="false"';
        txt+=' aria-controls="collapseOneSub'+categories+'" style="font-size:14px;text-align:left;padding-left:36px;padding-right:6px;background-color:tranparent;">'+
        categoryName;
        txt+=' </button>';
    }
    
 
    txt+=' </div>';
    txt+=' <div id="collapseOneSub'+categories+'" class="collapse" aria-labelledby="headingOneSub'+categories+'" data-parent="#accordionSub'+brand+'">';
    txt+=' <div class="card-body">';
    //Sub SubCategories
      
        txt += '    <div class="btn  collapsed btn-block" id="accordionSubCat' + [j] + '" style="padding:0px;">';
        var jsonSubCategories = 0;
        if (jsonHasSubCategories == null || jsonHasSubCategories == undefined) { jsonSubCategories = 0; }
        else { jsonSubCategories = jsonVar[i]["Categories"][j]["SubCategories"].length; }
      
        for (let k = subcounter; k < jsonSubCategories; k++) 
        {
        var subCategoryName = jsonVar[i]["Categories"][j]["SubCategories"][k]["Name"];
        var jsonHasSubCategories2= jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"].length;
        var subCategories = subCategoryName.replace(/\s/g, "") + [k];
           
                txt += ' <div class="card">' ;
                txt += ' <div class="card-header" id="headingOneSubCat' + subCategories + '">' ;
        if (jsonHasSubCategories2 == null || jsonHasSubCategories2== undefined || jsonHasSubCategories2==0)
        {
            txt += ' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSubCat' + subCategories+ '" aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories+ '" style=" font-size:12px;text-align:left;padding-left:72px;padding-right:6px;border-radius:0px;">';
            txt += subCategoryName;
            txt += ' </button>' ;
        }
        else
        { 
            txt += ' <button class="btn   btn-block collapsed word-break collapseArrow" data-toggle="collapse" data-target="#collapseOneSubCat' + subCategories+ '"  aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories+ '" style=" font-size:12px;text-align:left;padding-left:72px;padding-right:6px;border-radius:0px;">';
            txt += subCategoryName;
            txt += ' </button>' ;

        }
               
             
                txt +=  ' </div>' ;
                txt += ' <div id="collapseOneSubCat' + subCategories + '" class="collapse" aria-labelledby="headingOneSubCat' + subCategories + '";data-parent="#accordionSubCat' + subCategories + '">' ;
                txt += ' <div class="card-body">' ;
                // txt +=   ' Lorem3' ;
                    //SubCategories2

                            txt += '    <div class="btn  collapsed btn-block" id="accordionSubCat2' + [j] + '">';
                            var jsonSubCategories2 = 0;
                            if (jsonHasSubCategories2 == null || jsonHasSubCategories2 == undefined) { jsonSubCategories2 = 0; }
                            else { jsonSubCategories2 = jsonHasSubCategories2; }

                            for (let l = subcounter; l < jsonSubCategories2; l++) {
                            var subCategory2Name = jsonVar[i]["Categories"][j]["SubCategories"][k]["SubCategories2"][l]["Name"];
                            var subCategories2 = subCategory2Name.replace(/\s/g, "") + [k];
                                txt += ' <div class="card">';
                                txt += ' <div class="card-header" id="headingOneSubCat' + subCategories2 + '">';
                                txt += ' <h3 class="mb-0">';
                                txt += ' <button class="btn   btn-block collapsed word-break" data-toggle="collapse" data-target="#collapseOneSubCat' + subCategories2 + '" aria-expanded="false" aria-controls="collapseOneSubCat' + subCategories2 + '" style="font-size:12px;text-align:left;padding-left:100px;padding-right:6px;border-radius:0px;">';
                                txt += subCategory2Name;
                                txt += ' </button>';
                                txt += ' </h3>';
                                txt += ' </div>';
                                txt += ' <div id="collapseOneSubCat' + subCategories2 + '" class="collapse" aria-labelledby="headingOneSubCat' + subCategories2 + '"data-parent="#accordionSubCat2' + subCategories2 + '">';
                                txt += ' <div class="card-body">';
                                // txt += ' Lorem4';



                                txt += ' </div>';
                                txt += ' </div>';
                                txt += ' </div>';
                            }
                                txt += ' </div>';

                    //End SubCategories2


                txt += ' </div>' ;
                txt += ' </div>' ;
                txt += ' </div>';

        }


        txt += ' </div>';
    //End SubCategories
    // txt += ' Lorem2';
    txt+=' </div>';
    txt+=' </div>';
    txt+=' </div>';
    }
txt+=' </div>';
//End Categories
// txt += ' Lorem1';
txt+=' </div>';
txt+=' </div>';
txt+='</div>';

    }
txt += "</div>";   
//End Brands
