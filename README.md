# Praktisk web - smartlights

![](https://github.com/rts-cmk-opgaver/praktikperiode-smartlights/blob/main/ctrlpanel.png)
<br>*Ikke i korrekt skala*

## Opgavebeskrivelse

Til brug for det kommende valgfri specialefag om programmering og styring af fysiske enheder, skal I udvikle et brugerinterface til at kontrollere lyset i et hus. Se i afsnittet 'krav og delopgaver' for at få overblik over opgaven. 
Du bestemmer selv, hvilket framework du vil bruge (React, Vue, Next, Gatsby, etc...). 

**Github**<br>
   1. Der **skal pushes dagligt**, så du har en backup online i tilfælde af computer nedbrud og andet. 
   2. De enkelte komponenter **skal udvikles på selvstændige branches**.
   3. Der **skal foretages et merge til master** når et komponenet er færdigt, men lad være med at slette branchen, da dine branches er med til at give indblik i din proces.
   

**Start med at**<br>
Analysere layoutet for at identificere komponenterne og gå herefter igang med at udvikle de enkelte komponenter. Det er vigtigt at du sikre dig at enkelte "elementer" ikke udvikles mere end én gang! Går noget igen, er der *formentligt* et komponent...

## Formål
Opgavens formål er at opbygge rutine og erfaring i arbejdsgangene omkring udvikling.

![The Karate Kid - wax on, wax off](https://github.com/rts-cmk-opgaver/praktikperiode-uicomponents/blob/master/giphy.gif)

## Krav og valgfrie dele
Opgaven indeholder tre hoved-krav som skal opfyldes. Kravene er opstillet i rækkefølge, så du kan bruge dem som en slags guide til arbejdet. Herudover er der nogle ekstraopgaver, som ikke er krav, men som du kan udfordre dig selv med. Disse er ekstra udfordringer og behøver ikke være løst, for at opfylde kravet til opgven.

  1. Opgaven skal opbygges komponentbaseret. De enkelte komponenter skal udvikles på selvstændige github branches.
  2. Løsningen skal bruge fx context eller useReducer hooket til at samle alle data, og senere gøre det lettere at kommunikere med Philips Hue api'et - så data som fx. navne på rummene og antallet af pærer mv. trækkes fra context eller reducer.
  For at simplificere opgaven, kan det være en idé, først at tilføje data direkte i context eller reducer-filen, for herefter at extracte data til en ekstern json-fil som fetches.
  3. Tilføj animationer og overgange mellem de enkelte views (video i demo-mappen).  *-- Make it work, make it pretty... --*
  
  **Ekstra, valgfri opgaver, i ikke prioriteret rækkefølge:** 
  * React Router er opdateret og er et forsøg på at samle "det bedste fra begge verdener". Brug React Router i stedet for Reach Router.
  * Få applikationen til at 'huske' indstillinger for lysstyrke og farve for de enkelte pærer (localstorage/cookies).
  * Tilføj et splash screen (evt. med animationer) til applikationen.
  * Tilføj et login-flow til applikationen med random brugernavn og adgangskode.
  * Tilføj check på login, så kun en bruger med brugernavnet 'user' og adgangskoden '1234' kan logge ind.
  * Download de brugte skrifter og tilføj dem til din css-fil så du ikke er afhængig af Googles font-cdn.
  
## Varighed
Du har 5 arbejdsdage til at løse praktikopgaven.

## Applikation tech stack
ReactJS<br>
React Context<br>
TailwindCSS el.
Framer Motion el.
Github / Netlify (deployment)<br>

## Matrialer
Du skal downloade XD filen herfra: https://dribbble.com/shots/7849062-Smart-lights-Free-Adobe-XD

### Font
Fonten som bruges i opgaven hedder Circular. Det er dog en købefont. <br>Du kan bruge Google fonten Montserrat som alternativ.

## Aflevering
Del-aflevering af det kodede layout tirsdag d. 8. feb 2022. kl. 12:00<br>
Du har afleveret når din applikation er hostet på Netlify eller github pages og linket hertil er sat ind herunder.<br><br>
**Projekt url:** Skriv din Netlify / github pages adresse her! Fx.: https://detsmartelys.netlify.app

