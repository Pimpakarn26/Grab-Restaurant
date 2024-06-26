import React from 'react'
import Card from './Card'

const Restaurant = () => {
  const resto1 = {
    img:"https://food-cms.grab.com/compressed_webp/merchants/3-C33CAE2GJPB3KA/list/e56680d1-b868-4675-9e5a-991fb16ab7df__listing_photo__2022__12__28__05__33__56.webp",
    title:"คั่วพริกเกลือ-จรัญสนิทวงศ์",
    type:"Cooked to Order, Coffee & Tea",
  };
  const resto2 = {
    img:"https://food-cms.grab.com/compressed_webp/items/THITE2024051307531747893/detail/menueditor_item_2c58372d5e624dc6a23826f9ca00318f_1715586735718740597.webp",
    title:"เพื่อนกระเพรา2-ตลาดป.ปลา",
    type:"Cooked to Order, Coffee & Tea",
  };
  const resto3 = {
    img:"https://food-cms.grab.com/compressed_webp/items/THITE2024061911493482267/detail/menueditor_item_ca1b4f269a0443ec8e5fe0d6cc196bc0_1718797666014138229.webp",
    title:"ปังปิ้ง Rats Smile - ตะคุ",
    type:"Cooked to Order, Coffee & Tea",
  };
  const resto4 = {
    img:"https://food-cms.grab.com/compressed_webp/items/THITE2020092004184270921/detail/menueditor_item_53170771ed1c4df093aa69ea24f1650f_1613469090468740155.webp",
    title:"ราดหน้ายอดผักสูตร 40 ปี",
    type:"Cooked to Order, Coffee & Tea",
  };
  const resto5 = {
    img:"https://food-cms.grab.com/compressed_webp/items/THITE20220506043026188716/detail/5b1225f0bd024bdb881478a5e25ed699_1651811426377541672.webp",
    title:"หมูปลาร้าฮีโร่ (MooPlaRah Hero)",
    type:"Cooked to Order, Coffee & Tea",
  };
  const resto6 = {
    img:"https://food-cms.grab.com/compressed_webp/merchants/3-C6KGGVBHVNEDME/list/f6a6f0e6dcff4538ae81c1606f174db6_1712734022997004473.webp",
    title:"น้ำปั่น by มะพร้าวทอง - ถ.ไมตรีจิตต์",
    type:"Cooked to Order, Coffee & Tea",
  };
  const resto7 = {
    img:"https://food-cms.grab.com/compressed_webp/items/THITE2024041209335546343/detail/menueditor_item_c72bfb89e2e24531a010da573b5a0e72_1712914404072749915.webp",
    title:"น้ำสมุนไพร Little Peanut Recipe - เสาชิงช้า",
    type:"Cooked to Order, Coffee & Tea",
  };
 
  return (
    <div className="flex flex-wrap justify-center">
      <Card img={resto1.img} title={resto1.title} type={resto1.type}/>
      <Card img={resto2.img} title={resto2.title} type={resto2.type}/>
      <Card img={resto3.img} title={resto3.title} type={resto3.type}/>
      <Card img={resto4.img} title={resto4.title} type={resto4.type}/>
      <Card img={resto5.img} title={resto5.title} type={resto5.type}/>
      <Card img={resto6.img} title={resto6.title} type={resto6.type}/>
      <Card img={resto7.img} title={resto7.title} type={resto7.type}/>
    </div>
  )
}

export default Restaurant