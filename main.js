const text = [
    `Ecco la mail di follow-up. Siamo agli sgoccioli... se vi sembra di non aver combinato niente, provate a pensare a cosa sapevate fare 1 anno fa.. insomma, in una parola? coraggio! Se non sapete cosa è un dojo, avete tempo per approfondire. Netflix e cobra-kai potrebbero darvi molte risposte. La presenza non è facoltativa in questo caso. Vi lascio qui un file di google jamboard per raccogliere qualche domanda nella fase di q&a di domani. Resto in attesa di un vostro riscontro, così da calendarizzare il tutto. Per qualsiasi altro dubbio, ovviamente scrivetemi.`,
    `Qui una volta era tutta cucina. Avete fatto il backup? Come dice Bob Dylan. Se metti i media query nel body fai come Mr. Bean che dipinge con la dinamite nella pittura. Per ora è poco più di una griglia in Excel colorata da un daltonico. Sei già leader di Gridondoro, occhio agli Scriptverde. Il nostro sito one page si anima e farà popup come le mentos nella coca cola. Amo lo stile steampunk delle Soyuz, ma qui è piena fantascienza. Avete fatto il backup?`,
    `Buondì ragassuoli. Code first, Code hard, No jQuery e farvi uscire da Mohole giovedì sera con la soddisfazione di aver addomesticato questa bestia nera. Ovviamente ho un botto di materiale a riguardo quindi state tranquilli. Arrivate carichi e giammangiati. Quindi questa è tutta 'robba bbuona'. Ogni 5 minuti di ritardo = 3 flessioni sui pugni. Ciao raghi,`,
    `Un anno fa non avrei mai pensato che una cosa così semplice potesse emozionarmi. Voglio dire, si tratta di una semplice griglia! Solo qualche era fa - sono un dinosauro ragazzi, nemmeno lo sapevate - pensavo fosse qualcosa di rigido, inflessibile, da colorare come un Rubik o semplicemente per segnare i giorni che mi separavano dalla fine delle superiori. Con il codice, questa dannata cosa strepitosa, mi sono ricreduta.`,
    `Colonne che diventano da sole righe, che fanno comodamente spazio l'un l'altra manco sapessero meglio di noi le regole del distanziamento sociale basta un po' di grid-gap folks! Anche le strutture più rigide hanno una linea, un MARGINE - scusate deformazione poco seria - di rottura, un muro che si può rompere. Sta a noi romperlo o modellarlo.`,
    `Dov'è Vito? Chiama Donato! Metti il footer nel footer, oggi il prof si è tolto un SASSolino dalla scarpa, e al web designer al bar offrigli un #FFFino. Se è lento Windows 8 passa a Windows sopra. Facile essere open con il source degli altri. #CCC se aggiungi una P diventa rosso. Sono altri i body che ci interessano. Più browsers, meno donne.`,
   
    `Sei una grandissima testa di cache. Che vita di merge. Il tag br è un po' come farla nella doccia, nessuno lo ammette, ma tutti lo praticano. NeedCoffee.psd, Suicide.php, Tired.zip, Sushi.css. Declare variables, not war. La mia banda suona Chrome. Grazie per aver migliorato il cazzeggio degli altri utenti. E chi non usa il br scagli la prima pietra.`,
    `Errors are red, my screen is blue, I think I deleted System 32. < /winter > < ?php get_spring ? >. Vallo a prendere in quel $post. Let the good code roll. God save the code. Code never sleeps. Have code will travel. Standin' on a corner, laptop in my hand. C'era un dj alla console chiamato log. head sana in body sano. Il soffitto a Mohole è in Ethernet.`
   
    
  ]
  
  const form = document.querySelector(".lorem-form");
  const numofpara = document.getElementById("numofpara");
  const numofparaRange = document.getElementById("numofparaRange");
  const result = document.querySelector(".lorem-text");
  
  function syncParaNumbers(e) {
    const value = e.target.value;
    numofpara.value = value;
    numofparaRange.value = value;
  }
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
  })
  
  numofpara.addEventListener('input', syncParaNumbers)
  numofparaRange.addEventListener('input', syncParaNumbers)