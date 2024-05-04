export const getExpiredTime = (expiredUnixTime: string) => {
  //Membuat array tanggal waktu
  const losss = expiredUnixTime.split("-")
    const timeeee = losss[2]
    const iiime = timeeee.split("T")
    const klobisa = iiime[1].split(":")

    //ubah nilai 
    const tahuninimah = parseInt(losss[0])
    const bulaninimah = parseInt(losss[1]) - 1
    const tanggalinimah = parseInt(iiime[0]) 
    const jaminimah = parseInt(klobisa[0])
    const menitinimah = parseInt(klobisa[1])

  // Mendapatkan tanggal hari ini
  const today = new Date();

  // Mendapatkan tanggal kadaluarsa kupon (6 Mei 2024 jam 22:11:00)
  const expiryDate = new Date(tahuninimah, bulaninimah, tanggalinimah, jaminimah, menitinimah);
  const expiryDateDay = new Date(tahuninimah, bulaninimah, tanggalinimah);

  // Menghitung selisih waktu antara hari ini dan tanggal kadaluarsa
  const timeDiff = expiryDate.getTime() - today.getTime();
  const timeDiffDay = expiryDateDay.getTime() - today.getTime();

  // Menghitung jumlah hari, jam, menit, dan detik
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  const daysDate = Math.ceil(timeDiffDay / (1000 * 60 * 60 * 24));

  const hasil = { days, hours, minutes, seconds, daysDate };

  const logajadlu = `${tahuninimah}-${bulaninimah}-${tanggalinimah}T${jaminimah}:${menitinimah}`
  const rangkaiHasil = `${daysDate} hari lagi loh, tapi kalo buat kita liat jam berapa lagi buat sampe sih kira kira ya ${hours} jam menit ke ${minutes} tepatnya di detik ${seconds}`
  return rangkaiHasil

};
