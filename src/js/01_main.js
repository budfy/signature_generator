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
                 src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZnR_zxBFpoK7Wn-sxoFrdylKqU_ADGgVSLeQTozdKChOgyaiKazuudj9cpcFN8Isj2Gh5G_yR76D6zz-TcVBISOL4nN1pKGAQ=s1600-rw-v1"
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
                       src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZNmfPNojJjAe0pZz0yoxS8vG77IAcgNvQC39_BwfddlIq1QE_EczG7MEoR_FdmA4OpRDoH3EgcoLckb95g6waUiknPAUM1cag=s1600-rw-v1"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://www.instagram.com/voice_of_romni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Instagram icon"
                       src="https://lh3.googleusercontent.com/drive-viewer/AKGpihY2y8QDMnxScMjHxTB3ZLk7eq5qbi9ISoXBUhpadJfiFY0BRiSLHiHz7EVEpRUGdjHyQd7N7C31FdGD9Pik3Hkrx9xMbP2ap-4=s1600-rw-v1"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://www.linkedin.com/company/voice-of-romni
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Linkedin icon"
                       src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaVjqMYzD8lySKc6Rm3q9J0fLPB6cBtAawuD_Bh9Fq55zS9J1JPwaZlrVbPi6FncJqMhNw7I1LbC27btzv_cQlg9GyjOd8qsJE=s1600-rw-v1"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://t.me/serdyuk
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Telegram icon"
                       src="https://lh3.googleusercontent.com/drive-viewer/AKGpihb-iNqG_FTxKx_gtSncIyCOJl9Z2gh1hj9zHhC6vjPCLq5p7lU59Y2AUGUgirTCjsMl1e7BXQ7ZvH01V_sObtFUuGwnrP1uVg=s1600-rw-v1"
                       style=width:1.5em></a>
              <td style=padding-right:.5em><a href=https://wa.me/+380661143558
                   rel="noopener noreferrer"
                   target=_blank
                   style=display:inline-block;width:1.5em><img alt="Whatsapp icon"
                       src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYbd4pBImSdqf3pKWdm4gA4TD4YN2xbLYjQRia76SwhkPVi1UmRwiy9lPBtG380uFdfz8yktNC3qEUjKsRQ-pZJo2yipsscVQ=s1600-rw-v1"
                       style=width:1.5em></a>
          </table>
        <td style=padding-left:.5em;padding-right:.5em;padding-top:.5em;padding-bottom:.5em><a href=tel:+3809830706677>+38(098)307 06 77</a>
    </table>
</div>`;
  view_field.innerHTML = signature;
  code_field.innerText = signature;
};
form.addEventListener("submit", formSubmit);
