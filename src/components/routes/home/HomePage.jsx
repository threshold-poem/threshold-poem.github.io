import React from 'react';
import Button from '../../ui/Button/Button';

export default function HomePage() {
  function doScrolling(elementY, duration) { 
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;
  
    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      // Elapsed milliseconds since start of scrolling.
      var time = timestamp - start;
      // Get percent of completion in range [0, 1].
      var percent = Math.min(time / duration, 1);
  
      window.scrollTo(0, startingY + diff * percent);
  
      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    })
  } 
  function showID(id) {
    console.log("TEST")
      var x = document.getElementById(id);
      if (x.hidden === true) {
        x.hidden = false;
      } else {
        x.hidden = true;
      }
      doScrolling(x.offsetTop, 500)
  }
  return (
    <div>
      <h1 style={{ fontSize: 30, fontWeigth: 'bold', textAlign: 'center' }}>
        THRESHOLD - Ryan Cook
      </h1>
      <body style={{fontSize: 12, textAlign: 'center'}}>
        <pre>
        ````````````...........,,,,,,,,.,,,,,,<br />
        `````````.......... ....,,,,,,,,,,,,,,<br />
        ````````. ....  .  .    ..,,,,,,,,,,,,<br />
        ```````.`. .. . . .  . .  , ,,,,,,,,,,<br />
        ````````..` . .  .   . . . .  ,,,,,,,,<br />
        ```````.  . . .+++,  ,+. . . . .,,,,,,<br />
        `````.  . . .++++.%  %++++. . . .,,,,,<br />
        ````.  . . .++++.%'  `%+++++. . . ,,,,<br />
        ````  . . .++d8+%'..  `%\++++. . . ,,,<br />
        ```.  . . .++H+%' ... `%A+++++.'. .,,,<br />
        ``.  . . .+++H8%'.A%%. %|Hb++++.'.  .,<br />
        ` .  . . .+++"%;.%<Button onClick={() => {
                        showID("pf");
                      }}id="c">*</Button>%%%.%|8Hb++.'.'.  .<br />
        ` .  . . .+++,'%% :.`%%;;.Nb+.'.'.  .,<br />
        `.  . . .++,'%%'..| ..`%%:F++.'.'.  .,<br />
        `.  . . .,'%%'..  A   ..`%%:+.'.'.  .,<br />
        ``.  . ..:%'..    H     ..`:+.'. .  .,<br />
        ``.  . ..:'.      H        :+.'. .  .,<br />
        ``.  . ..+:      :H.      :++. . .  .,<br />
        ``.  . ..++:     :H:     :+++. . .  .,<br />
        ``.  . ..+++:    :H:    :+++. . .  .,,<br />
        ``.  . ..++++:. .dHb . :+++. . .  . .,<br />
        ``.  . ..++++A . HHH . A+++. . .  . ,,<br />
        `. .  . .++++H...HHH...H++++. .  .  .,<br />
        . . . ....+++H...H8H .dHb+++. .  .  ,,<br />
        ` . . ....++dHb.d888b.HHH+++. .  .  .<br />
        ,.  . ....++HHH."H8HP..HH+++. .  .  ``<br />
        ,. . .....++8HF.."HF...HF+++. .  .  .`<br />
        ,  . . ...++"Hb...|...qF+++. .  .  .``<br />
        ,. . .  ...++"8HboAod"++++. .  .  .```<br />
        ,,. .  . ...... . . . . . . . .   .```<br />
        ,,,.  .  . ...... . . . .  .  .  .````<br />
        ,,,, .  .  . ... . . .  .  .  . .`````<br />
        ,,,, .  .  .  . .......  .  .`````````<br />
        ,,,,,,.  .  .  ...++..... .   .```````<br />
        ,,,,,,, .  .  ...++++...krogg98.``````<br />

        </pre>
      </body>
      <div hidden id="pf" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h1>PREFACE</h1>
        <h2>1</h2>
        <h4>Palimpsest; /ˈpaləm(p)ˌsest/; 01010000 01100001 01101100 01101001 01101101 01110000 01110011 01100101 01110011 01110100; writing material (such as a parchment or tablet) used one or more times after earlier writing has been erased. The erasing process wasn't completely </h4>
        <h4 style={{textAlign: 'left', paddingLeft:'25%'}}>
          <pre>
          <div style={{paddingLeft:'15%'}}>Effective</div>
so the original <br />
could often be<br />
      <div style={{paddingLeft:'15%'}}>distinguished</div>
under the newer writing.<br />
(https://www.merriam-webster.com/dictionary/palimpsest)<br />
          </pre>
        </h4>
        <body>I am starting to believe that poems become palimpcests for identity. </body>
      </div>
    </div>
  );
}
