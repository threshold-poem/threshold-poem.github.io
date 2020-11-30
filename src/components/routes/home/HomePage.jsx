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
  function convertBinary() {
    var x = document.getElementById("title")
    doScrolling(x.offsetTop, 500);
    var elems = document.getElementsByClassName("convert");
    console.log("ELEMS: " + elems[0].textContent);
    for(let i = 0; i < elems.length; i++) {
      setTimeout(() => {
        var string = elems[i].textContent;
        elems[i].style="color: #20C20E";
        var output = string.split('').map(function (char) {
          return char.charCodeAt(0).toString(2);
          }).join(' ');
        elems[i].textContent = output;}
        , 1000);
    } 
    var elems2 = document.getElementsByClassName("oldBinary");
    for(let i = 0; i < elems2.length; i++) {
      elems2[i].style="color: #20C20E";
    }
  }

  function showID(id) { 
      var x = document.getElementById(id);
      if (x.hidden === true) {
        x.hidden = false;
      }
      doScrolling(x.offsetTop, 500)
  }
  return (
    <div id="mainDiv" className="main">
      <h1 style={{ fontSize: 30, fontWeigth: 'bold', textAlign: 'center' }}>
        <span id="title" className="convert" >THRES</span>HOLD - <span className="convert" >Ryan Cook</span>
      </h1>
      <body style={{fontSize: 12, textAlign: 'center'}}>
        <pre style = {{fontSize: 11.5, fontFamily: 'Arial'}}>
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
        ` .  . . .+++"%;.%%<Button onClick={() => {
                        showID("pf");
                      }}id="c">*</Button>%%.%|8Hb++.'.'.  .<br />
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
        ,,,,,,, .  .  ...++++...........``````<br />

        </pre>
      </body>
      <div hidden id="pf" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h1><span className="convert" >PRE</span>FACE</h1>
        <h2>1</h2>
        <h4>Palimpsest; /ˈpaləm(p)ˌsest/; <span className="oldBinary" >01010000 01100001 01101100 01101001 01101101 01110000 01110011 01100101 01110011 01110100;</span> <span className="convert" >writing material (such as a </span>parch<span className="convert" >ment or tablet) </span>us<span className="convert" >ed one or more </span>time<span className="convert" >s after earlier writing has been </span>erased<span className="convert" >. The erasing process wasn't </span>co<span className="convert" >mpletely</span> </h4>
        <h4 style={{textAlign: 'left', paddingLeft:'25%'}}>
          <pre>
          <div style={{paddingLeft:'15%'}}><span className="convert" >Effect</span>ive</div>
          <span className="convert" >so the </span>original <br />
could <span className="convert" >often be</span><br />
      <div style={{paddingLeft:'15%'}}><span className="convert" >distingui</span>shed</div>
under <span className="convert" >the newer </span>writing.<br />
<span className="convert" >(https://www.merr</span>iam<span className="convert" >-</span>web<span className="convert" >ster.com/dic</span>t<span className="convert" >ion</span>ar<span className="convert" >y</span>/p<span className="convert" >alimpsest)</span><br />
          </pre>
        </h4>
        <body><span className="convert" >I am s</span>tart<span className="convert" >ing </span>to<span className="convert" > believe that </span>poem<span className="convert" >s be</span>come<span className="convert" > palimpcests for</span></body>
        <Button onClick={() => {
                        showID("2");
                      }}id="c">identity.</Button>
        <h4>Palimpcest-/ˈpaləm(p)ˌcest/; <span className="oldBinary" >01110000 01100001 01101100 01101001 01101101 01110000 01100011 01100101 01110011 01110100</span> ; othering the ecosystem within an arranged work to further explore the genetic code within language. Not quite erasure is necessary, merely focusing through translation.</h4>
      </div>
      

      <div hidden id="2" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>2</h2>
        <h4><span className="convert" >Computer</span> save <span className="convert" >files rewrite the d</span>raft complete<span className="convert" >ly- </span>yet <span className="convert" >ce</span>r<span className="convert" >t</span>ain <span className="convert" >pro</span>grams <span className="convert" >(IE Google </span>Doc<span className="convert" >s) t</span>end to <span className="convert" >allow you to re</span>view <span className="convert" >and </span>comb <span className="convert" >th</span>rough the <span className="convert" >previous </span>iterations <span className="convert" >of the draft; a sort of en</span>tropic <Button onClick={() => {
                        showID("3");
                      }}id="c">haunting</Button>; past <span className="convert" >mistakes and words </span>live <span className="convert" >in this purgatory- a </span>digital <span className="convert" >under</span>world. </h4>
                 
      </div>
      <div hidden id="3" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>3</h2>
        <h4>In the <span className="convert" >myth the </span>Decent of Ishtar<span className="convert" >/Inanna, The </span>goddess <span className="convert" >of [Love, Fertility, War,] </span>goes to <span className="convert" >rescue </span>her <span className="convert" >dead</span> husband <span className="convert" >in the underworld; </span>she passes <span className="convert" >through seven gates to get there; each gate she has to give up part of </span>her powers <span className="convert" >in the form </span>of her clothing. <span className="convert" >Once there </span>Erishkigal<span className="convert" >, The goddess of the underworld un</span>leashes <span className="convert" >60 diseases on </span>her and traps Ishtar <span className="convert" >in her palace. The world above </span>need<span className="convert" >ed Ishtar </span>to <span className="convert" >pro</span>create, and <span className="convert" >therefore </span>no <span className="convert" >animal or human is </span>fucking<span className="convert" >; Enki/</span>Ea <span className="convert" >the </span>main god <span className="convert" >of the ocean as </span>well <span className="convert" >as knowl</span>edge<span className="convert" >, s</span>ends <span className="convert" >t</span>his <span className="convert" >“figure” A</span>s<span className="convert" >u</span>hun<span className="convert" >amir to  <Button onClick={() => {
                        showID("4");
                      }}id="c">rescue</Button> </span>Ishtar<span className="convert" > and restore horny balance to the world.</span></h4>
      </div>

      <div hidden id="4" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>4</h2>
        <i><span className="convert" >“In an ancient Babylonian </span>myth, As<span className="convert" >ushunamir w</span>as <span className="convert" >both </span>male <span className="convert" >and </span> female,<span className="convert" > created from the </span>dirt <span className="convert" >under the finger</span>nails <span className="convert" >of </span>Ea<span className="convert" >, the Wise.</span> Asushunamir<span className="convert" > travels to t</span>he <span className="convert" >L</span>and <span className="convert" >of</span> No <span className="convert" >Re</span>turn <span className="convert" >and</span> steals <span className="convert" >the Water of Life from </span>Ereshkigal, Queen <span className="convert" >of the </span>Dead, <span className="convert" >in order </span>to rescue Ishtar, Queen <span className="convert" >of </span>Heaven -- <span className="convert" >whose return to the </span>living marks spring <span className="convert" >and the return of </span>life to <span className="convert" >the </span>world. After <span className="convert" >seducing</span> Ereshkigal, Asushunamir <span className="convert" >was subsequently cursed by </span>her <span className="convert" >(to be </span>strange<span className="convert" >r in your </span>own <span className="convert" >home) </span>and <span className="convert" >blessed by </span>Ishtar <span className="convert" >(with prophecy, wis</span>dom, heal<span className="convert" >ing).”</span></i>

        <p><span className="convert" >-http://www.angelfire.com/on/o</span>the<span className="convert" >r</span>wise/asushuna.html</p>
        <br />
        <h4>Asushunamir is <span className="convert" >sometimes thought of as </span>two gender<span className="convert" >less beings <br />
          Some</span>time<span className="convert" >s a eunuch or boy</span> castrated in an act of devotion <br />
          <span className="convert" >Some</span>time<span className="convert" >s a being</span> of light or clay.<br />
          <br />
          Time fumbles <span className="convert" >and shifts with iden</span>tity<span className="convert" >- the tr</span>icky<span className="convert" > mi</span>stress/<span className="convert" >mister, </span>boy/<span className="convert" >girl, why can’t </span>thin<span className="convert" >gs just be </span><Button onClick={() => {
                        showID("6");
                      }}id="c">binary</Button>?<span className="convert" > Why can’t they have one answer, one title?</span>
        </h4>
      </div>

      <div hidden id="6" style={{textAlign: 'left',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>6</h2>
        <i><span className="convert" >“The </span>mode<span className="convert" >rn binary number </span>system<span className="convert" > goes back to Gottfried Leibniz who in the </span>17th century<span className="convert" > pro</span>posed <span className="convert" >and </span>develop<span className="convert" >ed it in his </span>article Exp<span className="convert" >lication de l'Arithmétique </span>Bin<span className="convert" >aire.  Leibniz in</span>vented the system <span className="convert" >around </span>1679 <span className="convert" >but he published it in 1703. </span>He <span className="convert" >already used </span>symbols <span className="convert" >0 and 1’s. . Simon Marquis de La</span>place wrote <span className="convert" >of this </span>creation <span className="convert" >saying : Laibnitz </span>saw <span className="convert" >in his </span>binary <span className="convert" >arithmetic the image of</span> Creation ... . <span className="convert" >He imaginated that Unity represents </span>God,<span className="convert" > and Zero the Void, that the Supreme</span> Being<span className="convert" > drew</span> all beings <span className="convert" >from the void, just as unity and zero express all numbers in his sy</span>stem of <span className="convert" >numeration.”</span></i>
        <p><span className="convert" >-https://www.cs.cas.cz</span>/portal/<span className="convert" >AlgoMath/Number</span>Theory<span className="convert" >/Arithmetics/NumeralSy</span>stems<span className="convert" >/PositionalNumeralSystems/</span>Binary<span className="convert" >System.htm#:~:text=The%20modern%20binary%20number%20system,used%20symbols%200%20and%201.</span></p>
        <h4>The only problem is <span className="convert" >Leibiz never invented</span> a two number mathematical system, <span className="convert" >both Egypt and China were using it long before he was even an idea in his mother’s 01110111 01101111 01101101 01100010 </span></h4>
       <pre style = {{fontSize: 11.5, fontFamily: 'Arial'}}>
        ………………………………………._¸„„„„_ <Button onClick={() => {
                        showID("7");
                      }}id="c">.</Button><br />
        …………………….…………...„--~*'¯…….'\<br />
        ………….…………………… („-~~--„¸_….,/ì'Ì<br />
        …….…………………….¸„-^"¯ : : : : :¸-¯"¯/'<br />
        …………………<br />
        .:.:.:.:.„-^" : : : : : : : : : : : : : : : : :„-"<br />
        :.:.:.:.:.:.:.:.:.:.: : : : : : : : : : ¸„-^¯<br />
        .::.:.:.:.:.:.:.:. : : : : : : : ¸„„-^¯<br />
        :.' : : '\ : : : : : : : ;¸„„-~"<br />
        :.:.:: :"-„""***/*'ì¸'¯<br />
        :.': : : : :"-„ : : :"\<br />
        .:.:.: : : : :" : : : : \,<br />
        :.: : : : : : : : : : : : 'Ì<br />
        : : : : : : :, : : : : : :/<br />
        "-„_::::_„-*__„„<br />
        <br />
       </pre>
       </div>

       <div hidden id="7" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>7</h2>
        <h3>Asuhunamir; a modern <a href="https://www.rapidtables.com/convert/number/ascii-to-binary.html">Palemcest</a></h3>

        <div style={{fontSize: 12, fontFamily: 'Arial', textAlign: "left"}}>
          <p><span >Gate I.</span></p>
          <p><span ><span className="convert" >born to </span>dissent&nbsp;</span></p>
          <p><span ><span className="convert" >Lovely wine-stained picnic</span> interrupted&mdash;</span></p>
          <p><span >Gender <span className="convert" >revealed in a mouth of</span> ash</span></p>
          <p><span >It&rsquo;s a <span className="oldBinary" >01100010 01101111 01111001 00100000 00001010</span> <span className="convert" >\(That will be 759 plus tax)</span></span></p>
          <p>&nbsp;</p>
          <p><span >Gate II</span></p>
          <p><span >No,&nbsp;</span></p>
          <p><span >I <span className="oldBinary" >01100011 01100001 01101110 01101110 01101111 01110100&nbsp; 00100000 00001010</span></span></p>
          <p>&nbsp;</p>
          <p><span >think <span className="convert" >about it</span> now, I <span className="convert" >have to</span> keep going.</span></p>
          <p><br /><br /></p>
          <p><span >Gate III.</span></p>
          <p>&nbsp;</p>
          <p><span >&nbsp;<span className="convert" >I </span>seduce<span className="convert" >d</span> with the space<span className="convert" >s between.</span></span></p>
          <p><span >&nbsp;&nbsp;<span className="oldBinary" >01101000 01100001 01101110 01100100</span> makes me feel<span className="oldBinary" > 01101000 01100001 01110010 01100100&nbsp; 00100000 00001010</span> when you touch&nbsp; <span className="oldBinary" >01101101 01111001 00100000 01101110 01100101 01100011 01101011 00100000 00001010</span>&nbsp; .</span></p>
          <p><br /><br /></p>
          <p><span >I cannot <span className="convert" >tell if</span> <span className="oldBinary" >01110011 01101000 01100101</span> <span className="convert" >liked</span> me <span className="convert" >or how </span>much <span className="convert" >she could</span> <span className="oldBinary" >01100011 01100001 01100111 01100101 00001010 00001010 </span><span className="convert" >into me.Digging</span> up clay<span className="convert" > and</span> hair<span className="convert" > and </span>lead. Filling <span className="convert" >my</span></span></p>
          <p><span >&nbsp;01100010 01101111 01100100 01111001 00001010 00001010 00001010 00001010 00001010</span></p>
          <p><span >&nbsp;<span className="convert" >up as</span> she<span className="convert" > would the </span>flask<span className="convert" > that brings you back.</span>&nbsp;</span></p>
          <p>&nbsp;</p>
          <p><span >Gate IV</span></p>
          <p><span >I imagine <span className="convert" >the water of</span> life</span></p>
          <p><span >Taste<span className="convert" >s a lot like cheap gin.</span>&nbsp;</span></p>
          <p><br /><br /><br /><br /></p>
          <p><span >Gate V</span></p>
          <p><span >I do not know <span className="convert" >why</span> you<span className="convert" > got trapped for</span>&nbsp; <span className="oldBinary" >00001010&nbsp; 01101000 01101001 01101101,</span><span className="convert" > The dawn doesn&rsquo;t </span>debate the ethics<span className="convert" > of breaking.</span></span></p>
          <p><br /><br /></p>
          <p><span ><span className="convert" >Get your clothes</span> back on.</span></p>
          <p><br /><br /><br /><br /></p>
          <p><span >Gate VI</span></p>
          <p><span >&nbsp;Erishkegal<span className="convert" > said:</span>&nbsp;</span></p>
          <p>&nbsp;</p>
          <p><span ><span className="oldBinary" >00100000 00100000 01111001 01101111 01110101 00001010 00100000 01110111 01101001 01101100 01101100 00100000</span></span><strong><em>The</em></strong> <span >&nbsp;<span className="oldBinary" >00001010 01100001 01101100 01110111 01100001 01111001 01110011 00001010 00100000 01100010 01100101 00001010 </span></span><strong><em>sweepings</em></strong><span > <span className="oldBinary" >00100000 01100001 00100000 01100111 01110101 01111001 00100000 00001010 01101001 01101110 00100000 01100001</span> </span><strong><em>of the</em></strong> <span >&nbsp;<span className="oldBinary" >00100000</span></span></p>
          <p><span >&nbsp;<span className="oldBinary" >01100100 01110010 </span> <span >01100101 01110011 01110011 00101100 00100000 </span></span><strong><em>gutter</em></strong> <span ><span className="oldBinary" >00001010 01111001 01101111 01110101 00001010 00100000 01110011 01101001 01101100 01101100 01111001&nbsp; </span></span><strong><em>of the </em></strong><span ><span className="oldBinary" >00001010 00100000 01101100 01101001 01110100 01110100 01101100 01100101 00001010 00100000 01100110 01100001 01100111 01100111 01101111</span>&nbsp;</span></p>
          <p><span ><span className="oldBinary" >01110100 00001010 00100000 01110100 01110010 01111001 </span></span><strong><em>city</em></strong><span > <span className="oldBinary" >01101001 01101110 01100111 00100000 00001010</span></span> <span ><span className="oldBinary" > 01110100 01101111 00100000 01110100 01110010 01101001 01100011&nbsp; </span></span><strong><em>be thy</em></strong> <span ><span className="oldBinary" >01101011 00100000 01101101 01100101 00101100 00001010 00100000 01001001 00100000 01101000 01101111 01110000 01100101 00001010 00100000 01111001 01101111 01110101 00001010 00100000 01100100 01101001 01100101 00100000</span></span> <span > <span className="oldBinary" >00001010 01110011 01101100 01101111</span> </span> <span ><span className="oldBinary" >01110111 01101100 01111001 00101110 00001010 00100000 01011001 01101111 01110101 00001010 00100000 01100010 01100101</span> </span><strong><em>food</em></strong><span ><span className="oldBinary" > 01110100 01110100 01100101 01110010 00001010 00100000 01101110 01101111 01110100 00001010 00100000 01100011 01101111 01101101 01100101 00001010 00100000 01100010 01100001 01100011 01101011 00001010 00100000 01101000 01100101 01110010 01100101 00100000 00001010 00100000 01100001 01100111 01100001 01101001 01101110 00001010 00100000 01110111 01101001 01110100 01101000 00100000 00001010 01110100 01101000 01100001 01110100 00100000 00001010 01110011 01101000 01101001 01110100 00101110 00100000</span></span></p>
          <p><em><span >&ldquo;<span className="convert" >The sweepings of the gutter of the city be thy food.</span></span></em></p>
          <p><em><span >&nbsp;<span className="convert" >The drains of the city be thy drink. The shadow of the wall be thy abode&rdquo;</span></span></em></p>
          <p><em><span ><span className="oldBinary" >01111001 </span></span></em><strong><em>The</em></strong><em><span > <span className="oldBinary" >01101111 01110101 00001010 00100000 01100001 01110010 01100101 01101110 00100111 01110100 00001010 00100000 </span></span></em> <em><span ><span className="oldBinary" >01100101 01110110</span> </span></em><strong><em>drains</em></strong><em><span ><span className="oldBinary" > 01100101 01101110 00001010 00100000 01100001 00100000</span>&nbsp; </span></em><strong><em>of the</em></strong><em><span > <span className="oldBinary" >00001010 01110010 01100101 01100001 01101100 00001010 00100000 01100111 01101001 01110010</span> </span></em><strong><em>city</em></strong><em><span ><span className="oldBinary" > 01101100 00101100 00001010 00001010 01111001 01101111 01110101 00100000 00001010 01100110 01100001</span> </span></em><strong><em>be thy</em></strong><em><span >&nbsp; <span className="oldBinary" >01101011 01100101 00001010 01111001</span> </span></em><strong><em>drink</em></strong><em><span ><span className="oldBinary" > 01101111 01110101 01110010 000010</span></span></em> <em><span ><span className="oldBinary" >10 01101100</span>&nbsp; </span></em><strong><em>The</em></strong><em><span ><span className="oldBinary" > 01101111 01101111 01101011 01110011</span> </span></em> <em><span ><span className="oldBinary" >00001010 01110100 01101111 00001010 01100111 01100101</span>&nbsp; </span></em><strong><em>shadow</em></strong><em><span ><span className="oldBinary" > 01110100 00001010 01100001 01110100 01110100 01100101 01101110 01110100 01101001 01101111 01101110</span>&nbsp; </span></em><strong><em>of the</em></strong><em><span ><span className="oldBinary" > 00101110 00001010</span> </span></em><strong><em>wall</em></strong><em><span > <span className="oldBinary" >01000001 00001010 01110000 01101111 01110011 01100101 01110010 00001010 01100001 00001010 01110100</span>&nbsp; </span></em><strong><em>be thy</em></strong><em><span ><span className="oldBinary" > 01110010 01100101 01101110 01100100 01100101</span></span></em> <em><span > <span className="oldBinary" >01110010 00001010 </span></span></em><strong><em>abode</em></strong><em><span ><span className="oldBinary" > 01100111 01101111 00001010 01100100 01101001 01100101 00100000 00001010 01100001 01101100 01101111 01101110 01100101 00101110</span></span></em></p>
          <p><br /><br /></p>
          <p><span ><span className="convert" >What </span>did she mean <span className="convert" >by</span> that?</span></p>

          <p><span >Gate VII</span></p>
          <p><br /><br /></p>
          <span className="oldBinary" >
            <p><span >01001001 00100000</span></p>
            <p>&nbsp;</p>
            <p><span  >01100001</span></p>
            <p><span  >&nbsp;01101101 00001010 00001010</span></p>
            <p><span  >&nbsp;00001010</span></p>
            <p><span  >01001001 00100000 01100001</span></p>
            <p><span  >&nbsp;01101101 00001010 00001010 00001010</span></p>
            <p><span  >01001001</span> <span  > 00100000</span> <span  > 01100001 01101101 </span></p>
            <p><span  >00001010 </span> <span  >00001010</span></p>
            <p><span  >&nbsp;00001010</span></p>
            <p>&nbsp;</p>
            <p><span  >01100111 01101001 01110110 01101001</span></p>
            <p><span  >&nbsp;01101110 01100111 00100000&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><span  >01110101 01110000</span></p>
            <p>&nbsp;</p>
            <p><span  >&nbsp;00100000&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><span  >01101101 01111001 00100000 01101100 01101001&nbsp;</span></p>
            <p><br /><br /><br /></p>
            <p><span  >01100110 01100101 00100000 01101100&nbsp;</span></p>
            <p><br /><br /><br /><br /></p>
            <p><span  >01101001 01101011</span></p>
            <p><span  >&nbsp;01100101 00100000</span></p>
            <p><span  >&nbsp;01100001 00100000 01101100</span></p>
            <p>&nbsp;</p>
            <p><span  >&nbsp;01100101 01100001&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><span  >01100110 00100000 01100011 </span> <span  >01101000 01101111 01101111&nbsp;</span></p>
            <p><br /><br /></p>
            <p><span  >01110011 01100101 01110011 00100000</span></p>
            <p><span  >&nbsp;01110100 01101111</span></p>
            <p><span  >&nbsp;00100000 01110010 01101111&nbsp;</span></p>
            <p><br /><br /><br /><br /></p>
            <p><span  >01110100</span></p>
          </span>
<p>&nbsp;</p>
          </div>
          <Button id="gateButton" onClick={() => {convertBinary();}}>
            GATE
          </Button>

          

       </div>

    </div>
  );
}
