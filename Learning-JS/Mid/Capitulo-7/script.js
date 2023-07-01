let { availHeight, availWidth } = window.screen;

// let confirmation = window.confirm(`
//     Alto: ${availHeight} | Ancho: ${availWidth}
// `);

// confirmation
//     ? alert("Compra realizada exitosamente")
//     : alert("Compra cancelada");

let { href, hostname, pathname, protocol } = window.location;

let element = `
    Protocolo: <b>${protocol}</b> <br><br>
    Pathname: <b>${pathname}</b> <br><br>
    Hostname: <b>${hostname}</b> <br><br>
    Href: <b>${href}</b> <br><br>

`;

document.querySelector('div').innerHTML = element;