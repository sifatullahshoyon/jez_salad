import React from "react";

const MenuCard = () => {
  return (
    <>
      <div className="flex justify-between gap-5 mt-[72px] mb-5 flex-wrap">
        <div className="menuOne">
          <div className="flex flex-col justify-end  items-end h-full">
            <p className="mx-auto text-2xl text-white font-medium">
              Mini Salad Yummy{" "}
            </p>
            <p className="mx-auto text-[40px] text-white font-bold mt-1">
              $ 2.99
            </p>
          </div>
        </div>
        <div className="menuTwo">
          <div className="flex flex-col justify-end  items-end h-full">
            <p className="mx-auto text-2xl text-white font-medium">
              Completed Salad{" "}
            </p>
            <p className="mx-auto text-[40px] text-white font-bold mt-1">
              $ 3.99
            </p>
          </div>
        </div>
        <div className="menuThree">
          <div className="flex flex-col justify-end  items-end h-full">
            <p className="mx-auto text-2xl text-white font-medium">
              Salad Yummy Red{" "}
            </p>
            <p className="mx-auto text-[40px] text-white font-bold mt-1">
              $ 3.99
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
