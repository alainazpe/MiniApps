const range1 = document.getElementById('range1')

range1.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`


    label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

const range2 = document.getElementById('range2')


range2.addEventListener('input', (e) => {
    const BPM = +e.target.value
    const label = e.target.nextElementSibling
    var i;
    var z;

    for (i=1;i<=10;i++) { 
        if (i<=2){z=i} else {z=z*2}
        actual = document.getElementById('m1s' + z);
        actual.getElementsByClassName('tiempo')[0].innerHTML = ((BPM/60)/z*1000).toFixed(2) + "<i> ms</i>";
        actual.getElementsByClassName('puntillo')[0].innerHTML = (((BPM/60)/z*1000) + (((BPM/60)/z*1000)/2)).toFixed(2) + "<i> ms</i>";
        actual.getElementsByClassName('tresillo')[0].innerHTML = 2*((((BPM/60)/z*1000) / 3)).toFixed(2) + "<i> ms</i>";
        
    }

    const max = +e.target.max
    const min = +e.target.min

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const left = BPM * (num_width / max) - num_label_width / 2 + scale(BPM, min, max, 10, -10)

    label.style.left = `${left}px`


    label.innerHTML = BPM
})

