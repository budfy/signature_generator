const form = document.querySelector(".input__form");
let view_field = document.querySelector(".output__view");
let code_field = document.querySelector(".output__code");

function formReset(e) {
  view_field.innerHTML = "";
  code_field.innerHTML = "";
}

function formSubmit(e) {
  e.preventDefault();
  console.dir(e);
  console.dir(form);
  const data = Object.fromEntries(new FormData(form).entries());
  console.dir(data);

  let signature = `<div style="font-family:'Nunito Sans',Tahoma,sans-serif;font-size:small;font-size:14px;color:#000;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0">
  <p>With best regards
    <hr color=#FF2E17>
    <table>
      <tr>
        <td style=padding-left:1em;padding-right:1em;min-width:8em
            rowspan=4><a href=https://voiceofromni.com.ua
             rel="noopener noreferrer"
             target=_blank><img alt="Voice of Romni logo"
                 src = "https://budfy.github.io/signature_generator/img/Logo round dotted.png"
                 style=width:8em
                 width=100></a>
      <tr>
        <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
          <h3 style=font-size:1.25em;color:#ff2e17;padding:0;margin:0;min-width:10em>${data.first_name} ${data.last_name}</h3>
        <td style=padding-left:.5em;padding-right:.5em;><a href=mailto:${data.email}>${data.email}</a>
      <tr>
        <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17"><b><i>${data.position}</i></b>
        <td style=padding-left:.5em;padding-right:.5em;><a href=tel:${data.primary_tel}>${data.primary_tel}</a>
      <tr>
        <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
          <table>
            <tr>
              <td style=padding-right:.25em><a href=https://www.facebook.com/voiceofromni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:2em><img alt="Facebook icon"
                       src = "https://budfy.github.io/signature_generator/img/facebook.png"
                       style=width:1.5em></a>
              <td style=padding-right:.25em><a href=https://www.instagram.com/voice_of_romni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Instagram icon"
                       src = "https://budfy.github.io/signature_generator/img/instagram.png"
                       style=width:1.5em></a>
              <td style=padding-right:.25em><a href=https://www.linkedin.com/company/voice-of-romni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em>
                   <img alt="Linkedin icon"
                       src = "https://budfy.github.io/signature_generator/img/linkedin.png"
                       style=width:1.5em></a>
              <td style=padding-right:.25em><a href=https://t.me/${data.telegram_uid}
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Telegram icon"
                       src = "https://budfy.github.io/signature_generator/img/telegram.png"
                       style=width:1.5em></a>
              <td style=padding-right:.25em><a href=https://wa.me/${data.whatsapp_tel}
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Whatsapp icon"
                       src = "https://budfy.github.io/signature_generator/img/whatsapp.png"
                       style=width:1.5em>
                       </a>
          </table>
        <td><a href=tel:${data.secondary_tel}>${data.secondary_tel}</a></td>
    </table>
</div>`;
  view_field.innerHTML = signature;
  code_field.innerText = signature;
};
form.addEventListener("submit", formSubmit);
form.addEventListener("reset", formReset);
