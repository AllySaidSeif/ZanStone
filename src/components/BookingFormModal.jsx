import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

// -----------------------------------------------------
// STYLES
// -----------------------------------------------------

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
`;

const Modal = styled(motion.div)`
  width: 460px;
  background: rgba(255, 255, 255, 0.95);
  padding: 35px 30px;
  border-radius: 22px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
  max-height: 92vh;
  overflow-y: auto;

  @media (max-width: 520px) {
    width: 90%;
    max-width: 90vw;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.7rem;
  font-weight: 700;
  color: #0c3c2e;
  letter-spacing: 0.5px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border-radius: 14px;
  border: 1px solid #dcdcdc;
  background: #fafafa;
  transition: 0.3s;

  &:focus {
    border-color: #00a76f;
    background: white;
    box-shadow: 0 0 8px rgba(0, 167, 111, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border-radius: 14px;
  border: 1px solid #dcdcdc;
  background: #fafafa;
  transition: 0.3s;

  &:focus {
    border-color: #00a76f;
    background: white;
    box-shadow: 0 0 8px rgba(0, 167, 111, 0.2);
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #00b66c, #008d52);
  color: white;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  letter-spacing: 0.5px;
  box-shadow: 0 6px 18px rgba(0, 140, 82, 0.25);
`;

// ✅ Success Animation Container - FIXED for perfect centering
const SuccessOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4000;
  padding: 20px;
`;

const SuccessPopup = styled(motion.div)`
  background: white;
  padding: 30px 25px;
  border-radius: 18px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  
  /* Mobile responsiveness */
  @media (max-width: 480px) {
    max-width: 280px;
    padding: 25px 20px;
    margin: 0 auto;
  }
`;

const CheckMark = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #00c26f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px auto;
  color: white;
  font-size: 2.4rem;
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
`;

// -----------------------------------------------------
// COMPONENT
// -----------------------------------------------------

const BookingFormModal = ({ open, onClose }) => {
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    adults: "",
    children: "",
    tourType: "",
  });

  const update = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const sendEmail = () => {
    emailjs.send(
      "service_bt3me1c",   // <-- Replace
      "template_zay2l3n",    // <-- Replace
      {
        to_email: "zanstonetoursandsafaris@gmail.com",
        ...form,
      },
      "_SwJMh2T_pbkd6wMJ"   // <-- Replace
    );

    // ✅ show success animation
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1800);
  };

  if (!open) return null;

  return (
    <>
      {/* ✅ SUCCESS POPUP - FIXED CENTERING */}
      <AnimatePresence>
        {success && (
          <SuccessOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SuccessPopup
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <CheckMark
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
              >
                ✓
              </CheckMark>

              <h3 style={{ margin: 0, color: "#008d52", fontSize: "1.4rem" }}>Booking Sent!</h3>
              <p style={{ color: "#444", fontSize: "0.95rem", marginTop: 8, marginBottom: 0 }}>
                We will contact you shortly.
              </p>
            </SuccessPopup>
          </SuccessOverlay>
        )}
      </AnimatePresence>

      {/* ✅ MAIN BOOKING MODAL */}
      <AnimatePresence>
        {open && !success && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <Modal
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Title>Safari Booking Form</Title>

              <Label>Full Name</Label>
              <Input placeholder="John Doe" onChange={(e) => update("name", e.target.value)} />

              <Label>Email Address</Label>
              <Input type="email" placeholder="email@example.com" onChange={(e) => update("email", e.target.value)} />

              <Label>Country</Label>
              <Input placeholder="Your Country" onChange={(e) => update("country", e.target.value)} />

              <Label>Arrival Date</Label>
              <Input type="date" onChange={(e) => update("arrivalDate", e.target.value)} />

              <Label>Departure Date</Label>
              <Input type="date" onChange={(e) => update("departureDate", e.target.value)} />

              <Label>No. of Adults</Label>
              <Input type="number" placeholder="0" onChange={(e) => update("adults", e.target.value)} />

              <Label>No. of Children</Label>
              <Input type="number" placeholder="0" onChange={(e) => update("children", e.target.value)} />

              <Label>Tour Type</Label>
              <Select onChange={(e) => update("tourType", e.target.value)}>
                <option value="" selected>Select Tour Type</option>
                <option value="Zanzibar & Mikumi Safari Adventure">Zanzibar & Mikumi Safari Adventure</option>
                <option value="VIP Special Parkage">VIP Special Parkage</option>
                <option value="Kilimanjaro Machame Route Expedition">Kilimanjaro Machame Route Expedition</option>
                <option value="Kendwa Sunset Cruise">Kendwa Sunset Cruise</option>
                <option value="Salaam Cave & Maalum Cave Experience">Salaam Cave & Maalum Cave Experience</option>
                <option value="Prison Island & Nakupenda Sandbank">Prison Island & Nakupenda Sandbank</option>
                <option value="Nyange Private Sandbank Escape">Nyange Private Sandbank Escape</option>
                <option value="StoneTown & Prison Island Heritage Tour">StoneTown & Prison Island Heritage Tour</option>
                <option value="Salaam Cave: Swimming with Turtles">Salaam Cave: Swimming with Turtles</option>
                <option value="Stone Town & Spice Farm Discovery">Stone Town & Spice Farm Discovery</option>
                <option value="The Legendary Safari Blue Adventure">The Safari Blue Adventure</option>
                <option value="ZanStone Grand Slam VIP Experience">ZanStone Grand Slam VIP Experience</option>
                <option value="Pungume Island Hidden Sandbank">Pungume Island Hidden Sandbank</option>
                <option value="Selous Safari & Zanzibar Beach Escape">Selous Safari & Zanzibar Beach Escape</option>
                <option value="Exclusive Zanzibar 5-Day Escape">Exclusive Zanzibar 5-Day Escape</option>
                <option value="ZanStone Signature Package">ZanStone Signature Package</option>
                <option value="Grand Island Odyssey">Grand Island Odyssey</option>
                <option value="Safari Fusion">Safari Fusion</option>
                <option value="Zanzibar Cave Wonders: Salaam & Maalum">Zanzibar Cave Wonders: Salaam & Maalum</option>
                <option value="Elite Media Experience">Elite Media Experience</option>
                <option value="Salaam Cave & Jozani Forest Expedition">Salaam Cave & Jozani Forest Expedition</option>
                <option value="Mnemba Island Snorkeling Trip">Mnemba Island Snorkeling Trip</option>
              </Select>

              <SubmitButton
                whileTap={{ scale: 0.93 }}
                whileHover={{ scale: 1.03 }}
                onClick={sendEmail}
              >
                Send Booking
              </SubmitButton>
            </Modal>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingFormModal;