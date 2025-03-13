import Head from 'next/head';
import { useEffect } from 'react';

export default function Text1() {
  useEffect(() => {
    // Original date script converted to React
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const now = new Date();
    const dateStr = `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    
    // Update all elements with sDate class
    const sDateElements = document.getElementsByClassName("sDate");
    for (let i = 0; i < sDateElements.length; i++) {
      sDateElements[i].innerHTML = dateStr;
    }
  }, []); // Empty dependency array means this runs once on mount

  const add_to_cart = () => {
    window.location.href = "https://afflat3e1.com/trk/lnk/7EF4AD2B-B866-46E8-AE93-217072D69F31/?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571";
    return false;
  };

  return (
    <>
      <Head>
        <title>AlphaBites Gummies</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="stylesheet" href="images26/A.style.css.pagespeed.cf.B0sW-PEd5C.css" type="text/css" />
        <link rel="stylesheet" href="images26/A.index.css.pagespeed.cf.QujpixwJSd.css" type="text/css" />
        <link rel="stylesheet" href="images26/A.mob-modern.core.css.pagespeed.cf.DRpGUiVpWW.css" type="text/css" />
        <link rel="stylesheet" href="images26/form.css" />
        <link rel="stylesheet" href="images26/doors.css" />
        <link rel="stylesheet" href="images26/preloader.css" />
        <link rel="icon" type="image/x-icon" href="upload/241203142710529.png" />
      </Head>

      <div className="theme theme_light site_russia1" id="page_article_show">
        {/* Original HTML content converted to JSX */}
        <header className="fn">
          <div className="header__inner">
            <a onClick={add_to_cart}>
              <img className="header__img" src="images26/header.png" alt="" loading="lazy" />
              <img className="header__img-mobile" src="images26/header_mob.png" alt="" loading="lazy" />
            </a>
          </div>
        </header>

        <div id="container">
          <div id="main" role="main">
            <div className="content">
              <div className="page-brand-article-item">
                <div className="inner_content">
                  <h1 style={{textTransform: 'uppercase'}} className="theme">
                    <span className="red-txt">MEN! REMEMBER:</span> THE LESS YOU ENGAGE IN SEX NOW, THE FEWER
                    CHANCES YOU'LL HAVE TO IN THE FUTURE!<br/><br/>
                    <span className="red-txt">Over time, the body weakens and one outcome is likely — impotence.</span>
                  </h1>
                  
                  {/* Continue with the rest of your content converted to JSX */}
                  {/* Note: Convert all class= to className=, onclick= to onClick=, and other HTML to JSX syntax */}
                  {/* Convert all href="admin_placement=null.html" to onClick={add_to_cart} */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="wrapper wrap footer-container">
            <div className="copy">
              © 2024 All rights reserved
            </div>
            <div className="counters">
              <a onClick={add_to_cart} className="toform">
                <img loading="lazy" src="images26/logo.gif" title="LiveInternet: counter" alt="" height="31" width="88" />
              </a>
            </div>
          </div>
        </footer>

        <a onClick={add_to_cart} className="floating-button">SHOP NOW</a>
      </div>
    </>
  );
} 