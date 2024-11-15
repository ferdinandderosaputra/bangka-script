function translateToJS(bangkaCode) {
    return bangkaCode
        .replace(/macem/g, 'let')
        .replace(/tetep/g, 'const')
        .replace(/variabel/g, 'var')
        .replace(/uleng/g, 'for')
        .replace(/selame/g, 'while')
        .replace(/fungsi/g, 'function')
        .replace(/kalok/g, 'if')
        .replace(/laen/g, 'else')
        .replace(/balek/g, 'return')
        .replace(/tampilken/g, 'console.log')
        .replace(/dafter/g, '[]')
        .replace(/objek/g, '{}')
        .replace(/tambeh/g, '.push')
        .replace(/ambek/g, '.pop')
        .replace(/panjeng/g, '.length')
        .replace(/ini/g, 'this')
        .replace(/pileh/g, 'switch')
        .replace(/kasus/g, 'case')
        .replace(/berenti/g, 'break')
        .replace(/default/g, 'default')
        .replace(/cube/g, 'try')
        .replace(/tangkep/g, 'catch')
        .replace(/akher/g, 'finally')
        .replace(/kelas/g, 'class')
        .replace(/baru/g, 'new')
        .replace(/lanjot/g, 'extends')
        .replace(/kuadrat/g, 'Math.pow')
        .replace(/aker/g, 'Math.sqrt')
        .replace(/gabong/g, '.concat')
        .replace(/panjengString/g, '.length')
        .replace(/ambekKarakter/g, '.charAt')
        .replace(/ubehKeHurufBesar/g, '.toUpperCase')
        .replace(/ubehKeHurufKecik/g, '.toLowerCase')
        .replace(/urot/g, '.sort')
        .replace(/maksimum/g, 'Math.max')
        .replace(/minimum/g, 'Math.min')
        .replace(/cari/g, '.indexOf')
        .replace(/pecehString/g, '.split')
        .replace(/gabongString/g, '.join')
        .replace(/balek/g, '.reverse')
        .replace(/apos/g, '.splice')
        .replace(/ubeh/g, '.map')
        .replace(/saring/g, '.filter')
        .replace(/isiUleng/g, '.fill')
        .replace(/cetak/g, 'console.table')
        .replace(/acak/g, 'Math.random')
        .replace(/buatObjek/g, 'Object.create')
        .replace(/tambehProperti/g, '.set')
        .replace(/aposProperti/g, 'delete')
        .replace(/ambekProperti/g, '.get')
        .replace(/tanggalBaru/g, 'new Date')
        .replace(/formatTanggal/g, '.toISOString')
        .replace(/ariNi/g, 'new Date().toISOString().split("T")[0]')
        .replace(/tambehAri/g, 'function(date, days) { const result = new Date(date); result.setDate(result.getDate() + days); return result; }')
        .replace(/kureng/g, '-') 
        .replace(/kali/g, '*') 
        .replace(/begi/g, '/') 
        .replace(/sise/g, '%') 
        .replace(/sameDengen/g, '===') 
        .replace(/dakSameDengen/g, '!==') 
        .replace(/lebehBesar/g, '>') 
        .replace(/lebehKecik/g, '<') 
        .replace(/lebehBesarSame/g, '>=') 
        .replace(/lebehKecikSame/g, '<=') 
        .replace(/logikeDen/g, '&&') 
        .replace(/logikeAtau/g, '||') 
        .replace(/dak/g, '!') 
        .replace(/fungsiBaru/g, 'function() {') 
        .replace(/akherFungsi/g, '}') 
        .replace(/buatArray/g, 'Array.from') 
        .replace(/tambehArray/g, 'Array.prototype.concat') 
        .replace(/cariArray/g, 'Array.prototype.indexOf') 
        .replace(/aposArray/g, 'Array.prototype.splice') 
        .replace(/ubehArray/g, 'Array.prototype.map') 
        .replace(/saringArray/g, 'Array.prototype.filter') 
        .replace(/isiArray/g, 'Array.prototype.fill') 
        .replace(/acakArray/g, 'Array.prototype.sort') 
        .replace(/gabongArray/g, 'Array.prototype.join') 
        .replace(/balekArray/g, 'Array.prototype.reverse') 
        .replace(/tambehString/g, '.concat') 
        .replace(/pecehString/g, '.split') 
        .replace(/cariString/g, '.indexOf') 
        .replace(/gantiString/g, '.replace') 
        .replace(/rapihString/g, '.trim') 
        .replace(/substring/g, '.substring') 
        .replace(/substringAwal/g, '.slice') 
        .replace(/formatString/g, 'String.prototype') 
        .replace(/buatSet/g, 'new Set') 
        .replace(/tambehSet/g, '.add') 
        .replace(/aposSet/g, '.delete') 
        .replace(/cariSet/g, '.has') 
        .replace(/buatMap/g, 'new Map') 
        .replace(/tambehMap/g, '.set') 
        .replace(/ambekMap/g, '.get') 
        .replace(/aposMap/g, '.delete') 
        .replace(/cariMap/g, '.has') 
        .replace(/buatWeakSet/g, 'new WeakSet') 
        .replace(/tambehWeakSet/g, '.add') 
        .replace(/aposWeakSet/g, '.delete') 
        .replace(/cariWeakSet/g, '.has') 
        .replace(/buatWeakMap/g, 'new WeakMap') 
        .replace(/tambehWeakMap/g, '.set') 
        .replace(/ambekWeakMap/g, '.get') 
        .replace(/aposWeakMap/g, '.delete') 
        .replace(/cariWeakMap/g, '.has') 
        .replace(/buatPromise/g, 'new Promise') 
        .replace(/tunggu/g, 'await') 
        .replace(/jalanke/g, '.then') 
        .replace(/tangkepError/g, '.catch') 
        .replace(/akherPromise/g, '.finally') 
        .replace(/buatAsync/g, 'async function') 
        .replace(/tungguAsync/g, 'await') 
        .replace(/jalankeAsync/g, '.then') 
        .replace(/tangkepErrorAsync/g, '.catch') 
        .replace(/akherAsync/g, '.finally') 
        .replace(/buatInterval/g, 'setInterval') 
        .replace(/aposInterval/g, 'clearInterval') 
        .replace(/buatTimeout/g, 'setTimeout') 
        .replace(/aposTimeout/g, 'clearTimeout') 
        .replace(/buatEvent/g, 'new Event') 
        .replace(/tambehEvent/g, '.addEventListener') 
        .replace(/aposEvent/g, '.removeEventListener') 
        .replace(/triggerEvent/g, '.dispatchEvent') 
        .replace(/buatXHR/g, 'new XMLHttpRequest') 
        .replace(/kirimXHR/g, '.send') 
        .replace(/ambekXHR/g, '.open') 
        .replace(/tangkepXHR/g, '.onreadystatechange') 
        .replace(/statusXHR/g, '.status') 
        .replace(/isiXHR/g, '.responseText') 
        .replace(/buatFetch/g, 'fetch') 
        .replace(/tangkepFetch/g, '.then') 
        .replace(/tangkepErrorFetch/g, '.catch') 
        .replace(/akherFetch/g, '.finally');
}

module.exports = translateToJS;