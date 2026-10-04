/**
 * Erstellt in Google Forms das deutsche Formular "Objektdaten".
 *
 * Verwendung:
 *  1. https://script.google.com -> "Neues Projekt".
 *  2. Den GESAMTEN Code einfügen (letzte Zeile: "// ENDE DES SCRIPTS").
 *  3. Speichern, Funktion `createObjektForm` ausführen, Berechtigungen bestätigen.
 *  4. Links zum Formular stehen im Ausführungsprotokoll.
 */

var JA_NEIN = ['Nein', 'Ja'];
var RICHTUNGEN = ['Nord', 'Nordost', 'Ost', 'Südost', 'Süd', 'Südwest', 'West', 'Nordwest'];
var BLICK = 'Vom Hauptwohnraum (z. B. Wohnzimmer) aus gesehen, nicht vom Balkon, mit normalem Blickfeld';

// Feldtypen: h = Abschnittsüberschrift, t = Text, n = Zahl, d = Dropdown, c = Kontrollkästchen
// Aufbau: [Typ, Titel, Hilfetext, Pflichtfeld, Auswahlmöglichkeiten]
var FIELDS = [
  ['d', 'Objektart', '', true, ['Eigentumswohnung', 'Einfamilienhaus', 'Reihenhaus', 'Mehrfamilienhaus', 'Grundstück', 'Sonstiges']],
  ['d', 'Geplante Vermietung', '', true, JA_NEIN],
  ['t', 'Einlagezahl (optional)', 'laut Grundbuchsauszug'],
  ['t', 'Katastralgemeinde/Katastralgemeindenummer (optional)', ''],
  ['t', 'Grundstücksnummer (optional)', 'laut Grundbuchsauszug'],

  ['h', 'Objektadresse'],
  ['t', 'Straße', '', true],
  ['t', 'Hausnummer', '', true],
  ['t', 'Postleitzahl', '', true],
  ['t', 'Ort', '', true],

  ['h', 'Weitere Objektinformationen'],
  ['t', 'Geschoss (optional)', ''],

  ['h', 'Zusatzadresse'],
  ['t', 'Stiege', '', true],
  ['t', 'Top', '', true],

  ['h', 'Baujahr'],
  ['d', 'Objekt in Bau', '', true, JA_NEIN],
  ['n', 'Baujahr', '', true],

  ['h', 'Flächen'],
  ['n', 'Wohnfläche (m²)', '', true],
  ['n', 'Keller (optional, m²)', ''],

  ['h', 'Sonstige Flächen'],
  ['n', 'Loggia (optional, m²)', ''],
  ['n', 'Dachterrasse (optional, m²)', ''],
  ['n', 'Balkon (optional, m²)', ''],
  ['n', 'Gartenfläche (optional, m²)', ''],

  ['h', 'Dachgeschoss'],
  ['d', 'Dachgeschoss-Ausbau', '', true, ['Die Wohnung liegt nicht im Dachgeschoss', 'Dachgeschoss-Ausbau']],

  ['h', 'Garage'],
  ['c', 'Parken', '', false, ['Garage (Einzelstellplatz)', 'Autoabstellplatz (auch Carport)', 'Tiefgaragenstellplatz (auch Parkdeck)']],
  ['c', 'Garagenausstattung', '', false, ['Massivbauweise', 'Direkter Zugang zum Wohnhaus', 'Überdachter Außenzugang zum Wohnhaus', 'Wasseranschluss in der Garage']],

  ['h', 'Außensanierung - Jahr der Sanierung'],
  ['n', 'Gebäude (optional)', 'Gebäudemauern'],
  ['n', 'Dacheindeckung (optional)', 'inklusive Dämmung und Zimmererarbeiten'],
  ['n', 'Außenfassade (optional)', 'Fassade, Außenputz, Wärmedämmung, Anstrich'],
  ['n', 'Allgemeinbereiche (optional)', 'Stiegenhaus, Lift usw.'],

  ['h', 'Innensanierung - Jahr der Sanierung'],
  ['n', 'Fenster (optional)', ''],
  ['n', 'Heizung (optional)', 'inklusive Therme'],
  ['n', 'Elektro- und Sanitärinstallation (optional)', ''],
  ['n', 'Maler-/Tapezierarbeiten, Bodenbeläge, Innentüren (optional)', ''],
  ['n', 'Innenputz, Innenstiegen (optional)', ''],

  ['h', 'Ausrichtung'],
  ['d', 'Die Wohnräume (Wohnzimmer usw.) sind ausgerichtet nach', BLICK, true, RICHTUNGEN],
  ['d', 'Die Wohnung ist ausgerichtet zur/zum', BLICK, true, ['Hauptstraße, Bahnanlagen, Gewerbe-/Industriegebiet', 'Nebenstraße / ruhige Straße', 'Innenhof', 'Grünfläche / Garten', 'Sonstiges']],

  ['h', 'Badausstattung'],
  ['n', 'Anzahl der Badezimmer', '', true],
  ['c', 'Badausstattung', '', false, ['Dusche', 'Badewanne', 'Fenster zu öffnen', 'WC', 'Separate Fußbodenheizung (keine Raumheizung)', 'Wellnesselemente im Bad (z. B. Whirlpool, Erlebnis- oder Dampfdusche usw.)', 'Entkernung des gesamten Badezimmers (Boden oder raumhoch gefliest)']],

  ['h', 'Heizung'],
  ['d', 'Heizungssystem', '', true, ['Zentralheizung', 'Etagenheizung', 'Einzelöfen', 'Fernwärme', 'Keine Heizung']],
  ['d', 'Heizmedium', 'Bitte Heizmedium auswählen', true, ['Gas', 'Öl', 'Fernwärme', 'Strom', 'Holz / Pellets', 'Wärmepumpe', 'Sonstiges']],
  ['c', 'Zusätzliche Heizsysteme', '', false, ['Wärmepumpe', 'Kachelofen', 'Offener Kamin/Schwedenofen', 'Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung', 'Solaranlage', 'Klimaanlage (zentral und fest montiert)']],

  ['h', 'Außenanlagen'],
  ['c', 'Außenanlagen', '', false, ['Innenhof (nicht öffentlicher Gemeinschaftsgarten/Spielplatz für Bewohner)']],

  ['h', 'Weitere Ausstattung'],
  ['c', 'Weitere Ausstattungsmerkmale', '', false, ['Hochwertige Innentüren (unter anderem Norgia-Türen)', 'Flächenheizung (Wand-/Fußbodenheizung)', 'Großzügige Freiflächen', 'Lift', 'Sauna oder Infrarotkabine', 'Elektrisches Garagentor', 'Exklusive Bodenbeläge (unter anderem Natursteinboden, Sternparkett usw.)']]
];

