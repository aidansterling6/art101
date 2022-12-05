//select a specific link(the animals and plants)
var select = function(id){
     $(".link").removeClass("picked");
     $("#" + id).addClass("picked");
}
//adds select functions to all links and scrools the div into view
var selectors = function(){
     $("a").unbind();
     $(".CapeWeedL").click(function(){select("CapeWeed");document.getElementById("CapeWeed").scrollIntoView();});
     $(".CoastalLiveOakL").click(function(){select("CoastalLiveOak");document.getElementById("CoastalLiveOak").scrollIntoView();});
     $(".CoastalRedwoodL").click(function(){select("CoastalRedwood");document.getElementById("CoastalRedwood").scrollIntoView();});
     $(".DouglasFirL").click(function(){select("DouglasFir");document.getElementById("DouglasFir").scrollIntoView();});
     $(".PacificMadroneL").click(function(){select("PacificMadrone");document.getElementById("PacificMadrone").scrollIntoView();});
     $(".SpottedBeebalmL").click(function(){select("SpottedBeebalm");document.getElementById("SpottedBeebalm").scrollIntoView();});
     $(".FieldMarigoldL").click(function(){select("FieldMarigold");document.getElementById("FieldMarigold").scrollIntoView();});
     $(".EnglishDaisyL").click(function(){select("EnglishDaisy");document.getElementById("EnglishDaisy").scrollIntoView();});

     $(".BananaSlugL").click(function(){select("BananaSlug");document.getElementById("BananaSlug").scrollIntoView();});
     $(".Black-TailedDeerL").click(function(){select("Black-TailedDeer");document.getElementById("Black-TailedDeer").scrollIntoView();});
     $(".EasternGraySquirrelL").click(function(){select("EasternGraySquirrel");document.getElementById("EasternGraySquirrel").scrollIntoView();});
     $(".WildTurkeyL").click(function(){select("WildTurkey");document.getElementById("WildTurkey").scrollIntoView();});

     $(".MonarchButterflyL").click(function(){select("MonarchButterfly");document.getElementById("MonarchButterfly").scrollIntoView();});
     $(".OhloneTigerBeetleL").click(function(){select("OhloneTigerBeetle");document.getElementById("OhloneTigerBeetle").scrollIntoView();});
     $(".DiggerWaspsL").click(function(){select("DiggerWasps");document.getElementById("DiggerWasps").scrollIntoView();});
     $(".LeafFootedBugsL").click(function(){select("LeafFootedBugs");document.getElementById("LeafFootedBugs").scrollIntoView();});
     $(".OhloneTigerBeetleL").click(function(){select("OhloneTigerBeetle");document.getElementById("OhloneTigerBeetle").scrollIntoView();});

     $(".DouglasFirConeMushroomL").click(function(){select("DouglasFirConeMushroom");document.getElementById("DouglasFirConeMushroom").scrollIntoView();});
     $(".CucumberMushroomL").click(function(){select("CucumberMushroom");document.getElementById("CucumberMushroom").scrollIntoView();});
     $(".HoneyMushroomL").click(function(){select("HoneyMushroom");document.getElementById("HoneyMushroom").scrollIntoView();});
     $(".MycorrhizalFungiL").click(function(){select("MycorrhizalFungi");document.getElementById("MycorrhizalFungi").scrollIntoView();});
     $(".EctomycorrhizalFungiL").click(function(){select("EctomycorrhizalFungi");document.getElementById("EctomycorrhizalFungi").scrollIntoView();});
     $(".WesternWitchHatL").click(function(){select("WesternWitchHat");document.getElementById("WesternWitchHat").scrollIntoView();});
     $(".WesternAmethystLaccariaL").click(function(){select("WesternAmethystLaccaria");document.getElementById("WesternAmethystLaccaria").scrollIntoView();});
     $(".BitterBrownPaxL").click(function(){select("BitterBrownPax");document.getElementById("BitterBrownPax").scrollIntoView();});
}
//information on what should be replaced by what
var replaces = [
     {name:"EasternGraySquirrel",in:["{Squirrels}"], out:"<a class='EasternGraySquirrelL'>####</a>"},
     {name:"DouglasFir",in:["{Douglas Fir}", "{Douglas Firs}"], out:"<a class='DouglasFirL'>####</a>"},
     {name:"CoastalLiveOak",in:["{Oak Trees}", "{Oak Tree}", "{Acorns}"], out:"<a class='CoastalLiveOakL'>####</a>"},
     {name:"CoastalRedwood",in:["{Coastal Redwoods}", "{Coastal Redwood}", "{Redwoods}", "{Redwood}", "{Redwood Tree}", "{Redwood Trees}"], out:"<a class='CoastalRedwoodL'>####</a>"},
     {name:"WildTurkey",in:["{Wild Turkey}", "{Turkey}", "{Wild Turkeys}", "{Birds}"], out:"<a class='WildTurkeyL'>####</a>"},
     {name:"BananaSlug",in:["{Banana Slugs}", "{Banana Slug}", "{Slugs}", "{Slug}"], out:"<a class='BananaSlugL'>####</a>"},
     {name:"MonarchButterfly",in:["{Butterflies}"], out:"<a class='MonarchButterflyL'>####</a>"},
     {name:"Black-TailedDeer",in:["{Deer}"], out:"<a class='Black-TailedDeerL'>####</a>"},
     {name:"SpottedBeebalm",in:["{Spotted Beebalm}"], out:"<a class='SpottedBeebalmL'>####</a>"},
     {name:"DiggerWasps",in:["{Digger Wasps}", "{wasps}"], out:"<a class='DiggerWaspsL'>####</a>"},
     {name:"FieldMarigold",in:["{Marigolds}"], out:"<a class='FieldMarigoldL'>####</a>"},
     {name:"EnglishDaisy",in:["{English Daisies}", "{English Daisy}"], out:"<a class='EnglishDaisyL'>####</a>"},
     {name:"MycorrhizalFungi",in:["{Mycorrhizal Fungi}"], out:"<a class='MycorrhizalFungiL'>####</a>"},
     {name:"EctomycorrhizalFungi",in:["{Ectomycorrhizae}", "{Ectomycorrhizal Fungi}"], out:"<a class='EctomycorrhizalFungiL'>####</a>"},
     {name:"HoneyMushroom",in:["{Honey Mushrooms}"], out:"<a class='HoneyMushroomL'>####</a>"},
     {name:"WesternWitchHat",in:["{Western Witch Hat}", "{Western Witch Hats}"], out:"<a class='WesternWitchHatL'>####</a>"},
     {name:"CucumberMushroom",in:["{Cucumber Mushrooms}"], out:"<a class='CucumberMushroomL'>####</a>"},
     {name:"WesternAmethystLaccaria",in:["{Western Amethyst Laccaria}"], out:"<a class='WesternAmethystLaccariaL'>####</a>"},
     {name:"BitterBrownPax",in:["{Bitter Brown Pax}"], out:"<a class='BitterBrownPaxL'>####</a>"},
     {name:"DouglasFirConeMushroom",in:["{Douglas Fir Cone Mushroom}"], out:"<a class='DouglasFirConeMushroomL'>####</a>"},
     {name:"OhloneTigerBeetle",in:["{Ohlone Tiger Beetle}"], out:"<a class='OhloneTigerBeetleL'>####</a>"},
     {name:"LeafFootedBugs",in:["{Leaf Footed Bugs}"], out:"<a class='LeafFootedBugsL'>####</a>"}
];
//code to find and replace parts of text, uses replaces array to do this
var Replace = function(text, ntext){
     var out = text;
     for(var i = 0; i < replaces.length; i++){
          if(replaces[i].name !== ntext){
               for(var o = 0; o < replaces[i].in.length; o++){
                    for(var r = 0; r < 30; r++){
                         text = text.replace(replaces[i].in[o], replaces[i].out);
                         text = text.replace("####", replaces[i].in[o].replace("{", "").replace("}", ""));
                    }
               }
          } else{
               for(var o = 0; o < replaces[i].in.length; o++){
                    for(var r = 0; r < 30; r++){
                         text = text.replace(replaces[i].in[o], replaces[i].in[o].replace("{", "").replace("}", ""));
                    }
               }
          }
     }
     return text;
}
//code for dropdown menus
var dropDownCode = function(){
     var maxwidth = 1438;
     var minwidth = 1000;
     //ID's of all dropdown menus
     var dropIds = ["Authors", "Sources", "Plants", "Animals", "Arthropods", "Fungi", "Links"];
     //buttons in dropdown menus
     var Buttons = [
          [
               {text:"Aidan Sterling", func: function(){}},//https://aidansterling6.github.io/art101/
               {text:"Allison Dutton", func: function(){}},//https://alli5689.github.io/art101/
               {text:"Jessica Zogaric", func: function(){}},//https://kickflipyeah.github.io/art101/
               {text:"Mikayla Jordan", func: function(){}},//https://mikaylaj.github.io/art101/
               {text:"Thomas Castillo", func: function(){}}//https://alli5689.github.io/art101/

          ],
          [
               {text:"Source 1", func: function(){window.location.href = "https://www.savetheredwoods.org/redwoods/redwood-relatives/"}},
               {text:"Source 2", func: function(){window.location.href = "https://www.onceuponawatershed.org/coastliveoak#:~:text=The%20Coast%20Live%20Oak%20provides,turkey%20vultures%20and%20many%20more"}},
               {text:"Source 3", func: function(){window.location.href = "https://arbordayblog.org/misctrees/paper-birch-douglasfir-odd-relationship/"}},
               {text:"Source 4", func: function(){window.location.href = "https://www.gardenia.net/"}},
               {text:"Source 5", func: function(){window.location.href = "https://www.inaturalist.org/"}},
               {text:"Source 6", func: function(){window.location.href = "https://www.nps.gov/muwo/learn/nature/mycorrhizal-relationships.htm#:~:text=Mycorrhizal%20fungi%20form%20a%20mutualistic,mycelium%20with%20the%20tree's%20roots"}},
               {text:"Source 7", func: function(){window.location.href = "https://drive.google.com/file/d/1ysdn9yqLERGeOjdDDMZJzpOhTzTECBC2/view"}},
               {text:"Source 8", func: function(){window.location.href = "https://ucsccampusreserve.ucsc.edu/"}},
               {text:"Source 9", func: function(){window.location.href = "https://ucsccampusreserve.ucsc.edu/maps-habitats-organisms-stewardship/maps-list.html"}},
               {text:"Source 10", func: function(){window.location.href = "https://drive.google.com/file/d/1RGJ1WdzkZbLgZO02xL3p0KOtSXBBRHyp/view"}}

          ],
          [
               {text:"Cape Weed", func: function(){document.getElementById("CapeWeed").scrollIntoView();select("CapeWeed");}},
               {text:"Coastal Live Oak", func: function(){document.getElementById("CoastalLiveOak").scrollIntoView();select("CoastalLiveOak");}},
               {text:"Coastal Redwood", func: function(){document.getElementById("CoastalRedwood").scrollIntoView();select("CoastalRedwood");}},
               {text:"Douglas Fir", func: function(){document.getElementById("DouglasFir").scrollIntoView();select("DouglasFir");}},
               {text:"English Daisy", func: function(){document.getElementById("EnglishDaisy").scrollIntoView();select("EnglishDaisy");}},
               {text:"Field Marigold", func: function(){document.getElementById("FieldMarigold").scrollIntoView();select("FieldMarigold");}},
               {text:"Pacific Madrone", func: function(){document.getElementById("PacificMadrone").scrollIntoView();select("PacificMadrone");}},
               {text:"Spotted Beebalm", func: function(){document.getElementById("SpottedBeebalm").scrollIntoView();select("SpottedBeebalm");}},
               {text:"Woodland Madia", func: function(){document.getElementById("WoodlandMadia").scrollIntoView();select("WoodlandMadia");}}
          ],
          [
               {text:"Banana Slug", func: function(){document.getElementById("BananaSlug").scrollIntoView();select("BananaSlug");}},
               {text:"Black-Tailed Deer", func: function(){document.getElementById("Black-TailedDeer").scrollIntoView();select("Black-TailedDeer");}},
               {text:"Eastern Gray Squirrel", func: function(){document.getElementById("EasternGraySquirrel").scrollIntoView();select("EasternGraySquirrel");}},
               {text:"Wild Turkey", func: function(){document.getElementById("WildTurkey").scrollIntoView();select("WildTurkey");}}
          ],
          [
               {text:"Digger Wasps", func: function(){document.getElementById("DiggerWasps").scrollIntoView();select("DiggerWasps");}},
               {text:"Leaf Footed Bugs", func: function(){document.getElementById("LeafFootedBugs").scrollIntoView();select("LeafFootedBugs");}},
               {text:"Monarch Butterfly", func: function(){document.getElementById("MonarchButterfly").scrollIntoView();select("MonarchButterfly");}},
               {text:"Ohlone Tiger Beetle", func: function(){document.getElementById("OhloneTigerBeetle").scrollIntoView();select("OhloneTigerBeetle");}}
          ],
          [
               {text:"Amethyst Laccaria", func: function(){document.getElementById("WesternAmethystLaccaria").scrollIntoView();select("WesternAmethystLaccaria");}},
               {text:"Bitter Brown Pax", func: function(){document.getElementById("BitterBrownPax").scrollIntoView();select("BitterBrownPax");}},
               {text:"Cone Mushroom", func: function(){document.getElementById("DouglasFirConeMushroom").scrollIntoView();select("DouglasFirConeMushroom");}},
               {text:"Cucumber Mushroom", func: function(){document.getElementById("CucumberMushroom").scrollIntoView();select("CucumberMushroom");}},
               {text:"Ectomycorrhizal Fungi", func: function(){document.getElementById("EctomycorrhizalFungi").scrollIntoView();select("EctomycorrhizalFungi");}},
               {text:"Honey Mushroom", func: function(){document.getElementById("HoneyMushroom").scrollIntoView();select("HoneyMushroom");}},
               {text:"Mycorrhizal Fungi", func: function(){document.getElementById("MycorrhizalFungi").scrollIntoView();select("MycorrhizalFungi");}},
               {text:"Western Witch Hat", func: function(){document.getElementById("WesternWitchHat").scrollIntoView();select("WesternWitchHat");}}
          ],
          [
               {text:"History Center", func: function(){window.location.href = "https://norriscenter.ucsc.edu/index.html"}},//https://norriscenter.ucsc.edu/index.html
               {text:"Java Script", func: function(){window.location.href = "site.js"}}//https://norriscenter.ucsc.edu/index.html
          ]
     ];
     //set default settings of dropdown menus
     var buttonHeight = 30;
     //var Widths = [];
     var Width = Math.min(parseInt($(".topbox").css("width")), maxwidth)/dropIds.length - 10;
     var Heights = [];
     var YOffsets = [];
     var XShift = 0;
     var YShift = 4;
     var WShift = 4;
     var tops = [];
     var bottoms = [];
     var isDowns = [];
     //set up dropdoen menus
     for(var i = 0; i < dropIds.length;i++){
          var temp = $("#" + dropIds[i]);
          //Widths.push(Width);
          Heights.push(temp.height());
          YOffsets.push((-Buttons[i].length * buttonHeight) + buttonHeight);
          isDowns.push(false);
          bottoms.push($("<div class=dropdown></div>"));
          //bottoms[i].css("background-color", "#AAAAAA");
          bottoms[i].css("width", (Width) + "px");
          temp.append(bottoms[i]);
          for(var o = 0; o < Buttons[i].length;o++){
               Buttons[i][o].button = $("<button class='dropdownButton'>" + Buttons[i][o].text + "</button>");
               if(i !== 0){
                    Buttons[i][o].button.mouseenter(function(){
                         $(this).addClass("dropbuttonhover");
                    });
                    Buttons[i][o].button.mouseleave(function(){
                         $(this).removeClass("dropbuttonhover");
                    });
                    Buttons[i][o].button.click(function(){
                         $(this).addClass("dropbuttonclick");
                    });
               }
               Buttons[i][o].button.css("width", (Width + WShift) + "px");
               Buttons[i][o].button.css("height", buttonHeight + "px");
               Buttons[i][o].button.css("position", "absolute");
               Buttons[i][o].button.css("top", ((o * buttonHeight) + YOffsets[i]) + "px");
               Buttons[i][o].button.css("right", XShift + "px");
               Buttons[i][o].button.hide();
               temp.append(Buttons[i][o].button);
               Buttons[i][o].button.click(Buttons[i][o].func);
               bottoms[i].css("height", ((o * buttonHeight) + YOffsets[i]) + "px");
          }
          tops.push($("<div class=dropdown></div>"));
          tops[i].mouseenter(function(){
               $(this).addClass("dropbuttonhover");
          });
          tops[i].mouseleave(function(){
               $(this).removeClass("dropbuttonhover");
          });
          tops[i].html(dropIds[i]);
          tops[i].css("left", "0px");
          tops[i].css("font-size", "20px");
          tops[i].css("text-align", "center");
          tops[i].css("border", "solid 2px black");
          tops[i].css("width", (Width) + "px");
          temp.append(tops[i]);
     }
     for(var i = 0; i < dropIds.length;i++){
          var dropdownEl = $("#" + dropIds[i]);
          dropdownEl.css("height", Heights[i] + "px");
          dropdownEl.css("width", Width + "px");
     }
     //updates positions of all buttons
     var update = function(i){
          for(var o = 0; o < Buttons[i].length;o++){
               Buttons[i][o].button.css("width", (Width + WShift) + "px");
               Buttons[i][o].button.css("height", buttonHeight + "px");
               Buttons[i][o].button.css("font-size", "1vw");
               if(parseFloat(Buttons[i][o].button.css("font-size")) < 11){
                    Buttons[i][o].button.css("font-size",  "11px");
               }
               if(parseFloat(Buttons[i][o].button.css("font-size")) > 15){
                    Buttons[i][o].button.css("font-size",  "15px");
               }
               Buttons[i][o].button.css("top", ((o * buttonHeight) + YOffsets[i]) + "px");
               Buttons[i][o].button.css("left", 0 + "px");
               bottoms[i].css("width", (Width + WShift) + "px");
               bottoms[i].css("height", ((o * buttonHeight) + YOffsets[i] + buttonHeight) + "px");
               Buttons[i][o].button.hide();
               if(((o * buttonHeight) + YOffsets[i]) >= 0){
                    Buttons[i][o].button.show();
               }
          }
     }
     //updates every part of dropdown nenus
     var updateall = function(){
          Width = Math.min(parseInt($(".topbox").css("width")), maxwidth)/dropIds.length - 10;
          for(var i = 0; i < dropIds.length;i++){
               $("#" + dropIds[i]).css("left", ((i*Math.min(parseInt($(".topbox").css("width")), maxwidth)/dropIds.length) + 33) + "px");
               $("#" + dropIds[i]).css("width", Width + "px");
          }
          for(var i = 0; i < Buttons.length;i++){
               update(i);
          }
          for(var i = 0; i < tops.length;i++){
               tops[i].css("width", (Width) + "px");
               tops[i].css("font-size",  "1vw");
               if(parseFloat(tops[i].css("font-size")) < 11){
                    tops[i].css("font-size",  "11px");
               }
               if(parseFloat(tops[i].css("font-size")) > 15){
                    tops[i].css("font-size",  "15px");
               }
          }
     }
     setInterval(updateall, 0.1);
     var Index = 0;

     //code for dropdown menus
     var dropdown = function(){
          var index = Index;
          var sy = 0;

          var expand = function(){
               if(isDowns[index] && YOffsets[index] < buttonHeight + YShift){
                    YOffsets[index] += sy;
               } else if(isDowns[index] === false && YOffsets[index] > (-Buttons[index].length * buttonHeight) + buttonHeight){
                    YOffsets[index] -= sy;
               }
               if(YOffsets[index] > buttonHeight + YShift){
                    YOffsets[index] = buttonHeight + YShift;
               }
               if(YOffsets[index] < (-Buttons[index].length * buttonHeight) + buttonHeight){
                    YOffsets[index] = (-Buttons[index].length * buttonHeight) + buttonHeight;
               }
               update(index);
               // if(YOffsets[index] < Buttons[index].length * buttonHeight){
               //   YOffsets[index]++;
               //   update(index);
               // }
          }
          sy = 4;
          id = setInterval(expand, 1);
          var activateDrop = function(){
               isDowns[index] = true;
          }
          var deactivateDrop = function(){
               isDowns[index] = false;
          }
          tops[index].mouseenter(activateDrop);
          tops[index].mouseleave(deactivateDrop);
          bottoms[index].mouseenter(activateDrop);
          bottoms[index].mouseleave(deactivateDrop);
          for(var o = 0; o < Buttons[index].length;o++){
               Buttons[index][o].button.mouseenter(activateDrop);
               Buttons[index][o].button.mouseleave(deactivateDrop);
          }
     }
     Index = 0;
     while(Index < dropIds.length){
          dropdown();
          Index++;
     }
}
//welcome message
var startmaptext = "Hello and welcome to our website! This website was made as a class project " +
"in order to show people some of the wildlife on campus at UCSC. The buttons to the left tell you about different"+
" Vegetation Communities on the campus. The dropdown menus above have links to our sources and to some of our "+
"personal websites, as well as lists of all of the animals, plants, insects, and fungi that we have included. ";

