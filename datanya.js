function saklar() {
    let toggle1k = document.getElementById('toggle1k');
    let toggle2k = document.getElementById('toggle2k');
    let toggle3k = document.getElementById('toggle3k');
    let togglekall = document.getElementById('togglekall');

    let toggle1m = document.getElementById('toggle1m');
    let togglemall = document.getElementById('togglemall');

    let toggle1t = document.getElementById('toggle1t');
    let toggle2t = document.getElementById('toggle2t');
    let toggle3t = document.getElementById('toggle3t');
    let toggle4t = document.getElementById('toggle4t');
    let toggletall = document.getElementById('toggletall');

    let toggle1tt = document.getElementById('toggle1tt');
    let toggle2tt = document.getElementById('toggle2tt');
    let togglettall = document.getElementById('togglettall');

    // bagian lampu
    let lampu1k = document.getElementById('lampu1k');
    let lampu2k = document.getElementById('lampu2k');
    let lampu3k = document.getElementById('lampu3k');

    let lampu1m = document.getElementById('lampu1m')

    let lampu1t = document.getElementById('lampu1t')
    let lampu2t = document.getElementById('lampu2t')
    let lampu3t = document.getElementById('lampu3t')
    let lampu4t = document.getElementById('lampu4t')

    let lampu1tt = document.getElementById('lampu1tt')
    let lampu2tt = document.getElementById('lampu2tt')

    // interaktif js keluarga
    if (toggle1k.checked) {
        lampu1k.src = "assets/images/on.gif"
    } else {
        lampu1k.src = "assets/images/off.gif"
    }
    if (toggle2k.checked) {
        lampu2k.src = "assets/images/on.gif"
    } else {
        lampu2k.src = "assets/images/off.gif"
    }
    if (toggle3k.checked) {
        lampu3k.src = "assets/images/on.gif"
    } else {
        lampu3k.src = "assets/images/off.gif"
    }

    if (togglekall.checked) {
        lampu1k.src = "assets/images/on.gif"
        lampu2k.src = "assets/images/on.gif"
        lampu3k.src = "assets/images/on.gif"
    } else {
        lampu1k.src = "assets/images/off.gif"
        lampu2k.src = "assets/images/off.gif"
        lampu3k.src = "assets/images/off.gif"
    }

    // lampu interaktif js makan
    if (toggle1m.checked) {
        lampu1m.src = "assets/images/on.gif"
    } else {
        lampu1m.src = "assets/images/off.gif"
    }

    if (togglemall.checked) {
        lampu1m.src = "assets/images/on.gif"
    } else {
        lampu1m.src = "assets/images/off.gif"
    }

    // lampu interaktif js tamu 
    if (toggle1t.checked) {
        lampu1t.src = "assets/images/on.gif"
    } else {
        lampu1t.src = "assets/images/off.gif"
    }

    if (toggle2t.checked) {
        lampu2t.src = "assets/images/on.gif"
    } else {
        lampu2t.src = "assets/images/off.gif"
    }

    if (toggle3t.checked) {
        lampu3t.src = "assets/images/on.gif"
    } else {
        lampu3t.src = "assets/images/off.gif"
    }

    if (toggle4t.checked) {
        lampu4t.src = "assets/images/on.gif"
    } else {
        lampu4t.src = "assets/images/off.gif"
    }

    if (toggletall.checked) {
        lampu1t.src = "assets/images/on.gif"
        lampu2t.src = "assets/images/on.gif"
        lampu3t.src = "assets/images/on.gif"
        lampu4t.src = "assets/images/on.gif"
    }else {
        lampu1t.src 
    }
}



