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
      }
      doScrolling(x.offsetTop, 500)
  }
  return (
    <div className="main">
      <h1 style={{ fontSize: 30, fontWeigth: 'bold', textAlign: 'center' }}>
        THRESHOLD - Ryan Cook
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
        <body>I am starting to believe that poems become palimpcests for</body>
        <Button onClick={() => {
                        showID("2");
                      }}id="c">identity.</Button>
      </div>
      

      <div hidden id="2" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>2</h2>
        <h4>Computer save files rewrite the draft completely- yet certain programs (IE Google Docs) tend to allow you to review and comb through the previous iterations of the draft; a sort of entropic <Button onClick={() => {
                        showID("3");
                      }}id="c">haunting</Button>; past mistakes and words live in this purgatory- a digital underworld. </h4>
                 
      </div>
      <div hidden id="3" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>3</h2>
        <h4>In the myth the Decent of Ishtar/Inanna, The goddess of [Love, Fertility, War,] goes to rescue her dead husband in the underworld; she passes through seven gates to get there; each gate she has to give up part of her powers in the form of her clothing. Once there Erishkigal, The goddess of the underworld unleashes 60 diseases on her and traps Ishtar in her palace. The world above needed Ishtar to procreate, and therefore no animal or human is <Button onClick={() => {
                        showID("4");
                      }}id="c">fucking</Button>; Enki/Ea the main god of the ocean as well as knowledge, sends this “figure” Asuhunamir to rescue Ishtar and restore horny balance to the world.</h4>
      </div>

      <div hidden id="4" style={{textAlign: 'center',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>4</h2>
        <i>“In an ancient Babylonian myth, Asushunamir was both male and female, created from the dirt under the fingernails of Ea, the Wise. Asushunamir travels to the Land of No Return and steals the Water of Life from Ereshkigal, Queen of the Dead, in order to rescue Ishtar, Queen of Heaven -- whose return to the living marks spring and the return of life to the world. After seducing Ereshkigal, Asushunamir was subsequently cursed by her (to be stranger in your own home) and blessed by Ishtar (with prophecy, wisdom, healing).”</i>

        <p>-http://www.angelfire.com/on/otherwise/asushuna.html</p>
        <br />
        <h4>Asushunamir is sometimes thought of as two genderless beings <br />
          Sometimes a eunuch or boy castrated in an act of devotion <br />
          Sometimes a being of light or clay.<br />
          <br />
          Time fumbles and shifts with identity- the tricky mistress/mister, boy/girl, why can’t things just be <Button onClick={() => {
                        showID("6");
                      }}id="c">binary</Button>? Why can’t they have one answer, one title?
        </h4>
      </div>

      <div hidden id="6" style={{textAlign: 'left',paddingLeft:'25%', paddingRight: '25%'}}>
        <h2>6</h2>
        <i>“The modern binary number system goes back to Gottfried Leibniz who in the 17th century proposed and developed it in his article Explication de l'Arithmétique Binaire.  Leibniz invented the system around 1679 but he published it in 1703. He already used symbols 0 and 1’s. . Simon Marquis de Laplace wrote of this creation saying : Laibnitz saw in his binary arithmetic the image of Creation ... . He imaginated that Unity represents God, and Zero the Void, that the Supreme Being drew all beings from the void, just as unity and zero express all numbers in his system of numeration.”</i>
        <p>-https://www.cs.cas.cz/portal/AlgoMath/NumberTheory/Arithmetics/NumeralSystems/PositionalNumeralSystems/BinarySystem.htm#:~:text=The%20modern%20binary%20number%20system,used%20symbols%200%20and%201.</p>
        <h4>The only problem is Leibiz never invented a two number mathematical system, both Egypt and China were using it long before he was even an idea in his mother’s 01110111 01101111 01101101 01100010 </h4>
       <pre style = {{fontSize: 11.5, fontFamily: 'Arial'}}>
        ………………………………………._¸„„„„_ <Button onClick={() => {
                        showID("7");
                      }}id="c">.</Button><br />
        …………………….…………...„--~*'¯…….'\<br />
        ………….…………………… („-~~--„¸_….,/ì'Ì<br />
        …….…………………….¸„-^"¯ : : : : :¸-¯"¯/'<br />
        …………………<br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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

        <div style={{fontSize: 12, fontFamily: 'Arial'}}>
          <p><span >Gate I.</span></p>
          <p><span >born to dissent&nbsp;</span></p>
          <p><span >Lovely wine-stained picnic interrupted&mdash;</span></p>
          <p><span >Gender revealed in a mouth of ash</span></p>
          <p><span >It&rsquo;s a 01100010 01101111 01111001 00100000 00001010 (That will be 759 plus tax)</span></p>
          <p>&nbsp;</p>
          <p><span >Gate II</span></p>
          <p><span >No,&nbsp;</span></p>
          <p><span >I 01100011 01100001 01101110 01101110 01101111 01110100&nbsp; 00100000 00001010</span></p>
          <p>&nbsp;</p>
          <p><span >think about it now, I have to keep going.</span></p>
          <p><br /><br /></p>
          <p><span >Gate III.</span></p>
          <p>&nbsp;</p>
          <p><span >&nbsp;I seduced with the spaces between.</span></p>
          <p><span >&nbsp;&nbsp;01101000 01100001 01101110 01100100 makes me feel 01101000 01100001 01110010 01100100&nbsp; 00100000 00001010 when you touch&nbsp; 01101101 01111001 00100000 01101110 01100101 01100011 01101011 00100000 00001010&nbsp; .</span></p>
          <p><br /><br /></p>
          <p><span >I cannot tell if 01110011 01101000 01100101 liked me or how much she could 01100011 01100001 01100111 01100101 00001010 00001010 into me.Digging up clay and hair and lead. Filling my</span></p>
          <p><span >&nbsp;01100010 01101111 01100100 01111001 00001010 00001010 00001010 00001010 00001010</span></p>
          <p><span >&nbsp;up as she would the flask that brings you back.&nbsp;</span></p>
          <p>&nbsp;</p>
          <p><span >Gate IV</span></p>
          <p><span >I imagine the water of life</span></p>
          <p><span >Tastes a lot like cheap gin.&nbsp;</span></p>
          <p><br /><br /><br /><br /></p>
          <p><span >Gate V</span></p>
          <p><span >I do not know why you got trapped for&nbsp; 00001010&nbsp; 01101000 01101001 01101101, The dawn doesn&rsquo;t debate the ethics of breaking.</span></p>
          <p><br /><br /></p>
          <p><span >Get your clothes back on.</span></p>
          <p><br /><br /><br /><br /></p>
          <p><span >Gate VI</span></p>
          <p><span >&nbsp;Erishkegal said:&nbsp;</span></p>
          <p>&nbsp;</p>
          <p><span >00100000 00100000 01111001 01101111 01110101 00001010 00100000 01110111 01101001 01101100 01101100 00100000 </span><strong><em>The</em></strong> <span >&nbsp;00001010 01100001 01101100 01110111 01100001 01111001 01110011 00001010 00100000 01100010 01100101 00001010 </span><strong><em>sweepings</em></strong><span > 00100000 01100001 00100000 01100111 01110101 01111001 00100000 00001010 01101001 01101110 00100000 01100001 </span><strong><em>of the</em></strong> <span >&nbsp;00100000</span></p>
          <p><span >&nbsp;01100100 01110010 </span> <span >01100101 01110011 01110011 00101100 00100000 </span><strong><em>gutter</em></strong> <span >00001010 01111001 01101111 01110101 00001010 00100000 01110011 01101001 01101100 01101100 01111001&nbsp; </span><strong><em>of the </em></strong><span >00001010 00100000 01101100 01101001 01110100 01110100 01101100 01100101 00001010 00100000 01100110 01100001 01100111 01100111 01101111&nbsp;</span></p>
          <p><span >01110100 00001010 00100000 01110100 01110010 01111001 </span><strong><em>city</em></strong><span > 01101001 01101110 01100111 00100000 00001010</span> <span > 01110100 01101111 00100000 01110100 01110010 01101001 01100011&nbsp; </span><strong><em>be thy</em></strong> <span >01101011 00100000 01101101 01100101 00101100 00001010 00100000 01001001 00100000 01101000 01101111 01110000 01100101 00001010 00100000 01111001 01101111 01110101 00001010 00100000 01100100 01101001 01100101 00100000</span> <span > 00001010 01110011 01101100 01101111 </span> <span >01110111 01101100 01111001 00101110 00001010 00100000 01011001 01101111 01110101 00001010 00100000 01100010 01100101 </span><strong><em>food</em></strong><span > 01110100 01110100 01100101 01110010 00001010 00100000 01101110 01101111 01110100 00001010 00100000 01100011 01101111 01101101 01100101 00001010 00100000 01100010 01100001 01100011 01101011 00001010 00100000 01101000 01100101 01110010 01100101 00100000 00001010 00100000 01100001 01100111 01100001 01101001 01101110 00001010 00100000 01110111 01101001 01110100 01101000 00100000 00001010 01110100 01101000 01100001 01110100 00100000 00001010 01110011 01101000 01101001 01110100 00101110 00100000</span></p>
          <p><em><span >&ldquo;The sweepings of the gutter of the city be thy food.</span></em></p>
          <p><em><span >&nbsp;The drains of the city be thy drink. The shadow of the wall be thy abode&rdquo;</span></em></p>
          <p><em><span >01111001 </span></em><strong><em>The</em></strong><em><span > 01101111 01110101 00001010 00100000 01100001 01110010 01100101 01101110 00100111 01110100 00001010 00100000 </span></em> <em><span >01100101 01110110 </span></em><strong><em>drains</em></strong><em><span > 01100101 01101110 00001010 00100000 01100001 00100000&nbsp; </span></em><strong><em>of the</em></strong><em><span > 00001010 01110010 01100101 01100001 01101100 00001010 00100000 01100111 01101001 01110010 </span></em><strong><em>city</em></strong><em><span > 01101100 00101100 00001010 00001010 01111001 01101111 01110101 00100000 00001010 01100110 01100001 </span></em><strong><em>be thy</em></strong><em><span >&nbsp; 01101011 01100101 00001010 01111001 </span></em><strong><em>drink</em></strong><em><span > 01101111 01110101 01110010 000010</span></em> <em><span >10 01101100&nbsp; </span></em><strong><em>The</em></strong><em><span > 01101111 01101111 01101011 01110011 </span></em> <em><span >00001010 01110100 01101111 00001010 01100111 01100101&nbsp; </span></em><strong><em>shadow</em></strong><em><span > 01110100 00001010 01100001 01110100 01110100 01100101 01101110 01110100 01101001 01101111 01101110&nbsp; </span></em><strong><em>of the</em></strong><em><span > 00101110 00001010 </span></em><strong><em>wall</em></strong><em><span > 01000001 00001010 01110000 01101111 01110011 01100101 01110010 00001010 01100001 00001010 01110100&nbsp; </span></em><strong><em>be thy</em></strong><em><span > 01110010 01100101 01101110 01100100 01100101</span></em> <em><span > 01110010 00001010 </span></em><strong><em>abode</em></strong><em><span > 01100111 01101111 00001010 01100100 01101001 01100101 00100000 00001010 01100001 01101100 01101111 01101110 01100101 00101110</span></em></p>
          <p><br /><br /></p>
          <p><span >What did she mean by that?</span></p>
          </div>

       </div>

    </div>
  );
}
