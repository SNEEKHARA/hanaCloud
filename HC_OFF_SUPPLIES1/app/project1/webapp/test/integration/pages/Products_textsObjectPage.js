sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'project1',
            componentId: 'Products_textsObjectPage',
            entitySet: 'Products_texts'
        },
        CustomPageDefinitions
    );
});