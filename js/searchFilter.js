/**
 * searchFilter.js
 * 
 * Functionality:
 *  As the user types into the search input, only photos that match the caption text appear.
 *  Case insensitivity has been added, searches will ignore letter case. 
 * 
 * Installation: 
 *  Add searchFilter.js into your js folder
 *  Add this line into your index.html <script src="js/searchFilter.js"></script>
 *   
 * Utilization:
 *  Ensure that your search input is setup like this in your index.html:
 *   <input type="search" name="search" id="search" placeholder="Search">
 *  Ensure that your image captions are added to your anchor elements via the data-caption attribute:
 *   <a href="photos/my-image.jpg" data-caption="A picture of me coding JavaScript on my computer">
 *  Add this into your app.js file:
 *   const search = new Filter('search', 'data-caption');
 */

 //Here is the function

function myFunction() {

  let titles = [
    "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
    "The lake was so calm today. We had a great view of the snow on the mountains from here.",
    "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
    "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
    "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    "Fall is coming, I love when the leaves on the trees start to change color.",
    "I drove past this plantation yesterday, everything is so green!",
    "My summer vacation to the Oregon Coast. I love the sandy dunes!", 
    "We enjoyed a quiet stroll down this countryside lane.",
    "Sunset at the coast! The sky turned a lovely shade of orange.",
    "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in." 
  ];

  //declare variable of input
var input = document.getElementById("search").value;
var photo = document.getElementsByClassName("photo");


//be sure it doesn't matter uppercase or lowercase
var letter = input.toLowerCase();

//loop that checks whether or not the letter exists in the string of the array. Then, ceases displaying the 
//images of the photos that do not contain the letters.

  for (let i = 0; i < titles.length; i++){
    if (titles[i].includes(letter.slice(-1)) === false){
    document.getElementById(i).style="display: none";
    }//end if

    if (letter.includes("hay") || letter.includes("bales") || letter.includes("straw") || letter.includes("fields")){

      for(let num = 0; num < titles.length; num++){
      document.getElementById(num).style="display: none";
      document.getElementById("0").style="display: block";
      }//end for
      }//end if

      if (letter.includes("lake") || letter.includes("calm")){

        for(let num = 0; num < titles.length; num++){
        document.getElementById(num).style="display: none";
        document.getElementById("1").style="display: block";
        }//end for
        }//end if

        if (letter.includes("hiked") || letter.includes("picture")){

          for(let num = 0; num < titles.length; num++){
          document.getElementById(num).style="display: none";
          document.getElementById("2").style="display: block";
          }//end for
          }//end if

          if (letter.includes("ice") || letter.includes("amazing") || letter.includes("close")  || letter.includes("cold")){

            for(let num = 0; num < titles.length; num++){
            document.getElementById(num).style="display: none";
            document.getElementById("3").style="display: block";
            }//end for
            }//end if

            if (letter.includes("cliffs") || letter.includes("hot") || letter.includes("desert") || letter.includes("red")){

              for(let num = 0; num < titles.length; num++){
              document.getElementById(num).style="display: none";
              document.getElementById("4").style="display: block";
              }//end for
              }//end if

              if (letter.includes("fall") || letter.includes("coming") || letter.includes("change") || letter.includes("color")){

                for(let num = 0; num < titles.length; num++){
                document.getElementById(num).style="display: none";
                document.getElementById("5").style="display: block";
                }//end for
                }//end if

                if (letter.includes("drove") || letter.includes("plantation") || letter.includes("everything")){

                  for(let num = 0; num < titles.length; num++){
                  document.getElementById(num).style="display: none";
                  document.getElementById("6").style="display: block";
                  }//end for
                  }//end if

                  if (letter.includes("summer") || letter.includes("oregon") || letter.includes("dunes") || letter.includes("sandy")){

                    for(let num = 0; num < titles.length; num++){
                    document.getElementById(num).style="display: none";
                    document.getElementById("7").style="display: block";
                    }//end for
                    }//end if

                    if (letter.includes("stroll") || letter.includes("countryside") || letter.includes("lane") || letter.includes("quiet")){

                      for(let num = 0; num < titles.length; num++){
                      document.getElementById(num).style="display: none";
                      document.getElementById("8").style="display: block";
                      }//end for
                      }//end if

                      if (letter.includes("sunset") || letter.includes("lovely") || letter.includes("orange") || letter.includes("shade")){

                        for(let num = 0; num < titles.length; num++){
                        document.getElementById(num).style="display: none";
                        document.getElementById("9").style="display: block";
                        }//end for
                        }//end if

                        if (letter.includes("tour") || letter.includes("cave") || letter.includes("breathtaking")  || letter.includes("landscape")){

                          for(let num = 0; num < titles.length; num++){
                          document.getElementById(num).style="display: none";
                          document.getElementById("10").style="display: block";
                          }//end for
                          }//end if

                          if (letter.includes("bluebells") || letter.includes("meadow") || letter.includes("fog")){

                            for(let num = 0; num < titles.length; num++){
                            document.getElementById(num).style="display: none";
                            document.getElementById("11").style="display: block";
                            }//end for
                            }//end if

    }//end outer for
  }// end function
