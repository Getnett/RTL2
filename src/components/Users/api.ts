// import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getUsers = async () => {
  let data: User[] = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("res", response.ok);
    if (!response.ok) {
      throw new Error("something wenting wrong");
    }
    data = await response.json();
  } catch (error) {
    console.log("error-catch", error);
    throw new Error("something wenting wrong");
  }

  return data;
};