//function for the ucsc map and buttons
var mapCode = function(){
     //text that appears when you click on the buttons on the map
     var mapTexts = {
          ib1:[
              "This is a hot, dry plant community that is characterized by its presence of shrubs. Here in Santa ",
              "Cruz, the influence of summer fog and presence of sandy soil makes this kind of ",
              "chaparral distinct from the more inland type. This is referred to as northern maritime ",
              "chaparral, which is a relatively rare plant community found in small patches along the ",
              "coast. Although the fog provides some respite for the plants in the summer, maritime ",
              "chaparral is still a harsh environment that plants must adapt to in specialized ways. ",
              "Small, thick, stiff leaves help plants hold and efficiently use the small amounts of water ",
              "they receive. Plants here are also fire-adapted, as fire is integral to the ecology of this ",
              "community. Some species are able to resprout from their bases after fire while others ",
              "have seeds that germinate in response to the heat or smoke of fire. Examples of ",
              "chaparral plants include manzanitas (Arctostaphylos spp.), ceanothus (Ceanothus spp.), ",
              "coffeeberry (Frangula californica), huckleberry (Vaccinium ovatum), chaparral pea ",
              "(Pickeringia montana), and sticky monkeyflower (Mimulus aurantiacus). Occasionally, ",
              "you will find a knobcone pine (Pinus attenuata) or a small oak, too. Two good places to ",
              "visit in campus chaparral are Chinquapin Road, northwest of Red Hill Road, and Fuel ",
              "Break Rd. between Red Hill and West roads."
          ],
          ib2:[
               "Grassland dominates most of the lower half of campus and some pockets of Upper Campus. Large meadows, like the East Meadow, the Great Meadow, and Mima Meadow, are composed mostly of annual plants, especially grasses. Most of the grasses and herbaceous plants in these meadows are non-native and/or invasive, like ripgut brome (Bromus diandrus), slender wild oat (Avena barbata), rattlesnake grass (Briza maxima), wild radish (Raphanus spp.), stork's bill (Erodium botrys), and rough cat's ear (Hypochaeris radicata), which can have detrimental impacts on the native ecosystem. Despite this, some native species have managed to persist. Sky lupine (Lupinus nanus) and California poppies (Eschscholzia californica) still bloom in abundance in the spring, painting the meadows with patches of blue and orange. Other common native grassland species are sun cups (Taraxia ovata), Fremont's star lily (Toxicoscordion fremontii), California buttercup (Ranunculus californicus), blue-eyed grass (Sisyrinchium bellum), coyote brush (Baccharis pilularis var. consanguinea), purple needlegrass (Stipa pulchra), and California oatgrass (Danthonia californica). While the large lower campus meadows have spectacular views and a host of plant life, the meadows of Upper Campus are truly the jackpot for botanizing. These meadows, like the Marshall Fields complex, are a specific type of grassland called coastal prairie that sit on ancient marine terraces. This plant community is especially diverse. In addition to the native and non-native plants found on lower campus, this community also includes colorful species like harlequin lotus (Hosackia gracilis), yellow owl's clover (Triphysaria versicolor), golden brodiaea (Triteleia ixioides), mariposa lilies (Calochortus spp.), and brodieas (Brodiaea spp.). Many of these species are rare or restricted in range, such as Point Reyes horkelia (Horkelia marinensis), and large flowered mariposa (Calochortus uniflorus)."
          ],
          ib3:[
               "Coyote Brush scrub (Baccharis pilularis var. consanguinea) is dominant or co-dominant in coyote brush scrub, sometimes growing in the company of other scrub-affiliated shrubs like blue blossom (Ceanothus thyrsiflorus), sticky monkeyflower (Mimulus aurantiacus), blackberry (Rubus ursinus), and coffeeberry (Frangula californica). Often, coyote brush scrub is a transitional community between grassland and woodland--when left unmanaged (e.g. fire suppression, no grazing), coyote brush can establish in grassland and shelter tree seedlings as they mature. On campus, the extent of coyote brush scrub may actually be larger than mapped, but the plant is not a persistent community and current management practices are keeping populations down."
          ],
          ib4:[
               "Areas developed and cultivated by humans exist primarily on the main campus where there are buildings, plants around buildings, parking lots, and gardens. In these areas, the natural landscape is disturbed and thus altered in some way by human activity. The Arboretum, the CASFS Farm, Chadwick Garden, and the various college gardens are all examples of landscaped areas. Developed areas include any piece of land that has been built on or paved over. These places often host invasive plants, as many of these species prefer and thrive in environments where the soil is disturbed. While invasive plants thrive in degraded habitats, native plants are at a disadvantage. This allows weedy species to outcompete native plants and dominate disturbed areas."
          ],
          ib5:[
               "The Dwarf Redwood forest in Santa Cruz is considered to be a unique feature of the area, with no redwoods over 30ft tall, and trees lighter colors of green than normal. The other features of these trees suggest they are of mature age, but scientists disagree over the cause of their short stature. Some scientists believe these are just young trees, some argue that they are genetically unique, and others theorize that their height is caused by poor soil quality. However in 1970,  soil scientist Dr. Hans Jenny proved that these were not young trees, and discovered one that was over 300 years old despite being only 6 feet tall."
          ],
          ib6:[
               "All those who visit UC Santa Cruz are familiar with this plant community, as coastal redwoods (Sequoia sempervirens) are a dominant feature of the central and upper regions of campus. These towering, long-lived conifers can grow up to 120 meters tall and 2200 years old in some parts of California, but only reach about 60 meters and 100 years old on campus. They are restricted to the central and northern coast of California and a small part of the southern coast of Oregon. This is because redwoods exist where coastal fog exists, as it provides moisture for the trees in the otherwise too-dry summer months. The plant species that dwell in the forest understory need this moisture, too; however, the dark canopy and deep duff that the redwoods create limits what plants are able to grow in their company. Associated species you can observe growing on the forest floor are sword fern (Polystichum munitum), milkmaids (Cardamine californica), fetid adder's tongue (Scoliopus bigelovii), wake-robin (Trillium ovatum), redwood violet (Viola sempervirens), and redwood sorrel (Oxalis oregana). Some tree species, like Douglas-fir (Pseudotsuga menziesii) and tanoak (Notholithocarpus densiflorus) also dwell in the midst of the redwoods. Additionally, there are some stands of redwoods that are categorized as “dwarf redwoods” on the Vegetation Communities Map. These are not true dwarf forms, but are reduced in stature in terms of circumference and height. Stands of these smaller trees, which grow more densely than the other redwoods on campus, are found on the East Slope of the Campus Natural Reserve, as well as around the Trailer Park and North Remote parking lot. These trees are perhaps smaller because they grow on poor, sandy soils and/or in areas that were historically burned."
          ],
          ib7:[
               "Grassland dominates most of the lower half of campus and some pockets of Upper Campus. Large meadows, like the East Meadow, the Great Meadow, and Mima Meadow, are composed mostly of annual plants, especially grasses. Most of the grasses and herbaceous plants in these meadows are non-native and/or invasive, like ripgut brome (Bromus diandrus), slender wild oat (Avena barbata), rattlesnake grass (Briza maxima), wild radish (Raphanus spp.), stork's bill (Erodium botrys), and rough cat's ear (Hypochaeris radicata), which can have detrimental impacts on the native ecosystem. Despite this, some native species have managed to persist. Sky lupine (Lupinus nanus) and California poppies (Eschscholzia californica) still bloom in abundance in the spring, painting the meadows with patches of blue and orange. Other common native grassland species are sun cups (Taraxia ovata), Fremont's star lily (Toxicoscordion fremontii), California buttercup (Ranunculus californicus), blue-eyed grass (Sisyrinchium bellum), coyote brush (Baccharis pilularis var. consanguinea), purple needlegrass (Stipa pulchra), and California oatgrass (Danthonia californica). While the large lower campus meadows have spectacular views and a host of plant life, the meadows of Upper Campus are truly the jackpot for botanizing. These meadows, like the Marshall Fields complex, are a specific type of grassland called coastal prairie that sit on ancient marine terraces. This plant community is especially diverse. In addition to the native and non-native plants found on lower campus, this community also includes colorful species like harlequin lotus (Hosackia gracilis), yellow owl's clover (Triphysaria versicolor), golden brodiaea (Triteleia ixioides), mariposa lilies (Calochortus spp.), and brodieas (Brodiaea spp.). Many of these species are rare or restricted in range, such as Point Reyes horkelia (Horkelia marinensis), and large flowered mariposa (Calochortus uniflorus)."
          ],
          ib8:[
               "Areas developed and cultivated by humans exist primarily on the main campus where there are buildings, plantings around buildings, parking lots, and gardens. In these areas, the natural landscape is “disturbed” by human activity and thus altered in some way. The Arboretum, the CASFS Farm, Chadwick Garden, and the various college gardens are all examples of landscaped areas. Developed areas essentially include any piece of land that has been built on or paved over. These places often host invasive plants, as many of these species prefer and thrive in environments where the soil is disturbed. While invasive plants thrive in degraded habitats, native plants do not do so well and are at a disadvantage. This allows weedy species to outcompete native plants and dominate disturbed areas."
          ],
          ib9:[
              "This diverse vegetation community is found on the main campus in ",
              "small patches, but is most common in Upper Campus and a section ",
              "of campus west of Empire Grade. Much more diverse and variable ",
              "than redwood forest, mixed evergreen forest is host to an ",
              "abundance of ferns, trees, shrubs, and herbaceous ",
              "plant species. Here, broadleaf evergreen trees, like members of the oak family ",
              "(Quercus spp. Notholithocarpus densiflorus, Chrysolepis chrysophylla var. minor), madrone (Arbutus menziesii) can grow in the company of conifers (redwood, Doug-fir, pine). ",
             "Shrubs like California hazelnut (Corylus cornuta subsp. californica), California blackberry (Rubus ursinus), and poison oak (Toxicodendron diversilobum) are common in this varied ",
             "landscape. Flowers of striking colors and unique features also bloom here, such as hound's tongue (Cynoglossum grande), white globe lily (Calochortus albus), Douglas iris (Iris douglasiana), and California hedgenettle (Stachys bullata)."
          ],
          ib10:[
               "This is a hot, dry plant community that is characterized mostly by shrubs. Here in Santa Cruz, the influence of summer fog and presence of sandy soil makes this kind of chaparral distinct from the more inland type. This is referred to as northern maritime chaparral, which is a relatively rare plant community found in small patches along the coast. Although the fog provides some respite for the plants in the summer, maritime chaparral is still a harsh environment that plants must adapt to in specialized ways. Small, thick, stiff leaves help plants hold and efficiently use the small amounts of water they receive. Plants here are also fire-adapted, as fire is integral to the ecology of this community. Some species are able to resprout from their bases after fire while others have seeds that germinate in response to the heat or smoke of fire. Examples of chaparral plants include manzanitas (Arctostaphylos spp.), ceanothus (Ceanothus spp.), coffeeberry (Frangula californica), huckleberry (Vaccinium ovatum), chaparral pea (Pickeringia montana), and sticky monkeyflower (Mimulus aurantiacus). Occasionally, you will find a knobcone pine (Pinus attenuata) or a small oak, too. Two good places to visit campus chaparral are on Chinquapin Rd. northwest of Red Hill Rd. and on Fuel Break Rd. between Red Hill and West roads."
          ],
          ib11:[
               "All those who visit UC Santa Cruz are familiar with this plant community, as coastal redwoods (Sequoia sempervirens) are a dominant feature of the central and upper regions of campus. These towering, long-lived conifers can grow up to 120 meters tall and 2200 years old in some parts of California, but only reach about 60 meters and 100 years old on campus. They are restricted to the central and northern coast of California and a small part of the southern coast of Oregon. This is because redwoods exist where coastal fog exists, as it provides moisture for the trees in the otherwise too-dry summer months. The plant species that dwell in the forest understory need this moisture, too; however, the dark canopy and deep duff that the redwoods create limits what plants are able to grow in their company. Associated species you can observe growing on the forest floor are sword fern (Polystichum munitum), milkmaids (Cardamine californica), fetid adder's tongue (Scoliopus bigelovii), wake-robin (Trillium ovatum), redwood violet (Viola sempervirens), and redwood sorrel (Oxalis oregana). Some tree species, like Douglas-fir (Pseudotsuga menziesii) and tanoak (Notholithocarpus densiflorus) also dwell in the midst of the redwoods. Additionally, there are some stands of redwoods that are categorized as “dwarf redwoods” on the Vegetation Communities Map. These are not true dwarf forms, but are reduced in stature in terms of circumference and height. Stands of these smaller trees, which grow more densely than the other redwoods on campus, are found on the East Slope of the Campus Natural Reserve, as well as around the Trailer Park and North Remote parking lot. These trees are perhaps smaller because they grow on poor, sandy soils and/or in areas that were historically burned."
          ],
          ib12:[
               "Riparian zones on campus include those with standing water, streams, seeps, and springs. Some of this water is present year round and some is seasonal, greatly influencing what grows when and where. Riparian plant species require ample moisture, growing in or near the three main riparian corridors on campus: Cave Gulch, Moore Creek, and Jordan Gulch. The most common trees in this plant community are big leaf maple (Acer macrophyllum), willows (Salix spp.), and buckeye (Aesculus californica). Riparian zones on campus also support a number of fern species, like giant chain fern (Woodwardia fimbriata) and lady fern (Athyrium filix femina var. cyclosorum), as well as the grass-like sedges (Carex spp.) and rushes (Juncus spp.). Fewer herbaceous plants and shrubs dwell in these chronically wet environments, although elk clover (Aralia californica), western azalea (Rhododendron occidentale), and sneezeweed (Helenium puberulum) do thrive in these conditions."
          ],
          ib13:[
               "The UCSC Campus Natural Reserve covers 410 acres of protected natural lands on the UC Santa Cruz campus. This land was set aside as part of the UCSC Long Range Development Plan to preserve the natural communities for teaching, field research and natural history interpretation. These lands are an outdoor classroom and living library and laboratory. Students can literally walk outside their classrooms and dorms and study nature in nature."
          ],
     };
     //widths of the map buttons from top to bottom
     var mapWidths = [
          193,
          125,
          150,
          130,
          230,
          165,
          100,
          135,
          135,
          193,
          132,
          196,
          280
     ];
     var MapInfo = $("#ucscmapinfo");
     for(var i = 1; i <= 13;i++){
          $("#ib" + i).css("width", mapWidths[i - 1] + "px");
     }
     //setup all the map buttons
     for(var i = 1; i <= 13;i++){

          tempButton = $("#ib" + i);
          tempButton.addClass("transNotPressed");
          tempButton.mouseenter(function(){
               $(this).addClass("transHover");
               $(this).removeClass("transNotPressed");
          });
          tempButton.mouseleave(function(){
               $(this).removeClass("transHover");
               $(this).addClass("transNotPressed");
          });
          tempButton.click(function(){
               //console.log($(this).siblings("#ucscmapinfo"));
               //console.log($(this).attr('id'));

               $(this).siblings(".invisButton").addClass("transNotPressed");
               $(this).removeClass("transNotPressed");

               $(this).siblings(".invisButton").removeClass("transPressed");
               $(this).addClass("transPressed");
               var thisID = "" + $(this).attr('id') + "";
               var temptxt = "";
               for(var o = 0; o < mapTexts[thisID].length;o++){
                     temptxt += mapTexts[thisID][o];
               }
               MapInfo.html(Replace(temptxt, ""));
               selectors();
          });
     }
     //$("#ib1").removeClass("transNotPressed");
     //$("#ib1").addClass("transPressed");
     //for(var o = 0; o < mapTexts["ib1"].length;o++){
          // temptxt += mapTexts["ib1"][o];
     //}
     MapInfo.html(startmaptext);
}

