import React, { useState, useEffect } from "react";
import Search from "./../components/Search";
import Header from "../components/Header";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

function Home() {
  const [restaurants, setRestaurants] = useState([]); // สร้าง state เพื่อเก็บข้อมูลร้านอาหารทั้งหมด
  const [filterRestaurant, setFilterRestaurant] = useState([]); // สร้าง state เพื่อเก็บข้อมูลร้านอาหารที่ผ่านการกรอง

  useEffect(() => {
    const getRestaurants = async () =>{
      try {
      const response = RestaurantService.getAllRestaurant();
      if (response.status === 200) {
        setRestaurants(response.data);
        setFilterRestaurant(response.data);
      }
    } catch (error) {
      Swal.fire({
        title: "Get All Restaurant",
        text: error?.response.data.message || error.message,
        icon: "error",
      });
    }
  };
  getRestaurants();
  }, []); 

  // ฟังก์ชันสำหรับการเพิ่มร้านอาหารใหม่
  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
    setFilterRestaurant([...restaurants, newRestaurant]);
  };

  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
      <Header />
        <Search restaurants={restaurants} setFilteredRestaurants={setFilterRestaurant} />
        <restaurants restaurants={filterRestaurant} />
      </div>
    </>
  );
}

export default Home;


// ใช้ useEffect โดยกำหนด dependencies เป็น [] เพื่อให้ useEffect ทำงานเฉพาะครั้งแรกที่คอมโพเนนต์ถูกโหลดเท่านั้น
// เรียกใช้งาน API เมื่อคอมโพเนนต์ Home ถูกโหลด
    // fetch("http://localhost:5000/restaurants")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     // กำหนดค่าให้กับ state restaurants และ filterRestaurant ด้วยข้อมูลที่ได้จาก API
    //     setRestaurants(response);
    //     setFilterRestaurant(response);
    //   })
    //   .catch((err) => {
    //     console.log(err.message); // แสดง error ใน console หากเกิดข้อผิดพลาดในการโหลดข้อมูล
    //   });