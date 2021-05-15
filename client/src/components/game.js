import React from "react";

class Game extends React.Component {

    // componentDidMount() {
    //   const script = document.createElement('script');
    //   script.setAttribute(
    //     'src', 
    //     'https://play.idevgames.co.uk/embed/galactic-wars');
    //   script.addEventListener('load', () => {
    //     // EmbedManager.embed({
    //     //   key: "key",
    //     //   width: "100%",
    //     //   mobileResponsive: true
    //     // });
    //   });
    //   document.body.appendChild(script);
    // }
  
    render() {
      return (
        <div>
                    {/* document.getElementById("embededGame").src = thegamelink+"/"+theurl+"?url="+window.location.href; */}

          <div style={{position: 'relative',height: 0,overflow: 'hidden',paddingBottom: '56.25%'}}>
             <iframe id="embededGame" title="galaticwars" src="https://play.idevgames.co.uk/embed/galactic-wars/true?url=https://play.idevgames.co.uk/embed/galactic-wars" scrolling="no" seamless="seamless" frameBorder="0" style={{position: 'absolute',top:0,left: 0,width: '100%',height: '100%'}}>Browser not compatible.</iframe>
          </div>
        </div>
      );
    }
  }
  
  export default Game;
