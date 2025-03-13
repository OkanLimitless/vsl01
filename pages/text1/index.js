import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Text1() {
  useEffect(() => {
    // Date display functionality
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const now = new Date();
    const dateStr = `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    
    const sDateElements = document.getElementsByClassName("sDate");
    for (let i = 0; i < sDateElements.length; i++) {
      sDateElements[i].innerHTML = dateStr;
    }
  }, []);

  const add_to_cart = () => {
    window.location.href = "https://afflat3e1.com/trk/lnk/7EF4AD2B-B866-46E8-AE93-217072D69F31/?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571";
    return false;
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>AlphaBites Gummies</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.5;
            color: #333;
            background-color: #fff;
          }
          .msnbc-header {
            background-color: #004a85;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
            height: 30px;
          }
          .msnbc-logo {
            height: 20px;
          }
          .live-tv {
            font-size: 12px;
            font-weight: bold;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 15px;
          }
          .breaking-news {
            background-color: #c00;
            color: white;
            padding: 5px 10px;
            margin: 10px 0;
            font-weight: bold;
            font-size: 14px;
          }
          .date {
            text-align: right;
            font-size: 14px;
            color: #666;
            margin: 10px 0;
          }
          h1 {
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .red-txt {
            color: #c00;
            font-weight: bold;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 15px;
          }
          .article-img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 15px auto;
          }
          .caption {
            font-size: 14px;
            color: #666;
            text-align: center;
            margin-top: 5px;
          }
          .highlight-box {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 20px 0;
          }
          .diagram {
            text-align: center;
            margin: 20px 0;
          }
          .diagram img {
            max-width: 100%;
          }
          .testimonial {
            margin: 20px 0;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 3px solid #004a85;
          }
          .testimonial-img {
            width: 100%;
            max-width: 300px;
            display: block;
            margin: 0 auto 10px;
          }
          .testimonial-name {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 5px;
          }
          .testimonial-text {
            font-style: italic;
          }
          .celeb-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
          }
          .celeb-grid img {
            width: 32%;
            max-width: 150px;
          }
          .cta-button {
            display: inline-block;
            background-color: #c00;
            color: white;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            cursor: pointer;
          }
          .footer {
            background-color: #f0f0f0;
            padding: 20px 0;
            margin-top: 30px;
            font-size: 14px;
          }
          .footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .floating-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #c00;
            color: white;
            padding: 10px 20px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 1000;
            cursor: pointer;
          }
          ul {
            padding-left: 20px;
          }
          li {
            margin-bottom: 10px;
          }
        `}} />
      </Head>

      {/* MSNBC-style header */}
      <div className="msnbc-header">
        <div>
          <svg width="70" height="20" viewBox="0 0 70 20" fill="white">
            <path d="M6.5,0H0V20H6.5V0z M13.1,0H19v20h-5.9V0z M34.9,0h-5.4v20h5.4V0z M42.5,0h-5.9v20h5.9V0z M69.9,0H64v20h5.9V0z M27.5,0l-5.9,10.2V0h-5.4v20h5.4V9.1L27.5,20h6.5L26.7,9.1L34,0H27.5z M62.4,0l-5.9,10.2V0h-5.4v20h5.4V9.1L62.4,20h6.5L61.6,9.1L68.9,0H62.4z"/>
          </svg>
        </div>
        <div className="live-tv">LIVE TV</div>
      </div>

      <div className="container">
        {/* Breaking news banner */}
        <div className="breaking-news">
          BREAKING NEWS: REVOLUTIONARY DISCOVERY HELPS MEN REGAIN THEIR SEXUAL VITALITY AND CONFIDENCE
        </div>

        <h1>
          <span className="red-txt">MEN! REMEMBER:</span> THE LESS YOU ENGAGE IN SEX NOW, THE FEWER
          CHANCES YOU'LL HAVE TO IN THE FUTURE!<br/><br/>
          <span className="red-txt">OVER TIME, THE BODY WEAKENS AND ONE OUTCOME IS LIKELY — IMPOTENCE.</span>
        </h1>
        
        <div className="date">
          <span className="sDate">Thursday, May 23, 2024</span>
        </div>
        
        {/* Doctor signature image */}
        <div style={{textAlign: 'right', marginBottom: '20px'}}>
          <img src="/images26/xray.jpg" alt="Doctor signature" style={{maxWidth: '150px'}} />
        </div>

        <p><b>Hello, dear readers!</b></p>
        
        <p>
          Today, I've decided to tackle the most problematic issue facing men. I receive millions of
          letters and messages from all corners of the United States asking me to talk about a simple way to
          combat impotence at home and <b>how to restore an erection, treat prostatitis ones and for all and prolong sexual
          intercourse</b>.
        </p>

        {/* Doctor image */}
        <img src="/images26/xdoc2.png.pagespeed.ic.yg-HLw1Ps-.jpg" className="article-img" alt="Doctor" />
        <p className="caption">Dr. Sarah Johnson, Sexual Health Specialist</p>

        <p className="red-txt" style={{fontSize: '18px', fontWeight: 'bold'}}>
          Remember: A WOMAN CANNOT LIVE WITHOUT SEX! If a man does not satisfy her, sooner or later,
          she will find another — such is the law of life.
        </p>

        <p>
          This delicate problem concerns not only men but also women. The fact is that a woman does
          not want to have sex just for the sake of it. If her partner has a weak erection, then the woman simply will
          not reach orgasm. And if nothing is done about it, she will look for another, more capable sexual
          partner. Naturally, this threatens the relationship and can even lead to divorce.
        </p>

        <p>
          Therefore, I will now tell you
          <b> how to quickly and safely achieve a solid erection to regain healthy potency and make your penis more
          robust and sturdy. I'll say this right away —
          <span style={{color: '#c00'}}> achieving this is possible at home without resorting to doctors, chemicals, or
            surgeries</span>.</b>
        </p>

        <div className="highlight-box">
          <p><b>Read the article to the end and find out:</b></p>
          <ul>
            <li>
              <b>Does penis size affect a partner's satisfaction?</b>
            </li>
            <li>
              <b>What are the risks of ignoring symptoms of prostatitis?</b>
            </li>
            <li>
              <b>Can it lead to impotence and prostate cancer?</b>
            </li>
            <li>
              <b>What symptoms indicate it's time to sound the alarm?</b>
            </li>
            <li>
              <b>How can you prevent penile atrophy at home?</b>
            </li>
            <li>
              <b>How to RID YOURSELF of prostatitis, restore erection affordably and without doctor visits in just
              a month.</b>
            </li>
          </ul>
        </div>

        <p>
          First of all, let's talk about the root causes of erectile dysfunction:
        </p>

        <p>
          <b>• Poor blood flow to the genital organs</b> - This is the primary cause of weak erections! 
          Without proper blood circulation, achieving and maintaining an erection becomes impossible.
        </p>

        <p>
          <b>• Hormonal imbalance</b> - Low testosterone levels directly impact sexual performance and desire.
        </p>

        <p>
          <b>• Prostate issues</b> - An inflamed or enlarged prostate can severely affect sexual function.
        </p>

        <p>
          <b>• Psychological factors</b> - Stress, anxiety, and depression can all contribute to erectile problems.
        </p>

        <p>
          Now, let's discuss penis size and its importance:
        </p>

        {/* Penis size diagram */}
        <div className="diagram">
          <img src="/images26/ttt.png" alt="Penis size comparison" />
          <p className="caption">Penis size comparison chart showing the importance of proper blood flow</p>
        </div>

        <p>
          Contrary to what many believe, size isn't the only factor that matters. What's more important is:
        </p>

        <p>
          <b>1. Blood flow</b> - Proper circulation ensures maximum engorgement<br/>
          <b>2. Firmness</b> - A properly functioning penis should be firm enough for penetration<br/>
          <b>3. Endurance</b> - The ability to maintain an erection throughout intercourse
        </p>

        <p>
          AlphaBites Gummies addresses all these issues with its unique formula:
        </p>

        <div className="highlight-box" style={{backgroundColor: '#ffecec', border: '1px solid #c00'}}>
          <p>
            <b style={{color: '#c00'}}>Important:</b>
            "AlphaBites Gummies" contains natural ingredients that not only
            enhance potency and provide a powerful erection, but also
            <b style={{color: '#c00'}}> help avoid age-related penile atrophy</b>, increase testosterone
            and serotonin production, and act as a powerful aphrodisiac.
          </p>
        </div>

        {/* Celebrity testimonial */}
        <div className="testimonial">
          <img src="/images26/zve1.jpg" className="testimonial-img" alt="Celebrity" />
          <p className="testimonial-name">Celebrity Endorsement</p>
          <p className="testimonial-text">
            "I've improved both outwardly and inwardly: I dress stylishly now, curse less, and cause less trouble... 
            All thanks to 'AlphaBites Gummies'. I'm at a loss for words, the effect is explosive! 
            I've improved my health by 100%, feel like a young boy again! Every time, it's like the first."
          </p>
        </div>

        <div className="testimonial">
          <img src="/images26/zve2.jpg" className="testimonial-img" alt="Celebrity Couple" />
          <p className="testimonial-name">Celebrity Couple</p>
          <p className="testimonial-text">
            "He is priceless! Despite what anyone says, he can outpace any young man. Yes, we had problems
            in our intimate life, I won't hide it. But a friend recommended 'AlphaBites Gummies'. 
            I won't go into details, but the result was astounding and immediate.
            Not only did it fix everything 'down there', but it rejuvenated his whole body, we're overjoyed!
            We're planning another baby now. I'm now sure that there won't be problems in that department."
          </p>
        </div>

        <p>
          Until recently, this potent remedy was only available to the "chosen" ones, and most batches
          were sold abroad. But now it is accessible to everyone.
        </p>

        <div style={{textAlign: 'center', margin: '30px 0'}}>
          <img src="/images26/AlphaBites-1.png" alt="AlphaBites Gummies" style={{maxWidth: '200px'}} />
        </div>

        <p>
          AlphaBites Gummies is a unique product that restores healthy potency in a short
          period of time. It contains absolutely no chemicals, only herbal extracts and concentrated extracts. 
          The capsules are completely harmless, non-addictive, and do not require a prescription.
        </p>

        <p>
          Laboratory testing took time, but the product has now passed all trials and received the
          necessary certificates of safety and effectiveness.
        </p>

        {/* User testimonials with images */}
        <h3 style={{borderBottom: '2px solid #004a85', paddingBottom: '5px'}}>REAL USER RESULTS</h3>

        <div className="testimonial">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
            <img src="/images26/x2.jpg.pagespeed.ic.vwRAjIx6dX.jpg" alt="" style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px'}} />
            <div><b>Chris Morgan</b></div>
          </div>
          <p>
            Lately, sex hadn't been enjoyable at all. It was unpleasant for both me and
            my wife, who began hinting that something was off. She felt I didn't love
            her anymore, but I just felt drained. I didn't want to see a doctor, so I
            bought "AlphaBites Gummies" as a last resort. And it worked! I don't know
            what's in it or how it works, but I've never had sex like this, even when I
            was 18. Fantastic product!
          </p>
        </div>

        <div className="testimonial">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
            <img src="/images26/x13.jpg.pagespeed.ic.CbFQIGAL3L.jpg" alt="" style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px'}} />
            <div><b>James Carter</b></div>
          </div>
          <p>
            This "AlphaBites Gummies" is awesome! Took just a month to feel the difference,
            as they say! The sex is phenomenal—my girl is thrilled!
          </p>
          <img src="/images26/xreal2.png.pagespeed.ic.hy3jJfp_Jc.webp" alt="" style={{maxWidth: '100%', marginTop: '10px'}} />
        </div>

        {/* Blood flow image */}
        <div style={{textAlign: 'center', margin: '30px 0'}}>
          <img src="/images26/xo2.jpg.pagespeed.ic.alJFdj01Fb.jpg" alt="Blood flow" style={{maxWidth: '100%'}} />
          <p className="caption">Improved blood flow is essential for erectile function</p>
        </div>

        {/* Celebrity grid */}
        <h3 style={{borderBottom: '2px solid #004a85', paddingBottom: '5px'}}>CELEBRITIES WHO TRUST ALPHABITES GUMMIES</h3>
        <div className="celeb-grid">
          <img src="/images26/xman1.png.pagespeed.ic.uqKDV5pRGb.webp" alt="Celebrity" />
          <img src="/images26/xman2.png.pagespeed.ic.1D4ILLZRck.webp" alt="Celebrity" />
          <img src="/images26/xman3.png.pagespeed.ic.KIUZDk1jzX.webp" alt="Celebrity" />
          <img src="/images26/xman5.png.pagespeed.ic.YXMPYwBEG5.webp" alt="Celebrity" />
          <img src="/images26/xman6.png.pagespeed.ic.TkV5cmPXUx.webp" alt="Celebrity" />
          <img src="/images26/xman7.png.pagespeed.ic.x6tPJ77Llg.webp" alt="Celebrity" />
        </div>

        {/* Winners section */}
        <div className="highlight-box">
          <h3 style={{textAlign: 'center', margin: '0 0 15px 0'}}>They've Already Won a Discount, and You Can Too!</h3>
          <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '5px 0', fontWeight: 'bold'}}>
            <div>Name</div>
            <div>Discount</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '5px 0'}}>
            <div>Simon B.</div>
            <div>Bought 8 packs with 80% discount</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '5px 0'}}>
            <div>David M.</div>
            <div>Bought 4 packs with 40% discount</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '5px 0'}}>
            <div>Robert K.</div>
            <div>Bought 5 packs with 45% discount</div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px 0'}}>
            <div>Benjamin H.</div>
            <div>Bought 3 packs with 20% discount</div>
          </div>
        </div>

        {/* Final CTA section */}
        <div style={{textAlign: 'center', margin: '40px 0', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '10px'}}>
          <h2 style={{color: '#c00'}}>AlphaBites Gummies</h2>
          <p><b>FREE Bottle + FREE Shipping Available Now!</b></p>
          <img src="/images26/AlphaBites-1.png" style={{maxWidth: '200px', margin: '20px auto'}} alt="Product" />
          <a onClick={add_to_cart} className="cta-button">
            CLICK HERE TO ORDER NOW
          </a>
          <img src="/images26/trust-stack-compressed.png" alt="" style={{width: '100%', maxWidth: '400px', margin: '20px auto'}} />
          <p style={{fontSize: '14px', color: '#666'}}>Limited Time Offer - While Supplies Last</p>
        </div>
      </div>

      <div className="footer">
        <div className="container footer-container">
          <div>
            © 2024 All rights reserved
          </div>
          <div>
            <a onClick={add_to_cart}>
              <img src="/images26/logo.gif" title="Counter" alt="" height="31" width="88" />
            </a>
          </div>
        </div>
      </div>

      <a onClick={add_to_cart} className="floating-button">SHOP NOW</a>

      <Script src="https://jiershun.com/images26/jquery.js.%E4%B8%8B%E8%BD%BD" />
    </>
  );
} 