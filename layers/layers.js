var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Emplacement_1 = new ol.format.GeoJSON();
var features_Emplacement_1 = format_Emplacement_1.readFeatures(json_Emplacement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emplacement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emplacement_1.addFeatures(features_Emplacement_1);
var lyr_Emplacement_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emplacement_1, 
                style: style_Emplacement_1,
                popuplayertitle: 'Emplacement',
                interactive: true,
    title: 'Emplacement<br />\
    <img src="styles/legend/Emplacement_1_0.png" /> Attribué<br />\
    <img src="styles/legend/Emplacement_1_1.png" /> Non attribué<br />\
    <img src="styles/legend/Emplacement_1_2.png" /> Réservé<br />' });
var format_Etatdesspultures_2 = new ol.format.GeoJSON();
var features_Etatdesspultures_2 = format_Etatdesspultures_2.readFeatures(json_Etatdesspultures_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etatdesspultures_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etatdesspultures_2.addFeatures(features_Etatdesspultures_2);
var lyr_Etatdesspultures_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etatdesspultures_2, 
                style: style_Etatdesspultures_2,
                popuplayertitle: 'Etat des sépultures',
                interactive: true,
    title: 'Etat des sépultures<br />\
    <img src="styles/legend/Etatdesspultures_2_0.png" /> N/A<br />\
    <img src="styles/legend/Etatdesspultures_2_1.png" /> Mauvais<br />\
    <img src="styles/legend/Etatdesspultures_2_2.png" /> Moyen<br />\
    <img src="styles/legend/Etatdesspultures_2_3.png" /> Bon<br />\
    <img src="styles/legend/Etatdesspultures_2_4.png" /> Très bon<br />' });
var format_DatagranitCavalairesurmer_3 = new ol.format.GeoJSON();
var features_DatagranitCavalairesurmer_3 = format_DatagranitCavalairesurmer_3.readFeatures(json_DatagranitCavalairesurmer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatagranitCavalairesurmer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatagranitCavalairesurmer_3.addFeatures(features_DatagranitCavalairesurmer_3);
var lyr_DatagranitCavalairesurmer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DatagranitCavalairesurmer_3, 
                style: style_DatagranitCavalairesurmer_3,
                popuplayertitle: 'Data granit - Cavalaire sur mer',
                interactive: true,
                title: '<img src="styles/legend/DatagranitCavalairesurmer_3.png" /> Data granit - Cavalaire sur mer'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Emplacement_1.setVisible(false);lyr_Etatdesspultures_2.setVisible(false);lyr_DatagranitCavalairesurmer_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Emplacement_1,lyr_Etatdesspultures_2,lyr_DatagranitCavalairesurmer_3];
