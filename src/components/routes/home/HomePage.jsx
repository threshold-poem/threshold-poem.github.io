import React from 'react';
import Button from '../../ui/Button/Button';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function HomePage() {
  return (
    <div>
      <h1 style={{ fontSize: 50, fontWeigth: 'bold', textAlign: 'center' }}>
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
        ` .  . . .+++"%;.%V%%%.%|8Hb++.'.'.  .<br />
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

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AwesomeButtonProgress
        cssModule={AwesomeButtonStyles}
        type="primary"
        onPress={next => {
          // do a sync/async task then call `next()`
        }}
      >
        Button
      </AwesomeButtonProgress>
      </div>
    </div>
  );
}