//code for links (the animals and plants linked together at the bottom)
var linkCode = function(){
     var width = 295 + 50;
     var tabs = 3;
     var padding = 5;
     //data for animals and plants, id corresponds to an id in html,
     //title is the title displayed in a linkheader
     //tabs is an array of the tabs and their data,
     //the info in each tab is html for the paragraph in each tab
     var animal_data =
     [
          {
               id: "CoastalRedwood",
               title: "Coastal Redwood",
               tabs:[
                    {
                         title: "Information",
                         info:[
                              "<image style='width: 150px' src='img/redwood1.png'>",
                              "<image style='width: 150px' src='img/redwood2.png'><br>",
                              "Height: up to 60 meters<br>",
                              "Cone/flower size: 1.3-1.5 cm<br>",
                              "Cone/flower description: spherical, woody cones with flat sets of alternating needles<br>",
                              "Bark/skin: dark reddish brown, fibrous and overlapping itself downward<br>",
                              "Facts: can be found in every country except Antarctica, and they often use fog as their water source"
                         ]
                    },
                    {
                         title: "Relationships",
                         info:[
                              "{Coastal Redwoods} are related to the giant sequoia, dawn Redwood and alerce. ",
                              "{Mycorrhizal Fungi} and {Ectomycorrhizal Fungi} form a mutualistic relationship with the {Redwood} and other plants in the forest. The fungi will combine their mycelium with the tree's roots; this makes it easier for the trees to get nutrients and moisture while the fungi gain sugars from the trees. ",
                              "They act as a Home of the northern spotted owl. {Banana Slugs} eat plants that compete with redwoods creating a symbiotic relationship with coastal redwoods. Redwood forests provide a habitat for {Honey Mushrooms}, {Cucumber Mushrooms}, {Western Witch Hats}, and {Bitter Brown Pax} fungi."
                         ]
                    },
               ]
          },
          {
               id: "DouglasFir",
               title: "Douglas Fir",
               tabs:[
                    {
                         title: "Information",
                         info:[
                              "<image style='width: 150px' src='img/douglasfir1.png'>",
                              "<image style='width: 150px' src='img/douglasfir2.png'>",
                              "Height: up to 67 meters<br>",
                              "Cone/flower size: 4-20cm<br>",
                              "Cone/flower description: elongated cones, overlapping scalelike sections, short needles spiraling in all directions from twigs<br>",
                              "Bark/skin: Greyborwn spit furrowed bark, younger bark is smooth<br>",
                              "Facts: Grows 13 - 24 inches per year, and it is an evergreen tree "
                         ]
                    },
                    {
                         title: "Relationships",
                         info:[
                              "{Squirrels}, rabbits, and other small animals use Douglas Fir seeds; {Deer}, elk, and antelope eat twigs and foliage from the tree. ",
                              "{Douglas Fir} trees are aided by Paper Birch trees. Sugars flow between the two tree roots, with a bigger gain for the {Douglas Fir} trees. An underground fungi {Ectomycorrhizae} or {Mycorrhizal}, transfers this nutrience. The fungi benefits from this transaction as well by keeping a small amount of carbohydrates and vitamins from the tree, which increases the roots' ability to absorb water. This increases water flow and essential nutrients. The tree also acts as a home for northern spotted owls. The Cones from the Douglas Fir also grow a small fungi or mushroom called {Douglas Fir Cone Mushroom}, and these mushrooms grow within the cone. {Western Amethyst Laccaria} may grow on Douglas Firs."
                         ]
                    },
               ]
          },
          {
               id: "PacificMadrone",
               title: "Pacific Madrone",
               tabs:[
                    {
                         title: "Information",
                         info:[
                              "<image style='width: 130px' src='img/pacificmadrone1.png'>",
                              "<image style='width: 150px' src='img/pacificmadrone2.png'>",
                              "Height: Up to 40 meters<br>",
                              "blooms: April, May<br>",
                              "Cone/flower size: small<br>",
                              "Cone/flower description: Rounded leaves on the thicker side, white hollow potlike flowers<br>",
                              "Bark/skin: Paperlike peeling orange bark with yellow underneath<br>",
                              "Facts: Pacific madrones are fire dependent, meaning they depend on fires to clear areas for them to grow<br>",
                         ]
                    },
                    {
                         title: "Relationships",
                         info:[
                              "{Mycorrhizal Fungi} form a mutualistic relationship with this tree and other plants(such as {Redwood}) in the forest. The fungi will combine their mycelium with the tree's roots; this makes it easier for the trees to get nutrients and moisture while the fungi gain sugars from the trees. ",
                              "The Pacific Madrone has berries that birds, {Deer}, raccoons, and bears like to eat."
                         ]
                    }
               ]
         },
         {
              id: "CoastalLiveOak",
              title: "Coastal Live Oak",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/coastliveoak1.jfif'>",
                             "<image style='width: 130px' src='img/coastliveoak2.png'>",
                             "Height:10-25 meters<br>",
                             "Blooms: Feb-April<br>",
                             "Cone/flower size: very small<br>",
                             "Cone/flower description: Pointed long acorns, rounded leaves with sharp points on the edges<br>",
                             "Bark/skin: Grey bark with rounded ridges, darker as it gets older<br>",
                             "Facts: Their acorns die 15-50 days after falling. ",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "The Coastal Live Oak provides food and habitats for many species of mammals and birds, including but not limited to acorn woodpeckers, scrub jays, the oak titmouse, {Squirrels}, woodrats, Turkey Vultures, and many more. ",
                             "This tree also drops acorns at different times to avoid consumption by {Squirrels}",
                             "Leaf mulch helps repel {Slugs} from the soil around the tree. {Wild Turkeys} rely on the Oak tree's acorns for food. Sometimes it also acts as hosts to {Leaf Footed Bugs}.",
                        ]
                   }
              ]
        },
        {
              id: "BananaSlug",
              title: "Banana Slug",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/bananaslug1.png'>",
                             "<image style='width: 150px' src='img/bananaslug2.png'>",
                             "Description: Bright yellow, sometimes with black spots. Hoodlike flap on the head. Thin vertical stripes on the bottom<br>",
                             "Facts: Licking them can numb your tongue, the second largest Slug in the world. Can grow up to 10 inches long. Can move 6.5 inches per minute."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "{Banana Slugs} have a mutually symbiotic relationship with {Redwood} Trees. This relationship is symbiotic because the {Banana Slugs} eat plant species that compete with {Redwood} for nutrients. Banana slugs may also eat {Marigolds} and {English Daisies}.",
                        ]
                   }
              ]
        },
        {
              id: "EasternGraySquirrel",
              title: "Eastern Gray Squirrel",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/easterngreysquirrel1.png'>",
                             "<image style='width: 150px' src='img/easterngreysquirrel2.png'>",
                             "Description: Light grey with a white underside. Puffy tail and black eyes<br>",
                             "Facts: Very good sense of smell, this helps them find hidden food. They communicate with sounds and body language. "
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Eastern grey {Squirrels} have a mutualistic relationship with {Oak Trees}. This is because {Squirrels} leave acorns in hidden places to eat later, but sometimes they can't remember all of their hiding places. These acorns often end up growing and helping increase {Oak Tree} populations. ",
                        ]
                   }
              ]
        },
        {
              id: "WildTurkey",
              title: "Wild Turkey",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/wildturkey1.png'>",
                             "<image style='width: 150px' src='img/wildturkey2.png'>",
                             "Description: Rounded bodies, with a plume of brown feathers as a tail, red flap of skin under beak<br>",
                             "Facts: Only the male Turkeys gobble. These Turkeys can fly, and they sleep in trees  ",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Each flock of <Turkeys> are usually made up of siblings, and they band together by gender. {Wild Turkey} eggs have many predators as well, such as snakes, skunks, raccoons, coyotes, and many more. ",
                             "{Acorns} are an essential food source for turkeys, especially during winter."
                        ]
                   }
              ]
        },
        {
              id: "Black-TailedDeer",
              title: "Black-Tailed Deer",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/blacktaildeer1.png'>",
                             "<image style='width: 150px' src='img/blacktaildeer2.png'>",
                             "Description: Grey, white and orange-brown patches, black tail, males have antlers<br>",
                             "Facts: sub-species of mule deer. Their antlers grow under a layer of skin called velvet. Blacktail deer can live up to ten years in the wild but typically don't make it past six years. ",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Black-tailed Deer have fierce predators that include black bears, coyotes, wolves, and mountain lions. Deers are repelled by the {English Daisy} and like to eat foliage from {Douglas Firs}. ",
                        ]
                   }
              ]
        },
        {
              id: "MonarchButterfly",
              title: "Monarch Butterfly",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/monarchbutterfly1.jfif'>",
                             "<image style='width: 150px' src='img/monarchbutterfly2.jfif'><br>",
                             "Facts: Monarch Butterflies migrate 1,200 and 2,800 miles from the northeastern United States and southeastern Canada ",
                             "to mountain forests in central Mexico. Irregularities in weather and their food supply caused by climate change ",
                             "have caused the monarch butterfly to become endangered. These changes have caused more adult Monarch Butterflies to ",
                             "die and have made food scarcer for caterpillars."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "The main food source of Monarch Butterflies is milkweed. The decline of milkweed plants is one of the main causes of their endangerment. They sometimes eat {Spotted Beebalm}, and are also attracted by {English Daisies}." //add link for an herb in the area?
                        ]
                   }
              ]
        },
        {
              id: "OhloneTigerBeetle",
              title: "Ohlone Tiger Beetle",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/ohlonetigerbeetle1.jfif'>",
                             "<image style='width: 150px' src='img/ohlonetigerbeetle2.jfif'>",
                             "Facts: the Ohlone tiger beetle is an endangered beetle that only lives in a few places on earth. Adults are active on sunny days from January ",
                             "and May. These beetles use the bare ground to hunt, mate, and lay eggs. They are currently endangered due to habitat loss, invasive plants, ",
                             "and lower levels of bare ground than ideal. Because they like bare ground, they can often be found on paths and sidewalks, so slowing down and ",
                             "watching out for them can help them survive.",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Ohlone tiger beetles eat other insects such as flies, caterpillars, ants, grasshoppers, spiders, and other invertebrates. May be hunted by {wasps}." //add link for an herb in the area?
                        ]
                   }
              ]
        },
        {
              id: "DiggerWasps",
              title: "Digger Wasps",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/diggerwasp1.jpg'>",
                             "<image style='width: 150px' src='img/diggerwasp2.jpg'>",
                             "Description: digger wasps are big and hairy. They typically have dark wings and bright colors on their abdomen. <br>",
                             "Facts: digger wasps are considered solitary or hunter wasps. The female wasps are known to make nests for their babies.",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Since digger wasps make their nests on the ground they typically eat larvae and grubs so they can stay near their eggs. In Santa Cruz, you can spot them collecting pollen from {Spotted Beebalm} flowers. ",
                             "They sometimes hunt the {Ohlone Tiger Beetle}."
                        ]
                   }
              ]
        },
        {
              id: "LeafFootedBugs",
              title: "Leaf-Footed Bugs",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/leaffootedbug1.jpg'>",
                             "<image style='width: 150px' src='img/leaffootedbug2.jfif'>",
                             "Description: large bugs that can range from 7-45mm. Usually a muddy brown color<br>",
                             "Facts: they have sharp mouths that can pierce through the fruits, plants, and seeds that they eat.",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Adult leaf-footed bugs are attracted to sunflowers and find them perfect for laying their eggs in. They sometimes use {Oak Trees} as hosts.",
                        ]
                   }
              ]
        },
        {
              id: "SpottedBeebalm",
              title: "Spotted Beebalm",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/spottedbeebalm1.jpg'>",
                             "<image style='width: 150px' src='img/spottedbeebalm2.jpg'>",
                             "Description: these plants can range from 6in to 3ft tall. They are a tube-shaped flower that has pink petals and green leaves that appear to be poking out all around.<br>",
                             "Facts: spotted beebalm is often used as a home remedy to treat the flu or cold-like symptoms.<br>",
		                         "Blooms: in the summer for about 1-2 months.",
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Spotted beebalm is pollinated by {Digger Wasps} in a symbiotic relationship. Hummingbirds and {Butterflies} also enjoy spotted beebalm.",
                        ]
                   }
              ]
        },
        {
              id: "CapeWeed",
              title: "Cape Weed",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/capeweed1.jfif'>",
                             "<image style='width: 150px' src='img/capeweed2.jfif'>",
                             "Description: This annual or perennial herb has radiate flowering heads with long, yellow ray flowers and yellow disk flowers. The deeply lobed leaves grow in basal rosettes. The leaf surfaces are slightly wooly, and the undersides are white-woolly.<br>",
                             "Facts: Prostrate cape weed grows in large patches in disturbed areas. It is not too common on campus but can be seen growing in a patch between Family Student Housing and Porter Meadow. (UCSC plant guide, Bell). ",
		                   "Blooms: April-July"
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Cape weeds add to biodiversity and attract bees and {Butterflies}. They can also be an indicator of acidic soil or high salinity in soil which is detrimental for native plant environments. Solving this issue in the soil will make Cape weeds less invasive and make the conditions better for other plants. ",
                        ]
                   }
              ]
        },
        {
              id: "WoodlandMadia",
              title: "Woodland Madia",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/woodlandmadia1.jpg'>",
                             "<image style='width: 150px' src='img/woodlandmadia2.jpg'>",
                             "Description: this perennial herb has radiate heads with yellow 3-lobed petal-like ray flowers. Each flowering head is subtended by a spherical involucre with glandular phyllaries. The linear to oblanceolate leaves are bristly-hairy to soft-hairy with entire margins. Generally, the lower leaves are opposite, and the smaller upper leaves are alternate. The stems have golden to dark brown glands.<br>",
                             "Facts: Woodland madia prefers moist forested areas, making Santa Cruz its perfect home.<br>",
		                         "Blooms: April-July"
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Although often considered to be just a decorative plant, woodland madia can be helpful to attract pollinators such as bees and {Butterflies}, or other pollinators to your garden. ",
                        ]
                   }
              ]
        },
        {
              id: "EnglishDaisy",
              title: "English Daisy",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/englishdaisy1.jpg'>",
                             "<image style='width: 150px' src='img/englishdaisy2.jfif'>",
                             "Description: the radiate heads of this perennial herb are composed of many narrow, white ray flowers around bright yellow disk flowers. The basal leaves are oblanceolate to obovate and taper to the base, sometimes creating a spoon shape. The leaf margins are serrate, crenate, or entire.<br>",
                             "Facts: the English daisy prefers damp, grassy areas and can be found on campus, usually around human developments, such as the McHenry Library lawn.<br>",
		                         "Blooms: April-Aug "
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "{Slugs} and snails are known to eat English daisies. Earwigs like to eat just the pedals, while {Slugs} and snails will eat the stem and the leaves as well. English Daisies are also known to be a good {Deer} repellent to keep them out of your backyard. This flower also attracts {Butterflies}.",
                        ]
                   }
              ]
        },
        {
              id: "FieldMarigold",
              title: "Field Marigold",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/fieldmarigold1.jfif'>",
                             "<image style='width: 150px' src='img/fieldmarigold2.jfif'>",
                             "Description: This naturalized annual herb has yellow-orange ray flowers and small, similarly colored disk flowers. At maturity, the flower heads begin to nod. The leaves are lanceolate and have slightly wavy margins. Both the leaves and narrow stems are finely hairy and glandular.<br>",
                             "Facts: This plant is an escaped cultivar that now grows in areas disturbed by humans and is known to be fairly common in Santa Cruz and surrounding areas.<br>",
		                         "blooms: March-April "
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Field Marigolds are enjoyed by many insects such as grasshoppers. {Slugs} may also eat Marigolds. {Birds} typically don't eat these flowers but often kill them while searching for food. Rabbits may also be attracted to Marigolds and eat them as well. ",
                        ]
                   }
              ]
        },
        {
              id: "CucumberMushroom",
              title: "Cucumber Mushroom",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/cucumbermushroom1.png'>",
                             "<image style='width: 150px' src='img/cucumbermushroom2.png'>",
                             "Description: Fruit Body small, relatively fragile. Warm orange overall, cap margin somewhat striate. They usually smell strongly of cucumbers. Spores pinkish.",

                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Commonly found on upper campus and in the {Redwoods}."
                        ]
                   }
              ]
        },
        {
              id: "DouglasFirConeMushroom",
              title: "Douglas Fir Cone Mushroom",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/douglasfirconemushroom1.png'>",
                             "<image style='width: 150px' src='img/douglasfirconemushroom2.png'>",
                             "Description: Cap white to grayish-white, often with yellowish centers. The gills are fairly close but not crowded. Whitish yellow stripe towards the base. Growing in groups out of {Douglas Fir} cones."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "They are found on {Douglas Fir} tree cones."
                        ]
                   }
              ]
        },
        {
              id: "HoneyMushroom",
              title: "Honey Mushroom",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 130px' src='img/armillariaspp1.png'>",
                             "<image style='width: 150px' src='img/armillariaspp2.jfif'>",
                             "Description: Also called the honey mushroom, this mushroom has a Cap with small, dark hairs. Gills broadly attached or slightly decurrent, beige to tan or pinkish-brown in age, producing heavy white spore ",
                             "print. Stipe bases are swollen, bulbous, and often yellowish. Partial veil present, sometimes ragged, cottony, or disappearing in age. Often near rotting wood."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "They can be found in the Santa Cruz {Redwood} forest."
                        ]
                   }
              ]
        },
        {
              id: "MycorrhizalFungi",
              title: "Mycorrhizal Fungi",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/mycorrhizalfungi1.png'>",
                             "<image style='width: 150px' src='img/mycorrhizalfungi2.png'>",
                             "Facts: This fungus forms a partnership with 90% of terrestrial plants, including {Redwoods}. Essentially, the Mycorrhizal Fungi connects to the roots of plant's cells."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "{Mycorrhizal Fungi} form a mutualistic relationship with the {Redwood Tree} and other plants in the forest. The fungi will combine their mycelium with the tree's roots; this makes it easier for the trees to get nutrients and moisture while the fungi gain sugars from the trees. This fungus connects to the {Douglas Fir} tree, which provides the tree with mycelium, which is placed into the tree's roots, making it easier for the tree to receive nutrients in exchange for sugars for the fungi."
                        ]
                   }
              ]
        },
        {
              id: "EctomycorrhizalFungi",
              title: "Ectomycorrhizal Fungi",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/ectomycorrhizalfungi1.png'>",
                             "<image style='width: 150px' src='img/ectomycorrhizalfungi2.png'>",
                             "Facts: A symbiont with temperate and boreal forest trees (i.e. {Redwoods}), providing their hosts with soil nutrients and water in exchange for plant carbon."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Ectomycorrhizal fungi connect themselves to roots and transfer nutrients throughout the roots in trees like the {Douglas Fir}, for example, with the help of mycorrhiza."
                        ]
                   }
              ]
        },
        {
              id: "WesternWitchHat",
              title: "Western Witch Hat",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/westernwitchhat1.png'>",
                             "<image style='width: 150px' src='img/westernwitchhat2.png'>",
                             "This fungi has a cap that is orange to red or yellowish, conical, and peaked. Gills whitish to pale yellow, soon becoming gray. Stipe yellowish, tall, and fibrous. Soon developing grayish to black blotches and in age entirely jet black."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "They live within the {Redwood} forest and are commonly found throughout the upper campus."
                        ]
                   }
              ]
        },
        {
              id: "WesternAmethystLaccaria",
              title: "Western Amethyst Laccaria",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/westernamethystlaccaria1.png'>",
                             "<image style='width: 150px' src='img/westernamethystlaccaria2.png'>",
                             "Description: This fungi has a cap scruffy, deep amethyst at first but fading to nearly whitish-beige. Gills widely spaced, thick, deep amethyst-colored. Striped shaggy-ragged, and quite tough to touch."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "The Western Amethyst Laccaria lives on the {Douglas Fir} trees and can be found throughout the upper campus. "
                        ]
                   }
              ]
        },
        {
              id: "BitterBrownPax",
              title: "Bitter Brown Pax",
              tabs:[
                   {
                        title: "Information",
                        info:[
                             "<image style='width: 150px' src='img/bitterbrownpax1.png'>",
                             "<image style='width: 150px' src='img/bitterbrownpax2.png'>",
                             "Description: The Bitter Brown Pax has a dull brownish cap, dry, texture like suede, margin obscurely ribbed. Stripe white to off-white, often with a chunk of mycelium at the base. It is edible, though not recommended as it is very bitter."
                        ]
                   },
                   {
                        title: "Relationships",
                        info:[
                             "Bitter Brown Pax is commonly found throughout the {Redwood} forest as well as the upper campus."
                        ]
                   }
              ]
        }
];



     //add body to all links(animal information divs)
     var links = [];
     $(".link").each(function(i){
          links.push({body: $(this)});
     });
     //setup all links
     for(var i = 0; i < links.length;i++){
          links[i].id = links[i].body.attr('id');
          links[i].body.css("left", (parseInt(links[i].body.css("left")) * 400 + 50) + "px");
          links[i].body.css("top", (parseInt(links[i].body.css("top")) * 550 + 780) + "px");
          //console.log((links[i].body.css("left")));
          links[i].data = {title:"none", tabs:[{title:"none"}]};
          for(var a = 0; a < animal_data.length; a++){
               if(animal_data[a].id == links[i].id){
                    links[i].data = animal_data[a];
               }
          }
          links[i].title = links[i].data.title;
          links[i].html = "";
          links[i].head = $("<div class=linkhead>" + links[i].title + "</div>");
          links[i].t = [];
          links[i].p = $("<div class=linkp>this is some information</div>");
          for(var x = 0; x < width; x += width/(links[i].data.tabs.length)){
               //links[i].t.push($("<div class=linktab>" + links[i].data.tabs[links[i].t.length].title + "</div>"));
               links[i].t.push($("<div class=linktab>tab</div>"));
               links[i].t[links[i].t.length - 1].text(links[i].data.tabs[links[i].t.length - 1].title);
               //links[i].t[links[i].t.length - 1].css("top", "105px");
               links[i].t[links[i].t.length - 1].css("left", (5 + x) + "px");
               links[i].t[links[i].t.length - 1].css("width", (width/(links[i].data.tabs.length) - 2*padding) + "px");
               links[i].t[links[i].t.length - 1].css("height", (36-2*padding) + "px");
               links[i].t[links[i].t.length - 1].css("padding", (padding) + "px");
               //links[i].t[links[i].t.length - 1].paragraph = links[i].p;
               links[i].t[links[i].t.length - 1].click(function(){
                    //temp = this.
                    var linkTitle = $(this).siblings(".linkhead").html();
                    var thisName = $(this).html();
                    $(this).siblings(".linktab").removeClass("selected");
                    $(this).addClass("selected");
                    //console.log("linkheadHtml: " + $(this).siblings(".linkhead").html());
                    //console.log("linkpHtml: " + $(this).siblings(".linkp").html());


                    //console.log("tabHtml: " + thisName);
                    var linkData;
                    //console.log(linkTitle);
                    for(var i = 0; i < animal_data.length;i++){
                         if(animal_data[i].title == linkTitle){
                              linkData = animal_data[i];
                              break;
                         }
                    }
                    //console.log(linkData);
                    var tabData;
                    for(var i = 0; i < linkData.tabs.length;i++){
                         if(linkData.tabs[i].title == thisName){
                              tabData = linkData.tabs[i];
                              break;
                         }
                    }
                    var temptxt = "";
                    for(var i = 0; i < tabData.info.length;i++){
                         temptxt += tabData.info[i];
                    }
                    //console.log(linkData.id);
                    $(this).siblings(".linkp").html(Replace(temptxt, linkData.id));
                    console.log($("a").parents());
                    selectors();
               });
               // top: 105px;
               // left: 5px;
               // padding: 20px;
               // width: 20px;
               // height: 20px;
          }
          //console.log(links[i].data.tabs[0]);
          links[i].t[0].toggleClass("selected");
          var temptxt = "";
          //console.log(links[i].data);
          for(var y = 0; y < links[i].data.tabs[0].info.length;y++){
              temptxt += links[i].data.tabs[0].info[y];
          }
          links[i].p.html(Replace(temptxt, links[i].id));
          links[i].body.append(links[i].head);
          for(var o = 0; o < links[i].t.length;o++){
               links[i].body.append(links[i].t[o]);
          }
          links[i].body.append(links[i].p);
          selectors();
     }
}


//call all functions
dropDownCode();
mapCode();
linkCode();
