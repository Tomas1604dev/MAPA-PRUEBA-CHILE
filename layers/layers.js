var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_REDFERROVIARIA_1 = new ol.format.GeoJSON();
var features_REDFERROVIARIA_1 = format_REDFERROVIARIA_1.readFeatures(json_REDFERROVIARIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDFERROVIARIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDFERROVIARIA_1.addFeatures(features_REDFERROVIARIA_1);
var lyr_REDFERROVIARIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDFERROVIARIA_1, 
                style: style_REDFERROVIARIA_1,
                popuplayertitle: 'RED FERROVIARIA',
                interactive: true,
                title: '<img src="styles/legend/REDFERROVIARIA_1.png" /> RED FERROVIARIA'
            });
var format_SREDFINALFINAL_2 = new ol.format.GeoJSON();
var features_SREDFINALFINAL_2 = format_SREDFINALFINAL_2.readFeatures(json_SREDFINALFINAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SREDFINALFINAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SREDFINALFINAL_2.addFeatures(features_SREDFINALFINAL_2);
var lyr_SREDFINALFINAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SREDFINALFINAL_2, 
                style: style_SREDFINALFINAL_2,
                popuplayertitle: 'S-RED-FINAL-FINAL',
                interactive: true,
                title: '<img src="styles/legend/SREDFINALFINAL_2.png" /> S-RED-FINAL-FINAL'
            });
var format_MASASDEAGUA_3 = new ol.format.GeoJSON();
var features_MASASDEAGUA_3 = format_MASASDEAGUA_3.readFeatures(json_MASASDEAGUA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASASDEAGUA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASASDEAGUA_3.addFeatures(features_MASASDEAGUA_3);
var lyr_MASASDEAGUA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASASDEAGUA_3, 
                style: style_MASASDEAGUA_3,
                popuplayertitle: 'MASAS DE AGUA',
                interactive: true,
                title: '<img src="styles/legend/MASASDEAGUA_3.png" /> MASAS DE AGUA'
            });
var format_santiago_4 = new ol.format.GeoJSON();
var features_santiago_4 = format_santiago_4.readFeatures(json_santiago_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santiago_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santiago_4.addFeatures(features_santiago_4);
var lyr_santiago_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santiago_4, 
                style: style_santiago_4,
                popuplayertitle: 'santiago',
                interactive: true,
                title: '<img src="styles/legend/santiago_4.png" /> santiago'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_REDFERROVIARIA_1.setVisible(true);lyr_SREDFINALFINAL_2.setVisible(true);lyr_MASASDEAGUA_3.setVisible(true);lyr_santiago_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_REDFERROVIARIA_1,lyr_SREDFINALFINAL_2,lyr_MASASDEAGUA_3,lyr_santiago_4];
lyr_REDFERROVIARIA_1.set('fieldAliases', {'OBEJTO': 'OBEJTO', 'ACTIV_2016': 'ACTIV_2016', 'LARGO_KM': 'LARGO_KM', 'ST_LENGTH_': 'ST_LENGTH_', });
lyr_SREDFINALFINAL_2.set('fieldAliases', {'fid': 'fid', 'NOMBRE_CAM': 'NOMBRE_CAM', 'CLASIFICAC': 'CLASIFICAC', 'CARPETA': 'CARPETA', 'KM_I': 'KM_I', 'KM_F': 'KM_F', 'KM_TRAMO': 'KM_TRAMO', 'REGION': 'REGION', });
lyr_MASASDEAGUA_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_santiago_4.set('fieldAliases', {'fid': 'fid', 'ciudad': 'ciudad', });
lyr_REDFERROVIARIA_1.set('fieldImages', {'OBEJTO': '', 'ACTIV_2016': '', 'LARGO_KM': '', 'ST_LENGTH_': '', });
lyr_SREDFINALFINAL_2.set('fieldImages', {'fid': '', 'NOMBRE_CAM': '', 'CLASIFICAC': '', 'CARPETA': '', 'KM_I': '', 'KM_F': '', 'KM_TRAMO': '', 'REGION': '', });
lyr_MASASDEAGUA_3.set('fieldImages', {'fid': '', 'objectid': '', 'st_area_sh': '', 'st_length_': '', 'Nombre': '', 'Tipo': '', });
lyr_santiago_4.set('fieldImages', {'fid': '', 'ciudad': '', });
lyr_REDFERROVIARIA_1.set('fieldLabels', {'OBEJTO': 'hidden field', 'ACTIV_2016': 'inline label - always visible', 'LARGO_KM': 'hidden field', 'ST_LENGTH_': 'hidden field', });
lyr_SREDFINALFINAL_2.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE_CAM': 'inline label - always visible', 'CLASIFICAC': 'inline label - always visible', 'CARPETA': 'inline label - always visible', 'KM_I': 'hidden field', 'KM_F': 'hidden field', 'KM_TRAMO': 'hidden field', 'REGION': 'inline label - always visible', });
lyr_MASASDEAGUA_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Nombre': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', });
lyr_santiago_4.set('fieldLabels', {'fid': 'hidden field', 'ciudad': 'inline label - visible with data', });
lyr_santiago_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});