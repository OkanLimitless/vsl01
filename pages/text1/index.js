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
            color: #333333;
            line-height: 1.6;
          }

          .page-wrapper {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .header-bar {
            background-color: #004a7f;
            height: 48px;
            display: flex;
            align-items: center;
            padding: 0 20px;
          }

          .header-logo {
            color: white;
            font-weight: bold;
            font-size: 20px;
          }

          .main-content {
            max-width: 660px;
            margin: 0 auto;
            padding: 20px;
            background: #ffffff;
          }

          .article-header {
            margin-bottom: 20px;
          }

          .article-title {
            font-size: 32px;
            line-height: 1.2;
            margin-bottom: 15px;
            color: #333;
          }

          .article-meta {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
          }

          .article-content {
            font-size: 18px;
            line-height: 1.6;
          }

          .article-image {
            margin: 20px 0;
            max-width: 100%;
            height: auto;
          }

          .article-quote {
            font-size: 20px;
            line-height: 1.4;
            color: #004a7f;
            border-left: 4px solid #004a7f;
            padding-left: 20px;
            margin: 20px 0;
          }

          .red-text {
            color: #ff0000;
          }

          .emphasis-box {
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px 0;
          }

          .cta-button {
            display: inline-block;
            background-color: #ff0000;
            color: white;
            padding: 15px 30px;
            border-radius: 5px;
            font-weight: bold;
            text-decoration: none;
            margin: 20px 0;
            cursor: pointer;
          }

          .footer {
            background-color: #f5f5f5;
            padding: 20px;
            margin-top: auto;
          }

          .footer-content {
            max-width: 660px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          @media (max-width: 768px) {
            .main-content {
              padding: 15px;
            }

            .article-title {
              font-size: 24px;
            }

            .article-content {
              font-size: 16px;
            }
          }

          /* Additional styles for specific elements */
          .testimonial-card {
            background: #f9f9f9;
            border: 1px solid #eee;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
          }

          .testimonial-author {
            font-weight: bold;
            color: #004a7f;
            margin-top: 10px;
          }

          .product-highlight {
            background: #fff2cc;
            border: 1px solid #ffd700;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
          }

          .floating-cta {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #ff0000;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            font-weight: bold;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            cursor: pointer;
            z-index: 1000;
          }
        `}</style>

        <header className="header-bar">
          <div className="header-logo">MSNBC</div>
        </header>

        <main className="main-content">
          <article className="article-content">
            <header className="article-header">
              <h1 className="article-title">
                <span className="red-text">MEN! REMEMBER:</span> THE LESS YOU ENGAGE IN SEX NOW, THE FEWER CHANCES YOU'LL HAVE TO IN THE FUTURE!
              </h1>
              <div className="article-meta">
                <span className="sDate">Thursday, May 23, 2024</span>
              </div>
            </header>

            <img src="/text1/images26/010.gif" style={{display: 'block', margin: '0 auto', maxWidth: '100%'}} alt="" loading="lazy" />
            <br/>

            <p><b>Hello, dear readers!</b></p>
            <p>
              Today, I've decided to tackle the most problematic issue facing men. I receive millions of
              letters and messages from all corners of the United States asking me to talk about a simple way to
              combat impotence at
              home and <b>how to restore an erection, treat prostatitis ones and for all and prolong sexual
              intercourse</b>.
              <br/>
            </p>
            
            <img src="/text1/images26/xdoc2.png.pagespeed.ic.yg-HLw1Ps-.jpg" style={{display: 'block', margin: '0 auto', maxWidth: '100%'}} alt="" loading="lazy" />
            <br/>
            
            <p className="title-art red-txt">
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
              <span className="red-txt"> achieving this is possible at home without resorting to doctors, chemicals, or
                surgeries</span>.</b>
            </p>
            
            <div className="bg-color">
              <p><b>Read the article to the end and find out:</b></p>
              <ul style={{paddingLeft: '20px'}}>
                <li style={{marginBottom: '15px', listStyleType: 'circle'}}>
                  <b>• Does penis size affect a partner's satisfaction?</b>
                </li>
                <li style={{marginBottom: '15px', listStyleType: 'circle'}}>
                  <b>• What are the risks of ignoring symptoms of prostatitis?</b>
                </li>
                <li style={{marginBottom: '15px', listStyleType: 'circle'}}>
                  <b>• Can it lead to impotence and prostate cancer?</b>
                </li>
                <li style={{marginBottom: '15px', listStyleType: 'circle'}}>
                  <b>• What symptoms indicate it's time to sound the alarm?</b>
                </li>
                <li style={{marginBottom: '15px', listStyleType: 'circle'}}>
                  <b>• How can you prevent penile atrophy at home?</b>
                </li>
                <li>
                  <b>• How to RID YOURSELF of prostatitis, restore erection affordably and without doctor visits in just
                  a month.</b>
                </li>
              </ul>
            </div>

            {/* Penis size diagram */}
            <div style={{textAlign: 'center', margin: '30px 0'}}>
              <p><b>Penis size comparison chart:</b></p>
              <img src="/text1/images26/ttt.png" alt="Penis size comparison" style={{maxWidth: '100%'}} />
              <p style={{fontSize: '14px', color: '#666'}}>Scientific research shows that size does matter for satisfaction</p>
            </div>

            {/* Celebrity testimonials */}
            <div className="testimonials">
              <center style={{marginBottom: '20px'}}>
                <picture className="main-img-2" style={{width: '100%', maxWidth: '600px'}}>
                  <img style={{width: '100%', maxWidth: '600px'}} src="/text1/images26/zve1.jpg" alt="Celebrity" />
                  <span style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '600px',
                    marginTop: '15px',
                    fontSize: '18px'
                  }}><b>Celebrity Endorsement</b></span>
                  <span style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '600px',
                    fontSize: '18px'
                  }}><i>"I've improved both outwardly and inwardly: I dress stylishly now, curse less, and cause less trouble... 
                  All thanks to 'AlphaBites Gummies'. I'm at a loss for words, the effect is explosive! 
                  I've improved my health by 100%, feel like a young boy again! Every time, it's like the first".</i></span>
                </picture>
              </center>

              <center style={{marginBottom: '20px'}}>
                <picture className="main-img-2" style={{width: '100%', maxWidth: '600px'}}>
                  <img style={{width: '100%', maxWidth: '600px'}} src="/text1/images26/zve2.jpg" alt="Celebrity" />
                  <span style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '600px',
                    marginTop: '15px',
                    fontSize: '18px'
                  }}><b>Celebrity Couple</b></span>
                  <span style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '600px',
                    fontSize: '18px'
                  }}><i>"He is priceless! Despite what anyone says, he can outpace any young man. Yes, we had problems
                  in our intimate life, I won't hide it. But a friend recommended 'AlphaBites Gummies'. 
                  I won't go into details, but the result was astounding and immediate.
                  Not only did it fix everything 'down there', but it rejuvenated his whole body, we're overjoyed!
                  We're planning another baby now. I'm now sure that there won't be problems in that department."</i></span>
                </picture>
              </center>
            </div>

            <p>
              Until recently, this potent remedy was only available to the "chosen" ones, and most batches
              were sold
              abroad. But now it is accessible to everyone.
            </p>
            
            <img className="imgcenter" alt="" src="/text1/images26/ttt.png" style={{marginBottom: '15px'}} />
            <br/>
            
            <p>
              <a onClick={add_to_cart} style={{cursor: 'pointer'}}>AlphaBites Gummies</a> is a unique product that restores healthy
              potency in a short
              period of time. It contains absolutely no chemicals, only herbal extracts and concentrated extracts. 
              The capsules are completely harmless, non-addictive, and do not require a prescription.
            </p>
            
            <p>
              Laboratory testing took time, but the product has now passed all trials and received the
              necessary
              certificates of safety and effectiveness.
            </p>
            
            <img className="imgcenter" src="/text1/images26/AlphaBites-1.png" style={{width:'100%', maxWidth:'200px'}} />
            <br/>
            
            <p className="imp-block" style={{backgroundColor: '#ffecec', padding: '15px', border: '1px solid #ff0000'}}>
              <b className="red-txt">Important:</b>
              "AlphaBites Gummies" contains natural ingredients. They not only
              enhance potency, provide a powerful erection, and
              <b className="red-txt"> help avoid age-related penile atrophy</b>, but also increase testosterone
              and serotonin production, and act as a powerful aphrodisiac.
            </p>

            {/* User comments section */}
            <div className="comments-section">
              <h3>Comments</h3>
              <ul style={{padding: 0}}>
                <li className="discus_dialogs_i it">
                  <div className="msg-card">
                    <div>
                      <span className="linecd">
                        <span className="icons-set">
                          <div className="minicard_ava pnl-mini_ava">
                            <div className="sz32 common-avatar">
                              <a onClick={add_to_cart} className="u-ava sz32" tabIndex="-1" style={{cursor: 'pointer'}}>
                                <img className="u-ava_img sz32" src="/text1/images26/x2.jpg.pagespeed.ic.vwRAjIx6dX.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <span className="ic-set_tx">
                            <a onClick={add_to_cart} className="emphased usr" style={{cursor: 'pointer'}}>Chris Morgan</a>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="content-block">
                      <div className="discus_txt ofh wbr" tabIndex="0">
                        Lately, sex hadn't been enjoyable at all. It was unpleasant for both me and
                        my wife, who began hinting that something was off. She felt I didn't love
                        her anymore, but I just felt drained. I didn't want to see a doctor, so I
                        bought "AlphaBites Gummies" as a last resort. And it worked! I don't know
                        what's in it or how it works, but I've never had sex like this, even when I
                        was 18. Fantastic product!
                      </div>
                    </div>
                  </div>
                </li>

                <li className="discus_dialogs_i it">
                  <div className="msg-card">
                    <div>
                      <span className="linecd">
                        <span className="icons-set">
                          <div className="minicard_ava pnl-mini_ava">
                            <div className="sz32 common-avatar">
                              <a onClick={add_to_cart} className="u-ava sz32" tabIndex="-1" style={{cursor: 'pointer'}}>
                                <img className="u-ava_img sz32" src="/text1/images26/x13.jpg.pagespeed.ic.CbFQIGAL3L.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <span className="ic-set_tx">
                            <a onClick={add_to_cart} className="emphased usr" style={{cursor: 'pointer'}}>James Carter</a>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="content-block">
                      <div className="discus_txt ofh wbr" tabIndex="0">
                        This "AlphaBites Gummies" is awesome! Took just a month to feel the difference,
                        as they say! The sex is phenomenal—my girl is thrilled!
                        <br/>
                        <img style={{maxWidth: '350px', width: '100%'}} src="/text1/images26/xreal2.png.pagespeed.ic.hy3jJfp_Jc.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </li>

                <li className="discus_dialogs_i it">
                  <div className="msg-card">
                    <div>
                      <span className="linecd">
                        <span className="icons-set">
                          <div className="minicard_ava pnl-mini_ava">
                            <div className="sz32 common-avatar">
                              <a onClick={add_to_cart} className="u-ava sz32" tabIndex="-1" style={{cursor: 'pointer'}}>
                                <img className="u-ava_img sz32" src="/text1/images26/x3.jpg.pagespeed.ic.JNfgseop3-.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <span className="ic-set_tx">
                            <a onClick={add_to_cart} className="emphased usr" style={{cursor: 'pointer'}}>Matt Donovan</a>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="content-block">
                      <div className="discus_txt ofh wbr" tabIndex="0">
                        It's true, my penis has gotten bigger and performs better.
                        <img src="/text1/images26/xo2.jpg.pagespeed.ic.alJFdj01Fb.jpg" alt="" style={{maxWidth: '100%', marginTop: '10px'}} />
                      </div>
                    </div>
                  </div>
                </li>

                <li className="discus_dialogs_i it">
                  <div className="msg-card">
                    <div>
                      <span className="linecd">
                        <span className="icons-set">
                          <div className="minicard_ava pnl-mini_ava">
                            <div className="sz32 common-avatar">
                              <a onClick={add_to_cart} className="u-ava sz32" tabIndex="-1" style={{cursor: 'pointer'}}>
                                <img className="u-ava_img sz32" src="/text1/images26/x4.jpg.pagespeed.ic.Rw9bSvffT3.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <span className="ic-set_tx">
                            <a onClick={add_to_cart} className="emphased usr" style={{cursor: 'pointer'}}>Robert Wilson</a>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="content-block">
                      <div className="discus_txt ofh wbr" tabIndex="0">
                        I've been using AlphaBites Gummies for 3 weeks now. The results are incredible! 
                        My wife is amazed at how much longer I can last. Definitely recommend it to any man over 40.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Celebrity grid */}
            <div style={{margin: '30px 0'}}>
              <h3>Celebrities Who Trust AlphaBites Gummies</h3>
              <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
                <img src="/text1/images26/xman1.png.pagespeed.ic.uqKDV5pRGb.webp" alt="Celebrity" style={{width: '32%', maxWidth: '150px'}} />
                <img src="/text1/images26/xman2.png.pagespeed.ic.1D4ILLZRck.webp" alt="Celebrity" style={{width: '32%', maxWidth: '150px'}} />
                <img src="/text1/images26/xman3.png.pagespeed.ic.KIUZDk1jzX.webp" alt="Celebrity" style={{width: '32%', maxWidth: '150px'}} />
                <img src="/text1/images26/xman5.png.pagespeed.ic.YXMPYwBEG5.webp" alt="Celebrity" style={{width: '32%', maxWidth: '150px'}} />
                <img src="/text1/images26/xman6.png.pagespeed.ic.TkV5cmPXUx.webp" alt="Celebrity" style={{width: '32%', maxWidth: '150px'}} />
                <img src="/text1/images26/xman7.png.pagespeed.ic.x6tPJ77Llg.webp" alt="Celebrity" style={{width: '32%', maxWidth: '150px'}} />
              </div>
            </div>

            {/* News section */}
            <div style={{margin: '30px 0'}}>
              <h3>Related News</h3>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px'}}>
                <div style={{display: 'flex', width: '100%', maxWidth: '350px', marginBottom: '15px'}}>
                  <img src="/text1/images26/xnews1.jpg.pagespeed.ic.1MVse6Bz3w.jpg" alt="News" style={{width: '100px', height: '75px', objectFit: 'cover', marginRight: '10px'}} />
                  <div>
                    <h4 style={{margin: '0 0 5px 0', fontSize: '16px'}}>Impotence? A new method amazed doctors.</h4>
                    <a onClick={add_to_cart} style={{color: '#0066cc', fontSize: '14px', cursor: 'pointer'}}>Read more</a>
                  </div>
                </div>
                <div style={{display: 'flex', width: '100%', maxWidth: '350px', marginBottom: '15px'}}>
                  <img src="/text1/images26/xnews2.jpg.pagespeed.ic.nzlRQmGEx5.jpg" alt="News" style={{width: '100px', height: '75px', objectFit: 'cover', marginRight: '10px'}} />
                  <div>
                    <h4 style={{margin: '0 0 5px 0', fontSize: '16px'}}>Scientists discover breakthrough for men's health.</h4>
                    <a onClick={add_to_cart} style={{color: '#0066cc', fontSize: '14px', cursor: 'pointer'}}>Read more</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Winners section */}
            <div className="vik-winners-bl">
              <div className="left_block">
                <div className="lb_text lt39">
                  They've Already Won a Discount,<br/>
                  <span>and You Can Too!</span>
                </div>
                <div className="wins">
                  <div className="win_line">
                    <div className="lt40">Name</div>
                    <div className="lt41">Discount</div>
                  </div>
                  <div className="win_line wincomment">
                    <div className="lt48">Simon B.</div>
                    <div className="lt49">Bought 8 packs with 80% discount</div>
                  </div>
                  <div className="win_line wincomment">
                    <div className="lt48">David M.</div>
                    <div className="lt49">Bought 4 packs with 40% discount</div>
                  </div>
                  <div className="win_line wincomment">
                    <div className="lt48">Robert K.</div>
                    <div className="lt49">Bought 5 packs with 45% discount</div>
                  </div>
                  <div className="win_line wincomment">
                    <div className="lt48">Benjamin H.</div>
                    <div className="lt49">Bought 3 packs with 20% discount</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-highlight">
              <h2>AlphaBites Gummies</h2>
              <p><strong>FREE Bottle + FREE Shipping Available Now!</strong></p>
              <img src="/text1/images26/AlphaBites-1.png" style={{maxWidth: '200px', margin: '20px auto', display: 'block'}} alt="Product" />
              <div style={{textAlign: 'center'}}>
                <a onClick={add_to_cart} className="cta-button">
                  CLICK HERE TO ORDER NOW
                </a>
              </div>
              <img src="/text1/images26/trust-stack-compressed.png" alt="" style={{width: '100%', maxWidth: '400px', margin: '20px auto', display: 'block'}} />
              <p style={{textAlign: 'center', fontSize: '14px', color: '#666'}}>Limited Time Offer - While Supplies Last</p>
            </div>
          </article>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div>© 2024 All rights reserved</div>
            <div>
              <a onClick={add_to_cart} style={{cursor: 'pointer'}}>
                <img loading="lazy" src="/text1/images26/logo.gif" title="Counter" alt="" height="31" width="88" />
              </a>
            </div>
          </div>
        </footer>

        <a onClick={add_to_cart} className="floating-cta">SHOP NOW</a>
      </div>
    </>
  );
}