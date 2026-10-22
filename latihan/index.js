function cekTiket(jenisTiket) {
    return new Promise(function (resolve, reject) {
        console.log("Mengecek jenis Ticket Anda...");

        setTimeout(() => {
            if (jenisTiket === 'VIP') {
                resolve("Barisan depan Panggung")
            } else if (jenisTiket === 'REGULER') {
                resolve("Barisan paling tengah")
            } else if (jenisTiket === 'Ekonomi') {
                resolve("Barisan paling Belakang")
            } else
                reject("Tiket tidak terdaftar")
        }, 3000);
    })
}

async function proses(jenisTiket) {
    try {
        const detail = await cekTiket(jenisTiket);
        console.log(`Lokasi Anda ${detail}`);
    } catch (error) {
        console.log('error ga ke handle manual: ', error);
    }
    finally {
        console.log("Pengecekan Selesai")
    }
}

await proses('REGULER');