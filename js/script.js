function getXhr(){
    let xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        console.log('Votre navigateur ne supporte pas le protocole AJAX');
        xhr = false;
    }
    return xhr;
}

function afficheJsonToTable(data){
    let thead = '<tr>';
    let tbody = '';
    let firstRound = true;
    data.forEach( function(user){
        tbody += '<tr>';
        for(key in user){
            thead += (firstRound)? `<th>${key}</th>` : '';
            // code pour les lignes du tbody
            if('object' !== typeof(user[key])){
                tbody += `<td>${user[key]}</td>`;
            }else{
                tbody +='<td>';
                for(item in user[key]){
                    if('object' !== typeof(user[key][item])){
                        tbody += `${user[key][item]}<br />`;
                    }
                }
                tbody +='</td>';
            }
        }
        thead += (firstRound)? '</tr>' : '';
        tbody += '</tr>';
        firstRound = false;
    } );
    return [thead, tbody];
}