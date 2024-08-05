import React, { useState, useEffect } from "react";
import Search from "./../components/Search";
import Header from "../components/Header";
import Restaurants from "./../components/Restaurants";

// หน้า Home ที่ใช้สำหรับแสดงหน้าหลักของแอปพลิเคชัน
function Home() {
  const [restaurants, setRestaurants] = useState([]); // สร้าง state เพื่อเก็บข้อมูลร้านอาหารทั้งหมด
  const [filterRestaurant, setFilterRestaurant] = useState([]); // สร้าง state เพื่อเก็บข้อมูลร้านอาหารที่ผ่านการกรอง

  useEffect(() => {
    // เรียกใช้งาน API เมื่อคอมโพเนนต์ Home ถูกโหลด
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((response) => {
        // กำหนดค่าให้กับ state restaurants และ filterRestaurant ด้วยข้อมูลที่ได้จาก API
        setRestaurants(response);
        setFilterRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message); // แสดง error ใน console หากเกิดข้อผิดพลาดในการโหลดข้อมูล
      });
  }, []); // ใช้ useEffect โดยกำหนด dependencies เป็น [] เพื่อให้ useEffect ทำงานเฉพาะครั้งแรกที่คอมโพเนนต์ถูกโหลดเท่านั้น

  // ฟังก์ชันสำหรับการเพิ่มร้านอาหารใหม่
  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
    setFilterRestaurant([...restaurants, newRestaurant]);
  };

  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
        {/* ส่วนของคอมโพเนนต์ Search เพื่อให้ผู้ใช้กรองข้อมูลร้านอาหาร */}
        <Search
          restaurants={restaurants}
          setFilterRestaurant={setFilterRestaurant}
        />
        {/* ส่วนแสดงร้านอาหารที่ผ่านการกรอง */}
        <div className="container flex flex-row flex-wrap items-center justify-center">
          <Restaurants restaurants={filterRestaurant} />
        </div>
      </div>
    </>
  );
}

export default Home;
