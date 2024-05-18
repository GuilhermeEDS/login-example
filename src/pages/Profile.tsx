import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../service/Api";

const Profile = () => {
  const [image, setImage] = useState<string>();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }else{
      getProfile().then(async (response) => {
        setImage(response.data.avatar.high);
        setName(
          response.data.name +
            (response.data.last_name !== undefined ? response.data.last_name : "")
        );
        setEmail(response.data.email);
        console.log(response);
      });
    }
  }, []);

  

  return (
    <div>
      <div className="sm:bg-white md:bg-lightblue">
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="flex h-4/6 flex-col items-center justify-center">
            <div className="bg-white md:rounded-lg w-full md:max-w-sm max-w-full md:shadow-sm-2">
              <div className="flex flex-col items-center">
                <h3 className="text-center text-sm pt-5 px-10">
                  Profile picture
                </h3>
                <img src={image} alt="profile" className="h-16 w-16 rounded-lg" />
              </div>
              <div className="w-full px-8 pb-6 flex flex-col mt-5">
                <label>
                  Your <span className="font-semibold">Name</span>
                </label>
                <div className="show w-full" id="name">
                  <p className="font-light text-sm">{name}</p>
                </div>

                <label className="mt-3">
                  Your <span className="font-semibold">E-mail</span>
                </label>
                <div id="email" className="show">
                  <p className="font-light text-sm">{email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
