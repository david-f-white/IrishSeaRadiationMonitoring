var wms_layers = [];

        var lyr_WikimediaMap_0 = new ol.layer.Tile({
            'title': 'WikimediaMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            })
        });var format_watersamples_1 = new ol.format.GeoJSON();
var features_watersamples_1 = format_watersamples_1.readFeatures(json_watersamples_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_watersamples_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_watersamples_1.addFeatures(features_watersamples_1);var lyr_watersamples_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_watersamples_1, 
                style: style_watersamples_1,
    title: 'watersamples<br />\
    <img src="styles/legend/watersamples_1_0.png" />  3 - 5698 <br />\
    <img src="styles/legend/watersamples_1_1.png" />  5698 - 19879 <br />\
    <img src="styles/legend/watersamples_1_2.png" />  19879 - 44621 <br />\
    <img src="styles/legend/watersamples_1_3.png" />  44621 - 120472 <br />\
    <img src="styles/legend/watersamples_1_4.png" />  120472 - 204314 <br />'
        });var format_irishseashape_2 = new ol.format.GeoJSON();
var features_irishseashape_2 = format_irishseashape_2.readFeatures(json_irishseashape_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_irishseashape_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_irishseashape_2.addFeatures(features_irishseashape_2);var lyr_irishseashape_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_irishseashape_2, 
                style: style_irishseashape_2,
                title: '<img src="styles/legend/irishseashape_2.png" /> irishseashape'
            });var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_3_0.png" />  0 - 7 <br />\
    <img src="styles/legend/Clipped_3_1.png" />  7 - 31 <br />\
    <img src="styles/legend/Clipped_3_2.png" />  31 - 74 <br />\
    <img src="styles/legend/Clipped_3_3.png" />  74 - 423 <br />\
    <img src="styles/legend/Clipped_3_4.png" />  423 - 585 <br />'
        });var lyr_Clippedmask_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (mask)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedmask_4.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-731263.590426, 6782304.993775, -293923.484402, 7362676.554046]
                            })
                        });var format_uknuclear_5 = new ol.format.GeoJSON();
var features_uknuclear_5 = format_uknuclear_5.readFeatures(json_uknuclear_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uknuclear_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_uknuclear_5.addFeatures(features_uknuclear_5);var lyr_uknuclear_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uknuclear_5, 
                style: style_uknuclear_5,
                title: '<img src="styles/legend/uknuclear_5.png" /> uknuclear'
            });

lyr_WikimediaMap_0.setVisible(true);lyr_watersamples_1.setVisible(false);lyr_irishseashape_2.setVisible(false);lyr_Clipped_3.setVisible(false);lyr_Clippedmask_4.setVisible(true);lyr_uknuclear_5.setVisible(true);
var layersList = [lyr_WikimediaMap_0,lyr_watersamples_1,lyr_irishseashape_2,lyr_Clipped_3,lyr_Clippedmask_4,lyr_uknuclear_5];
lyr_watersamples_1.set('fieldAliases', {'SampleID': 'SampleID', 'Region': 'Region', 'Sub-region': 'Sub-region', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Sample typ': 'Sample typ', 'Sampling d': 'Sampling d', 'Salinity': 'Salinity', 'Temperatur': 'Temperatur', 'Dissolved': 'Dissolved', 'Sample fil': 'Sample fil', 'Sampling_1': 'Sampling_1', 'Sampling_2': 'Sampling_2', 'Decay-corr': 'Decay-corr', 'Nuclide': 'Nuclide', 'Value type': 'Value type', 'Activity o': 'Activity o', 'Uncertaint': 'Uncertaint', 'Unit': 'Unit', });
lyr_irishseashape_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', 'min_x': 'min_x', 'min_y': 'min_y', 'max_x': 'max_x', 'max_y': 'max_y', 'area': 'area', 'mrgid': 'mrgid', });
lyr_Clipped_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NUMPOINTS': 'NUMPOINTS', });
lyr_uknuclear_5.set('fieldAliases', {'id': 'id', 'country': 'country', 'country_lo': 'country_lo', 'name': 'name', 'capacity_m': 'capacity_m', 'latitude': 'latitude', 'longitude': 'longitude', 'fuel1': 'fuel1', 'commission': 'commission', 'decommission': 'decommission', });
lyr_watersamples_1.set('fieldImages', {'SampleID': 'TextEdit', 'Region': 'TextEdit', 'Sub-region': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Sample typ': 'TextEdit', 'Sampling d': 'TextEdit', 'Salinity': 'TextEdit', 'Temperatur': 'TextEdit', 'Dissolved': 'TextEdit', 'Sample fil': 'TextEdit', 'Sampling_1': 'TextEdit', 'Sampling_2': 'TextEdit', 'Decay-corr': 'TextEdit', 'Nuclide': 'TextEdit', 'Value type': 'TextEdit', 'Activity o': 'TextEdit', 'Uncertaint': 'TextEdit', 'Unit': 'TextEdit', });
lyr_irishseashape_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'min_x': 'TextEdit', 'min_y': 'TextEdit', 'max_x': 'TextEdit', 'max_y': 'TextEdit', 'area': 'TextEdit', 'mrgid': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_uknuclear_5.set('fieldImages', {'id': 'Range', 'country': 'TextEdit', 'country_lo': 'TextEdit', 'name': 'TextEdit', 'capacity_m': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'fuel1': 'TextEdit', 'commission': 'TextEdit', 'decommission': 'Range', });
lyr_watersamples_1.set('fieldLabels', {'SampleID': 'inline label', 'Region': 'inline label', 'Sub-region': 'inline label', 'Latitude (': 'no label', 'Longitude': 'no label', 'Sample typ': 'no label', 'Sampling d': 'no label', 'Salinity': 'no label', 'Temperatur': 'no label', 'Dissolved': 'no label', 'Sample fil': 'no label', 'Sampling_1': 'no label', 'Sampling_2': 'no label', 'Decay-corr': 'no label', 'Nuclide': 'inline label', 'Value type': 'no label', 'Activity o': 'inline label', 'Uncertaint': 'no label', 'Unit': 'inline label', });
lyr_irishseashape_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'min_x': 'no label', 'min_y': 'no label', 'max_x': 'no label', 'max_y': 'no label', 'area': 'inline label', 'mrgid': 'header label', });
lyr_Clipped_3.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NUMPOINTS': 'no label', });
lyr_uknuclear_5.set('fieldLabels', {'id': 'inline label', 'country': 'no label', 'country_lo': 'no label', 'name': 'inline label', 'capacity_m': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'fuel1': 'no label', 'commission': 'no label', 'decommission': 'no label', });
lyr_uknuclear_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});