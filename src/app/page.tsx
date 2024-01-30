import CardPenerbangan from "@/components/Card/cardPenerbangan";

export default function Home() {
  const daftarPenerbangan = [
    {
      img: "pramugari.webp",
      title: "Garuda Indonesia",
      tujuan: "Jakarta - Tasikmalaya",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
  ];
  const daftarPenerbanganPromo = [
    {
      img: "pramugari.webp",
      title: "Garuda Indonesia",
      tujuan: "Jakarta - Tasikmalaya",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "55000.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
    {
      img: "pramugari.webp",
      title: "Lion Air",
      tujuan: "Jakarta - Singapura",
      berangkat: "10.00",
      sampai: "19.00",
      harga: "500.000",
    },
  ];
  return (
    <>
      <section className="w-full bg-primary/10 flex flex-col text-center  justify-center  items-center space-y-5 md:space-x-5  py-20 px-5 md:px-10">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl uppercase font-bold text-primary">
            FLYMOON
          </h1>
          <p>
            Rasakan Penerbangan Terbaik Anda bersama{" "}
            <span className="text-primary font-semibold">TravelloFLY</span>
          </p>
        </div>
      </section>
      {/* card */}
      <section className="my-10 px-5 md:px-10 ">
        <h1 className="text-2xl font-bold mb-2">
          Jadwal Terbaru<span className="text-primary">.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {daftarPenerbangan.map((item, index) => {
            return (
              <>
                <CardPenerbangan
                  key={index}
                  title={item.title}
                  tujuan={item.tujuan}
                  berangkat={item.berangkat}
                  sampai={item.sampai}
                  harga={item.harga}
                  img={item.img}
                />
              </>
            );
          })}
        </div>
      </section>
      <section className="my-10 px-5 md:px-10 bg-primary/10 py-5">
        <h1 className="text-2xl font-bold mb-2">
          Promo Akhir Tahun<span className="text-primary">.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {daftarPenerbanganPromo.map((item, index) => {
            return (
              <>
                <CardPenerbangan
                  key={index}
                  title={item.title}
                  tujuan={item.tujuan}
                  berangkat={item.berangkat}
                  sampai={item.sampai}
                  harga={item.harga}
                  img={item.img}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
