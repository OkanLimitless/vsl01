import Head from 'next/head';
import { useEffect } from 'react';

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
        <link rel="icon" type="image/x-icon" href="/text1/images26/AlphaBites-1.png" />
      </Head>

      <div className="page-wrapper">
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            line-height: 1.4;
          }
          
          .page-wrapper {
            max-width: 760px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 0;
            border-left: 1px solid #e0e0e0;
            border-right: 1px solid #e0e0e0;
          }
          
          .top-bar {
            background-color: #004187;
            height: 30px;
            display: flex;
            align-items: center;
            padding: 0 10px;
          }
          
          .msnbc-logo {
            color: white;
            font-weight: bold;
            font-size: 14px;
          }
          
          .top-nav {
            display: flex;
            color: white;
            font-size: 11px;
            margin-left: 20px;
          }
          
          .top-nav-item {
            margin-right: 10px;
          }
          
          .content-area {
            padding: 15px;
          }
          
          h1 {
            font-size: 22px;
            line-height: 1.2;
            margin: 0 0 15px 0;
            color: #c00;
            font-weight: bold;
          }
          
          h2 {
            font-size: 18px;
            margin: 15px 0;
          }
          
          p {
            margin: 10px 0;
            font-size: 14px;
            line-height: 1.5;
          }
          
          .byline {
            font-size: 12px;
            color: #666;
            margin: 5px 0 15px 0;
            text-align: right;
          }
          
          .img-container {
            text-align: center;
            margin: 15px 0;
          }
          
          .img-container img {
            max-width: 100%;
            height: auto;
          }
          
          .caption {
            font-size: 12px;
            color: #666;
            text-align: center;
            margin-top: 5px;
          }
          
          .red-text {
            color: #c00;
            font-weight: bold;
          }
          
          .box {
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 15px 0;
          }
          
          .highlight-box {
            background-color: #fff2cc;
            border: 1px solid #e5d178;
            padding: 15px;
            margin: 15px 0;
          }
          
          .cta-button {
            display: block;
            background-color: #c00;
            color: white;
            text-align: center;
            padding: 10px 15px;
            font-weight: bold;
            margin: 15px auto;
            width: 80%;
            max-width: 300px;
            cursor: pointer;
          }
          
          .image-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5px;
            margin: 15px 0;
          }
          
          .image-grid img {
            width: 32%;
            max-width: 150px;
          }
          
          .comment-box {
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px 0;
            font-size: 13px;
          }
          
          .comment-header {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          
          .comment-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 10px;
          }
          
          .comment-author {
            font-weight: bold;
            color: #004187;
          }
          
          .news-item {
            display: flex;
            margin-bottom: 15px;
          }
          
          .news-image {
            width: 100px;
            height: 75px;
            object-fit: cover;
            margin-right: 10px;
          }
          
          .news-title {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 14px;
          }
          
          .news-link {
            color: #004187;
            font-size: 12px;
            cursor: pointer;
          }
          
          .footer {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
            margin-top: 30px;
          }
          
          .floating-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #c00;
            color: white;
            padding: 10px 15px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            z-index: 100;
          }
          
          ul {
            margin: 10px 0;
            padding-left: 30px;
          }
          
          li {
            margin-bottom: 8px;
            font-size: 14px;
          }
          
          /* Fix for mobile */
          @media (max-width: 600px) {
            .page-wrapper {
              width: 100%;
              border: none;
            }
            
            .content-area {
              padding: 10px;
            }
            
            h1 {
              font-size: 20px;
            }
          }
        `}</style>

        <div className="top-bar">
          <div className="msnbc-logo">MSNBC</div>
          <div className="top-nav">
            <div className="top-nav-item">Home</div>
            <div className="top-nav-item">News</div>
            <div className="top-nav-item">Politics</div>
          </div>
        </div>

        <div className="content-area">
          <h1>
            <span className="red-text">MEN! REMEMBER:</span> THE LESS YOU ENGAGE IN SEX NOW, THE FEWER CHANCES YOU'LL HAVE TO IN THE FUTURE!
          </h1>
          
          <p className="red-text">Over time, the body weakens and one outcome is likely — impotence.</p>
          
          <div className="byline">
            <span className="sDate">Thursday, May 23, 2024</span>
          </div>
          
          <div className="img-container">
            <img src="/text1/images26/010.gif" alt="" loading="lazy" />
          </div>

          <p><b>Hello, dear readers!</b></p>
          <p>
            Today, I've decided to tackle the most problematic issue facing men. I receive millions of
            letters and messages from all corners of the United States asking me to talk about a simple way to
            combat impotence at home and <b>how to restore an erection, treat prostatitis ones and for all and prolong sexual
            intercourse</b>.
          </p>
          
          <div className="img-container">
            <img src="/text1/images26/xdoc2.png.pagespeed.ic.yg-HLw1Ps-.jpg" alt="" loading="lazy" />
          </div>
          
          <p className="red-text">
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
            Therefore, I will now tell you <b>how to quickly and safely achieve a solid erection to regain healthy potency and make your penis more
            robust and sturdy. I'll say this right away —
            <span className="red-text">achieving this is possible at home without resorting to doctors, chemicals, or
            surgeries</span>.</b>
          </p>
          
          <div className="highlight-box">
            <p><b>Read the article to the end and find out:</b></p>
            <ul>
              <li><b>Does penis size affect a partner's satisfaction?</b></li>
              <li><b>What are the risks of ignoring symptoms of prostatitis?</b></li>
              <li><b>Can it lead to impotence and prostate cancer?</b></li>
              <li><b>What symptoms indicate it's time to sound the alarm?</b></li>
              <li><b>How can you prevent penile atrophy at home?</b></li>
              <li><b>How to RID YOURSELF of prostatitis, restore erection affordably and without doctor visits in just a month.</b></li>
            </ul>
          </div>

          <div className="img-container">
            <p><b>Penis size comparison chart:</b></p>
            <img src="/text1/images26/ttt.png" alt="Penis size comparison" />
            <p className="caption">Scientific research shows that size does matter for satisfaction</p>
          </div>

          <div className="img-container">
            <img src="/text1/images26/zve1.jpg" alt="Celebrity" />
            <p><b>Celebrity Endorsement</b></p>
            <p><i>"I've improved both outwardly and inwardly: I dress stylishly now, curse less, and cause less trouble... 
            All thanks to 'AlphaBites Gummies'. I'm at a loss for words, the effect is explosive! 
            I've improved my health by 100%, feel like a young boy again! Every time, it's like the first".</i></p>
          </div>

          <div className="img-container">
            <img src="/text1/images26/zve2.jpg" alt="Celebrity" />
            <p><b>Celebrity Couple</b></p>
            <p><i>"He is priceless! Despite what anyone says, he can outpace any young man. Yes, we had problems
            in our intimate life, I won't hide it. But a friend recommended 'AlphaBites Gummies'. 
            I won't go into details, but the result was astounding and immediate.
            Not only did it fix everything 'down there', but it rejuvenated his whole body, we're overjoyed!
            We're planning another baby now. I'm now sure that there won't be problems in that department."</i></p>
          </div>

          <p>
            Until recently, this potent remedy was only available to the "chosen" ones, and most batches
            were sold abroad. But now it is accessible to everyone.
          </p>
          
          <div className="img-container">
            <img src="/text1/images26/ttt.png" alt="" />
          </div>
          
          <p>
            <a onClick={add_to_cart} style={{cursor: 'pointer', color: '#004187', textDecoration: 'underline'}}>AlphaBites Gummies</a> is a unique product that restores healthy
            potency in a short period of time. It contains absolutely no chemicals, only herbal extracts and concentrated extracts. 
            The capsules are completely harmless, non-addictive, and do not require a prescription.
          </p>
          
          <p>
            Laboratory testing took time, but the product has now passed all trials and received the
            necessary certificates of safety and effectiveness.
          </p>
          
          <div className="img-container">
            <img src="/text1/images26/AlphaBites-1.png" style={{maxWidth:'200px'}} alt="AlphaBites Gummies" />
          </div>
          
          <div className="box" style={{backgroundColor: '#ffecec', border: '1px solid #ff0000'}}>
            <p>
              <b className="red-text">Important:</b>
              "AlphaBites Gummies" contains natural ingredients. They not only
              enhance potency, provide a powerful erection, and
              <b className="red-text"> help avoid age-related penile atrophy</b>, but also increase testosterone
              and serotonin production, and act as a powerful aphrodisiac.
            </p>
          </div>

          <h2>Comments</h2>
          <div className="comment-box">
            <div className="comment-header">
              <img className="comment-avatar" src="/text1/images26/x2.jpg.pagespeed.ic.vwRAjIx6dX.jpg" alt="" />
              <div className="comment-author">Chris Morgan</div>
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

          <div className="comment-box">
            <div className="comment-header">
              <img className="comment-avatar" src="/text1/images26/x13.jpg.pagespeed.ic.CbFQIGAL3L.jpg" alt="" />
              <div className="comment-author">James Carter</div>
            </div>
            <p>
              This "AlphaBites Gummies" is awesome! Took just a month to feel the difference,
              as they say! The sex is phenomenal—my girl is thrilled!
            </p>
            <div className="img-container" style={{marginTop: '10px'}}>
              <img style={{maxWidth: '350px'}} src="/text1/images26/xreal2.png.pagespeed.ic.hy3jJfp_Jc.webp" alt="" />
            </div>
          </div>

          <div className="comment-box">
            <div className="comment-header">
              <img className="comment-avatar" src="/text1/images26/x3.jpg.pagespeed.ic.JNfgseop3-.jpg" alt="" />
              <div className="comment-author">Matt Donovan</div>
            </div>
            <p>
              It's true, my penis has gotten bigger and performs better.
            </p>
            <div className="img-container" style={{marginTop: '10px'}}>
              <img src="/text1/images26/xo2.jpg.pagespeed.ic.alJFdj01Fb.jpg" alt="" />
            </div>
          </div>

          <div className="comment-box">
            <div className="comment-header">
              <img className="comment-avatar" src="/text1/images26/x4.jpg.pagespeed.ic.Rw9bSvffT3.jpg" alt="" />
              <div className="comment-author">Robert Wilson</div>
            </div>
            <p>
              I've been using AlphaBites Gummies for 3 weeks now. The results are incredible! 
              My wife is amazed at how much longer I can last. Definitely recommend it to any man over 40.
            </p>
          </div>

          <h2>Celebrities Who Trust AlphaBites Gummies</h2>
          <div className="image-grid">
            <img src="/text1/images26/xman1.png.pagespeed.ic.uqKDV5pRGb.webp" alt="Celebrity" />
            <img src="/text1/images26/xman2.png.pagespeed.ic.1D4ILLZRck.webp" alt="Celebrity" />
            <img src="/text1/images26/xman3.png.pagespeed.ic.KIUZDk1jzX.webp" alt="Celebrity" />
            <img src="/text1/images26/xman5.png.pagespeed.ic.YXMPYwBEG5.webp" alt="Celebrity" />
            <img src="/text1/images26/xman6.png.pagespeed.ic.TkV5cmPXUx.webp" alt="Celebrity" />
            <img src="/text1/images26/xman7.png.pagespeed.ic.x6tPJ77Llg.webp" alt="Celebrity" />
          </div>

          <h2>Related News</h2>
          <div className="news-item">
            <img className="news-image" src="/text1/images26/xnews1.jpg.pagespeed.ic.1MVse6Bz3w.jpg" alt="News" />
            <div>
              <div className="news-title">Impotence? A new method amazed doctors.</div>
              <a onClick={add_to_cart} className="news-link">Read more</a>
            </div>
          </div>
          <div className="news-item">
            <img className="news-image" src="/text1/images26/xnews2.jpg.pagespeed.ic.nzlRQmGEx5.jpg" alt="News" />
            <div>
              <div className="news-title">Scientists discover breakthrough for men's health.</div>
              <a onClick={add_to_cart} className="news-link">Read more</a>
            </div>
          </div>

          <div className="highlight-box">
            <h3 style={{textAlign: 'center'}}>They've Already Won a Discount, and You Can Too!</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '5px 0'}}>
              <div><b>Name</b></div>
              <div><b>Discount</b></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee'}}>
              <div>Simon B.</div>
              <div>Bought 8 packs with 80% discount</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee'}}>
              <div>David M.</div>
              <div>Bought 4 packs with 40% discount</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee'}}>
              <div>Robert K.</div>
              <div>Bought 5 packs with 45% discount</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px 0'}}>
              <div>Benjamin H.</div>
              <div>Bought 3 packs with 20% discount</div>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '30px 0'}}>
            <h2 style={{color: '#c00'}}>AlphaBites Gummies</h2>
            <p><b>FREE Bottle + FREE Shipping Available Now!</b></p>
            <img src="/text1/images26/AlphaBites-1.png" style={{maxWidth: '200px', margin: '15px auto', display: 'block'}} alt="Product" />
            <a onClick={add_to_cart} className="cta-button">CLICK HERE TO ORDER NOW</a>
            <img src="/text1/images26/trust-stack-compressed.png" alt="" style={{maxWidth: '400px', margin: '15px auto', display: 'block'}} />
            <p style={{fontSize: '12px', color: '#666'}}>Limited Time Offer - While Supplies Last</p>
          </div>
        </div>

        <div className="footer">
          © 2024 All rights reserved
          <div style={{marginTop: '10px'}}>
            <img src="/text1/images26/logo.gif" title="Counter" alt="" height="31" width="88" />
          </div>
        </div>

        <button onClick={add_to_cart} className="floating-button">SHOP NOW</button>
      </div>
    </>
  );
}