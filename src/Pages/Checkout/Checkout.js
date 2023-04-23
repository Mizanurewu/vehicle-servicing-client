import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, email, phone, message);

    const order = {
      service: _id,
      serviceName: title,
      price, //shortcut because propaties and value is same
      customer: name,
      email,
      phone,
      message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            alert('Order Successfully Placed');
            form.reset();
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">Order for:{title}</h2>
        <h4 className="text-3xl"> Price:{price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            name="firstName"
            type="text"
            placeholder="Your First Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Your Last Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full"
          placeholder="Bio"
          required
        ></textarea>
        <input className="btn" type="submit" value="place order" />
      </form>
    </div>
  );
};

export default Checkout;
