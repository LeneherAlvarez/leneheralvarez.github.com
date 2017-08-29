var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_BAS_LIM_DEPARTAMENTO0 = new ol.format.GeoJSON();
var features_BAS_LIM_DEPARTAMENTO0 = format_BAS_LIM_DEPARTAMENTO0.readFeatures(json_BAS_LIM_DEPARTAMENTO0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAS_LIM_DEPARTAMENTO0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BAS_LIM_DEPARTAMENTO0.addFeatures(features_BAS_LIM_DEPARTAMENTO0);var lyr_BAS_LIM_DEPARTAMENTO0 = new ol.layer.Vector({
                source:jsonSource_BAS_LIM_DEPARTAMENTO0, 
                style: style_BAS_LIM_DEPARTAMENTO0,
                title: 'BAS_LIM_DEPARTAMENTO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_0.png" /> AMAZONAS<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_1.png" /> ANCASH<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_2.png" /> APURIMAC<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_3.png" /> AREQUIPA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_4.png" /> AYACUCHO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_5.png" /> CAJAMARCA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_6.png" /> CALLAO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_7.png" /> CUSCO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_8.png" /> HUANCAVELICA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_9.png" /> HUANUCO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_10.png" /> ICA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_11.png" /> JUNIN<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_12.png" /> LA LIBERTAD<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_13.png" /> LAMBAYEQUE<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_14.png" /> LIMA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_15.png" /> LORETO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_16.png" /> MADRE DE DIOS<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_17.png" /> MOQUEGUA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_18.png" /> PASCO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_19.png" /> PIURA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_20.png" /> PUNO<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_21.png" /> SAN MARTIN<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_22.png" /> TACNA<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_23.png" /> TUMBES<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_24.png" /> UCAYALI<br />\
        <img src="styles/legend/BAS_LIM_DEPARTAMENTO0_25.png" /> <br />'
            });

lyr_BAS_LIM_DEPARTAMENTO0.setVisible(true);
var layersList = [baseLayer,lyr_BAS_LIM_DEPARTAMENTO0];
lyr_BAS_LIM_DEPARTAMENTO0.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_BAS_LIM_DEPARTAMENTO0.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'TextEdit', });
lyr_BAS_LIM_DEPARTAMENTO0.set('fieldLabels', {'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_BAS_LIM_DEPARTAMENTO0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});