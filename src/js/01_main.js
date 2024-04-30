const form = document.querySelector(".input__form");
const view_field = document.querySelector(".output__view");
const code_field = document.querySelector(".output__code");
const copytext = document.getElementById("copytext");
const copycode = document.getElementById("copycode");
const phoneInputs = document.querySelectorAll('input[type="tel"]');

const requiredInputs = document.querySelectorAll('input[required]');
console.log(requiredInputs);
requiredInputs.forEach(el => {
  el.parentNode.querySelector(".inputfield__label").classList.add("--required")
});

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
  mask: "*{1,50}[.*{1,50}][.*{1,50}]@voiceofromni.com.u\\a",
  greedy: false,
  clearIncomplete: false,
  showMaskOnHover: true,
  placeholder: "*",
  casing: "lower",
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
  let data = Object.fromEntries(new FormData(form).entries());
  copytext.disabled = false;
  copycode.disabled = false;

  console.table(data);

  let telinputs = form.querySelectorAll(".inputfield__input[type='tel']");

  telinputs.forEach(el => {
    let checkbox = el.parentNode.querySelector(".inputfield__whatsapp-radio")
    if (checkbox.checked) {
      data.whatsapp_tel = el.value.replaceAll("(", "").replaceAll(")", "").replaceAll(" - ", "")
    } else {}
  });

  console.table(data);

  let signature = `<div style="font-family:'Nunito Sans',Tahoma,sans-serif;font-size:small;font-size:14px;color:#000;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0">
  <p>With best regards</p>
  <hr color=#FF2E17>
  <table>
    <tr>
      <td style="padding-left:1em;padding-right:1em;min-width:8em" rowspan=4>
        <a href=https://voiceofromni.com.ua
           rel="noopener noreferrer"
           target="_blank">
          <img alt="Voice of Romni logo"
               src="https://budfy.github.io/signature_generator/img/Logo round dotted.png"
               style="width:8em">
        </a>
      </td>
      <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
        <h3 style="font-size:1.25em;color:#ff2e17;padding:0;margin:0;min-width:10em">${ data.first_name } ${ data.last_name }</h3>
      <td style="padding-left:.5em;padding-right:.5em;">
        <a href="mailto:${ data.email }">${ data.email }</a>
      </td>
    <tr>
      <td style="padding-left:.5em;padding-right:.5em;border-right:1px dotted #ff2e17">
        <b>
          <i>${ data.position }</i>
        </b>
      </td>
      <td style="padding-left:.5em;padding-right:.5em;">
        <a href="tel:${ data.primary_tel.replaceAll("(", "").replaceAll(")", "").replaceAll("-", "") }"> ${ data.primary_tel }
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
            ${data.telegram_uid && data.telegram_uid !== "@"|| data.telegram_uid!==""?`<td style="padding-right:.25em">
              <a href="https://t.me/${data.telegram_uid.replaceAll("@","")}"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Telegram icon"
                     src="https://budfy.github.io/signature_generator/img/telegram.png"
                     style="width:1.5em">
              </a>
            </td>`:''
    }
            ${data.whatsapp_tel?`<td style="padding-right:.25em">
              <a href = "https://wa.me/${data.whatsapp_tel}"
                 rel="noopener noreferrer"
                 target="_blank"
                 style="display:inline-block;width:1.5em">
                <img alt="Whatsapp icon"
                     src="https://budfy.github.io/signature_generator/img/whatsapp.png"
                     style="width:1.5em">
              </a>
            </td>`:''}
          </tr>
        </table>
      </td>
      <td style="padding-left:.5em">
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

copytext.addEventListener('click', 'copyTextFunc');
copycode.addEventListener('click', 'copyCodeFunc');

function copyTextFunc(e) {

}

function copyCodeFunc(e) {

}
