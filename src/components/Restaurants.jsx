import Card from './Card'
import { useEffect, useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
   useEffect(() => {
     fetch("http://localhost:3000/restaurants")
       .then((res) => {
         return res.json();
       })
       .then((response) => {
         setRestaurants(response);
       })
       .catch((err) => {
         console.log(err.message);
       });
   }, []);
  // const restaurants = [
  //   {
  //     id: 1,
  //     img: "https://food-cms.grab.com/compressed_webp/merchants/3-C33CAE2GJPB3KA/list/e56680d1-b868-4675-9e5a-991fb16ab7df__listing_photo__2022__12__28__05__33__56.webp",
  //     title: "คั่วพริกเกลือ-จรัญสนิทวงศ์",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  //   {
  //     id: 2,
  //     img: "https://food-cms.grab.com/compressed_webp/items/THITE2024051307531747893/detail/menueditor_item_2c58372d5e624dc6a23826f9ca00318f_1715586735718740597.webp",
  //     title: "เพื่อนกระเพรา2 - ตลาด ป.ปลา ไนท์มาร์เก็ต",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  //   {
  //     id: 3,
  //     img: "https://food-cms.grab.com/compressed_webp/items/THITE2024061911493482267/detail/menueditor_item_ca1b4f269a0443ec8e5fe0d6cc196bc0_1718797666014138229.webp",
  //     title: "ปังปิ้ง Rats Smile - ตะคุ",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  //   {
  //     id: 4,
  //     img: "https://food-cms.grab.com/compressed_webp/items/THITE2020092004184270921/detail/menueditor_item_53170771ed1c4df093aa69ea24f1650f_1613469090468740155.webp",
  //     title: "ราดหน้ายอดผัก สูตร 40 ปี - ศาลเจ้าพ่อเสือ",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  //   {
  //     id: 5,
  //     img: "https://food-cms.grab.com/compressed_webp/items/THITE20220506043026188716/detail/5b1225f0bd024bdb881478a5e25ed699_1651811426377541672.webp",
  //     title:
  //       "หมูปลาร้าฮีโร่ (MooPlaRah Hero) - แยกคอกวัว(เจ้าอร่อยไปรษณีย์ราชดำเนิน) (Khok Wua Intersection)",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  //   {
  //     id: 6,
  //     img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6KGGVBHVNEDME/list/f6a6f0e6dcff4538ae81c1606f174db6_1712734022997004473.webp",
  //     title: "น้ำปั่น by มะพร้าวทอง - ถ.ไมตรีจิตต์",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  //   {
  //     id: 7,
  //     img: "https://food-cms.grab.com/compressed_webp/items/THITE2024041209335546343/detail/menueditor_item_c72bfb89e2e24531a010da573b5a0e72_1712914404072749915.webp",
  //     title: "น้ำสมุนไพร Little Peanut Recipe - เสาชิงช้า",
  //     type: "Cooked to Order, Coffee & Tea",
  //   },
  // ];

  return (
    <div className="flex">
    <div className="flex flex-wrap justify-center gap-4">
      { restaurants &&
         restaurants.map((restaurants) => {
        return (
          <Card
          key={restaurants.id}
          title={restaurants.title}
          img={restaurants.img}
          type={restaurants.type} 
          />
        );
      }
      )}


      
    </div>
  </div>




  );
};

export default Restaurant