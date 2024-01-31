import {
  SendHorizontal,
  SendHorizontalIcon,
  UsersRound,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import { FunctionComponent } from "react";
interface CardPenerbanganProps {
  title: string;
  tujuan: string;
  berangkat: string;
  sampai: string;
  harga: string;
  bangku: string;
  img: string;
}

const CardPenerbangan: FunctionComponent<CardPenerbanganProps> = ({
  title,
  tujuan,
  berangkat,
  sampai,
  harga,
  bangku,
  img,
}) => {
  return (
    <div className="card  bg-primary/50 shadow-lg ">
      <figure>
        <Image
          src={`/${img}`}
          alt={title}
          width={100}
          height={100}
          className="w-full h-50 object-cover object-center hover:scale-125 transition-all ease-in-out duration-150 shadow-sm"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{tujuan}</p>
        <div className="card-actions justify-between my-2">
          <h5 className="text-xl font-semibold flex-1">
            <sup>Rp.</sup>
            {harga}
          </h5>
          <div className="space-x-1">
            <div className="badge badge-outline shadow badge-accent">
              {bangku} -
              <UsersRoundIcon size={12} strokeWidth={3} />
            </div>
            <div className="badge badge-outline shadow badge-secondary">
              {berangkat}
            </div>
            <div className="badge badge-outline shadow badge-primary">
              {sampai}
            </div>
          </div>
        </div>
        <button className="btn btn-primary text-white btn-sm ">
          Jadwalkan <SendHorizontalIcon size={15} />
        </button>
      </div>
    </div>
  );
};

export default CardPenerbangan;
