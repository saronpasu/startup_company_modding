let _modPath;

exports.initialize = (modPath) =>{
    _modPath = modPath;

    Database.languages.push({ name: 'Japanese', key: 'ja', path: _modPath + 'ja.json' });

};
