"use client"
import { getExpiredTime } from '@/models/data/libs/getExpiredTime';
// pesan.js
import React, { useEffect, useState } from 'react';

const page = () => {
  const [expiryTime, setExpiryTime] = useState(null);

  useEffect(() => {
    // Mendapatkan tanggal hari ini
    const today = new Date();

    // Mendapatkan tanggal kadaluarsa kupon (6 Mei 2024 jam 22:11:00)
    const expiryDate = new Date(2024, 4, 6, 22,11,0);
    const expiryDateDay = new Date(2024, 4, 6);

    // Menghitung selisih waktu antara hari ini dan tanggal kadaluarsa
    const timeDiff = expiryDate.getTime() - today.getTime();
    const timeDiffDay = expiryDateDay.getTime() - today.getTime();

    // Menghitung jumlah hari, jam, menit, dan detik
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const daysDate = Math.floor(timeDiffDay / (1000 * 60 * 60 * 24));

    setExpiryTime({ days, hours, minutes, seconds, daysDate });
  }, []);

  const [dede, setDede] = useState("");
  const handleChange = (e) => {
    setDede(
      e.target.value
    )
  }
  const [dete, setDete] = useState("");
  const deteChange = (e) => {
    setDete(
      e.target.value
    )
    }
    const [debe, setDebe] = useState("");
    const debeChange = (e) => {
      setDebe(
        e.target.value
      )
    const val = e.target.value
    const losss = val.split("-")
    const timeeee = losss[2]
    const iiime = timeeee.split("T")
    const klobisa = iiime[1].split(":")
    console.log(timeeee);
    console.log(iiime);
    console.log(klobisa);
    
    const display = getExpiredTime(val)
    console.log("🚀 ~ debeChange ~ display:", display)
    
    }


  return (
    <div>
      {expiryTime && (
        <p>
          Kupon akan kadaluarsa dalam:
          {expiryTime.days > 0 && ` ${expiryTime.days} hari`}
          {expiryTime.hours > 0  && ` ${expiryTime.hours} jam`}
          {expiryTime.minutes > 0 && ` ${expiryTime.minutes} menit`}
          {expiryTime.seconds > 0 && ` ${expiryTime.seconds} detik`}
          {((expiryTime.days === 0 && expiryTime.hours === 0 && expiryTime.minutes === 0 && expiryTime.seconds === 0)) && ' kurang dari satu detik'}
        </p>
      )}
      {
        expiryTime && (
          <p>
            Kapan NIch?
            <br />
            {
              expiryTime.daysDate > 0 && `${expiryTime.daysDate} hari lagi nichh`
            }
            <br />
            Berapa Jem lagi emang?
            <br />
            {expiryTime.hours > 0 && expiryTime.hours <! 0 ? ` ${expiryTime.hours} jam` : "Ya sekarang broku"}
          </p>
        )
      }
      <br />
      <input type='date' name="waktu" id="waktu" value={dede} onChange={handleChange} />
      <br />
      <br />
      <input type="datetime-local"  name="debe" value={debe} onChange={debeChange} id="" />

      <br />
      <p className="text-primary">{dede}</p>
      <p className="text-success">{dete}</p>
      <p className="text-error">{debe}</p>
    </div>
  );
};

export default page;
