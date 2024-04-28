const form = document.querySelector(".input__form");
const view_field = document.querySelector(".output__view");
const code_field = document.querySelector(".output__code");
const copytext = document.getElementById("copytext");
const copycode = document.getElementById("copycode");
const phoneInputs = document.querySelectorAll('input[type="tel"]');

const telMask = new Inputmask("+38(999)999-99-99", {
  placeholder: "*",
  greedy: true,
  validator: "[0-9]",
  inputmode: "tel",
});

phoneInputs.forEach(el => {
  telMask.mask(el);
});

Inputmask({
  mask: "*{1,50}[.*{1,50}][.*{1,50}]@*{1,50}.*{1,20}[.*{1,20}][.*{1,20}]",
  greedy: false,
  clearIncomplete: false,
  showMaskOnHover: true,
  placeholder: "*",
  definitions: {
    '*': {
      validator: "[^_@.]"
    }
  }
}).mask(document.getElementById("email"));

Inputmask({
  mask: "@*{1,50}[.*{1,20}][.*{1,20}]",
  greedy: false,
  clearIncomplete: false,
  showMaskOnHover: true,
  placeholder: "*",
  definitions: {
    '*': {
      validator: "[^_@.]"
    }
  }
}).mask(document.getElementById("telegram_uid"))


function formReset(e) {
  view_field.innerHTML = "";
  code_field.innerHTML = "";
  copytext.disabled = true;
  copycode.disabled = true;
}

function formSubmit(e) {
  e.preventDefault();
  console.dir(e);
  console.dir(form);
  const data = Object.fromEntries(new FormData(form).entries());
  console.dir(data);
  copytext.disabled = false;
  copycode.disabled = false;

  let signature = `<div style="font-family:'Nunito Sans',Tahoma,sans-serif;font-size:small;font-size:14px;color:#000;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0">
  <p>With best regards</p>
  <hr color=#FF2E17>
  <table>
    <tr>
      <td style="padding-left:1em;padding-right:1em;min-width:8em rowspan=4">
        <a href=https://voiceofromni.com.ua
           rel="noopener noreferrer"
           target="_blank">
          <img alt="Voice of Romni logo"
               src="https://budfy.github.io/signature_generator/img/Logo round dotted.png"
               style="width:8em">
        </a>
      </td>
      <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
        <h3 style="font-size:1.25em;color:#ff2e17;padding:0;margin:0;min-width:10em">${data.first_name} ${data.last_name}</h3>
      <td style="padding-left:.5em;padding-right:.5em;">
        <a href="mailto:${data.email}">${data.email}</a>
      </td>
    <tr>
      <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
        <b>
          <i>${data.position}</i>
        </b>
      </td>
      <td style="padding-left:.5em;padding-right:.5em;">
        <a href="tel:${data.primary_tel.replaceAll("(", "").replaceAll(")", "").replaceAll("-", "") }"> ${data.primary_tel}
        </a>
      </td>
    <tr>
      <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
        <table>
          <tr>
            <td style="padding-right:.25em">
              <a href="https://www.facebook.com/voiceofromni"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Facebook icon"
                     src="https://budfy.github.io/signature_generator/img/facebook.png"
                     style="width:1.5em">
              </a>
            </td>
            <td style="padding-right:.25em">
              <a href="https://www.instagram.com/voice_of_romni"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Instagram icon"
                     src="https://budfy.github.io/signature_generator/img/instagram.png"
                     style="width:1.5em">
              </a>
            </td>
            <td style="padding-right:.25em">
              <a href="https://www.linkedin.com/company/voice-of-romni"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Linkedin icon"
                     src="https://budfy.github.io/signature_generator/img/linkedin.png"
                     style="width:1.5em">
              </a>
            </td>
            <td style="padding-right:.25em">
              <a href="https://t.me/${data.telegram_uid.replaceAll("@","")}"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Telegram icon"
                     src="https://budfy.github.io/signature_generator/img/telegram.png"
                     style="width:1.5em">
              </a>
            </td>
            <td style="padding-right:.25em">
              <a href = "https://wa.me/${data.whatsapp_tel.replaceAll("(","").replaceAll(")","").replaceAll(" - ","")}"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Whatsapp icon"
                     src="https://budfy.github.io/signature_generator/img/whatsapp.png"
                     style="width:1.5em">
              </a>
            </td>
          </tr>
        </table>
      </td>
      <td>
        <a href="tel:${data.secondary_tel.replaceAll("(", "").replaceAll(")", "").replaceAll("-", "")}">
        ${ data.secondary_tel}
        </a>
      </td>
  </table>
</div>`;
  view_field.innerHTML = signature;
  code_field.innerText = signature;
};

form.addEventListener("submit", formSubmit);
form.addEventListener("reset", formReset);
