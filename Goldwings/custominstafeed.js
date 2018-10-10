  
  
var feed = new InstaFeedAdventurer({

        limit:4,
        userId: '2960886344',
        accessToken: '2960886344.1677ed0.2c105666e46a40b2a4d20eb478adecbe',
    template: '<div class="col-md-3"  ><center><figure class="snip1548"><img src="{{image}}"  class="img img-responsive" style="width:250px;height:250px" /><figcaption> <h3> <i class="fa fa-search"></i></h3></figcaption ><a href="{{link}}" title="{{caption}}" target="_blank"></a></figure></center>    </div>'
    });
    feed.run();

var feed = new InstaFeedTombow({

        limit: 4,
        userId: '2960867186',
        accessToken: '2960867186.1677ed0.bb53603f741a46a1a454bc649c620730',
    template: '<div class="col-md-3"  ><center><figure class="snip1548"><img src="{{image}}"  class="img img-responsive" style="width:250px;height:250px" /><figcaption> <h3> <i class="fa fa-search"></i></h3></figcaption ><a href="{{link}}" title="{{caption}}" target="_blank"></a></figure></center>    </div>'
       });
    feed.run();
