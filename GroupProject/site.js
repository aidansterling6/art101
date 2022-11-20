//code for dropdown menus
var dropDownCode = function(){
     var dropIds = ["Authors", "Sources", "Animals", "Plants"];
     var Buttons = [
          [
               {text:"Aidan Sterling", func: function(){window.location.href = "https://aidansterling6.github.io/art101/"}},//https://aidansterling6.github.io/art101/
               {text:"Allison Dutton", func: function(){window.location.href = "https://alli5689.github.io/art101/"}},//https://alli5689.github.io/art101/
               {text:"Mikayla Jordan", func: function(){window.location.href = "https://mikaylaj.github.io/art101/"}},//https://mikaylaj.github.io/art101/
               {text:"Thomas Castillo", func: function(){window.location.href = ""}},//https://alli5689.github.io/art101/
               {text:"Jessica Zogaric", func: function(){window.location.href = "https://kickflipyeah.github.io/art101/"}}//https://kickflipyeah.github.io/art101/
          ],
          [
               {text:"Source 1", func: function(){window.location.href = "https://ucsccampusreserve.ucsc.edu/maps-habitats-organisms-stewardship/plants/ucsc-plant-guide-martin-bell"}},
               {text:"Source 2", func: function(){window.location.href = "https://www.nps.gov/muwo/learn/nature/mycorrhizal-relationships.htm#:~:text=Mycorrhizal%20fungi%20form%20a%20mutualistic,mycelium%20with%20the%20tree%27s%20roots"}},
               {text:"Source 3", func: function(){window.location.href = "https://www.savetheredwoods.org/redwoods/redwood-relatives/"}},
               {text:"Source 4", func: function(){window.location.href = "https://www.onceuponawatershed.org/coastliveoak#:~:text=The%20Coast%20Live%20Oak%20provides,turkey%20vultures%20and%20many%20more"}}
          ],
          [
               {text:"Wild Turkey", func: function(){$(window).scrollTop(1000)}},
               {text:"Bannana Slug", func: function(){$(window).scrollTop(1000)}},
               {text:"Eastern Grey Squirrel", func: function(){$(window).scrollTop(1000)}},
               {text:"Black-Tailed Deer", func: function(){$(window).scrollTop(1000)}},
          ],
          [
               {text:"CoastalRedwood", func: function(){$(window).scrollTop(598)}},
               {text:"DouglasFir", func: function(){$(window).scrollTop(598)}},
               {text:"PacificMadrone", func: function(){$(window).scrollTop(1280)}},
               {text:"CoastalLiveOak", func: function(){$(window).scrollTop(1280)}}
          ]
     ];
     //element.scrollLeft
     var buttonHeight = 30;
     var Widths = [];
     var Heights = [];
     var YOffsets = [];
     var XShift = -4;
     var YShift = 4;
     var WShift = 4;
     var tops = [];
     var bottoms = [];
     var isDowns = [];
     for(var i = 0; i < dropIds.length;i++){
          var temp = $("#" + dropIds[i]);
          Widths.push(temp.width());
          Heights.push(temp.height());
          YOffsets.push((-Buttons[i].length * buttonHeight) + buttonHeight);
          isDowns.push(false);
          bottoms.push($("<div class=dropdown></div>"));
          //bottoms[i].css("background-color", "#AAAAAA");
          bottoms[i].css("width", (Widths[i]) + "px");
          temp.append(bottoms[i]);
          for(var o = 0; o < Buttons[i].length;o++){
               Buttons[i][o].button = $("<button>" + Buttons[i][o].text + "</button>");
               Buttons[i][o].button.css("width", (Widths[i] + WShift) + "px");
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
          // background-color: #AAAAAA;
          // border: solid 0px black;
          tops[i].html(dropIds[i]);
          //tops[i].css("background-color", "#AAAAAA");
          tops[i].css("font-size", "20px");
          //tops[i].css("padding", "5px");
          tops[i].css("text-align", "center");
          tops[i].css("border", "solid 2px black");
          tops[i].css("width", (Widths[i]) + "px");
          temp.append(tops[i]);
     }
     for(var i = 0; i < dropIds.length;i++){
          var dropdownEl = $("#" + dropIds[i]);
          dropdownEl.css("height", Heights[i] + "px");
          dropdownEl.css("width", Widths[i] + "px");
     }
     var update = function(i){
          for(var o = 0; o < Buttons[i].length;o++){
               Buttons[i][o].button.css("width", (Widths[i] + WShift) + "px");
               Buttons[i][o].button.css("height", buttonHeight + "px");
               Buttons[i][o].button.css("top", ((o * buttonHeight) + YOffsets[i]) + "px");
               Buttons[i][o].button.css("right", XShift + "px");
               bottoms[i].css("width", (Widths[i] + WShift) + "px");
               bottoms[i].css("height", ((o * buttonHeight) + YOffsets[i] + buttonHeight) + "px");
               Buttons[i][o].button.hide();
               if(((o * buttonHeight) + YOffsets[i]) >= 0){
                    Buttons[i][o].button.show();
               }
          }
     }
     var Index = 0;
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
          sy = 1;
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

var mapCode = function(){
     var mapTexts = {
          ib1:[
               "This is a hot, dry plant community that is characterized mostly by shrubs. Here in Santa ",
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
               "visit campus chaparral are on Chinquapin Rd. northwest of Red Hill Rd. and on Fuel ",
               "Break Rd. between Red Hill and West roads"
          ],
          ib2:[
               "Grassland dominates most of the lower half of campus and pockets of Upper Campus. Large meadows, like the East Meadow, the Great Meadow, and Mima Meadow, are composed mostly of annual plants, especially grasses. Most of the grasses and herbaceous plants in these meadows are non-native and/or invasive, like ripgut brome (Bromus diandrus), slender wild oat (Avena barbata), rattlesnake grass (Briza maxima), wild radish (Raphanus spp.), stork's bill (Erodium botrys), and rough cat's ear (Hypochaeris radicata), which can have detrimental impacts on the native ecosystem. However, some native species have managed to persist. Sky lupine (Lupinus nanus) and California poppies (Eschscholzia californica) still bloom in abundance in the spring, painting the meadows with patches of blue and orange. Other common native grassland species are sun cups (Taraxia ovata), Fremont's star lily (Toxicoscordion fremontii), California buttercup (Ranunculus californicus), blue-eyed grass (Sisyrinchium bellum), coyote brush (Baccharis pilularis var. consanguinea), purple needlegrass (Stipa pulchra), and California oatgrass (Danthonia californica). While the large lower campus meadows have spectacular views and a host of plant life, the meadows of Upper Campus are truly the jackpot for botanizing. These meadows, like the Marshall Fields complex, are a specific type of grassland called coastal prairie that sit on ancient marine terraces. This plant community is especially diverse. In addition to the native and non-native plants found on lower campus, this community also includes colorful species like harlequin lotus (Hosackia gracilis), yellow owl's clover (Triphysaria versicolor), golden brodiaea (Triteleia ixioides), mariposa lilies (Calochortus spp.), and brodieas (Brodiaea spp.). Many of these species are rare or restricted in range, such as Point Reyes horkelia (Horkelia marinensis), large flowered mariposa (Calochortus uniflorus), and S"
          ],
          ib3:[
               "Coyote Brush Scrub Coyote brush (Baccharis pilularis var. consanguinea) is dominant or co-dominant in coyote brush scrub, sometimes growing in the company of other scrub-affiliated shrubs like blue blossom (Ceanothus thyrsiflorus), sticky monkeyflower (Mimulus aurantiacus), blackberry (Rubus ursinus), and coffeeberry (Frangula californica). Often, coyote brush scrub is a transitional community between grassland and woodland--when left unmanaged (e.g. fire suppression, no grazing), coyote brush can establish in grassland and shelter tree seedlings as they mature. On campus, the extent of coyote brush scrub may actually be larger than mapped, but CBS is not a persistent community and current management practices are keeping coyote brush populations down."
          ],
          ib4:[
               "Areas developed and cultivated by humans exist primarily on the main campus where there are buildings, plantings around buildings, parking lots, and gardens. In these areas, the natural landscape is “disturbed” by human activity and thus altered in some way. The Arboretum, the CASFS Farm, Chadwick Garden, and the various college gardens are all examples of landscaped areas. Developed areas essentially include any piece of land that has been built on or paved over. These places often host invasive plants, as many of these species prefer and thrive in environments where the soil is disturbed. While invasive plants thrive in degraded habitats, native plants do not do so well and are at a disadvantage. This allows weedy species to outcompete native plants and dominate disturbed areas."
          ],
          ib5:[
               "hello"
          ],
          ib6:[
               "All those who visit UC Santa Cruz are familiar with this plant community, as coast redwoods (Sequoia sempervirens) are a dominant feature of the central and upper regions of campus. These towering, long-lived conifers can grow up to 120 m tall and 2200 years old in some parts of California, but only reach about 60 m and 100 years old on campus. They are restricted to the central and northern coast of California and a small part of the southern coast of Oregon. This is because redwoods exist where coastal fog exists, as it provides moisture for the trees in the otherwise too-dry summer months. The plant species that dwell in the forest understory need this moisture, too. However, the dark canopy and deep duff that the redwoods create limits what plants are able to grow in their company. Associated species you can observe growing on the forest floor are sword fern (Polystichum munitum), milkmaids (Cardamine californica), fetid adder's tongue (Scoliopus bigelovii), wake-robin (Trillium ovatum), redwood violet (Viola sempervirens), and redwood sorrel (Oxalis oregana). Some tree species, like Douglas-fir (Pseudotsuga menziesii) and tanoak (Notholithocarpus densiflorus) also dwell in the midst of the redwoods. Additionally, there are some stands of redwoods that are categorized as “dwarf redwoods” on the Vegetation Communities Map. These are not true dwarf forms, but are reduced in stature in terms of circumference and height. Stands of these smaller trees, which grow more densely than the other redwoods on campus, are found on the East Slope of the Campus Natural Reserve, as well as around the Trailer Park and North Remote parking lot. These trees are perhaps smaller because they grow on poor, sandy soils and/or in areas that were historically burned."
          ],
          ib7:[
               "Grassland dominates most of the lower half of campus and pockets of Upper Campus. Large meadows, like the East Meadow, the Great Meadow, and Mima Meadow, are composed mostly of annual plants, especially grasses. Most of the grasses and herbaceous plants in these meadows are non-native and/or invasive, like ripgut brome (Bromus diandrus), slender wild oat (Avena barbata), rattlesnake grass (Briza maxima), wild radish (Raphanus spp.), stork's bill (Erodium botrys), and rough cat's ear (Hypochaeris radicata), which can have detrimental impacts on the native ecosystem. However, some native species have managed to persist. Sky lupine (Lupinus nanus) and California poppies (Eschscholzia californica) still bloom in abundance in the spring, painting the meadows with patches of blue and orange. Other common native grassland species are sun cups (Taraxia ovata), Fremont's star lily (Toxicoscordion fremontii), California buttercup (Ranunculus californicus), blue-eyed grass (Sisyrinchium bellum), coyote brush (Baccharis pilularis var. consanguinea), purple needlegrass (Stipa pulchra), and California oatgrass (Danthonia californica). While the large lower campus meadows have spectacular views and a host of plant life, the meadows of Upper Campus are truly the jackpot for botanizing. These meadows, like the Marshall Fields complex, are a specific type of grassland called coastal prairie that sit on ancient marine terraces. This plant community is especially diverse. In addition to the native and non-native plants found on lower campus, this community also includes colorful species like harlequin lotus (Hosackia gracilis), yellow owl's clover (Triphysaria versicolor), golden brodiaea (Triteleia ixioides), mariposa lilies (Calochortus spp.), and brodieas (Brodiaea spp.). Many of these species are rare or restricted in range, such as Point Reyes horkelia (Horkelia marinensis), and large flowered mariposa (Calochortus uniflorus)"
          ],
          ib8:[
               "Areas developed and cultivated by humans exist primarily on the main campus where there are buildings, plantings around buildings, parking lots, and gardens. In these areas, the natural landscape is “disturbed” by human activity and thus altered in some way. The Arboretum, the CASFS Farm, Chadwick Garden, and the various college gardens are all examples of landscaped areas. Developed areas essentially include any piece of land that has been built on or paved over. These places often host invasive plants, as many of these species prefer and thrive in environments where the soil is disturbed. While invasive plants thrive in degraded habitats, native plants do not do so well and are at a disadvantage. This allows weedy species to outcompete native plants and dominate disturbed areas."
          ],
          ib9:[
               "This diverse vegetation community is found on the main campus in ",
               "small patches, but is most common in Upper Campus and a section ",
               "of campus west of Empire Grade. Much more diverse and variable ",
               "than redwood forest, mixed evergreen forest is host to an ",
               "RF DRFMEDR-M-C9 abundance of ferns, trees, shrubs, and herbaceous ",
               "plant species.Here, broadleaf evergreen trees, like members of the oak family ",
               "(Quercus spp. Notholithocarpus densiflorus, Chrysolepis chrysophylla var. minor), madrone (Arbutus menziesii) can grow in the company of conifers (redwood, Doug-fir, pine). ",
                "Shrubs like California hazelnut (Corylus cornuta subsp. californica), California blackberry (Rubus ursinus), and poison oak (Toxicodendron diversilobum) are common in this varied ",
                "landscape. Flowers of striking colors and unique features also bloom here, such as hound's tongue (Cynoglossum grande), white globe lily (Calochortus albus), Douglas iris (Iris douglasiana), and California hedgenettle (Stachys bullata). "
          ],
          ib10:[
               "This is a hot, dry plant community that is characterized mostly by shrubs. Here in Santa Cruz, the influence of summer fog and presence of sandy soil makes this kind of chaparral distinct from the more inland type. This is referred to as northern maritime chaparral, which is a relatively rare plant community found in small patches along the coast. Although the fog provides some respite for the plants in the summer, maritime chaparral is still a harsh environment that plants must adapt to in specialized ways. Small, thick, stiff leaves help plants hold and efficiently use the small amounts of water they receive. Plants here are also fire-adapted, as fire is integral to the ecology of this community. Some species are able to resprout from their bases after fire while others have seeds that germinate in response to the heat or smoke of fire. Examples of chaparral plants include manzanitas (Arctostaphylos spp.), ceanothus (Ceanothus spp.), coffeeberry (Frangula californica), huckleberry (Vaccinium ovatum), chaparral pea (Pickeringia montana), and sticky monkeyflower (Mimulus aurantiacus). Occasionally, you will find a knobcone pine (Pinus attenuata) or a small oak, too. Two good places to visit campus chaparral are on Chinquapin Rd. northwest of Red Hill Rd. and on Fuel Break Rd. between Red Hill and West roads"
          ],
          ib11:[
               "All those who visit UC Santa Cruz are familiar with this plant community, as coast redwoods (Sequoia sempervirens) are a dominant feature of the central and upper regions of campus. These towering, long-lived conifers can grow up to 120 m tall and 2200 years old in some parts of California, but only reach about 60 m and 100 years old on campus. They are restricted to the central and northern coast of California and a small part of the southern coast of Oregon. This is because redwoods exist where coastal fog exists, as it provides moisture for the trees in the otherwise too-dry summer months. The plant species that dwell in the forest understory need this moisture, too. However, the dark canopy and deep duff that the redwoods create limits what plants are able to grow in their company. Associated species you can observe growing on the forest floor are sword fern (Polystichum munitum), milkmaids (Cardamine californica), fetid adder's tongue (Scoliopus bigelovii), wake-robin (Trillium ovatum), redwood violet (Viola sempervirens), and redwood sorrel (Oxalis oregana). Some tree species, like Douglas-fir (Pseudotsuga menziesii) and tanoak (Notholithocarpus densiflorus) also dwell in the midst of the redwoods. Additionally, there are some stands of redwoods that are categorized as “dwarf redwoods” on the Vegetation Communities Map. These are not true dwarf forms, but are reduced in stature in terms of circumference and height. Stands of these smaller trees, which grow more densely than the other redwoods on campus, are found on the East Slope of the Campus Natural Reserve, as well as around the Trailer Park and North Remote parking lot. These trees are perhaps smaller because they grow on poor, sandy soils and/or in areas that were historically burned"
          ],
          ib12:[
               "Riparian zones on campus include those with standing water, streams, seeps, and springs. Some of this water is present year round and some is seasonal, greatly influencing what grows when and where. Riparian plant species require ample moisture, growing in or near the three main riparian corridors on campus: Cave Gulch, Moore Creek, and Jordan Gulch. The most common trees in this plant community are big leaf maple (Acer macrophyllum), willows (Salix spp.), and buckeye (Aesculus californica). Riparian zones on campus also support a number of fern species, like giant chain fern (Woodwardia fimbriata) and lady fern (Athyrium filix femina var. cyclosorum), as well as the grass-like sedges (Carex spp.) and rushes (Juncus spp.). Fewer herbaceous plants and shrubs dwell in these chronically wet environments, although elk clover (Aralia californica), western azalea (Rhododendron occidentale), and sneezeweed (Helenium puberulum) do thrive in these conditions"
          ],
          ib13:[
               "The UCSC Campus Natural Reserve covers 410 acres of protected natural lands on the UC Santa Cruz campus. This land was set aside as part of the UCSC Long Range Development Plan to preserve the natural communities for teaching, field research and natural history interpretation. These lands are an outdoor classroom and living library and laboratory. Students can literally walk outside their classrooms and dorms and study nature in nature."
          ],
     };
     for(var i = 1; i <= 13;i++){

          tempButton = $("#ib" + i);
          tempButton.addClass("transNotPressed");
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
               $(this).siblings("#ucscmapinfo").html(temptxt);
          });
     }
     $("#ib1").removeClass("transNotPressed");
     $("#ib1").addClass("transPressed");
     var temptxt = "";
     for(var o = 0; o < mapTexts["ib1"].length;o++){
           temptxt += mapTexts["ib1"][o];
     }
     $("#ucscmapinfo").html(temptxt);
}

