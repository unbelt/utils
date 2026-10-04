/**
 * Erstellt in Google Forms das deutsche Formular "Objektdaten".
 *
 * Verwendung:
 *  1. https://script.google.com öffnen -> "Neues Projekt".
 *  2. Diesen Code einfügen und speichern.
 *  3. Funktion `createObjektForm` ausführen (Berechtigungen bestätigen).
 *  4. Die Links zum Formular stehen im Ausführungsprotokoll (Strg+Enter).
 */
function createObjektForm() {
  var form = FormApp.create('Objektdaten');
  form.setDescription('Angaben zum Objekt. Pflichtfelder sind mit * gekennzeichnet.');

  var JA_NEIN = ['Nein', 'Ja'];

  function header(title) {
    form.addSectionHeaderItem().setTitle(title);
  }
  function text(title, help, required) {
    var i = form.addTextItem().setTitle(title).setRequired(!!required);
    if (help) i.setHelpText(help);
    return i;
  }
  function number(title, help, required) {
    var i = form.addTextItem().setTitle(title).setRequired(!!required);
    i.setValidation(FormApp.createTextValidation()
      .setHelpText('Bitte eine Zahl eingeben.')
      .requireNumber().build());
    if (help) i.setHelpText(help);
    return i;
  }
  function dropdown(title, choices, required, help) {
    var i = form.addListItem().setTitle(title).setChoiceValues(choices).setRequired(!!required);
    if (help) i.setHelpText(help);
    return i;
  }
  function checkboxes(title, choices, help) {
    var i = form.addCheckboxItem().setTitle(title).setChoiceValues(choices).setRequired(false);
    if (help) i.setHelpText(help);
    return i;
  }

  // --- Allgemein ---
  dropdown('Objektart', ['Eigentumswohnung', 'Einfamilienhaus', 'Reihenhaus', 'Mehrfamilienhaus', 'Grundstück', 'Sonstiges'], true);
  dropdown('Geplante Vermietung', JA_NEIN, true);
  text('Einlagezahl (optional)', 'laut Grundbuchsauszug');
  text('Katastralgemeinde/Katastralgemeindenummer (optional)');
  text('Grundstücksnummer (optional)', 'laut Grundbuchsauszug');

  // --- Objektadresse ---
  header('Objektadresse');
  text('Straße', null, true);
  text('Hausnummer', null, true);
  text('Postleitzahl', null, true);
  text('Ort', null, true);

  // --- Weitere Objektinformationen ---
  header('Weitere Objektinformationen');
  text('Geschoss (optional)');

  // --- Zusatzadresse ---
  header('Zusatzadresse');
  text('Stiege', null, true);
  text('Top', null, true);

  // --- Baujahr ---
  header('Baujahr');
  dropdown('Objekt in Bau', JA_NEIN, true);
  number('Baujahr', null, true);

  // --- Flächen ---
  header('Flächen');
  number('Wohnfläche (m²)', null, true);
  number('Keller (optional, m²)');

  header('Sonstige Flächen');
  number('Loggia (optional, m²)');
  number('Dachterrasse (optional, m²)');
  number('Balkon (optional, m²)');
  number('Gartenfläche (optional, m²)');

  // --- Dachgeschoss ---
  header('Dachgeschoss');
  dropdown('Dachgeschoss-Ausbau', [
    'Die Wohnung liegt nicht im Dachgeschoss',
    'Dachgeschoss-Ausbau'
  ], true);

  // --- Garage ---
  header('Garage');
  checkboxes('Parken', [
    'Garage (Einzelstellplatz)',
    'Autoabstellplatz (auch Carport)',
    'Tiefgaragenstellplatz (auch Parkdeck)'
  ]);
  checkboxes('Garagenausstattung', [
    'Massivbauweise',
    'Direkter Zugang zum Wohnhaus',
    'Überdachter Außenzugang zum Wohnhaus',
    'Wasseranschluss in der Garage'
  ]);

  // --- Außensanierung ---
  header('Außensanierung – Jahr der Sanierung');
  text('Gebäude (optional)', 'Gebäudemauern');
  text('Dacheindeckung (optional)', 'inklusive Dämmung und Zimmererarbeiten');
  text('Außenfassade (optional)', 'Fassade, Außenputz, Wärmedämmung, Anstrich');
  text('Allgemeinbereiche (optional)', 'Stiegenhaus, Lift usw.');

  // --- Innensanierung ---
  header('Innensanierung – Jahr der Sanierung');
  text('Fenster (optional)');
  text('Heizung (optional)', 'inklusive Therme');
  text('Elektro- und Sanitärinstallation (optional)');
  text('Maler-/Tapezierarbeiten, Bodenbeläge, Innentüren (optional)');
  text('Innenputz, Innenstiegen (optional)');

  // --- Ausrichtung ---
  header('Ausrichtung');
  var richtungen = ['Nord', 'Nordost', 'Ost', 'Südost', 'Süd', 'Südwest', 'West', 'Nordwest'];
  dropdown('Die Wohnräume (Wohnzimmer usw.) sind ausgerichtet nach', richtungen, true,
    'Vom Hauptwohnraum (z. B. Wohnzimmer) aus gesehen, nicht vom Balkon, mit normalem Blickfeld');
  dropdown('Die Wohnung ist ausgerichtet zur/zum', [
    'Hauptstraße, Bahnanlagen, Gewerbe-/Industriegebiet',
    'Nebenstraße / ruhigen Straße',
    'Innenhof',
    'Grünfläche / Garten',
    'Sonstiges'
  ], true, 'Vom Hauptwohnraum (z. B. Wohnzimmer) aus gesehen, nicht vom Balkon, mit normalem Blickfeld');

  // --- Badausstattung ---
  header('Badausstattung');
  number('Anzahl der Badezimmer', null, true);
  checkboxes('Badausstattung', [
    'Dusche',
    'Badewanne',
    'Fenster zu öffnen',
    'WC',
    'Separate Fußbodenheizung (keine Raumheizung)',
    'Wellnesselemente im Bad (z. B. Whirlpool, Abenteuer- oder Dampfdusche usw.)',
    'Entkernung des gesamten Badezimmers (Boden oder raumhoch gefliest)'
  ]);

  // --- Heizung ---
  header('Heizung');
  dropdown('Heizungssystem', ['Zentralheizung', 'Etagenheizung', 'Einzelöfen', 'Fernwärme', 'Keine Heizung'], true);
  dropdown('Heizmedium', ['Gas', 'Öl', 'Fernwärme', 'Strom', 'Holz / Pellets', 'Wärmepumpe', 'Sonstiges'], true,
    'Bitte Heizmedium auswählen');
  checkboxes('Zusätzliche Heizsysteme', [
    'Wärmepumpe',
    'Kachelofen',
    'Offener Kamin/Schwedenofen',
    'Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung',
    'Solaranlage',
    'Klimaanlage (zentral und fest montiert)'
  ]);

  // --- Außenanlagen ---
  header('Außenanlagen');
  checkboxes('Außenanlagen', [
    'Innenhof (nicht öffentlicher Gemeinschaftsgarten/Spielplatz für Bewohner)'
  ]);

  // --- Weitere Ausstattung ---
  header('Weitere Ausstattung');
  checkboxes('Weitere Ausstattungsmerkmale', [
    'Hochwertige Innentüren (unter anderem Norgia-Türen)',
    'Flächenheizung (Wand-/Fußbodenheizung)',
    'Großzügige Freiflächen',
    'Lift',
    'Sauna oder Infrarotkabine',
    'Elektrisches Garagentor',
    'Exklusive Bodenbeläge (unter anderem Natursteinboden, Sternparkett usw.)'
  ]);

  form.setConfirmationMessage('Vielen Dank! Ihre Angaben wurden gespeichert.');

  Logger.log('Bearbeiten: ' + form.getEditUrl());
  Logger.log('Ausfüllen:  ' + form.getPublishedUrl());
}