lyr_Emplacement_1.set('fieldAliases', {'fid': 'fid', 'prénom nom': 'prénom nom', 'Lieu de naissance': 'Lieu de naissance', 'Ville de naissance': 'Ville de naissance', 'code postal de naissance': 'code postal de naissance', 'Date de naissance': 'Date de naissance', 'Gentilé': 'Gentilé', 'Genre': 'Genre', 'Date de décés': 'Date de décés', 'mail': 'mail', 'Age': 'Age', 'Téléphone': 'Téléphone', 'Numéro': 'Numéro', 'Emplacement': 'Emplacement', 'date de réservation': 'date de réservation', 'Type de concession': 'Type de concession', 'date de renouvellement': 'date de renouvellement', });
lyr_Etatdesspultures_2.set('fieldAliases', {'fid': 'fid', 'prénom nom': 'prénom nom', 'Lieu de naissance': 'Lieu de naissance', 'Ville de naissance': 'Ville de naissance', 'code postal de naissance': 'code postal de naissance', 'Date de naissance': 'Date de naissance', 'Gentilé': 'Gentilé', 'Genre': 'Genre', 'Date de décés': 'Date de décés', 'mail': 'mail', 'Age': 'Age', 'Téléphone': 'Téléphone', 'Numéro': 'Numéro', 'Emplacement': 'Emplacement', 'date de réservation': 'date de réservation', 'Type de concession': 'Type de concession', 'date de renouvellement': 'date de renouvellement', 'DATAGRANITE_Etat': 'DATAGRANITE_Etat', 'Lat': 'Lat', 'Long': 'Long', });
lyr_DatagranitCavalairesurmer_3.set('fieldAliases', {'fid': 'fid', 'prénom nom': 'prénom nom', 'Lieu de naissance': 'Lieu de naissance', 'Ville de naissance': 'Ville de naissance', 'code postal de naissance': 'code postal de naissance', 'Date de naissance': 'Date de naissance', 'Gentilé': 'Gentilé', 'Genre': 'Genre', 'Date de décés': 'Date de décés', 'mail': 'mail', 'Age': 'Age', 'Téléphone': 'Téléphone', 'Numéro': 'Numéro', 'Emplacement': 'Emplacement', 'date de réservation': 'date de réservation', 'Type de concession': 'Type de concession', 'date de renouvellement': 'date de renouvellement', 'DATAGRANITE_Etat': 'DATAGRANITE_Etat', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Emplacement_1.set('fieldImages', {'fid': 'TextEdit', 'prénom nom': 'TextEdit', 'Lieu de naissance': 'TextEdit', 'Ville de naissance': 'TextEdit', 'code postal de naissance': 'TextEdit', 'Date de naissance': 'DateTime', 'Gentilé': 'TextEdit', 'Genre': 'TextEdit', 'Date de décés': 'DateTime', 'mail': 'TextEdit', 'Age': 'TextEdit', 'Téléphone': 'Range', 'Numéro': 'Range', 'Emplacement': 'TextEdit', 'date de réservation': 'DateTime', 'Type de concession': 'TextEdit', 'date de renouvellement': 'TextEdit', });
lyr_Etatdesspultures_2.set('fieldImages', {'fid': 'TextEdit', 'prénom nom': 'TextEdit', 'Lieu de naissance': 'TextEdit', 'Ville de naissance': 'TextEdit', 'code postal de naissance': 'TextEdit', 'Date de naissance': 'DateTime', 'Gentilé': 'TextEdit', 'Genre': 'TextEdit', 'Date de décés': 'DateTime', 'mail': 'TextEdit', 'Age': 'TextEdit', 'Téléphone': 'Range', 'Numéro': 'Range', 'Emplacement': 'TextEdit', 'date de réservation': 'DateTime', 'Type de concession': 'TextEdit', 'date de renouvellement': 'TextEdit', 'DATAGRANITE_Etat': 'TextEdit', 'Lat': '', 'Long': '', });
lyr_DatagranitCavalairesurmer_3.set('fieldImages', {'fid': 'TextEdit', 'prénom nom': 'TextEdit', 'Lieu de naissance': 'TextEdit', 'Ville de naissance': 'TextEdit', 'code postal de naissance': 'TextEdit', 'Date de naissance': 'DateTime', 'Gentilé': 'TextEdit', 'Genre': 'TextEdit', 'Date de décés': 'DateTime', 'mail': 'TextEdit', 'Age': 'TextEdit', 'Téléphone': 'Range', 'Numéro': 'Range', 'Emplacement': 'TextEdit', 'date de réservation': 'DateTime', 'Type de concession': 'TextEdit', 'date de renouvellement': 'TextEdit', 'DATAGRANITE_Etat': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Emplacement_1.set('fieldLabels', {'fid': 'hidden field', 'prénom nom': 'no label', 'Lieu de naissance': 'hidden field', 'Ville de naissance': 'no label', 'code postal de naissance': 'hidden field', 'Date de naissance': 'header label - visible with data', 'Gentilé': 'hidden field', 'Genre': 'hidden field', 'Date de décés': 'header label - visible with data', 'mail': 'hidden field', 'Age': 'hidden field', 'Téléphone': 'hidden field', 'Numéro': 'header label - visible with data', 'Emplacement': 'no label', 'date de réservation': 'hidden field', 'Type de concession': 'no label', 'date de renouvellement': 'hidden field', });
lyr_Etatdesspultures_2.set('fieldLabels', {'fid': 'hidden field', 'prénom nom': 'no label', 'Lieu de naissance': 'hidden field', 'Ville de naissance': 'header label - visible with data', 'code postal de naissance': 'hidden field', 'Date de naissance': 'header label - visible with data', 'Gentilé': 'hidden field', 'Genre': 'hidden field', 'Date de décés': 'header label - visible with data', 'mail': 'hidden field', 'Age': 'hidden field', 'Téléphone': 'hidden field', 'Numéro': 'header label - visible with data', 'Emplacement': 'no label', 'date de réservation': 'hidden field', 'Type de concession': 'no label', 'date de renouvellement': 'hidden field', 'DATAGRANITE_Etat': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', });
lyr_DatagranitCavalairesurmer_3.set('fieldLabels', {'fid': 'hidden field', 'prénom nom': 'no label', 'Lieu de naissance': 'hidden field', 'Ville de naissance': 'no label', 'code postal de naissance': 'hidden field', 'Date de naissance': 'header label - visible with data', 'Gentilé': 'hidden field', 'Genre': 'hidden field', 'Date de décés': 'header label - visible with data', 'mail': 'hidden field', 'Age': 'hidden field', 'Téléphone': 'hidden field', 'Numéro': 'header label - visible with data', 'Emplacement': 'no label', 'date de réservation': 'hidden field', 'Type de concession': 'no label', 'date de renouvellement': 'hidden field', 'DATAGRANITE_Etat': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', });
lyr_DatagranitCavalairesurmer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});