//code for links (the animals and plants linked together at the bottom)
var linkCode = function(){
     var width = 295 + 50;
     var tabs = 3;
     var padding = 5;
     var animal_data =
     [
          {
               id: "CoastalRedwood",
               title: "Coastal Redwood",
               tabs:[
                    {
                         title: "Coastal Redwoods",
                         info:[
                              "height: up to 60 meters<br>",
                              "cone/flower size: 1.3-1.5 cm<br>",
                              "cone/flower description: spherical, woody cones with flat sets of alternating needles.<br>",
                              "bark/skin: dark redish brown, fibrous and overlapting itself downward.",
                              "facts: can be found in every country except Antartica, and they often use fog as their watersource.<br>",
                         ]
                    },
                    {
                         title: "Coastal Redwood Relationships",
                         info:[
                              "-Coastal Redwoods are related to coast redwood, giant sequoia, dawn redwood and alerce.<br>",
                              "-Mycorrhizal fungi form a mutualistic relationship with the redwoods and other plants in the forest. The fungi will combine their mycelium with the tree's roots, this makes it easier for the trees to get nutrients and moisture, while the fungi gains sugars from the trees.<br>",
                              "-Home of northern spotted owl"
                         ]
                    },
               ]
          },
          {
               id: "DouglasFir",
               title: "Douglas Fir",
               tabs:[
                    {
                         title: "Douglas Fir",
                         info:[
                              "height: up to 67 meters<br>",
                              "cone/flower size: 4-20cm<br>",
                              "cone/flower description: elongated conesoverlapping scalelike sections, short needles spiraling in all directions from twigs<br>",
                              "bark/skin:Greyborwn spit furrowed bark, younger bark is smooth<br>",
                              "facts: Grows 13 - 24 inches per year, and it is an evergreen tree.<br>",
                         ]
                    },
                    {
                         title: "Douglas Fir Relationships",
                         info:[
                              "-Squirrels, rabbits, and other small animals use seeds; deer, elk, and antelope eat twigs and foliage.<br>",
                              "-Douglas fir trees are aided by Paper Birch trees. Sugars flow between the two trees roots, with a 	bigger gain for the Douglas fir trees. An underground fungi called ectomycorrhizae, transfers this nutrience. The fungi benefits from this transaction as well by keeping a small amount of carbohydrates and vitamins from the tree, which increases the roots ability to absorb water. This increases water flow and essential nutrients.<br>",
                              "- also a home of northern spotted owl<br>"
                         ]
                    },
               ]
          },
          {
               id: "PacificMadrone",
               title: "Pacific Madrone",
               tabs:[
                    {
                         title: "Pacific Madrone",
                         info:[
                              "height: Up to 40 meters<br>",
                              "blooms: April, May<br>",
                              "cone/flower size: small<br>",
                              "cone/flower description:Rounded leaves on the thicker side, white hollow potlike flowers<br>",
                              "bark/skin:Paperlike peeling orange bark with yellow underneath<br>",
                              "facts:Pacific madrones are fire depend, meaning they depend on fires to clear areas for it to grow.<br>",
                         ]
                    },
                    {
                         title: "Pacific Madrone Relationships",
                         info:[
                              "-Mycorrhizal fungi form a mutualistic relationship with the redwoods and other plants(Pacific Madrone) in the forest. The fungi will combine their mycelium with the tree's roots, this makes it easier for the trees to get nutrients and moisture, while the fungi gains sugars from the trees.<br>",
                              "-Has berries that birds, deer, raccoons, and bears like to eat."
                         ]
                    }
               ]
         },
         {
              id: "CoastalLiveOak",
              title: "Coastal Live Oak",
              tabs:[
                   {
                        title: "Coastal Live Oak",
                        info:[
                             "height:10-25 meters <br>",
                             "blooms: Feb-April<br>",
                             "cone/flower size: very small<br>",
                             "cone/flower description:Pointed long acorns, rounded leaves with sharp points on the edges.<br>",
                             "bark/skin:Grey bark with rounded ridges, darker as it gets older<br>",
                             "facts: Their acorns die 15-50 days after falling.<br>",
                        ]
                   },
                   {
                        title: "Coastal Live Oak Relationships",
                        info:[
                             "-The Coast Live Oak provides food and habitat for many species of mammals and birds, including but not limited to acorn woodpeckers, scrub jays, the oak titmouse, squirrels, woodrats, turkey vultures and many more.<br>",
                             "-Drops acorns at different times to avoid consumption by squirrels<br>",
                             "-Leaf mulch helps repel slugs from soil<br>",
                        ]
                   }
              ]
        }


     ];
     var links = [];
     $(".link").each(function(i){
          links.push({body: $(this)});
     });
     for(var i = 0; i < links.length;i++){
          links[i].id = links[i].body.attr('id');
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
                    //console.log(tabData.info);
                    $(this).siblings(".linkp").html(temptxt);
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
          for(var y = 0; y < links[i].data.tabs[0].info.length;y++){
              temptxt += links[i].data.tabs[0].info[y];
          }
          links[i].p.html(temptxt);
          links[i].body.append(links[i].head);
          for(var o = 0; o < links[i].t.length;o++){
               links[i].body.append(links[i].t[o]);
          }
          links[i].body.append(links[i].p);
     }
}



dropDownCode();
mapCode();
linkCode();
//window.setInterval(function(){console.log($(document).scrollTop())}, 10);
