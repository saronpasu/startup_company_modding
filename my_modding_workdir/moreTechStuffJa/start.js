let _modPath;
const scope = GetRootScope();

exports.initialize = (modPath) =>{
    _modPath = modPath;
};

exports.onLoadGame = settings => {
    if (scope.options.language == 'ja') {
        Language['inputsanitizing'] = '入力サニタイジング';
        Language['regexpsupport'] = '正規表現サポート';
        Language['receivefilter'] = '受信リクエストフィルタ';
        Language['autoupdates'] = '自動アップデート';
        Language['screencapturing'] = '画面キャプチャ';
        Language['livestreaming'] = 'ライブストリーミング';
        Language['serverredundancy'] = '冗長構成サーバ';
        Language['securityips'] = '侵入防止システム';
    }
};
