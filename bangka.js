#!/usr/bin/env node

const fs = require('fs');
const translateToJS = require('./libs/translate');

function runBangkaFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File '${filePath}' Gagal Seperadik Cube Isi Lokasi Yang Benermen.`);
        return;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Gagal Seperadik Pas Tengah Bace Kode E:', err);
            return;
        }
        const jsCode = translateToJS(data);
        try {
            eval(jsCode); 
        } catch (e) {
            console.error('Ada Error Seperadik Pas Kode E Di Eksekusi:', e);
        }
    });
}

const filePath = process.argv[2]; 

if (!filePath) {
    console.log('usahain masukin lokasi file e yang bener seperadik');
} else if (filePath.endsWith('.bangka')) {
    runBangkaFile(filePath);
} else {
    console.error('file e harus berextensi .bangka ujung e seperadik');
}