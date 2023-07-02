import { useEffect, useState } from "react";


function Gears(props: { rotation: number }) {
  return (
    <div className="Gears">


      <img width={296} style={{ top: 24, right: -88, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 1" />
      <img width={186} style={{ top: 224, right: 180, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 2" />
      <img width={232} style={{ top: 340, right: -28, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 3" />
      <img width={232} style={{ top: 420, right: 224, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 4" />
      <img width={232} style={{ top: 564, right: -116, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 5" />
      <img width={296} style={{ top: 652, right: 116, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 6" />
      <img width={296} style={{ top: 812, right: -136, transform: `rotate(${props.rotation}deg)` }} src="Gear 1.svg" alt="Gear 7" />
    </div>
  );
}

export default Gears;