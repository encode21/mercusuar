Ext.define('vts.store.store', {
    extend: 'Ext.data.Store',
    model: 'vts.model.WeatherPoint',
    data: [
        { temperature: 58, date: new Date(2011, 1, 1, 8) },
        { temperature: 63, date: new Date(2011, 1, 1, 9) },
        { temperature: 73, date: new Date(2011, 1, 1, 10) },
        { temperature: 78, date: new Date(2011, 1, 1, 11) },
        { temperature: 81, date: new Date(2011, 1, 1, 12) }
    ]
});