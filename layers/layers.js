var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Road_1 = new ol.format.GeoJSON();
var features_Road_1 = format_Road_1.readFeatures(json_Road_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_1.addFeatures(features_Road_1);
var lyr_Road_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_1, 
                style: style_Road_1,
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_1_0.png" /> <br />'
        });
var format_Major_Towns_2 = new ol.format.GeoJSON();
var features_Major_Towns_2 = format_Major_Towns_2.readFeatures(json_Major_Towns_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_Towns_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Towns_2.addFeatures(features_Major_Towns_2);
var lyr_Major_Towns_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Major_Towns_2, 
                style: style_Major_Towns_2,
                interactive: true,
                title: '<img src="styles/legend/Major_Towns_2.png" /> Major_Towns'
            });
var format_Forest_3 = new ol.format.GeoJSON();
var features_Forest_3 = format_Forest_3.readFeatures(json_Forest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_3.addFeatures(features_Forest_3);
var lyr_Forest_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forest_3, 
                style: style_Forest_3,
                interactive: true,
                title: '<img src="styles/legend/Forest_3.png" /> Forest'
            });
var format_District_4 = new ol.format.GeoJSON();
var features_District_4 = format_District_4.readFeatures(json_District_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_4.addFeatures(features_District_4);
var lyr_District_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_4, 
                style: style_District_4,
                interactive: true,
                title: '<img src="styles/legend/District_4.png" /> District'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Road_1.setVisible(true);lyr_Major_Towns_2.setVisible(true);lyr_Forest_3.setVisible(true);lyr_District_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Road_1,lyr_Major_Towns_2,lyr_Forest_3,lyr_District_4];
lyr_Road_1.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_Major_Towns_2.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_Forest_3.set('fieldAliases', {'FID_': 'FID_', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FORESTS_': 'FORESTS_', 'FORESTS_ID': 'FORESTS_ID', 'CODE': 'CODE', 'NAME': 'NAME', });
lyr_District_4.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_Road_1.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_Major_Towns_2.set('fieldImages', {'ID': 'Range', 'NAME': 'TextEdit', });
lyr_Forest_3.set('fieldImages', {'FID_': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'FORESTS_': 'TextEdit', 'FORESTS_ID': 'TextEdit', 'CODE': 'Range', 'NAME': 'TextEdit', });
lyr_District_4.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_Road_1.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'header label', });
lyr_Major_Towns_2.set('fieldLabels', {'ID': 'no label', 'NAME': 'header label', });
lyr_Forest_3.set('fieldLabels', {'FID_': 'no label', 'AREA': 'inline label', 'PERIMETER': 'no label', 'FORESTS_': 'no label', 'FORESTS_ID': 'no label', 'CODE': 'no label', 'NAME': 'header label', });
lyr_District_4.set('fieldLabels', {'PROVINCE_N': 'header label', 'Area': 'inline label', 'District': 'inline label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'inline label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_District_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});