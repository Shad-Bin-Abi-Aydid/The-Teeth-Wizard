import React from "react";

const Modal = () => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">

          <form className="space-y-3" action="">
            <div className="flex justify-center items-center gap-3">
                First Name: 
                <input type="text" placeholder="First name" className="input" />
            </div>
            <div className="flex justify-center items-center gap-3">
                Last Name: 
                <input type="text" placeholder="Last name" className="input" />
            </div>
            <div className="flex justify-center items-center gap-3">
                Email: 
                <input type="text" placeholder="Email" className="input" />
            </div>
            <div className="flex justify-center items-center gap-3">
                Phone Number: 
                <input type="text" placeholder="phone number" className="input" />
            </div>
            <div className="flex justify-center items-center gap-3">
                Appointment Date: 
                <input type="date" className="input" />
            </div>
            <div className="flex justify-center items-center gap-3">
                Address: 
                <input type="text" placeholder="address" className="input" />
            </div>

          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Make Appointment</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