function createObjektForm() {
  var form = FormApp.create('Objektdaten');
  form.setDescription('Angaben zum Objekt. Pflichtfelder sind mit * gekennzeichnet.');

  var numberRule = FormApp.createTextValidation()
    .setHelpText('Bitte eine Zahl eingeben.')
    .requireNumber()
    .build();

  for (var i = 0; i < FIELDS.length; i++) {
    var f = FIELDS[i];
    var type = f[0], title = f[1], help = f[2] || '', required = !!f[3], choices = f[4];
    var item;

    if (type === 'h') {
      form.addSectionHeaderItem().setTitle(title);
      continue;
    } else if (type === 't') {
      item = form.addTextItem();
    } else if (type === 'n') {
      item = form.addTextItem().setValidation(numberRule);
    } else if (type === 'd') {
      item = form.addListItem().setChoiceValues(choices);
    } else if (type === 'c') {
      item = form.addCheckboxItem().setChoiceValues(choices);
    }

    item.setTitle(title).setRequired(required);
    if (help) item.setHelpText(help);
  }

  form.setConfirmationMessage('Vielen Dank! Ihre Angaben wurden gespeichert.');

  Logger.log('Bearbeiten: ' + form.getEditUrl());
  Logger.log('Ausfüllen:  ' + form.getPublishedUrl());
}

// ENDE DES SCRIPTS
