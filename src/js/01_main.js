const form = document.querySelector(".input__form");

function formSubmit(e) {
  e.preventDefault();
  console.dir(e);
  console.dir(form);
  const data = Object.fromEntries(new FormData(form).entries());
  console.dir(data);
  let view_field = document.querySelector(".output__view");
  let code_field = document.querySelector(".output__code");
  let signature = `<div style="font-family:'Nunito Sans',Tahoma,sans-serif;font-size:small;font-size:14px;color:#000;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0">
  <p>With best regards
    <hr color=#FF2E17>
    <table>
      <tr>
        <td style=padding-left:1em;padding-right:1em;padding-top:.5em;padding-bottom:.5em;min-width:8em
            rowspan=4><a href=https://voiceofromni.com.ua
             rel="noopener noreferrer"
             target=_blank><img alt="Voice of Romni logo"
                 src = "https://budfy.github.io/signature_generator/img/Logo round dotted.png"
                 style=width:8em
                 width=100></a>
      <tr>
        <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
          <h3 style=font-size:1.25em;color:#ff2e17;padding:0;margin:0;min-width:10em>Roman Serdiuk</h3>
        <td style=padding-left:.5em;padding-right:.5em;padding-top:.5em;padding-bottom:.5em><a href=mailto:roman.serdiuk@voiceofromni.com.ua>roman.serdiuk@voiceofromni.com.ua</a>
      <tr>
        <td style="padding-left:.5em;padding-right:.5em;padding-top:.5em;padding-bottom:.5em;border-right:1px dotted #ff2e17"><b><i>Projects manager</i></b>
        <td style=padding-left:.5em;padding-right:.5em;padding-top:.5em;padding-bottom:.5em><a href=tel:+380661143558>+38(066)114 35 58</a>
      <tr>
        <td style="padding-left:.5em;padding-right:.5em;padding-top:.5em;padding-bottom:.5em;border-right:1px dotted #ff2e17">
          <table>
            <tr>
              <td style=padding-right:.5em><a href=https://www.facebook.com/voiceofromni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:2em><img alt="Facebook icon"
                       src = "https://budfy.github.io/signature_generator/img/facebook.png"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://www.instagram.com/voice_of_romni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Instagram icon"
                       src = "https://budfy.github.io/signature_generator/img/instagram.png"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://www.linkedin.com/company/voice-of-romni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Linkedin icon"
                       src = "https://budfy.github.io/signature_generator/img/linkedin.png"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://t.me/serdyuk
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Telegram icon"
                       src = "https://budfy.github.io/signature_generator/img/telegram.png"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://wa.me/+380661143558
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Whatsapp icon"
                       src = "https://budfy.github.io/signature_generator/img/whatsapp.png"
                       style=width:1.5em></a>
          </table>
        <td style=padding-left:.5em;padding-right:.5em;padding-top:.5em;padding-bottom:.5em><a href=tel:+3809830706677>+38(098)307 06 77</a>
    </table>
</div>`;
  view_field.innerHTML = signature;
  code_field.innerText = signature;
};
form.addEventListener("submit", formSubmit);
