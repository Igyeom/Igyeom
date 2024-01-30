function check() {
    const link = document.getElementById('link').value;

    const blocked_ids = [
    "dQw4w9WgXcQ",
    "oHg5SJYRHA0",
    "6_b7RDuLwcI",
    "G8iEMVr7GFg",
    "AyOqGRjVtls",
    "6mhmcwmgWbA",
    "SpZ2FsEfwP4",
    "H01BwSD9eyQ",
    "nrsnN23tmUA",
    "8mkofgRW1II",
    "rAx5LIul1N8",
    "sO4wVSA9UPs",
    "rrs0B_LM898",
    "doEqUhFiQS4",
    "epyRUp0BhrA",
    "uK5WDo_3s7s",
    "wzSVOcgKq04",
    "7B--1KArxow",
    "rbsPu1z3ugQ",
    "ptw2FLKXDQE",
    "E50L-JYWm3w",
    "8leAAwMIigI",
    "ByqFY-Boq5Y",
    "E4ihJMQUmUQ",
    "cjBHXvBYw5s",
    "xaazUgEKuVA",
    "TzXXHVhGXTQ",
    "Uj1ykZWtPYI",
    "EE-xtCF3T94",
    "V-_O7nl0Ii0",
    "cqF6M25kqq4",
    "0SoNH07Slj0",
    "xfr64zoBTAQ",
    "j5a0jTc9S10",
    "dPmZqsQNzGA",
    "nHRbZW097Uk",
    "BjDebmqFRuc",
    "Gc2u6AFImn8",
    "8VFzHYtOARw",
    "cSAp9sBzPbc",
    "Dx5i1t0mN78",
    "Oo0twK2ZbLU",
    "cvh0nX08nRw",
    "lXMskKTw3Bc",
    "7z_1E8VGJOw",
    "VgojnNgmgVs",
    "5wOXc03RwVA",
    "ub82Xb1C8os",
    "QB7ACr7pUuE",
    "RvBwypGUkPo",
    "rr.noordstar.me",
    "thisworldthesedays",
    "sanfransentinel",
    "youtu.icu/"
    ];
    
    for (const i of blocked_ids) {
        if (link.includes(i)) {
            document.getElementById('detected').innerHTML = "RICKROLL DETECTED!"
            document.getElementById('notdetected').innerHTML = ""
            return true;
        }
    }
    
    document.getElementById('notdetected').innerHTML = "SAFE TO CLICK!"
    document.getElementById('detected').innerHTML = ""

    return false;
}